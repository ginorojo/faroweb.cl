import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { CLARITY_ID, GA_ID } from "@/components/Analitica";

export const metadata: Metadata = {
  title: "Política de Privacidad | Faroweb",
  description:
    "Cómo Faroweb trata los datos personales que recibe por WhatsApp, correo, el formulario de contacto y la calculadora web, conforme a la Ley 19.628 sobre protección de la vida privada.",
  alternates: { canonical: "/privacidad" },
  openGraph: {
    title: "Política de Privacidad | Faroweb",
    description:
      "Cómo Faroweb trata los datos personales que recibe, conforme a la Ley 19.628.",
    url: "/privacidad",
    type: "website",
  },
};

// El texto sale de los IDs configurados en components/Analitica.tsx: la
// politica solo nombra las herramientas que de verdad estan activas.
const HERRAMIENTAS = [GA_ID && "Google Analytics", CLARITY_ID && "Microsoft Clarity"].filter(
  Boolean,
) as string[];
const EMPRESAS = [GA_ID && "Google", CLARITY_ID && "Microsoft"].filter(Boolean) as string[];

const PARRAFOS_MEDICION =
  HERRAMIENTAS.length === 0
    ? [
        "Este sitio no utiliza cookies de analítica, píxeles de redes sociales ni herramientas de seguimiento publicitario.",
        "El sitio se sirve a través de Cloudflare, que puede establecer cookies estrictamente técnicas necesarias para la seguridad y el correcto funcionamiento de la infraestructura.",
      ]
    : [
        `Usamos ${HERRAMIENTAS.join(" y ")} para entender cómo se usa este sitio: qué páginas se visitan, desde qué tipo de dispositivo, cuánto tiempo se permanece en ellas y qué botones se usan, por ejemplo el de WhatsApp.${
          CLARITY_ID
            ? " Clarity además genera grabaciones anónimas de la navegación y mapas de calor, sin registrar lo que escribes en los formularios."
            : ""
        }`,
        "Estas herramientas instalan cookies de medición y tratan datos de navegación de forma agregada. No los usamos para identificarte, no los cruzamos con tus datos de contacto ni los usamos con fines publicitarios. Puedes bloquear o eliminar estas cookies desde la configuración de tu navegador, y el sitio seguirá funcionando con normalidad.",
        `${EMPRESAS.join(" y ")} ${EMPRESAS.length > 1 ? "tratan" : "trata"} esta información conforme a sus propias políticas de privacidad. Este sitio no usa píxeles de redes sociales ni herramientas de publicidad.`,
        "El sitio se sirve a través de Cloudflare, que puede establecer cookies estrictamente técnicas necesarias para la seguridad y el correcto funcionamiento de la infraestructura.",
      ];

const SECCIONES = [
  {
    titulo: "Quién trata tus datos",
    parrafos: [
      "Faroweb es una agencia de diseño y desarrollo web con base en La Serena, Región de Coquimbo, Chile. Somos responsables del tratamiento de los datos personales que nos entregas a través de este sitio y de nuestros canales de contacto.",
      "Para cualquier consulta sobre esta política puedes escribirnos a soporte@faroweb.cl o al +56 9 7187 4099.",
    ],
  },
  {
    titulo: "Qué datos recogemos y por qué",
    parrafos: [
      "Solo tratamos los datos que tú nos entregas voluntariamente cuando nos contactas: tu nombre, tu número de teléfono, tu correo electrónico y la información sobre tu negocio que decidas compartir para que podamos cotizar tu proyecto.",
      "La finalidad es una sola: responder tu consulta, elaborar una propuesta y, si decides trabajar con nosotros, ejecutar y dar soporte al proyecto contratado. No usamos tus datos para ningún otro fin.",
    ],
  },
  {
    titulo: "La calculadora de presupuesto",
    parrafos: [
      "La calculadora web funciona íntegramente en tu navegador. Las respuestas que seleccionas para obtener un estimado no se envían a ningún servidor nuestro ni quedan almacenadas: si cierras la página, se pierden. Solo recibimos esa información si tú decides enviárnosla por WhatsApp o correo.",
    ],
  },
  {
    titulo: "Cookies y medición del sitio",
    parrafos: PARRAFOS_MEDICION,
  },
  {
    titulo: "Con quién compartimos tus datos",
    parrafos: [
      "No vendemos, arrendamos ni cedemos tus datos personales a terceros con fines comerciales.",
      "Cuando nos escribes por WhatsApp, la conversación se rige además por las condiciones de esa plataforma, que es un servicio de terceros ajeno a Faroweb. Lo mismo aplica a Instagram si nos contactas por ahí. Te recomendamos revisar las políticas de privacidad de esos servicios.",
    ],
  },
  {
    titulo: "Cuánto tiempo los conservamos",
    parrafos: [
      "Conservamos los datos de contacto mientras exista una relación comercial vigente o una cotización en curso. Si tu consulta no deriva en un proyecto, eliminamos la información de contacto cuando deja de ser necesaria para el fin que la originó.",
      "Los antecedentes asociados a proyectos ejecutados se conservan por el tiempo que exijan las obligaciones legales y tributarias aplicables en Chile.",
    ],
  },
  {
    titulo: "Tus derechos",
    parrafos: [
      "Conforme a la Ley 19.628 sobre protección de la vida privada, tienes derecho a acceder a los datos personales que tenemos sobre ti, a rectificarlos si están errados o desactualizados, a solicitar su cancelación y a oponerte a su tratamiento.",
      "Para ejercer cualquiera de estos derechos, escríbenos a soporte@faroweb.cl indicando cuál quieres ejercer. Respondemos dentro de los plazos que establece la ley y sin costo para ti.",
    ],
  },
  {
    titulo: "Cambios en esta política",
    parrafos: [
      "Si modificamos esta política, publicaremos la versión actualizada en esta misma dirección y cambiaremos la fecha de última actualización que aparece más abajo. Te sugerimos revisarla si vuelves a contactarnos después de un tiempo.",
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <div className="bg-white selection:bg-green-100 selection:text-green-900 font-sans min-h-screen flex flex-col">
      <SharedHeader />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight text-balance">
            Política de Privacidad
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Esta política explica qué datos personales recibimos, para qué los usamos y
            qué puedes hacer al respecto. Está redactada conforme a la Ley 19.628 sobre
            protección de la vida privada de Chile.
          </p>

          <div className="space-y-10">
            {SECCIONES.map((seccion) => (
              <section key={seccion.titulo}>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{seccion.titulo}</h2>
                <div className="space-y-3">
                  {seccion.parrafos.map((parrafo, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {parrafo}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-14 pt-8 border-t border-gray-100">
            Última actualización: 13 de octubre de 2026.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
