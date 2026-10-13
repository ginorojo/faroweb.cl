"use client";

import { useEffect, useState } from "react";
import { WA_GENERAL } from "./data";
import { IconoWhatsApp } from "./Iconos";

// La medicion de clics vive en components/RastreoConversiones.tsx, que cubre
// todo el sitio desde el layout.

// Barra fija en movil, en lugar de los dos botones flotantes que tapaban el
// contenido. Aparece al dejar atras el hero y se esconde al llegar a contacto,
// donde ya hay un boton de WhatsApp a la vista.
export default function Interacciones() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const contacto = document.getElementById("contacto");
    if (!hero || !contacto || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    let heroVisible = true;
    let contactoVisible = false;
    const actualizar = () => setVisible(!heroVisible && !contactoVisible);
    const obs = new IntersectionObserver((entradas) => {
      for (const en of entradas) {
        if (en.target === hero) heroVisible = en.isIntersecting;
        if (en.target === contacto) contactoVisible = en.isIntersecting;
      }
      actualizar();
    });
    obs.observe(hero);
    obs.observe(contacto);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-fw-line bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 ease-out md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={WA_GENERAL}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_barra_movil"
        tabIndex={visible ? 0 : -1}
        className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-fw-emerald px-6 py-3.5 text-[1.0625rem] font-semibold text-white active:scale-[0.98]"
      >
        <IconoWhatsApp className="h-5 w-5" />
        Cotiza gratis por WhatsApp
      </a>
    </div>
  );
}
