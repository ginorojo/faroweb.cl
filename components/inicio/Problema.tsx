import { ArrowRight, MessagesSquare, Search, Smartphone, TrendingDown } from "lucide-react";

const DOLORES = [
  {
    icono: Search,
    titulo: "Te buscan en Google y aparece tu competencia.",
    texto: "Si no tienes web, o la tuya no aparece, ese cliente se lo lleva otro.",
  },
  {
    icono: TrendingDown,
    titulo: "Dependes solo de Instagram.",
    texto: "Si el algoritmo no te muestra, no vendes. Y tus seguidores no son tuyos.",
  },
  {
    icono: MessagesSquare,
    titulo: "Respondes lo mismo todo el día.",
    texto: "Precios, horarios, ubicación: preguntas que una buena web contesta sola.",
  },
  {
    icono: Smartphone,
    titulo: "Tu web actual no te ayuda.",
    texto: "Se ve antigua, carga lento en el celular o no sabes cómo actualizarla.",
  },
];

export default function Problema() {
  return (
    <section aria-labelledby="problema-titulo" className="bg-fw-beam-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-8 lg:py-28">
        <div className="fw-revela lg:sticky lg:top-28 lg:self-start">
          <h2
            id="problema-titulo"
            className="font-display text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fw-ink"
          >
            Tus clientes ya te están buscando. ¿Te están encontrando?
          </h2>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-fw-soft">
            Hoy casi todos buscan en el celular antes de comprar o contratar. Si tu negocio no
            aparece, o lo que encuentran no convence, esa venta se pierde sin que te enteres.
          </p>
        </div>

        <div>
          <ul className="divide-y divide-fw-ink/10 border-y border-fw-ink/10">
            {DOLORES.map(({ icono: Icono, titulo, texto }) => (
              <li key={titulo} className="fw-revela flex gap-5 py-6 sm:gap-6 sm:py-7">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-fw-coral">
                  <Icono className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug text-fw-ink sm:text-[1.375rem]">
                    {titulo}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-fw-soft">{texto}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="fw-revela mt-10 rounded-3xl bg-fw-ink p-7 text-white sm:p-9">
            <p className="font-display text-[1.5rem] font-semibold leading-snug sm:text-[1.75rem]">
              Una página bien hecha <span className="text-fw-beam">trabaja por ti</span>: aparece en
              Google, responde las dudas de tus clientes y los manda directo a tu WhatsApp.
            </p>
            <a
              href="#proceso"
              className="group mt-6 inline-flex items-center gap-2 font-semibold text-fw-emerald-bright transition-colors hover:text-white"
            >
              Mira cómo lo hacemos
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
