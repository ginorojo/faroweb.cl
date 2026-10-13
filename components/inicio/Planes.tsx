"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check, Clock, Info, ShieldCheck } from "lucide-react";
import { COSTOS_PLATAFORMA, PLANES_TIENDA, PLANES_WEB, PLAZOS, waLink, type Plan } from "./data";
import { IconoWhatsApp } from "./Iconos";

const PESTANAS = [
  { id: "web", label: "Página web", planes: PLANES_WEB, plazo: PLAZOS.web },
  { id: "tienda", label: "Tienda online", planes: PLANES_TIENDA, plazo: PLAZOS.tienda },
] as const;

const clp = (n: number) => `$${n.toLocaleString("es-CL")}`;

export default function Planes() {
  const [activa, setActiva] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  // Patron de pestañas WAI-ARIA: flechas para moverse, foco con tabindex itinerante.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const siguiente = (activa + (e.key === "ArrowRight" ? 1 : -1) + PESTANAS.length) % PESTANAS.length;
    setActiva(siguiente);
    refs.current[siguiente]?.focus();
  };

  return (
    <section id="planes-y-servicios" aria-labelledby="planes-titulo" className="scroll-mt-20 bg-fw-bg">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="fw-revela mx-auto max-w-[44rem] text-center">
          <h2
            id="planes-titulo"
            className="font-display text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fw-ink"
          >
            Elige el punto de partida para tu negocio
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-fw-soft">
            Precios de referencia. Cada negocio es distinto, así que el valor final depende de lo
            que necesites y queda claro en tu cotización formal.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Tipo de proyecto"
            className="inline-flex rounded-full border border-fw-line bg-white p-1.5"
            onKeyDown={onKeyDown}
          >
            {PESTANAS.map((p, i) => (
              <button
                key={p.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${p.id}`}
                aria-selected={activa === i}
                aria-controls={`panel-${p.id}`}
                tabIndex={activa === i ? 0 : -1}
                onClick={() => setActiva(i)}
                className={`rounded-full px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors duration-200 sm:px-7 ${
                  activa === i ? "bg-fw-ink text-white" : "text-fw-soft hover:text-fw-ink"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {PESTANAS.map((p, i) => (
          <div
            key={p.id}
            role="tabpanel"
            id={`panel-${p.id}`}
            aria-labelledby={`tab-${p.id}`}
            hidden={activa !== i}
            tabIndex={0}
            className="mx-auto mt-10 max-w-5xl focus-visible:outline-none"
          >
            <p className="mb-6 flex items-center justify-center gap-2 text-[0.9375rem] font-medium text-fw-ink">
              <Clock className="h-4 w-4 text-fw-emerald" strokeWidth={2} aria-hidden="true" />
              Lista en {p.plazo}
            </p>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {p.planes.map((plan) => (
                <TarjetaPlan key={plan.id} plan={plan} />
              ))}
            </div>
            {p.id === "tienda" && <CostosPlataforma />}
          </div>
        ))}

        <p className="mx-auto mt-6 max-w-5xl text-center text-sm text-fw-soft">
          Valores en pesos chilenos, no incluyen IVA.
        </p>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-start gap-4 rounded-3xl bg-fw-ink p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-display text-xl font-semibold sm:text-2xl">¿Necesitas algo más a medida?</p>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/75">
              Desarrollamos sistemas, intranets y CRM para empresas que necesitan más que una página.
            </p>
          </div>
          <a
            href={waLink("¡Hola Faroweb! Necesito un sistema a medida para mi empresa y quiero conversarlo.")}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_a_medida"
            className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-5 py-3.5 font-semibold text-fw-ink transition-transform duration-200 ease-out active:scale-[0.97]"
          >
            Conversemos tu proyecto
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
          </a>
        </div>

        <Garantia />
      </div>
    </section>
  );
}

function TarjetaPlan({ plan }: { plan: Plan }) {
  const destacado = Boolean(plan.destacado);
  return (
    <article
      className={`relative flex flex-col rounded-3xl p-7 sm:p-9 ${
        destacado
          ? "bg-white shadow-[0_0_0_2px_#047857,0_30px_60px_-30px_rgb(4_120_87/0.45)]"
          : "border border-fw-line bg-white"
      }`}
    >
      {plan.destacado && (
        <span className="absolute -top-3.5 left-7 rounded-full bg-fw-beam px-3.5 py-1 text-[0.8125rem] font-bold text-fw-ink sm:left-9">
          {plan.destacado}
        </span>
      )}
      <h3 className="font-display text-2xl font-bold text-fw-ink">{plan.nombre}</h3>
      <p className="mt-2 min-h-[3rem] leading-relaxed text-fw-soft">{plan.para}</p>

      <div className="mt-6 border-y border-fw-line py-6">
        {plan.desde === null ? (
          <p className="inline-flex rounded-lg bg-fw-coral px-3 py-1.5 text-sm font-bold text-white">
            PENDIENTE · precio desde
          </p>
        ) : (
          <p className="flex flex-wrap items-baseline gap-x-2 text-fw-ink">
            <span className="text-base font-medium text-fw-soft">Desde</span>
            <span className="font-display text-[2.75rem] font-bold leading-none tracking-[-0.02em] tabular-nums">
              {clp(plan.desde)}
            </span>
            <span className="text-base font-medium text-fw-soft">+ IVA</span>
          </p>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.incluye.map((item) => (
          <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-fw-ink">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fw-mint text-fw-emerald">
              <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href={waLink(`¡Hola Faroweb! Quiero cotizar el plan ${plan.nombre} para mi negocio.`)}
        target="_blank"
        rel="noopener noreferrer"
        data-track={`whatsapp_plan_${plan.id}`}
        className={`mt-8 inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-4 font-semibold transition-[background-color,transform] duration-200 ease-out active:scale-[0.97] ${
          destacado
            ? "bg-fw-emerald text-white hover:bg-fw-emerald-deep"
            : "bg-fw-ink text-white hover:bg-fw-ink/90"
        }`}
      >
        <IconoWhatsApp className="h-5 w-5" />
        Cotizar este plan
      </a>
    </article>
  );
}

// Los costos de la plataforma se cuentan antes de cotizar, no despues: es lo
// que mas sorprende a quien contrata su primera tienda online.
function CostosPlataforma() {
  return (
    <div
      role="note"
      aria-labelledby="costos-titulo"
      className="mt-6 rounded-3xl border border-fw-line bg-white p-7 sm:p-9"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-fw-beam-soft text-fw-ink">
          <Info className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </span>
        <div>
          <h3 id="costos-titulo" className="font-display text-xl font-semibold text-fw-ink sm:text-2xl">
            Bueno saberlo: los costos de la plataforma
          </h3>
          <p className="mt-2 max-w-[44rem] leading-relaxed text-fw-soft">
            Tu tienda puede construirse en Shopify o en WordPress. Nuestro trabajo se paga una sola
            vez, pero cada plataforma tiene costos propios que pagas directamente a ellos:
          </p>
        </div>
      </div>

      <dl className="mt-7 grid gap-4 md:grid-cols-2">
        {COSTOS_PLATAFORMA.map((c) => (
          <div key={c.nombre} className="rounded-2xl bg-fw-bg p-5 sm:p-6">
            <dt className="font-display text-lg font-semibold text-fw-ink">{c.nombre}</dt>
            <dd className="mt-2 text-[0.9375rem] leading-relaxed text-fw-soft">{c.texto}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-[0.9375rem] leading-relaxed text-fw-ink">
        En ambos casos, Webpay o Mercado Pago cobran una comisión por cada venta y el dominio se
        renueva cada año.{" "}
        <strong className="font-semibold">
          Te ayudamos a elegir la plataforma que más te conviene y detallamos todos estos costos en
          tu cotización, para que no haya sorpresas.
        </strong>
      </p>
    </div>
  );
}

function Garantia() {
  return (
    <div className="fw-revela mx-auto mt-6 grid max-w-5xl items-center gap-6 rounded-3xl bg-fw-beam p-7 text-fw-ink sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-9">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fw-ink text-fw-beam">
        <ShieldCheck className="h-10 w-10" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-display text-[clamp(1.625rem,1.3rem+1.2vw,2.25rem)] font-bold leading-tight">
          30 días de garantía
        </h3>
        <p className="mt-2 max-w-[40rem] text-[1.0625rem] leading-relaxed">
          Si algo de tu página falla durante los 30 días siguientes a la entrega, lo corregimos sin
          costo. Tu página tiene que funcionar perfecto, y nosotros respondemos por ella.
        </p>
      </div>
    </div>
  );
}
