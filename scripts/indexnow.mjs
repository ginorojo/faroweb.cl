#!/usr/bin/env node
// Avisa a los buscadores via IndexNow (Bing, Yandex, Seznam...) de todas las
// URLs del sitemap publicado. Bing es el indice que usa ChatGPT para buscar,
// asi que esto acorta el tiempo entre publicar y que las IAs lo encuentren.
//
// La clave es publica a proposito: IndexNow verifica que el dominio es nuestro
// pidiendo https://faroweb.cl/<KEY>.txt, que vive en public/.
//
// Uso (despues de que el deploy este en produccion, si no el archivo de la
// clave todavia no existe y la peticion se rechaza):
//   npm run indexnow

const HOST = "faroweb.cl";
const KEY = "78e45b9bba4ede9b511cab20fade8dbd";

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => {
  if (!r.ok) throw new Error(`sitemap.xml respondio ${r.status}`);
  return r.text();
});
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error("El sitemap no tiene URLs; no se envia nada.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = recibido, 202 = recibido y la clave se validara despues.
console.log(`IndexNow: ${res.status} ${res.statusText} (${urlList.length} URLs)`);
if (res.status >= 300) {
  console.error(await res.text());
  process.exit(1);
}
