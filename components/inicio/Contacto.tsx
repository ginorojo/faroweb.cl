"use client";

import { useRef, useState } from "react";
import { CircleCheck, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { EMAIL_CONTACTO, FORM_ENDPOINT, GOOGLE_CALIFICACION, GOOGLE_RESENAS, WA_GENERAL } from "./data";
import { IconoGoogle, IconoWhatsApp } from "./Iconos";
import { track } from "./track";

const TIPOS = [
  "Página One Page",
  "Sitio corporativo",
  "Tienda online",
  "Sistema a medida",
  "Aún no lo tengo claro",
];

type Campo = "nombre" | "telefono";
type Errores = Partial<Record<Campo, string>>;
type Estado = "inicial" | "enviando" | "enviado" | "correo" | "error";

function validar(datos: FormData): Errores {
  const errores: Errores = {};
  const nombre = String(datos.get("nombre") ?? "").trim();
  const telefono = String(datos.get("telefono") ?? "").replace(/\D/g, "");
  if (nombre.length < 2) errores.nombre = "Escribe tu nombre para saber cómo llamarte.";
  if (telefono.length < 8) errores.telefono = "Revisa el número: necesitamos al menos 8 dígitos, por ejemplo 9 1234 5678.";
  return errores;
}

export default function Contacto() {
  const [errores, setErrores] = useState<Errores>({});
  const [estado, setEstado] = useState<Estado>("inicial");
  const formRef = useRef<HTMLFormElement>(null);

  const onBlur = (campo: Campo) => () => {
    if (!formRef.current || !errores[campo]) return;
    const nuevos = validar(new FormData(formRef.current));
    setErrores((prev) => ({ ...prev, [campo]: nuevos[campo] }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    const nuevos = validar(datos);
    setErrores(nuevos);
    const primero = (Object.keys(nuevos) as Campo[])[0];
    if (primero) {
      (form.elements.namedItem(primero) as HTMLElement | null)?.focus();
      return;
    }

    const payload = Object.fromEntries(datos.entries()) as Record<string, string>;
    track("formulario_enviado", payload.tipo);

    // Sin backend configurado, el formulario abre el correo con todo ya
    // escrito: una consulta nunca se pierde por falta de servidor.
    if (!FORM_ENDPOINT) {
      const cuerpo = `Nombre: ${payload.nombre}\nWhatsApp / teléfono: ${payload.telefono}\nNecesito: ${payload.tipo}\n\n${payload.mensaje ?? ""}`;
      window.location.href = `mailto:${EMAIL_CONTACTO}?subject=${encodeURIComponent(
        `Cotización web: ${payload.nombre}`,
      )}&body=${encodeURIComponent(cuerpo)}`;
      setEstado("correo");
      return;
    }

    setEstado("enviando");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setEstado("enviado");
      form.reset();
    } catch {
      setEstado("error");
    }
  };

  const claseInput = (campo?: Campo) =>
    `mt-2 block w-full rounded-xl border bg-white px-4 py-3.5 text-base text-fw-ink placeholder:text-fw-soft/80 transition-colors focus:outline-none focus:ring-4 ${
      campo && errores[campo]
        ? "border-fw-coral focus:border-fw-coral focus:ring-fw-coral/20"
        : "border-fw-ink/20 focus:border-fw-emerald focus:ring-fw-emerald/15"
    }`;

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="scroll-mt-20 bg-fw-emerald">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="text-white">
          <h2
            id="contacto-titulo"
            className="font-display text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.02em]"
          >
            Cuéntanos de tu proyecto
          </h2>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-white/90">
            Escríbenos por WhatsApp o déjanos tus datos y te contactamos nosotros. Respondemos el
            mismo día hábil, sin compromiso.
          </p>

          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_contacto"
            className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-[1.0625rem] font-semibold text-fw-emerald-deep transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <IconoWhatsApp className="h-6 w-6 text-[#1FAF54]" />
            Escribir por WhatsApp
          </a>

          <ul className="mt-10 space-y-4 text-[0.9375rem] text-white/90">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-fw-beam" strokeWidth={1.75} aria-hidden="true" />
              <a href="tel:+56971874099" className="hover:underline">+56 9 7187 4099</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-fw-beam" strokeWidth={1.75} aria-hidden="true" />
              <a href={`mailto:${EMAIL_CONTACTO}`} className="hover:underline">{EMAIL_CONTACTO}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-fw-beam" strokeWidth={1.75} aria-hidden="true" />
              La Serena · atendemos toda la Región de Coquimbo
            </li>
          </ul>

          <div className="mt-10 flex max-w-[30rem] items-center gap-4 rounded-2xl bg-fw-emerald-deep px-5 py-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
              <IconoGoogle className="h-6 w-6" />
            </span>
            <p className="text-[0.9375rem] leading-snug text-white/90">
              <span className="font-semibold text-white">
                {GOOGLE_CALIFICACION} de 5 en Google
              </span>{" "}
              con {GOOGLE_RESENAS} reseñas, y 30 días de garantía en cada página que entregamos.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-[0_40px_80px_-40px_rgb(6_47_36/0.6)] sm:p-9">
          {estado === "enviado" ? (
            <div role="status" className="flex flex-col items-start py-8">
              <CircleCheck className="h-12 w-12 text-fw-emerald" strokeWidth={1.75} aria-hidden="true" />
              <p className="mt-5 font-display text-2xl font-bold text-fw-ink">¡Recibimos tus datos!</p>
              <p className="mt-2 leading-relaxed text-fw-soft">
                Te contactamos hoy mismo por WhatsApp o llamada. Si es urgente, escríbenos directo.
              </p>
              <button
                type="button"
                onClick={() => setEstado("inicial")}
                className="mt-6 font-semibold text-fw-emerald underline underline-offset-4"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} noValidate>
              <p className="font-display text-2xl font-bold text-fw-ink">Prefiero que me contacten</p>
              <p className="mt-1.5 text-[0.9375rem] text-fw-soft">Solo 2 datos obligatorios.</p>

              <div className="mt-7 space-y-5">
                <div>
                  <label htmlFor="nombre" className="text-[0.9375rem] font-semibold text-fw-ink">
                    Nombre <span className="text-fw-coral" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errores.nombre)}
                    aria-describedby={errores.nombre ? "nombre-error" : undefined}
                    onBlur={onBlur("nombre")}
                    className={claseInput("nombre")}
                    placeholder="Ej: Camila Rojas"
                  />
                  {errores.nombre && (
                    <p id="nombre-error" role="alert" className="mt-2 text-sm font-medium text-[#B42318]">
                      {errores.nombre}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefono" className="text-[0.9375rem] font-semibold text-fw-ink">
                    WhatsApp o teléfono <span className="text-fw-coral" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    aria-invalid={Boolean(errores.telefono)}
                    aria-describedby={errores.telefono ? "telefono-error" : undefined}
                    onBlur={onBlur("telefono")}
                    className={claseInput("telefono")}
                    placeholder="+56 9 1234 5678"
                  />
                  {errores.telefono && (
                    <p id="telefono-error" role="alert" className="mt-2 text-sm font-medium text-[#B42318]">
                      {errores.telefono}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="tipo" className="text-[0.9375rem] font-semibold text-fw-ink">
                    ¿Qué necesitas?
                  </label>
                  <select id="tipo" name="tipo" className={`${claseInput()} cursor-pointer`} defaultValue={TIPOS[0]}>
                    {TIPOS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="text-[0.9375rem] font-semibold text-fw-ink">
                    Cuéntanos un poco más <span className="font-normal text-fw-soft">(opcional)</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    className={`${claseInput()} resize-y`}
                    placeholder="Ej: tengo una cafetería en La Serena y quiero mostrar mi carta"
                  />
                </div>
              </div>

              {estado === "error" && (
                <p role="alert" className="mt-5 rounded-xl bg-[#FEF3F2] px-4 py-3 text-sm text-[#B42318]">
                  No pudimos enviar tus datos. Inténtalo de nuevo o{" "}
                  <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                    escríbenos por WhatsApp
                  </a>
                  .
                </p>
              )}
              {estado === "correo" && (
                <p role="status" className="mt-5 rounded-xl bg-fw-mint px-4 py-3 text-sm text-fw-emerald-deep">
                  Abrimos tu correo con los datos listos: solo tienes que presionar enviar.
                </p>
              )}

              <button
                type="submit"
                disabled={estado === "enviando"}
                className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-fw-ink px-6 py-4 text-[1.0625rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-fw-ink/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {estado === "enviando" ? (
                  <>
                    <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Quiero que me contacten
                    <Send className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </>
                )}
              </button>
              <p className="mt-4 text-center text-[0.8125rem] text-fw-soft">
                Usamos tus datos solo para responderte.{" "}
                <a href="/privacidad" className="underline underline-offset-2 hover:text-fw-ink">
                  Política de privacidad
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
