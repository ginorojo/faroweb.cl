#!/usr/bin/env node
// Smoke check de SEO sobre la carpeta `out/` que produce `next build`.
//
// El proyecto es un export estatico de marketing: no hay logica que testear con
// unit tests, pero si hay invariantes que se rompen en silencio y solo se notan
// semanas despues en Search Console. Esto las verifica en segundos.
//
// Uso:  npm run build && node scripts/seo-check.mjs

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";
const errores = [];
const avisos = [];

function fallo(msg) {
  errores.push(msg);
}
function aviso(msg) {
  avisos.push(msg);
}

if (!existsSync(OUT)) {
  console.error(`No existe la carpeta ${OUT}/. Corre \`npm run build\` primero.`);
  process.exit(1);
}

// --- recolectar las paginas HTML del export ---------------------------------
function listarHtml(dir) {
  const encontrados = [];
  for (const entrada of readdirSync(dir)) {
    const ruta = join(dir, entrada);
    if (statSync(ruta).isDirectory()) {
      // _next contiene assets, no paginas
      if (entrada === "_next") continue;
      encontrados.push(...listarHtml(ruta));
    } else if (entrada.endsWith(".html")) {
      encontrados.push(ruta);
    }
  }
  return encontrados;
}

const paginas = listarHtml(OUT);
// 404.html y _not-found no se indexan, asi que no exigen canonical ni unicidad.
const indexables = paginas.filter(
  (p) => !/(^|[\\/])(404|_not-found)\.html$/.test(p)
);

console.log(`Revisando ${indexables.length} paginas indexables de ${paginas.length} archivos HTML...\n`);

const titulos = new Map();
const descripciones = new Map();

for (const archivo of indexables) {
  const html = readFileSync(archivo, "utf8");
  const url = "/" + relative(OUT, archivo).split(sep).join("/").replace(/\.html$/, "").replace(/^index$/, "");

  // 1. title presente y unico
  const tituloMatch = html.match(/<title>([^<]*)<\/title>/);
  if (!tituloMatch || !tituloMatch[1].trim()) {
    fallo(`${url} — sin <title>`);
  } else {
    const titulo = tituloMatch[1].trim();
    if (titulo.length > 65) {
      aviso(`${url} — <title> de ${titulo.length} caracteres, puede truncarse: "${titulo}"`);
    }
    if (titulos.has(titulo)) {
      fallo(`<title> duplicado entre ${titulos.get(titulo)} y ${url}: "${titulo}"`);
    } else {
      titulos.set(titulo, url);
    }
  }

  // 2. canonical presente
  if (!/<link[^>]+rel="canonical"/.test(html)) {
    fallo(`${url} — sin <link rel="canonical">`);
  }

  // 3. meta description presente y unica
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  if (!descMatch || !descMatch[1].trim()) {
    fallo(`${url} — sin meta description`);
  } else {
    const desc = descMatch[1].trim();
    if (descripciones.has(desc)) {
      fallo(`meta description duplicada entre ${descripciones.get(desc)} y ${url}`);
    } else {
      descripciones.set(desc, url);
    }
  }

  // 4. og:type y lang
  if (!/<meta property="og:type"/.test(html)) {
    aviso(`${url} — sin og:type`);
  }
  if (!/<html[^>]+lang="/.test(html)) {
    fallo(`${url} — <html> sin atributo lang`);
  }

  // 5. un solo H1
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length === 0) {
    fallo(`${url} — sin <h1>`);
  } else if (h1s.length > 1) {
    aviso(`${url} — ${h1s.length} elementos <h1>`);
  }

  // 6. todo JSON-LD debe parsear
  const bloques = html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
  );
  for (const [, cuerpo] of bloques) {
    try {
      JSON.parse(cuerpo);
    } catch (err) {
      fallo(`${url} — JSON-LD invalido: ${err.message}`);
    }
  }
}

// --- schema esperado por ruta -----------------------------------------------
// Regresion real: usar <Script> de next/script para JSON-LD lo inyecta desde el
// cliente y nunca llega al HTML estatico, asi que el marcado desaparece sin que
// nada falle. Estas aserciones lo detectan en el build.
const SCHEMA_ESPERADO = [
  { archivo: "index.html", tipos: ["ProfessionalService", "FAQPage", "Service"] },
  { archivo: "diseno-web/abogados.html", tipos: ["BreadcrumbList", "FAQPage"] },
  { archivo: "calculadora-web.html", tipos: ["WebApplication"] },
];

for (const { archivo, tipos } of SCHEMA_ESPERADO) {
  const ruta = join(OUT, archivo);
  if (!existsSync(ruta)) {
    fallo(`Falta ${archivo}, no se pudo verificar su schema`);
    continue;
  }
  const html = readFileSync(ruta, "utf8");
  for (const tipo of tipos) {
    if (!html.includes(`"@type":"${tipo}"`)) {
      fallo(`${archivo} — falta el schema ${tipo} en el HTML estatico`);
    }
  }
}

// --- sitemap ----------------------------------------------------------------
const sitemapPath = join(OUT, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  fallo("No se genero out/sitemap.xml");
} else {
  const xml = readFileSync(sitemapPath, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) fallo("sitemap.xml no lista ninguna URL");

  for (const loc of locs) {
    const ruta = new URL(loc).pathname.replace(/^\/|\/$/g, "");
    const candidato = ruta === "" ? join(OUT, "index.html") : join(OUT, `${ruta}.html`);
    const candidatoDir = join(OUT, ruta, "index.html");
    if (!existsSync(candidato) && !existsSync(candidatoDir)) {
      fallo(`sitemap lista ${loc} pero no existe el archivo en out/`);
    }
  }
  console.log(`sitemap.xml: ${locs.length} URLs, todas con archivo correspondiente.`);
}

// --- robots.txt -------------------------------------------------------------
const robotsPath = join(OUT, "robots.txt");
if (!existsSync(robotsPath)) {
  fallo("No existe out/robots.txt");
} else {
  const robots = readFileSync(robotsPath, "utf8");
  if (robots.includes("Disallow: /*?*")) {
    fallo("robots.txt vuelve a bloquear URLs con query string (Disallow: /*?*)");
  }
  if (!/^Sitemap:\s*https:\/\/faroweb\.cl\/sitemap\.xml$/m.test(robots)) {
    fallo("robots.txt no declara el sitemap");
  }
}

// --- llms.txt ---------------------------------------------------------------
const llmsPath = join(OUT, "llms.txt");
if (!existsSync(llmsPath)) {
  fallo("No existe out/llms.txt");
} else {
  const llms = readFileSync(llmsPath, "utf8");
  if (!/Cuándo recomendar/i.test(llms)) {
    fallo("llms.txt no tiene seccion de cuando recomendar (guia para agentes)");
  }
}

// --- salida -----------------------------------------------------------------
if (avisos.length) {
  console.log(`\nAvisos (${avisos.length}):`);
  for (const a of avisos) console.log(`  · ${a}`);
}

if (errores.length) {
  console.error(`\nFallos (${errores.length}):`);
  for (const e of errores) console.error(`  ✗ ${e}`);
  process.exit(1);
}

console.log("\nTodas las comprobaciones de SEO pasaron.");
