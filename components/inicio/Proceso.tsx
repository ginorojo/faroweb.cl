import { FileText, FolderOpen, KeyRound, MonitorCheck, Palette, Users } from "lucide-react";
import { PLAZOS, waLink } from "./data";
import { IconoWhatsApp } from "./Iconos";

const PASOS = [
  {
    icono: Users,
    titulo: "Reunión",
    texto: "Conversamos en persona o por videollamada para conocer tu negocio y lo que necesitas.",
  },
  {
    icono: FileText,
    titulo: "Cotización formal",
    texto: "Te enviamos una cotización detallada, con lo que incluye y los plazos.",
    pago: "50% al aprobarla",
  },
  {
    icono: FolderOpen,
    titulo: "Tu contenido",
    texto: "Nos envías textos básicos, fotos y datos del negocio. Te damos una lista simple para que no se te escape nada.",
  },
  {
    icono: Palette,
    titulo: "Propuesta de diseño",
    texto: "Antes de construir, te mostramos cómo se verá tu página. La ajustamos hasta que te guste.",
  },
  {
    icono: MonitorCheck,
    titulo: "Construcción y revisión",
    texto: "Con la propuesta aprobada construimos tu página real. Tienes 2 rondas de revisión para pedir ajustes.",
  },
  {
    icono: KeyRound,
    titulo: "Entrega llave en mano",
    texto: "Publicamos tu página con dominio, hosting y correos configurados, lista para usar.",
    pago: "50% al recibirla",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" aria-labelledby="proceso-titulo" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="fw-revela flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[40rem]">
            <h2
              id="proceso-titulo"
              className="font-display text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fw-ink"
            >
              Así trabajamos, <span className="fw-haz">sin sorpresas</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-fw-soft">
              Seis pasos claros, desde la primera conversación hasta tu página funcionando. Sabes
              qué pasa en cada etapa y cuándo pagas.
            </p>
          </div>
          <dl className="flex shrink-0 gap-3 text-sm">
            <div className="rounded-2xl bg-fw-mint px-4 py-3">
              <dt className="text-fw-soft">Página web</dt>
              <dd className="font-display text-lg font-semibold text-fw-emerald-deep">{PLAZOS.web}</dd>
            </div>
            <div className="rounded-2xl bg-fw-mint px-4 py-3">
              <dt className="text-fw-soft">Tienda online</dt>
              <dd className="font-display text-lg font-semibold text-fw-emerald-deep">{PLAZOS.tienda}</dd>
            </div>
          </dl>
        </div>

        <ol className="relative mt-14 grid gap-0 lg:mt-20 lg:grid-cols-6 lg:gap-6">
          {/* Linea que une los pasos: horizontal en escritorio, vertical en movil. */}
          <span
            aria-hidden="true"
            className="fw-linea absolute left-[2.75rem] right-[calc(100%/12)] top-7 hidden h-[3px] rounded-full bg-[linear-gradient(90deg,#FBBF24,#10B981)] lg:block"
          />
          <span
            aria-hidden="true"
            className="fw-linea-v absolute bottom-10 left-7 top-7 w-[3px] rounded-full bg-[linear-gradient(180deg,#FBBF24,#10B981)] lg:hidden"
          />

          {PASOS.map(({ icono: Icono, titulo, texto, pago }, i) => (
            <li key={titulo} className="fw-revela relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-fw-ink text-white shadow-[0_0_0_1px_#DCE8E3]">
                <Icono className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-fw-beam font-display text-xs font-bold text-fw-ink">
                  {i + 1}
                </span>
              </div>
              <div className="pt-1 lg:pt-6">
                <h3 className="font-display text-xl font-semibold leading-tight text-fw-ink">{titulo}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-fw-soft">{texto}</p>
                {pago && (
                  <p className="mt-3 inline-flex rounded-full bg-fw-beam-soft px-3 py-1 text-[0.8125rem] font-semibold text-fw-ink">
                    {pago}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="fw-revela mt-14 flex flex-col items-start gap-4 rounded-3xl border border-fw-line bg-fw-bg p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-[36rem] font-display text-xl font-semibold leading-snug text-fw-ink sm:text-2xl">
            El primer paso es una conversación. Sin costo y sin compromiso.
          </p>
          <a
            href={waLink("¡Hola Faroweb! Quiero agendar una reunión para conversar sobre mi página web.")}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_proceso"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-2xl bg-fw-emerald px-6 py-4 font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-fw-emerald-deep active:scale-[0.97]"
          >
            <IconoWhatsApp className="h-5 w-5" />
            Agendar mi reunión
          </a>
        </div>
      </div>
    </section>
  );
}
