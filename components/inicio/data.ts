// Contenido de la home. Todo lo editable vive aca para que el
// cambio de un precio, un plazo o una reseña no obligue a tocar componentes.

export const WHATSAPP_NUMERO = "56971874099";

export function waLink(mensaje: string) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

export const WA_GENERAL = waLink(
  "¡Hola Faroweb! Vi su página y quiero cotizar una página web para mi negocio.",
);

// Perfil de Google Business (enlace por CID, estable aunque cambie la URL larga
// de Maps). El numero de reseñas es el que Google muestra publicamente:
// actualizarlo cuando lleguen nuevas.
export const GOOGLE_PERFIL_URL = "https://maps.google.com/?cid=11729119059484794991";
export const GOOGLE_CALIFICACION = "5,0";
export const GOOGLE_RESENAS = 4;

// PENDIENTE: endpoint del formulario (Cloudflare Pages Function, Web3Forms,
// Formspree...). Vacio = el formulario abre el correo del visitante con los
// datos ya escritos, para que nunca se pierda una consulta.
export const FORM_ENDPOINT = "";
export const EMAIL_CONTACTO = "soporte@faroweb.cl";

export const PLAZOS = {
  web: "5 a 7 días hábiles",
  tienda: "10 a 15 días hábiles",
};

export type Proyecto = {
  slug: string;
  nombre: string;
  rubro: string;
  plan: string;
  url: string;
  dominio: string;
  logo: string;
  logoAncho: number;
  logoAlto: number;
  // Captura larga (se recorre al pasar el cursor) o solo la portada.
  captura: string;
  capturaLarga: boolean;
  resumen: string;
};

export const PROYECTOS: Proyecto[] = [
  {
    slug: "casita-del-molle",
    nombre: "La Casita del Molle",
    rubro: "Cafetería y tetería · Valle del Elqui",
    plan: "Sitio a medida",
    url: "https://lacasitadelmolle.cl",
    dominio: "lacasitadelmolle.cl",
    logo: "/rediseno/logos/casita-del-molle.webp",
    logoAncho: 231,
    logoAlto: 172,
    captura: "/rediseno/proyectos/casita-del-molle.webp",
    capturaLarga: true,
    resumen:
      "Su carta, la tetería y el arriendo de carritos en una web con la identidad del local, y contacto directo por WhatsApp.",
  },
  {
    slug: "geocoast",
    nombre: "GeoCoast",
    rubro: "Domos geodésicos · La Serena",
    plan: "One Page",
    url: "https://domos-9vg.pages.dev",
    dominio: "geocoast · domos",
    logo: "/rediseno/logos/geocoast.webp",
    logoAncho: 282,
    logoAlto: 240,
    captura: "/rediseno/proyectos/geocoast.webp",
    capturaLarga: true,
    resumen: "Modelos y precios de domos para glamping, con visitas agendadas por WhatsApp.",
  },
  {
    slug: "arguedas",
    nombre: "Arguedas Construcciones",
    rubro: "Construcción y remodelación · La Serena",
    plan: "One Page",
    url: "https://arguedasconstrucciones.cl/",
    dominio: "arguedasconstrucciones.cl",
    logo: "/rediseno/logos/arguedas.webp",
    logoAncho: 297,
    logoAlto: 240,
    captura: "/rediseno/proyectos/arguedas.webp",
    capturaLarga: true,
    resumen: "Servicios y obras terminadas en una sola página pensada para recibir cotizaciones.",
  },
  {
    slug: "movigest",
    nombre: "Movigest",
    rubro: "Mecánica a domicilio · La Serena",
    plan: "Sitio corporativo",
    url: "https://movigest.cl/",
    dominio: "movigest.cl",
    logo: "/rediseno/logos/movigest.webp",
    logoAncho: 175,
    logoAlto: 113,
    captura: "/rediseno/proyectos/movigest.webp",
    capturaLarga: true,
    resumen: "Explica su servicio a domicilio paso a paso y recibe agendamientos en línea.",
  },
  {
    slug: "modular-norte",
    nombre: "Modular Norte",
    rubro: "Estructuras en acero · Región de Coquimbo",
    plan: "Sitio corporativo",
    url: "https://modularnorte.cl/",
    dominio: "modularnorte.cl",
    logo: "/rediseno/logos/modular-norte.webp",
    logoAncho: 228,
    logoAlto: 240,
    captura: "/rediseno/proyectos/modular-norte.webp",
    capturaLarga: true,
    resumen: "Catálogo de perfiles y viviendas modulares, con contacto directo desde cada sección.",
  },
  {
    slug: "on-producciones",
    nombre: "On Producciones",
    rubro: "Eventos deportivos · La Serena y Coquimbo",
    plan: "One Page",
    url: "https://onproducciones.cl/",
    dominio: "onproducciones.cl",
    logo: "/rediseno/logos/on-producciones.webp",
    logoAncho: 275,
    logoAlto: 164,
    captura: "/rediseno/proyectos/on-producciones.webp",
    capturaLarga: true,
    resumen: "Sus experiencias y servicios presentados para empresas, colegios e instituciones.",
  },
  {
    slug: "lucas-vera",
    nombre: "Lucas Vera",
    rubro: "Fotografía de bodas y eventos · Santiago",
    plan: "One Page",
    url: "https://portafolio-fotografo.ginorojoj.workers.dev",
    dominio: "lucas vera · fotografía",
    logo: "/rediseno/logos/lucas-vera.webp",
    logoAncho: 193,
    logoAlto: 240,
    captura: "/rediseno/proyectos/lucas-vera.webp",
    capturaLarga: true,
    resumen:
      "Un carrusel de fotos que, al pasar el cursor, muestra cada imagen en grande de fondo. Sesiones agendadas por WhatsApp.",
  },
];

export type Plan = {
  id: string;
  nombre: string;
  para: string;
  // null = precio aun no definido (se marca como pendiente en la pagina).
  desde: number | null;
  destacado?: string;
  incluye: string[];
};

export const PLANES_WEB: Plan[] = [
  {
    id: "one-page",
    nombre: "One Page",
    para: "Para presentar tu negocio en una sola página, clara y directa.",
    desde: 189990,
    incluye: [
      "Diseño a medida, sin plantillas",
      "Una página con tus servicios, contacto y ubicación",
      "Botón directo a WhatsApp",
      "Formulario de contacto y mapa",
      "5 correos corporativos",
      "Hosting y dominio por 1 año",
    ],
  },
  {
    id: "corporativo",
    nombre: "Sitio Corporativo",
    para: "Para empresas que necesitan mostrar varios servicios y generar confianza.",
    desde: 272990,
    destacado: "El más elegido",
    incluye: [
      "Todo lo del plan One Page",
      "Hasta 5 páginas: Inicio, Nosotros, Servicios, Contacto y una más",
      "Menú de navegación completo",
      "SEO optimizado en cada página",
      "Galería de proyectos o servicios",
    ],
  },
];

export const PLANES_TIENDA: Plan[] = [
  {
    id: "tienda-basica",
    nombre: "Tienda Online Básica",
    para: "Para empezar a vender por internet con todo lo esencial bien hecho.",
    desde: 369990,
    incluye: [
      "Tienda a medida en Shopify o WordPress (WooCommerce)",
      "Hasta 30 productos cargados, con fotos, precios y variantes como tallas o colores",
      "Carrito de compras y pago online con Webpay o Mercado Pago",
      "Retiro en tienda o despacho con tarifa fija por zona",
      "Correos automáticos de confirmación de compra",
      "Panel para gestionar productos, stock y pedidos",
      "Capacitación para que administres tu tienda sin depender de nadie",
    ],
  },
  {
    id: "tienda-avanzada",
    nombre: "Tienda Online Avanzada",
    para: "Para negocios con un catálogo más grande que quieren vender en más canales.",
    desde: 649990,
    destacado: "La más completa",
    incluye: [
      "Todo lo de la Tienda Online Básica",
      "Hasta 150 productos con categorías, filtros y buscador",
      "Webpay, Mercado Pago y transferencia bancaria",
      "Cupones de descuento y precios de oferta",
      "Catálogo sincronizado con Google Shopping, Instagram y Facebook",
      "Páginas de envíos, cambios y devoluciones",
    ],
  },
];

// Costos de la plataforma de la tienda: se explican en la pestaña de tiendas
// para que el cliente los conozca antes de cotizar y no despues.
export const COSTOS_PLATAFORMA = [
  {
    nombre: "Shopify",
    texto:
      "Plataforma todo en uno: el hosting, la seguridad y las actualizaciones vienen incluidos. Shopify te cobra una suscripción mensual en dólares según el plan que elijas y, al cobrar con pasarelas como Webpay o Mercado Pago, puede sumar una pequeña comisión por venta.",
  },
  {
    nombre: "WordPress + WooCommerce",
    texto:
      "El software es gratuito y no cobra comisión por venta. Necesita un hosting con buen rendimiento, que se paga de forma mensual o anual, y algunas extensiones (envíos, facturación) pueden tener un costo anual.",
  },
];

export type Resena = {
  nombre: string;
  texto: string;
};

// Reseñas publicas del perfil de Google Business de Faroweb, copiadas tal como
// aparecen. Hay una cuarta reseña de 5 estrellas sin texto.
export const RESENAS: Resena[] = [
  { nombre: "Mahara Jorquera", texto: "Trabajo profesional y responsable, 💯" },
  { nombre: "Leonardo C.V", texto: "Muy profesionales! En su trabajo." },
  { nombre: "Ayllen Bravo", texto: "Puntual y confiable" },
];

export const PREGUNTAS = [
  {
    q: "¿Cuánto se demora mi página?",
    a: `Las páginas web (One Page y Corporativo) quedan listas en ${PLAZOS.web} y las tiendas online en ${PLAZOS.tienda}. Los plazos corren desde que tenemos tu contenido: textos, fotos e información del negocio.`,
  },
  {
    q: "¿Los precios incluyen IVA?",
    a: "No. Los valores publicados son de referencia, parten «desde» y no incluyen IVA. El precio final depende de lo que necesites y lo verás detallado en tu cotización formal, antes de empezar.",
  },
  {
    q: "¿La tienda online tiene costos mensuales?",
    a: "Nuestro trabajo se paga una sola vez, pero la plataforma de la tienda tiene sus propios costos. Shopify cobra una suscripción mensual; WordPress con WooCommerce necesita un hosting que se paga mensual o anualmente. Además, Webpay o Mercado Pago cobran una comisión por venta. Te ayudamos a elegir la opción que más te conviene y detallamos esos costos en tu cotización.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Pagas el 50% al aprobar la cotización, para comenzar, y el 50% restante cuando recibes tu página lista.",
  },
  {
    q: "¿Qué pasa si no tengo textos ni fotos?",
    a: "Es lo más común. Te enviamos una lista simple con lo que necesitamos y en la reunión te orientamos para reunirlo sin complicarte.",
  },
  {
    q: "¿Puedo pedir cambios?",
    a: "Sí. Antes de construir te mostramos una propuesta de diseño y la ajustamos hasta que te guste. Con la página ya construida tienes 2 rondas de revisión para pedir ajustes.",
  },
  {
    q: "¿Qué cubre la garantía de 30 días?",
    a: "Durante los 30 días siguientes a la entrega, si algo de tu página no funciona como acordamos, lo corregimos sin costo. Los cambios nuevos de diseño o contenido se cotizan aparte.",
  },
  {
    q: "¿La página queda a mi nombre?",
    a: "Sí. La página es 100% tuya: te la entregamos lista para usar, con tu dominio y tus correos corporativos funcionando.",
  },
  {
    q: "¿Trabajan solo en La Serena?",
    a: "Estamos en La Serena y atendemos Coquimbo, Ovalle, Vicuña y toda la Región de Coquimbo. También trabajamos con negocios de otras ciudades de Chile por videollamada.",
  },
];
