"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { PROYECTOS, waLink } from "./data";
import { IconoWhatsApp } from "./Iconos";

// Mosaico: el primero ocupa dos filas; el resto se reparte 5 + 5, 6 + 6 y 6 + 6.
const COLUMNAS = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-6",
];

const VISIBLES_MOVIL = 3;

export default function Portafolio() {
  const [todos, setTodos] = useState(false);

  return (
    <section id="proyectos" aria-labelledby="proyectos-titulo" className="scroll-mt-20 bg-fw-bg">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="fw-revela max-w-[42rem]">
          <h2
            id="proyectos-titulo"
            className="font-display text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fw-ink"
          >
            Proyectos que ya están funcionando
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-fw-soft">
            Negocios reales de la región, con su página hecha por nosotros. Pasa el cursor sobre
            cada uno para recorrer el sitio, o ábrelo y navégalo tú mismo.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {PROYECTOS.map((p, i) => {
            const grande = i === 0;
            const oculto = !todos && i >= VISIBLES_MOVIL;
            return (
              <li
                key={p.slug}
                className={`${COLUMNAS[i]} ${grande || (i === PROYECTOS.length - 1 && PROYECTOS.length % 2 === 0) ? "sm:col-span-2" : ""} ${oculto ? "hidden sm:flex" : "flex"} fw-revela`}
              >
                <article className="fw-proyecto flex w-full flex-col rounded-3xl border border-fw-line bg-white p-2.5 transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgb(27_34_51/0.35)]">
                  {/* Marco de navegador con la captura real del sitio. */}
                  <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-fw-line bg-fw-bg">
                    <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-fw-line bg-white px-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-fw-coral/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-fw-beam/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-fw-emerald-bright/70" />
                      <span className="ml-2 truncate rounded-md bg-fw-bg px-2 py-0.5 text-xs text-fw-soft">
                        {p.dominio}
                      </span>
                    </div>
                    <div
                      className={`relative aspect-[16/10] w-full ${grande ? "lg:aspect-auto lg:min-h-[420px] lg:flex-1" : ""}`}
                    >
                      <Image
                        src={p.captura}
                        alt={`Página web de ${p.nombre} hecha por Faroweb`}
                        fill
                        sizes={grande ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"}
                        className="fw-captura object-cover"
                        data-larga={p.capturaLarga ? "true" : "false"}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 px-3 pb-3 pt-5 sm:px-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-14 shrink-0 items-center justify-center">
                        <Image
                          src={p.logo}
                          alt=""
                          width={p.logoAncho}
                          height={p.logoAlto}
                          className="max-h-12 w-auto max-w-[56px] object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-semibold leading-tight text-fw-ink">{p.nombre}</h3>
                        <p className="mt-1 text-sm text-fw-soft">{p.rubro}</p>
                        <p className="mt-2 inline-flex rounded-full bg-fw-mint px-2.5 py-1 text-xs font-semibold text-fw-emerald-deep">
                          {p.plan}
                        </p>
                      </div>
                    </div>
                    <p className="text-[0.9375rem] leading-relaxed text-fw-soft">{p.resumen}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-fw-ink/15 px-4 py-2.5 text-sm font-semibold text-fw-ink transition-colors hover:border-fw-ink/40"
                      >
                        Ver sitio
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                        <span className="sr-only">de {p.nombre} (se abre en otra pestaña)</span>
                      </a>
                      <a
                        href={waLink(`¡Hola Faroweb! Vi el proyecto de ${p.nombre} y quiero una página así para mi negocio.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-track={`whatsapp_proyecto_${p.slug}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-fw-emerald px-4 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-fw-emerald-deep active:scale-[0.97]"
                      >
                        <IconoWhatsApp className="h-4 w-4" />
                        Quiero algo así
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {!todos && (
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={() => setTodos(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-fw-ink/15 bg-white px-6 py-3.5 font-semibold text-fw-ink"
            >
              Ver los {PROYECTOS.length} proyectos
              <ChevronDown className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
