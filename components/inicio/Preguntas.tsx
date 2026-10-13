import { Plus } from "lucide-react";
import { PREGUNTAS, WA_GENERAL } from "./data";

export default function Preguntas() {
  return (
    <section id="preguntas" aria-labelledby="preguntas-titulo" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20 lg:px-8 lg:py-28">
        <div className="fw-revela lg:sticky lg:top-28 lg:self-start">
          <h2
            id="preguntas-titulo"
            className="font-display text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fw-ink"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-fw-soft">
            ¿Tienes otra duda?{" "}
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_preguntas"
              className="font-semibold text-fw-emerald underline decoration-fw-emerald/30 underline-offset-4 hover:decoration-fw-emerald"
            >
              Escríbenos por WhatsApp
            </a>{" "}
            y te respondemos el mismo día hábil.
          </p>
        </div>

        {/* <details> nativo: funciona sin JavaScript y es accesible de serie. */}
        <div className="divide-y divide-fw-line border-y border-fw-line">
          {PREGUNTAS.map((p) => (
            <details key={p.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-semibold text-fw-ink transition-colors hover:text-fw-emerald sm:text-xl">
                {p.q}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fw-mint text-fw-emerald">
                  <Plus className="fw-chevron h-5 w-5 transition-transform duration-300 ease-out" strokeWidth={2} aria-hidden="true" />
                </span>
              </summary>
              <p className="fw-respuesta max-w-[46rem] pb-7 pr-12 leading-relaxed text-fw-soft">{p.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
