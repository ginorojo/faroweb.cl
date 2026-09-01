import Link from "next/link";
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { ArrowRight, MapPin, Code2, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Faroweb | Agencia de Diseño Web en La Serena",
  description:
    "Somos un equipo de desarrolladores en La Serena. Construimos páginas web rápidas con React y Next.js, sin plantillas ni CMS pesados. Conoce cómo trabajamos.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Sobre Faroweb | Agencia de Diseño Web en La Serena",
    description:
      "Somos un equipo de desarrolladores en La Serena. Construimos páginas web rápidas con React y Next.js, sin plantillas ni CMS pesados.",
    url: "/nosotros",
    type: "website",
  },
};

const PILARES = [
  {
    icon: MapPin,
    titulo: "Somos de acá",
    texto:
      "Vivimos en La Serena y trabajamos con negocios de la conurbación. Entendemos el mercado local porque somos parte de él: sabemos cómo busca un cliente de la Región de Coquimbo y qué lo hace confiar en un negocio que encontró por internet.",
  },
  {
    icon: Code2,
    titulo: "Sin plantillas, sin CMS pesados",
    texto:
      "Desarrollamos con React, Next.js, Astro y TypeScript, el mismo stack que usan las plataformas que abres todos los días. Eso significa sitios que cargan en milisegundos, que Google rastrea sin fricción y que no se caen cuando llega el primer peak de visitas.",
  },
  {
    icon: Handshake,
    titulo: "La web es tuya",
    texto:
      "El pago del diseño es único y quedas dueño del 100% de tu sitio. No te amarramos a una mensualidad para poder seguir usando lo que ya pagaste. Si quieres que nosotros lo mantengamos, existe un plan de mantención, pero es opcional.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="bg-white selection:bg-green-100 selection:text-green-900 font-sans min-h-screen flex flex-col">
      <SharedHeader />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
            Sobre nosotros
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight text-balance">
            Una agencia de desarrollo web con base en La Serena
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Faroweb nació de una molestia concreta: en la Región de Coquimbo abundaban
            los sitios lentos, hechos con plantillas repetidas y con una mensualidad
            eterna de por medio. Queríamos demostrar que una pyme local podía tener una
            web tan rápida y tan bien construida como la de una empresa grande, y ser
            dueña de ella.
          </p>

          <div className="prose-none space-y-6 text-gray-600 leading-relaxed mb-14">
            <p>
              Hoy trabajamos con negocios de rubros muy distintos —construcción, turismo,
              salud, gastronomía y servicios profesionales— y esa variedad es
              deliberada. Cada rubro nos enseña algo sobre cómo decide un cliente, y ese
              aprendizaje termina beneficiando al siguiente proyecto. Un estudio jurídico
              y una cabaña en el Valle del Elqui no necesitan lo mismo, y una plantilla
              genérica no puede resolver ambos casos bien.
            </p>
            <p>
              Nuestro proceso es corto a propósito. Partimos entendiendo qué acción quieres
              que haga el visitante —llamar, escribir por WhatsApp, reservar, comprar— y
              construimos el sitio alrededor de eso. Para los planes One Page y Corporativo
              los tiempos de entrega van de 3 a 5 días hábiles una vez que tenemos tu
              información; los desarrollos a medida toman entre 2 y 3 semanas según la
              complejidad.
            </p>
            <p>
              No usamos plantillas prediseñadas ni gestores de contenido pesados. Cada
              proyecto se construye a mano sobre un stack moderno, y eso se nota en la
              velocidad de carga, que es uno de los factores que Google mide para decidir
              qué mostrar primero en los resultados locales.
            </p>
          </div>

          <div className="grid gap-6 mb-14">
            {PILARES.map((pilar) => (
              <div key={pilar.titulo} className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <pilar.icon className="w-7 h-7 text-emerald-600 mb-4" strokeWidth={1.5} />
                <h2 className="text-xl font-bold text-gray-900 mb-3">{pilar.titulo}</h2>
                <p className="text-gray-600 leading-relaxed">{pilar.texto}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4">Proyectos que ya están funcionando</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            La Casita del Molle, Domos, Arguedas Construcciones, Modular Norte, Movigest y
            On Producciones son sitios que construimos y que hoy operan a diario. Puedes
            verlos en el portafolio de la portada, con el enlace directo a cada uno para
            que revises el resultado real y no una captura de pantalla.
          </p>

          <div className="bg-gray-900 rounded-[2rem] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl z-0" />
            <div className="relative z-10">
              <h2 className="text-2xl font-black mb-3">¿Conversamos sobre tu proyecto?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cuéntanos qué necesitas y te decimos con franqueza si podemos ayudarte, qué
                plan te calza y cuánto costaría. Sin compromiso.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition-all hover:bg-emerald-700"
                >
                  Ver formas de contacto <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/#planes-y-servicios"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition-all hover:bg-white/10"
                >
                  Ver planes y precios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
