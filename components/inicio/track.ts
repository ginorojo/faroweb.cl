// Medicion de conversiones. Empuja eventos al dataLayer de Google Tag Manager
// si esta instalado; si no, no hace nada. Asi el dia que se instale GTM/GA4
// los clics ya vienen etiquetados y no hay que tocar ningun componente.

type Ventana = Window & { dataLayer?: Record<string, unknown>[] };

export function track(evento: string, etiqueta?: string) {
  if (typeof window === "undefined") return;
  const w = window as Ventana;
  w.dataLayer?.push({ event: evento, etiqueta });
}
