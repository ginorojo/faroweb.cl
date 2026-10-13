import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import {
  GOOGLE_CALIFICACION,
  GOOGLE_PERFIL_URL,
  GOOGLE_RESENAS,
  PLAZOS,
  PROYECTOS,
  WA_GENERAL,
} from "./data";
import { Estrellas, IconoGoogle, IconoWhatsApp } from "./Iconos";

function Calificacion() {
  const contenido = (
    <>
      <IconoGoogle className="h-4 w-4" />
      <Estrellas className="h-3.5 w-3.5" />
      <span className="font-semibold text-fw-ink">{GOOGLE_CALIFICACION}</span>
      <span className="text-fw-soft">· {GOOGLE_RESENAS} reseñas en Google</span>
    </>
  );
  const clases =
    "inline-flex items-center gap-2 rounded-full border border-fw-line bg-white px-3.5 py-2 text-sm shadow-[0_4px_16px_-10px_rgb(27_34_51/0.35)]";

  return GOOGLE_PERFIL_URL ? (
    <a
      href={GOOGLE_PERFIL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${clases} transition-colors hover:border-fw-emerald`}
      aria-label={`Calificación ${GOOGLE_CALIFICACION} de 5 con ${GOOGLE_RESENAS} reseñas en Google. Ver reseñas`}
    >
      {contenido}
    </a>
  ) : (
    <p className={clases} aria-label={`Calificación ${GOOGLE_CALIFICACION} de 5 con ${GOOGLE_RESENAS} reseñas en Google`}>
      {contenido}
    </p>
  );
}

export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        aria-labelledby="hero-titulo"
        className="relative isolate flex flex-col overflow-hidden bg-fw-bg lg:min-h-[min(calc(100svh-72px),820px)] lg:justify-center"
      >
        {/* La ilustracion del faro se mantiene. En escritorio va de fondo con un
            velo claro a la izquierda para el texto; en movil va debajo del
            texto, sin nada encima, para que ambos se lean. */}
        <div className="relative order-2 aspect-[16/10] w-full sm:aspect-[21/9] lg:absolute lg:inset-0 lg:-z-10 lg:order-none lg:aspect-auto">
          <Image
            src="/hero.jpg"
            alt="Ilustración de un escritorio frente al mar de La Serena, con el faro y un notebook mostrando una página web"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_50%] lg:object-[28%_50%]"
          />
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-fw-bg to-transparent lg:hidden" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#F5FAF8_0%,#F5FAF8_36%,rgb(245_250_248/0.82)_48%,rgb(245_250_248/0)_70%)] lg:block" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:py-20">
          <div className="max-w-[37rem]">
            <div className="fw-entra" style={{ "--i": 0 } as React.CSSProperties}>
              <Calificacion />
            </div>

            <h1
              id="hero-titulo"
              className="fw-entra mt-6 font-display text-[clamp(2.4rem,1.6rem+3.6vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.025em] text-fw-ink"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              Páginas web en La Serena para{" "}
              <span className="fw-haz fw-haz-anim">atraer clientes</span>
            </h1>

            <p
              className="fw-entra mt-6 max-w-[34rem] text-[1.125rem] leading-[1.6] text-fw-soft sm:text-[1.1875rem]"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              Diseñamos tu sitio o tienda online a medida, para que te encuentren en Google y te
              escriban directo a tu WhatsApp. Tu página, lista en {PLAZOS.web}.
            </p>

            <div
              className="fw-entra mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_hero"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-fw-emerald px-7 py-4 text-[1.0625rem] font-semibold text-white shadow-[0_10px_30px_-12px_rgb(4_120_87/0.7)] transition-[background-color,transform] duration-200 ease-out hover:bg-fw-emerald-deep active:scale-[0.97]"
              >
                <IconoWhatsApp className="h-5 w-5" />
                Cotiza gratis por WhatsApp
              </a>
              <a
                href="#proyectos"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-fw-ink/15 bg-white px-6 py-4 text-[1.0625rem] font-semibold text-fw-ink transition-[border-color,transform] duration-200 ease-out hover:border-fw-ink/40 active:scale-[0.97]"
              >
                Ver proyectos reales
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
              </a>
            </div>

            <ul
              className="fw-entra mt-8 flex flex-col gap-2.5 text-[0.9375rem] text-fw-ink sm:flex-row sm:flex-wrap sm:gap-x-6"
              style={{ "--i": 4 } as React.CSSProperties}
            >
              {["Respuesta el mismo día hábil", "Diseño a medida, sin plantillas", "30 días de garantía"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fw-mint text-fw-emerald">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="clientes-titulo" className="border-y border-fw-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
          <h2 id="clientes-titulo" className="max-w-[15rem] shrink-0 text-[0.9375rem] font-medium leading-snug text-fw-soft">
            Negocios de la región que ya confían en Faroweb
          </h2>
          <ul className="grid flex-1 grid-cols-3 items-center gap-x-6 gap-y-6 sm:grid-cols-6">
            {PROYECTOS.map((p) => (
              <li key={p.slug} className="flex justify-center">
                <Image
                  src={p.logo}
                  alt={p.nombre}
                  width={p.logoAncho}
                  height={p.logoAlto}
                  className="h-12 w-auto max-w-[110px] object-contain opacity-70 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0 lg:h-14"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
