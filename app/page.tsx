import { Funnel_Display, Funnel_Sans } from "next/font/google";
import "./inicio.css";
import { CIUDADES } from "@/data/pseo";
import Header from "@/components/inicio/Header";
import Hero from "@/components/inicio/Hero";
import Problema from "@/components/inicio/Problema";
import Proceso from "@/components/inicio/Proceso";
import Portafolio from "@/components/inicio/Portafolio";
import Testimonios from "@/components/inicio/Testimonios";
import Planes from "@/components/inicio/Planes";
import Preguntas from "@/components/inicio/Preguntas";
import Contacto from "@/components/inicio/Contacto";
import Footer from "@/components/inicio/Footer";
import Interacciones from "@/components/inicio/Interacciones";
import { PLANES_TIENDA, PLANES_WEB, PREGUNTAS } from "@/components/inicio/data";

// El title, la description y el canonical de la home vienen del layout raiz.

// Funnel Display para titulares (formas abiertas, terminales con caracter) y
// su pareja Funnel Sans para el texto: una misma superfamilia, elegida a
// proposito, en vez de dos sans parecidas que compiten.
const display = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const body = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

// FAQPage no da resultados enriquecidos (Google los retiro en 2023 salvo para
// gobierno y salud), pero permite que buscadores y modelos de lenguaje lean las
// respuestas tal cual. Sale de los mismos datos que la seccion visible.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PREGUNTAS.map((p) => ({
    "@type": "Question",
    name: p.q,
    acceptedAnswer: { "@type": "Answer", text: p.a },
  })),
};

// Los planes con su precio "desde", generados desde los mismos datos de las
// tarjetas para que el marcado nunca vuelva a quedar desincronizado.
const serviciosSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Planes de diseño web y tiendas online de Faroweb",
  itemListElement: [...PLANES_WEB, ...PLANES_TIENDA]
    .filter((plan) => plan.desde !== null)
    .map((plan, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: plan.nombre,
        description: `${plan.para} Incluye: ${plan.incluye.join("; ")}.`,
        serviceType: plan.id.startsWith("tienda") ? "Desarrollo de tiendas online" : "Diseño y desarrollo web",
        provider: { "@id": "https://faroweb.cl/#organizacion" },
        areaServed: CIUDADES.map((ciudad) => ({ "@type": "City", name: ciudad.nombre })),
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: plan.desde,
            priceCurrency: "CLP",
            valueAddedTaxIncluded: false,
          },
          availability: "https://schema.org/InStock",
          url: "https://faroweb.cl/#planes-y-servicios",
        },
      },
    })),
};

export default function Home() {
  return (
    <div className={`fw ${display.variable} ${body.variable} font-body`}>
      {/* <script> plano y no next/script: el JSON-LD tiene que estar en el HTML
          estatico para los rastreadores que no ejecutan JavaScript. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosSchema) }} />
      <a
        href="#contenido"
        className="sr-only z-50 rounded-xl bg-fw-ink px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Problema />
        <Proceso />
        <Portafolio />
        <Testimonios />
        <Planes />
        <Preguntas />
        <Contacto />
      </main>
      <Footer />
      <Interacciones />
    </div>
  );
}
