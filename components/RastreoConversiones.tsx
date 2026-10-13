"use client";

import { useEffect } from "react";
import { track } from "@/components/inicio/track";

// Mide los clics que son conversiones (WhatsApp, correo, telefono) en TODAS las
// paginas, no solo en la home: las paginas de rubro tienen sus propios botones
// y reciben buena parte del trafico de Google.
//
// La etiqueta sale de `data-track` cuando el enlace lo tiene (los de la home
// dicen de que boton vienen: hero, planes, portafolio...). Si no, se usa la
// ruta, para saber al menos desde que pagina escribieron.
export default function RastreoConversiones() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const evento = /wa\.me|whatsapp/i.test(href)
        ? "clic_whatsapp"
        : href.startsWith("mailto:")
          ? "clic_correo"
          : href.startsWith("tel:")
            ? "clic_telefono"
            : null;
      if (!evento) return;
      track(evento, a.dataset.track ?? `enlace_${window.location.pathname}`);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
