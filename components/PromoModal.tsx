"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";

// ---------------------------------------------------------------------------
// Configuracion de la promocion.
//
// Para cambiar o retirar una promo, esto es lo unico que se toca.
//
// Las fechas van como instante UTC absoluto, no como hora local: comparar
// contra Date.now() asi funciona igual en cualquier zona horaria del visitante.
// Chile en septiembre esta en horario de verano (UTC-3), por lo que el lunes
// 14-09-2026 a las 00:00 de Chile es 2026-09-14T03:00:00Z.
//
// Si en marzo vuelve el horario estandar (UTC-4), recuerda que el desfase
// cambia: conviene recalcular el instante UTC en vez de copiarlo.
// ---------------------------------------------------------------------------
const PROMO = {
  activa: true,
  inicioUTC: "2026-09-07T03:00:00Z", // lunes 07-09 00:00 Chile
  finUTC: "2026-09-14T03:00:00Z", // lunes 14-09 00:00 Chile
  // WebP, no PNG: el original pesaba 1,8 MB y con images.unoptimized en
  // next.config nadie lo comprime por nosotros. A calidad 85 y misma
  // resolucion son 169 KB, un 90% menos, para una imagen que carga al entrar.
  imagen: "/promo-septiembre-2026.webp",
  ancho: 1024,
  alto: 1536,
  alt: "30% de descuento en páginas One Page y sitios corporativos, válido del 7 al 13 de septiembre de 2026. One Page $174.990 y sitios corporativos $272.990, con hosting y dominio gratis por un año.",
  // Se guarda por promo: si publicas una nueva, cambia la clave y vuelve a
  // mostrarse aunque el visitante haya cerrado la anterior.
  claveSesion: "faroweb-promo-2026-09",
  mensajeWhatsApp:
    "¡Hola Faroweb! Vi la promoción de 30% de descuento y quiero cotizar mi página web.",
};

const RETRASO_MS = 1200; // deja pintar la pagina antes de aparecer

export default function PromoModal() {
  const [visible, setVisible] = useState(false);
  const cerrarRef = useRef<HTMLButtonElement>(null);
  const activadorPrevio = useRef<Element | null>(null);

  const cerrar = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(PROMO.claveSesion, "cerrada");
    } catch {
      // Modo privado o cookies bloqueadas: no es critico, solo significa que
      // puede volver a aparecer en la siguiente navegacion.
    }
  }, []);

  useEffect(() => {
    if (!PROMO.activa) return;

    const ahora = Date.now();
    const inicio = Date.parse(PROMO.inicioUTC);
    const fin = Date.parse(PROMO.finUTC);

    if (ahora < inicio || ahora >= fin) return;

    try {
      if (sessionStorage.getItem(PROMO.claveSesion)) return;
    } catch {
      // Sin sessionStorage seguimos: mejor mostrarla que fallar en silencio.
    }

    const aparecer = setTimeout(() => setVisible(true), RETRASO_MS);

    // Caso borde: alguien deja la pestaña abierta y cruza la medianoche del
    // domingo. Sin esto, la promo seguiria en pantalla ya vencida.
    const expirar = setTimeout(() => setVisible(false), fin - ahora);

    return () => {
      clearTimeout(aparecer);
      clearTimeout(expirar);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    activadorPrevio.current = document.activeElement;
    cerrarRef.current?.focus();

    const alPresionar = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };
    document.addEventListener("keydown", alPresionar);

    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", alPresionar);
      document.body.style.overflow = overflowPrevio;
      (activadorPrevio.current as HTMLElement | null)?.focus?.();
    };
  }, [visible, cerrar]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-gray-950/70 backdrop-blur-sm animate-promo-fade motion-reduce:animate-none"
      onClick={cerrar}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Promoción de la semana"
        // stopPropagation para que el clic sobre la tarjeta no cuente como
        // clic en el fondo.
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[min(90vw,26rem)] max-h-[88vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-promo-in motion-reduce:animate-none"
      >
        <button
          ref={cerrarRef}
          onClick={cerrar}
          aria-label="Cerrar promoción"
          // 44px de area tactil: es el minimo comodo en movil y lo que Google
          // espera de un interstitial facil de descartar.
          className="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gray-950/70 text-white backdrop-blur-sm transition-colors hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X className="h-5 w-5" strokeWidth={2.5} />
        </button>

        {/* Si el archivo de la promo falta o falla, se cierra el modal en vez
            de mostrarle una imagen rota al visitante. */}
        <Image
          src={PROMO.imagen}
          alt={PROMO.alt}
          width={PROMO.ancho}
          height={PROMO.alto}
          className="w-full h-auto rounded-t-2xl"
          priority={false}
          onError={() => setVisible(false)}
        />

        <div className="p-4">
          <a
            href={`https://wa.me/56971874099?text=${encodeURIComponent(PROMO.mensajeWhatsApp)}`}
            target="_blank"
            rel="noreferrer"
            onClick={cerrar}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white transition-colors hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
            Quiero aprovechar el descuento
          </a>
        </div>
      </div>
    </div>
  );
}
