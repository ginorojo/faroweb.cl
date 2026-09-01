import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { RUBROS, CIUDADES } from "@/data/pseo";

// Una pagina por rubro, no por rubro x ciudad. Las cuatro comunas se cubren en
// el cuerpo: multiplicar la ruta por ciudad generaba 4 cuasi-copias que solo
// diferian en el <title> y en un fragmento del H1, y Google las dejo en
// "Descubierta: actualmente sin indexar". Las URLs viejas de 3 segmentos
// redirigen aca via public/_redirects.
export async function generateStaticParams() {
  return Object.keys(RUBROS).map((rubro) => ({ rubro }));
}

const COBERTURA = CIUDADES.map((c) => c.nombre).join(", ").replace(/, ([^,]*)$/, " y $1");

export async function generateMetadata({ params }: { params: Promise<{ rubro: string }> }) {
  const { rubro } = await params;
  const dataRubro = RUBROS[rubro];

  if (!dataRubro) return { title: "No encontrado" };

  // Rubros como "Climatización y Paneles Solares" ya empujan el titulo a 59
  // caracteres; sumarle la marca lo dejaba en 70 y Google lo truncaba. El
  // sufijo se agrega solo cuando cabe.
  const tituloBase = `Diseño Web para ${dataRubro.nombrePlural} en La Serena`;
  const title = tituloBase.length <= 52 ? `${tituloBase} | Faroweb` : tituloBase;

  return {
    title,
    description: dataRubro.descripcion,
    alternates: {
      canonical: `/diseno-web/${rubro}`,
    },
    openGraph: {
      title,
      description: dataRubro.descripcion,
      url: `/diseno-web/${rubro}`,
      type: "website",
    },
  };
}

export default async function PSEOPage({ params }: { params: Promise<{ rubro: string }> }) {
  const { rubro } = await params;

  const dataRubro = RUBROS[rubro];

  if (!dataRubro) {
    notFound();
  }

  // Rubros hermanos para enlazado horizontal: sin esto las paginas solo
  // reciben enlaces desde la home y el footer.
  const otrosRubros = Object.keys(RUBROS)
    .filter((slug) => slug !== rubro)
    .slice(0, 6);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://faroweb.cl/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Diseño Web para ${dataRubro.nombrePlural}`,
        item: `https://faroweb.cl/diseno-web/${rubro}`,
      },
    ],
  };

  // Las faqs por rubro ya existian en data/pseo.ts pero se renderizaban sin
  // marcado. No dan rich results (Google los retiro en 2023 para sitios como
  // este), pero si permiten que un agente parsee la respuesta.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dataRubro.faqs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const wsMessage = encodeURIComponent(
    `Hola Faroweb, necesito una web para mi negocio (${dataRubro.nombreSingular}).`
  );

  return (
    <>
      <SharedHeader />
      <main className="min-h-screen bg-white">
        {/* <script> plano y no <Script> de next/script: con la estrategia por
            defecto el JSON-LD se inyecta desde el cliente y nunca llega al HTML
            estatico. El BreadcrumbList de esta plantilla llevaba tiempo sin
            aparecer en el output por ese motivo. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* HERO LOCAL */}
        <section className="relative text-white pt-16 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 min-h-[85svh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpg"
              alt={`Agencia de diseño web para ${dataRubro.nombrePlural} en La Serena`}
              fill
              className="object-cover object-center"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10 mb-10 md:mb-0">
            <Link href="/" className="text-gray-400 hover:text-white text-sm font-semibold mb-8 inline-block tracking-widest uppercase">
              &larr; Volver a la Agencia
            </Link>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
              <span>Servicio Especializado</span> <span className="ml-2 text-base">{dataRubro.emoji}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Diseño de Páginas Web para <span className="text-emerald-400">{dataRubro.nombrePlural} en La Serena</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              {dataRubro.descripcion}
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-gray-400 mb-10">
              <MapPin className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
              Atendemos {COBERTURA}
            </p>
            <div>
              <a
                href={`https://wa.me/56971874099?text=${wsMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-700 shadow-xl shadow-emerald-900/40"
              >
                Cotizar Sitio Web <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* DIFERENCIADOR 1: DATOS REALES */}
        <section className="py-20 bg-gray-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-6">¿Por qué un {dataRubro.nombreSingular} necesita una web optimizada?</h2>
            <p className="text-lg text-gray-600 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <strong>Dato clave del sector:</strong> {dataRubro.datoClave}
            </p>
          </div>
        </section>

        {/* DIFERENCIADOR 2: FUNCIONALIDADES CLAVE */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6">Soluciones para {dataRubro.nombrePlural}</h2>
                <ul className="space-y-6">
                  {dataRubro.soluciones.map((item: string, idx: number) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl z-0" />
                <div className="relative z-10">
                  <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4 block">Portafolio Relevante</span>
                  <h3 className="text-2xl font-black mb-4">Experiencia Comprobada</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    Tenemos proyectos realizados con éxito para negocios de la <strong>construcción, restaurantes, turismo, salud y servicios profesionales</strong>. Esta amplia experiencia nos permite entender exactamente lo que busca tu cliente ideal, creando diseños sólidos que generan confianza inmediata al visitante.
                  </p>
                  <Link href="/#planes-y-servicios" className="text-emerald-400 font-bold hover:underline flex items-center gap-2">
                    Ver nuestros planes base <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COBERTURA REGIONAL */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Trabajamos con {dataRubro.nombrePlural} de toda la Región de Coquimbo
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Somos un equipo local: vivimos en La Serena y conocemos el mercado de la
              conurbación porque somos parte de él. Atendemos proyectos en {COBERTURA},
              y el proceso completo —brief, diseño, revisiones y entrega— se puede llevar
              de forma remota por WhatsApp y videollamada, así que la distancia nunca es
              un problema para trabajar juntos.
            </p>
          </div>
        </section>

        {/* DIFERENCIADOR 3: FAQs LOCALES */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Preguntas Frecuentes de {dataRubro.nombrePlural}</h2>
            <div className="space-y-6">
              {dataRubro.faqs.map((faq: { q: string; a: string }, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENLAZADO HORIZONTAL ENTRE RUBROS */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
              Diseño web para otros rubros
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {otrosRubros.map((slug) => (
                <Link
                  key={slug}
                  href={`/diseno-web/${slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 text-gray-700 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  <span aria-hidden="true">{RUBROS[slug].emoji}</span>
                  <span className="text-sm font-medium">Páginas web para {RUBROS[slug].nombrePlural}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
