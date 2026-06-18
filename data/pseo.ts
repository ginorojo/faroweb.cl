export const CIUDADES = [
  { slug: "la-serena", nombre: "La Serena", datoCiudad: "en La Serena" },
  { slug: "coquimbo", nombre: "Coquimbo", datoCiudad: "en la conurbación y Coquimbo" }
];

export const RUBROS: Record<string, any> = {
  "abogados": {
    nombreSingular: "Abogado",
    nombrePlural: "Abogados",
    descripcion: "Creamos sitios web corporativos y sistemas de agendamiento de consultas en línea para estudios jurídicos y profesionales independientes en la Región de Coquimbo. Proyecta confianza y capta más clientes en internet.",
    emoji: "⚖️",
    datoClave: "¿Sabías que más del 78% de las personas buscan asesoría legal directamente desde su celular en Google? Si tu estudio jurídico no transmite autoridad o es lento, pierdes clientes potenciales.",
    soluciones: [
      "Sistema de reservas de horas de consulta online (videollamada o presencial).",
      "Integración de Webpay para cobrar la primera asesoría antes de agendar.",
      "Blog legal optimizado (SEO) para captar tráfico con dudas locales comunes.",
      "Diseño sobrio, elegante y responsive que proyecta confianza institucional."
    ],
    faqs: [
      {
        q: "¿Puedo cobrar las consultas online por Webpay?",
        a: "Sí, podemos integrar Webpay Plus de Transbank para que tus clientes paguen la hora de asesoría legal antes de reservar en tu calendario."
      },
      {
        q: "¿El diseño incluirá mis certificaciones y especialidades?",
        a: "Absolutamente. Destacamos tus áreas de práctica (Civil, Penal, Familia) y tu perfil profesional para maximizar la conversión."
      }
    ]
  },
  "clinicas-dentales": {
    nombreSingular: "Clínica Dental",
    nombrePlural: "Clínicas Dentales",
    descripcion: "Desarrollamos páginas web para odontólogos y clínicas dentales, integrando sistemas de reservas de horas médicas para optimizar la atención de pacientes en la IV Región.",
    emoji: "🦷",
    datoClave: "El 82% de los pacientes nuevos buscan referencias y agendan su evaluación dental desde su celular. Una web médica rápida y confiable multiplica tus reservas mensuales.",
    soluciones: [
      "Agenda médica inteligente para reserva de evaluaciones y tratamientos.",
      "Galería de casos de éxito clínicas y 'Antes y Después' en alta calidad.",
      "Integración directa con WhatsApp para recepción clínica.",
      "Marcado de Schema.org Médico para que Google entienda tus especialidades."
    ],
    faqs: [
      {
        q: "¿Es posible integrar la web con nuestro software dental actual?",
        a: "Dependiendo de tu software, podemos conectar el agendamiento vía API, o crear un sistema independiente muy fácil de usar para tus recepcionistas."
      },
      {
        q: "¿Puedo subir artículos sobre tratamientos dentales?",
        a: "Sí, incluimos un blog auto-administrable para que subas contenido sobre ortodoncia, implantes y blanqueamientos, atrayendo más tráfico."
      }
    ]
  },
  "constructoras": {
    nombreSingular: "Constructora",
    nombrePlural: "Constructoras",
    descripcion: "Diseñamos sitios web corporativos y portafolios robustos para empresas constructoras, contratistas y servicios industriales. Muestra tu capacidad técnica y gana más licitaciones.",
    emoji: "🏗️",
    datoClave: "Las empresas y particulares evalúan a las constructoras basándose en proyectos anteriores. Una web que no muestra tus obras terminadas te hace perder el 60% de los presupuestos.",
    soluciones: [
      "Portafolio interactivo de obras y proyectos terminados con galerías fotográficas.",
      "Formularios avanzados para cotización de proyectos industriales y residenciales.",
      "Sección corporativa destacando certificaciones (ISO) y prevención de riesgos.",
      "Diseño industrial sólido que transmite fiabilidad técnica."
    ],
    faqs: [
      {
        q: "¿Pueden subir ustedes nuestros proyectos anteriores?",
        a: "¡Claro! En nuestros planes integrales nos encargamos de subir todo tu portafolio inicial de obras."
      },
      {
        q: "¿Incluyen correos corporativos para mis ingenieros?",
        a: "Sí, proveemos cuentas de correo institucionales (ej: proyectos@tuconstructora.cl) para proyectar máxima seriedad."
      }
    ]
  },
  "contadores": {
    nombreSingular: "Contador",
    nombrePlural: "Contadores",
    descripcion: "Páginas web para estudios contables, auditores y asesores tributarios. Capta nuevas Pymes que buscan ordenar su contabilidad y digitaliza tu captación de clientes.",
    emoji: "📊",
    datoClave: "En época de Operación Renta, las búsquedas locales de 'contadores confiables' aumentan un 300%. Aparecer de forma profesional te asegura nuevos contratos mensuales.",
    soluciones: [
      "Portales de acceso privado (Intranet) para que tus clientes descarguen sus liquidaciones y balances.",
      "Cotizador online de servicios contables según el tamaño de la Pyme.",
      "Integración con WhatsApp para consultas tributarias rápidas.",
      "Páginas de servicios especializadas: auditorías, remuneraciones, inicio de actividades."
    ],
    faqs: [
      {
        q: "¿Puedo tener una sección privada para que mis clientes suban sus facturas?",
        a: "Sí, desarrollamos portales seguros donde tú y tus clientes pueden intercambiar documentos tributarios confidenciales de forma ordenada."
      },
      {
        q: "¿Me ayudan a explicar mis planes mensuales contables?",
        a: "Por supuesto, armamos tablas comparativas de tus planes (básico, pyme, empresas) para que sea transparente y fácil de contratar."
      }
    ]
  },
  "arquitectos": {
    nombreSingular: "Arquitecto",
    nombrePlural: "Arquitectos",
    descripcion: "Creación de portafolios web minimalistas y de alto impacto visual para estudios de arquitectura y diseño de interiores. Deja que tus renders y proyectos hablen por ti.",
    emoji: "📐",
    datoClave: "El diseño es clave. El 90% de los clientes descarta a un arquitecto si su portafolio web se ve desactualizado o carga lento en dispositivos móviles.",
    soluciones: [
      "Galerías fotográficas inmersivas y ultra-rápidas para renders y planos.",
      "Diseño vanguardista y minimalista que resalta el trabajo arquitectónico.",
      "Formularios de evaluación inicial para nuevos proyectos inmobiliarios.",
      "Optimización masiva de imágenes para garantizar velocidad sin perder calidad."
    ],
    faqs: [
      {
        q: "¿La página soportará fotos muy pesadas de mis renders?",
        a: "Utilizamos formatos de próxima generación (WebP) y optimización en la nube (Next.js Image) para que tu web cargue instantáneamente aunque las imágenes sean de altísima resolución."
      },
      {
        q: "¿Puedo actualizar mi portafolio yo mismo?",
        a: "Sí, integramos un panel autogestionable para que subas nuevas obras fácilmente."
      }
    ]
  },
  "kinesiologos": {
    nombreSingular: "Kinesiólogo",
    nombrePlural: "Kinesiólogos",
    descripcion: "Páginas web con reserva de horas para centros de kinesiología, rehabilitación y profesionales de la salud física. Facilita que tus pacientes continúen su tratamiento.",
    emoji: "💆",
    datoClave: "La facilidad para agendar una sesión de kinesiología es el factor decisivo para el 75% de los pacientes con dolor agudo. No los hagas esperar al teléfono.",
    soluciones: [
      "Módulo de reserva de sesiones y bonos kinesiológicos online.",
      "Sección de especialidades: rehabilitación deportiva, piso pélvico, traumatología.",
      "Fichas de ejercicios y recomendaciones privadas para pacientes.",
      "Botón de emergencia para atención a domicilio rápida vía WhatsApp."
    ],
    faqs: [
      {
        q: "¿Pueden cobrar los bonos de sesiones directamente en la web?",
        a: "Sí, podemos vincular paquetes de sesiones a Webpay para que el paciente pague su tratamiento completo antes de asistir."
      },
      {
        q: "¿Cómo destaco que atiendo con ciertas Isapres o Fonasa?",
        a: "Diseñamos secciones visuales destacando los convenios y los procesos de reembolso para darle tranquilidad a tus pacientes."
      }
    ]
  },
  "clinicas-veterinarias": {
    nombreSingular: "Clínica Veterinaria",
    nombrePlural: "Clínicas Veterinarias",
    descripcion: "Páginas web empáticas y funcionales para centros veterinarios y clínicas de mascotas. Integra agendamiento de horas y botones de emergencia 24/7.",
    emoji: "🐾",
    datoClave: "Ante una urgencia veterinaria, el 88% de los dueños de mascotas acude al primer resultado de Google que se cargue rápido y tenga un botón de llamada visible.",
    soluciones: [
      "Botón flotante de Urgencias 24/7 directo a llamada o WhatsApp.",
      "Sistema de reservas para peluquería, vacunas y consultas generales.",
      "Tienda online (E-commerce) integrada para venta de alimentos y medicamentos.",
      "Fichas de adopción o galería de pacientes felices."
    ],
    faqs: [
      {
        q: "¿Puedo vender alimento para mascotas en la misma página?",
        a: "¡Absolutamente! Podemos añadir un catálogo interactivo con carrito de compras para que vendas accesorios y alimentos con despacho a domicilio."
      },
      {
        q: "¿Cómo manejo las horas de la peluquería canina?",
        a: "Separamos las agendas: puedes tener una agenda exclusiva para peluquería y otra para atención médica, evitando cruces."
      }
    ]
  },
  "talleres-mecanicos": {
    nombreSingular: "Taller Mecánico",
    nombrePlural: "Talleres Mecánicos",
    descripcion: "Desarrollo web para maestranzas, talleres mecánicos y servitecas. Aumenta la confianza de tus clientes mostrando tus instalaciones, equipos y testimonios reales.",
    emoji: "🔧",
    datoClave: "La desconfianza es el mayor dolor al buscar mecánicos. Una web que muestra tu infraestructura, garantías y opiniones de clientes eleva tu captación en un 60%.",
    soluciones: [
      "Cotizador online para mantenciones por kilometraje o marca de vehículo.",
      "Catálogo de neumáticos, baterías y repuestos disponibles.",
      "Galería de instalaciones y certificaciones técnicas.",
      "Integración de Google Maps para que los clientes lleguen fácilmente."
    ],
    faqs: [
      {
        q: "¿Puedo tener un cotizador automático de mantenciones?",
        a: "Sí, podemos crear un formulario donde el cliente elige su auto y kilometraje para solicitar un presupuesto aproximado directo a tu WhatsApp."
      },
      {
        q: "¿Cómo muestro las opiniones de mis clientes satisfechos?",
        a: "Integramos automáticamente tus mejores reseñas de Google Maps en la página web para generar confianza instantánea."
      }
    ]
  },
  "tiendas-en-linea": {
    nombreSingular: "Tienda Online",
    nombrePlural: "Tiendas en Línea",
    descripcion: "E-commerce completo y optimizado para ventas. Creamos tiendas online autogestionables con integración de Webpay, Shipit, Starken y control de inventario automatizado.",
    emoji: "🛍️",
    datoClave: "Un retraso de 1 segundo en la carga de tu tienda online hace caer tus ventas en un 20%. Nuestros e-commerce en Next.js aseguran cargas ultra-rápidas.",
    soluciones: [
      "Carrito de compras sin comisiones ocultas e integrado con Webpay/Transbank.",
      "Sincronización de inventario y cálculo de envíos automático (Starken, Chilexpress).",
      "Experiencia de compra optimizada para celulares (Mobile-First).",
      "Panel administrador amigable para subir y editar productos fácilmente."
    ],
    faqs: [
      {
        q: "¿Debo pagar comisiones por cada venta que haga en mi web?",
        a: "¡No! A diferencia de plataformas como Shopify, nosotros no te cobramos comisiones por venta. Solo pagas la tarifa oficial del medio de pago (como Transbank)."
      },
      {
        q: "¿Es fácil para mí subir nuevos productos?",
        a: "Te entregamos un panel de control muy sencillo e intuitivo, y además incluimos un video tutorial para que tú mismo administres tu tienda."
      }
    ]
  },
  "cabanas-y-hoteles": {
    nombreSingular: "Cabaña / Hotel",
    nombrePlural: "Cabañas y Hoteles",
    descripcion: "Sitios web para el turismo en la Cuarta Región y el Valle de Elqui. Integra tu propio motor de reservas sin pagar el 15% de comisión a Booking o Airbnb.",
    emoji: "🏕️",
    datoClave: "Pagar un 15% de comisión a Booking por cada estadía destruye tu rentabilidad. Con un motor de reservas propio en tu web, aumentas tu margen de ganancia directamente.",
    soluciones: [
      "Motor de reservas directo con calendario de disponibilidad en tiempo real.",
      "Pasarela de pago para cobrar el abono de reserva de forma automática.",
      "Sincronización de calendarios (Channel Manager) con Airbnb y Booking.",
      "Galería inmersiva mostrando las instalaciones, piscina y entorno natural."
    ],
    faqs: [
      {
        q: "¿Si me reservan por la web, se bloquea la fecha en Airbnb?",
        a: "Sí, podemos sincronizar los calendarios mediante iCal para que cuando agenden en tu web, la fecha se bloquee automáticamente en Booking y Airbnb (y viceversa)."
      },
      {
        q: "¿Puedo cobrar el abono del 50% con tarjeta?",
        a: "Por supuesto, el sistema calcula la estadía y cobra el abono requerido vía Webpay para asegurar la reserva sin que tengas que pedir transferencias manuales."
      }
    ]
  },
  "restaurantes-y-cafes": {
    nombreSingular: "Restaurante",
    nombrePlural: "Restaurantes y Cafés",
    descripcion: "Atrae a más comensales con una web apetitosa. Muestra tu carta digital actualizada, permite reservas de mesas y pedidos para delivery directo a WhatsApp.",
    emoji: "🍽️",
    datoClave: "El 89% de los turistas revisa el menú online y las fotos del local antes de decidir dónde comer. Tu carta en formato PDF o Instagram no es suficiente.",
    soluciones: [
      "Carta digital interactiva e indexable por Google (no un PDF pesado).",
      "Sistema de reservas de mesa online y pedidos para retiro/delivery.",
      "Galería fotográfica de alta resolución de platos y el ambiente del local.",
      "Integración de links a aplicaciones de Delivery (UberEats, PedidosYa)."
    ],
    faqs: [
      {
        q: "¿Puedo tener mi menú digital con un código QR en las mesas?",
        a: "¡Sí! La página que creamos para tu menú servirá perfectamente para que la vincules a un código QR que puedes imprimir y poner en tus mesas."
      },
      {
        q: "¿Pueden pedir para llevar directo en la página sin pagar comisión a PedidosYa?",
        a: "Exactamente, creamos un sistema de carrito donde el cliente arma su pedido y este te llega detallado directamente al WhatsApp del local."
      }
    ]
  },
  "agencias-de-turismo": {
    nombreSingular: "Agencia de Turismo",
    nombrePlural: "Agencias de Turismo",
    descripcion: "Vende tours y experiencias turísticas por la Región de Coquimbo. Facilita la compra de paquetes turísticos internacionales y locales con una web vibrante.",
    emoji: "✈️",
    datoClave: "Los turistas planifican y pagan sus excursiones por internet antes de viajar. Si tu agencia no tiene venta de tours online, estás cediendo clientes a las agencias globales.",
    soluciones: [
      "Catálogo de Tours y Paquetes Turísticos con itinerarios detallados.",
      "Sistema de reservas y pago online de tickets para excursiones.",
      "Plataforma multi-idioma (Español, Inglés) para captar turistas extranjeros.",
      "Integración de reseñas de TripAdvisor para máxima validación social."
    ],
    faqs: [
      {
        q: "¿Se pueden agendar tours según la disponibilidad de cupos por día?",
        a: "Sí, implementamos un calendario donde el cliente selecciona el tour, elige la fecha (según tus días operativos) y bloquea su cupo tras el pago."
      },
      {
        q: "¿Pueden poner la página en inglés para los turistas del eclipse o cruceros?",
        a: "Por supuesto, ofrecemos desarrollos con sistema bilingüe automático para que no pierdas ventas internacionales."
      }
    ]
  },
  "corredoras-de-propiedades": {
    nombreSingular: "Corredora de Propiedades",
    nombrePlural: "Corredoras de Propiedades",
    descripcion: "Plataformas inmobiliarias modernas para corredores en Chile. Publica, filtra y destaca casas, departamentos y terrenos con un sistema de búsqueda avanzado.",
    emoji: "🏡",
    datoClave: "En el sector inmobiliario, la primera impresión lo es todo. Un catálogo lento o difícil de filtrar frustra a los compradores e inversores en los primeros 10 segundos.",
    soluciones: [
      "Buscador avanzado inmobiliario (por comuna, precio, tipo, habitaciones).",
      "Fichas de propiedades completas con tour virtual, mapa y video.",
      "Panel de administración fácil para dar de alta/baja propiedades rápidamente.",
      "Formulario directo en cada propiedad para captar prospectos (Leads) de inmediato."
    ],
    faqs: [
      {
        q: "¿Hay límite en la cantidad de propiedades que puedo subir?",
        a: "No ponemos límite técnico en el software. Puedes publicar cientos de casas, departamentos y terrenos de forma ilimitada."
      },
      {
        q: "¿Los clientes pueden buscar por precio o cantidad de baños?",
        a: "Sí, desarrollamos un filtro inteligente para que tus clientes encuentren exactamente lo que buscan en segundos."
      }
    ]
  },
  "climatizacion-y-paneles-solares": {
    nombreSingular: "Empresa de Climatización",
    nombrePlural: "Climatización y Paneles Solares",
    descripcion: "Diseño web para empresas de energía solar, aire acondicionado y eficiencia energética. Convierte visitas en instalaciones y proyectos concretos.",
    emoji: "☀️",
    datoClave: "Las búsquedas de 'instalación de aire acondicionado' o 'paneles solares' se disparan en verano e invierno. Estar bien posicionado localmente duplica tus instalaciones.",
    soluciones: [
      "Cotizador inteligente según metros cuadrados o consumo eléctrico (para paneles).",
      "Exhibición de proyectos ejecutados (clientes residenciales e industriales).",
      "Páginas dedicadas por servicio: mantención, instalación, proyectos fotovoltaicos.",
      "Explicación visual del retorno de inversión (ROI) para convencer al cliente."
    ],
    faqs: [
      {
        q: "¿Pueden añadir una sección para que mis clientes pidan mantenimiento técnico?",
        a: "Claro, añadimos formularios rápidos para coordinar mantenciones preventivas y reparación de equipos de aire acondicionado o calderas."
      },
      {
        q: "¿Cómo convenzo a empresas industriales para que coticen plantas solares?",
        a: "Creamos un apartado corporativo sólido, destacando casos de éxito con cifras reales de ahorro energético para transmitir total seguridad B2B."
      }
    ]
  }
};
