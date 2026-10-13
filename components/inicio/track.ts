// Envia un evento a Google Analytics 4 y lo marca en Microsoft Clarity, si
// estan cargados. Si no hay analitica configurada no hace nada.
//
// En GA4 llega como evento `evento` con el parametro `ubicacion`; para verlo
// en informes hay que registrarlo como dimension personalizada (alcance:
// evento, parametro: ubicacion) y marcar `clic_whatsapp` como evento clave.

type Ventana = Window & {
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
};

export function track(evento: string, ubicacion?: string) {
  if (typeof window === "undefined") return;
  const w = window as Ventana;
  // typeof y no `?.`: si un script falla al cargar puede dejar un objeto en vez
  // de la funcion, y una medicion rota nunca debe romper el clic del usuario.
  if (typeof w.gtag === "function") {
    w.gtag("event", evento, { ubicacion, pagina: window.location.pathname });
  }
  if (typeof w.clarity === "function") w.clarity("event", evento);
}
