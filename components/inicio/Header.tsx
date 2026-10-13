"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WA_GENERAL } from "./data";
import { IconoWhatsApp } from "./Iconos";

const NAV = [
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Planes", href: "#planes-y-servicios" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const [conSombra, setConSombra] = useState(false);

  useEffect(() => {
    const onScroll = () => setConSombra(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menu abierto el fondo no debe hacer scroll, y Escape lo cierra.
  useEffect(() => {
    if (!abierto) return;
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previo;
      window.removeEventListener("keydown", onKey);
    };
  }, [abierto]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
        conSombra ? "shadow-[0_1px_0_#DCE8E3,0_8px_24px_-16px_rgb(27_34_51/0.25)]" : "shadow-[0_1px_0_#DCE8E3]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#inicio" className="shrink-0 rounded-md" aria-label="Faroweb, ir al inicio">
          <Image
            src="/rediseno/faroweb-logo.webp"
            alt=""
            width={400}
            height={160}
            priority
            className="h-10 w-auto lg:h-11"
          />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 font-body text-[0.9375rem] font-medium text-fw-soft transition-colors hover:bg-fw-mint hover:text-fw-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_header"
            className="hidden items-center gap-2 rounded-full bg-fw-emerald px-5 py-2.5 font-body text-[0.9375rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-fw-emerald-deep active:scale-[0.97] md:inline-flex"
          >
            <IconoWhatsApp className="h-4 w-4" />
            Cotizar gratis
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-fw-ink transition-colors hover:bg-fw-mint md:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Panel opaco: el menu anterior era semitransparente y el hero se leia
          por detras de los enlaces. */}
      <div
        id="menu-movil"
        hidden={!abierto}
        className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-white px-6 pb-10 pt-6 md:hidden"
      >
        <nav aria-label="Menú móvil">
          <ul className="divide-y divide-fw-line border-y border-fw-line">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setAbierto(false)}
                  className="flex items-center justify-between py-4 font-display text-2xl font-semibold text-fw-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_menu"
          onClick={() => setAbierto(false)}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-fw-emerald px-6 py-4 font-body text-lg font-semibold text-white active:scale-[0.98]"
        >
          <IconoWhatsApp className="h-5 w-5" />
          Cotiza gratis por WhatsApp
        </a>
      </div>
    </header>
  );
}
