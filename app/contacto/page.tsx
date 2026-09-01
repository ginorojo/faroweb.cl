import Link from "next/link";
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { MessageCircle, Mail, Instagram, MapPin, Clock } from "lucide-react";
import { CIUDADES } from "@/data/pseo";

export const metadata: Metadata = {
  title: "Contacto | Faroweb, Diseño Web en La Serena",
  description:
    "Habla con Faroweb por WhatsApp o correo. Atendemos La Serena, Coquimbo, Ovalle y Vicuña. Respondemos cotizaciones de páginas web el mismo día hábil.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Faroweb, Diseño Web en La Serena",
    description:
      "Habla con Faroweb por WhatsApp o correo. Atendemos La Serena, Coquimbo, Ovalle y Vicuña.",
    url: "/contacto",
    type: "website",
  },
};

const WHATSAPP_MSG = encodeURIComponent(
  "¡Hola Faroweb! Quiero cotizar una página web para mi negocio."
);

const CANALES = [
  {
    icon: MessageCircle,
    titulo: "WhatsApp",
    valor: "+56 9 7187 4099",
    detalle:
      "Es la vía más rápida y por donde llega la mayoría de nuestros proyectos. Escríbenos con una línea sobre tu negocio y te respondemos con las preguntas justas para poder cotizarte.",
    href: `https://wa.me/56971874099?text=${WHATSAPP_MSG}`,
    externo: true,
  },
  {
    icon: Mail,
    titulo: "Correo",
    valor: "soporte@faroweb.cl",
    detalle:
      "Para propuestas formales, documentación o si prefieres dejar todo por escrito. Respondemos dentro del siguiente día hábil.",
    href: "mailto:soporte@faroweb.cl",
    externo: false,
  },
  {
    icon: Instagram,
    titulo: "Instagram",
    valor: "@faroweb.cl",
    detalle:
      "Publicamos los proyectos que vamos entregando. Es un buen lugar para ver trabajo reciente antes de escribirnos.",
    href: "https://www.instagram.com/faroweb.cl",
    externo: true,
  },
];

export default function ContactoPage() {
  return (
    <div className="bg-white selection:bg-green-100 selection:text-green-900 font-sans min-h-screen flex flex-col">
      <SharedHeader />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
            Contacto
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight text-balance">
            Hablemos de tu proyecto
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Cuéntanos qué necesitas y te respondemos con una recomendación concreta: qué
            plan te calza, cuánto costaría y en cuánto tiempo estaría listo. Si creemos que
            no somos la mejor opción para tu caso, también te lo decimos.
          </p>

          <div className="grid gap-5 mb-14">
            {CANALES.map((canal) => (
              <a
                key={canal.titulo}
                href={canal.href}
                {...(canal.externo ? { target: "_blank", rel: "noreferrer" } : {})}
                className="block bg-gray-50 border border-gray-100 rounded-2xl p-7 transition-colors hover:border-emerald-200 hover:bg-emerald-50/40"
              >
                <div className="flex items-start gap-4">
                  <canal.icon className="w-6 h-6 text-emerald-600 shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{canal.titulo}</h2>
                    <p className="text-emerald-700 font-semibold mb-2">{canal.valor}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{canal.detalle}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-10 mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              Dónde atendemos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Faroweb opera desde La Serena, Región de Coquimbo. Trabajamos con negocios de{" "}
              {CIUDADES.map((c) => c.nombre).join(", ").replace(/, ([^,]*)$/, " y $1")}, y
              también con clientes del resto de Chile.
            </p>
            <p className="text-gray-600 leading-relaxed">
              No tenemos oficina de atención al público: todo el proceso —brief, diseño,
              revisiones y entrega— se lleva por WhatsApp y videollamada, que es lo que
              nos permite mantener los plazos cortos. Si prefieres una reunión presencial
              en La Serena o Coquimbo, la coordinamos sin problema.
            </p>
          </div>

          {/* El horario debe coincidir con el de la ficha de Google Business
              Profile y con `openingHoursSpecification` en app/layout.tsx. */}
          <div className="border-t border-gray-100 pt-10 mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <Clock className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              Horario
            </h2>
            <p className="text-gray-600 leading-relaxed">
              El canal está abierto <strong className="text-gray-900">las 24 horas, de lunes a domingo</strong>.
              Puedes escribirnos a la hora que te acomode y tu mensaje queda registrado.
              Los mensajes que llegan durante la noche los respondemos a primera hora
              de la mañana siguiente.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              ¿Todavía no sabes cuánto podría costar?
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Tenemos una calculadora que te da un rango estimado en menos de un minuto,
              según lo que necesite tu proyecto.
            </p>
            <Link
              href="/calculadora-web"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition-all hover:bg-emerald-700"
            >
              Ir a la calculadora
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
