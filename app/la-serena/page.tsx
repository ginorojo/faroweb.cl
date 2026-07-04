import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencia de Diseño Web en La Serena | Faroweb",
  description: "Especialistas en diseño de páginas web en La Serena, Coquimbo y la Cuarta Región. Creamos sitios web autoadministrables y tiendas online (e-commerce).",
};

export default function LaSerenaLanding() {
  return (
    <div className="bg-white selection:bg-green-100 selection:text-green-900 font-sans">
      <SharedHeader />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[70svh] flex items-center justify-center overflow-hidden pt-12 md:pt-16 bg-gray-950">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/hero.jpg"
              alt="La Serena Diseño Web"
              fill
              className="object-cover object-center grayscale"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-black/80 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10 md:mb-0">
            <div className="max-w-4xl text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                Exclusivo en La Serena y Coquimbo
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Diseño de Páginas Web en <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">La Serena</span>
              </h1>
              <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                Ayudamos a las empresas locales de la Cuarta Región a captar más clientes en internet mediante páginas web ultra rápidas, posicionamiento SEO y tiendas online sin comisiones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#planes-y-servicios"
                  className="group inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-green-700 shadow-xl shadow-green-900/40"
                >
                  Ver Nuestros Planes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <section className="py-24 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-gray-900 mb-8">La importancia de una Agencia de Diseño Web en La Serena</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Si tienes un negocio en <strong>La Serena</strong> o <strong>Coquimbo</strong>, sabes lo competitiva que se ha vuelto la Región de Coquimbo. Ya no basta con tener una página de Facebook o Instagram; tus clientes potenciales están buscando en Google servicios como los tuyos todos los días.
              </p>
              <p>
                En <strong>Faroweb</strong>, somos una agencia especializada en el <strong>desarrollo de páginas web y tiendas online (e-commerce)</strong> adaptadas específicamente para el mercado local. A diferencia de las plataformas genéricas o las agencias de Santiago que no conocen la realidad regional, nosotros entendemos a tu público.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">¿Qué incluimos en nuestros proyectos?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Posicionamiento SEO Local:</strong> Optimizamos tu sitio web para que aparezcas cuando alguien busque en Google desde La Serena o Coquimbo.</li>
                <li><strong>Diseño Web Autoadministrable:</strong> Te entregamos un panel de control fácil de usar para que puedas actualizar fotos y textos sin depender de un programador.</li>
                <li><strong>Velocidad Extrema:</strong> Programamos en React y Next.js, lo que garantiza tiempos de carga casi instantáneos, fundamental para retener a los visitantes desde celulares.</li>
                <li><strong>Soporte Cercano:</strong> Estamos en la región, por lo que te brindamos un acompañamiento constante y asesoría por WhatsApp en todo momento.</li>
              </ul>
              <p className="mt-8">
                Ya sea que necesites una <em>Landing Page</em> corporativa, un catálogo de productos o un desarrollo de software a medida, nuestro equipo de expertos está listo para transformar tus ideas en una plataforma digital rentable.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
