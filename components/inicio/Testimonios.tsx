import { ArrowUpRight } from "lucide-react";
import { GOOGLE_CALIFICACION, GOOGLE_PERFIL_URL, GOOGLE_RESENAS, RESENAS } from "./data";
import { Estrellas, IconoGoogle } from "./Iconos";

export default function Testimonios() {
  return (
    <section aria-labelledby="testimonios-titulo" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="fw-revela flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="testimonios-titulo"
            className="max-w-[36rem] font-display text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fw-ink"
          >
            Lo que dicen quienes ya trabajaron con nosotros
          </h2>

          <a
            href={GOOGLE_PERFIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 self-start rounded-3xl border border-fw-line bg-fw-bg px-5 py-4 transition-colors hover:border-fw-emerald lg:self-auto"
          >
            <IconoGoogle className="h-9 w-9 shrink-0" />
            <span>
              <span className="flex items-center gap-2">
                <span className="font-display text-3xl font-bold leading-none text-fw-ink">{GOOGLE_CALIFICACION}</span>
                <Estrellas className="h-4 w-4" />
              </span>
              <span className="mt-1 flex items-center gap-1 text-sm text-fw-soft">
                {GOOGLE_RESENAS} reseñas en Google ·{" "}
                <span className="font-semibold text-fw-emerald group-hover:underline">Ver en Google</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-fw-emerald" strokeWidth={2} aria-hidden="true" />
              </span>
            </span>
          </a>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {RESENAS.map((r, i) => (
            <li key={r.nombre} className="fw-revela">
              <figure
                className={`flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
                  i === 0 ? "bg-fw-mint" : i === 1 ? "bg-fw-beam-soft" : "border border-fw-line bg-fw-bg"
                }`}
              >
                <Estrellas className="h-5 w-5" />
                <blockquote className="mt-6 flex-1 font-display text-[clamp(1.5rem,1.25rem+0.8vw,1.875rem)] font-semibold leading-tight text-fw-ink">
                  <p>“{r.texto}”</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-fw-ink font-display text-base font-bold text-white"
                  >
                    {r.nombre.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-fw-ink">{r.nombre}</span>
                    <span className="flex items-center gap-1.5 text-sm text-fw-soft">
                      <IconoGoogle className="h-3.5 w-3.5" /> Reseña en Google
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
