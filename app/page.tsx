"use client";

import { useState, useEffect } from "react";
import {
  Clock,
  MapPin,
  Smartphone,
  ArrowRight,
  Star,
  Award,
  Users,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  Timer,
  Code2,
  Zap,
  ShieldCheck,
  Globe,
  Settings,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  CreditCard,
  Briefcase,
  Heart,
  Menu, // <-- NUEVO: Icono de hamburguesa
  X, // <-- NUEVO: Icono para cerrar
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

const faqs = [
  {
    question: "¿Cuánto tiempo demoran en entregar mi página?",
    answer:
      "Para el Plan Presencia y Catálogo Básico, nuestros tiempos récord son de 3 a 5 días hábiles una vez que nos entregas la información. Para desarrollos Full o a medida, suele tomar entre 2 a 3 semanas dependiendo de la complejidad del proyecto.",
  },
  {
    question: "¿Debo pagar mensualidades?",
    answer:
      "¡No! El pago por el diseño es único. Tú eres dueño de tu página web al 100%, solo pagas el dominio después del año. Solo ofrecemos mensualidades opcionales si deseas que nosotros la mantengamos actualizada por ti.",
  },
  {
    question: "¿Cómo actualizo mis productos o fotos?",
    answer:
      "Queremos que tú solo te dediques a vender. Por eso, ofrecemos planes de mantención muy económicos (mensuales o por evento). Tú nos envías las fotos o cambios por WhatsApp y nuestro equipo lo actualiza por ti. Así tu web siempre se verá profesional e impecable.",
  },
  {
    question: "¿Cómo funciona el pago?",
    answer:
      "Trabajamos con un 50% de anticipo para iniciar el proyecto y el 50% restante se paga solo cuando tu página está lista y funcionando a tu entera satisfacción.",
  },
];

// --- 1. COMPONENTE BOTÓN WHATSAPP FLOTANTE (DINÁMICO) ---
function WhatsAppFloating() {
  const floatVariants: Variants = {
    idle: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    notify: {
      scale: [1, 1.1, 1, 1.1, 1],
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 4,
      },
    },
  };

  const defaultMsg = encodeURIComponent(
    "¡Hola Faroweb! Estoy viendo su página y me gustaría recibir información sobre diseño web.",
  );

  return (
    <motion.a
      href={`https://wa.me/56971874099?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-shadow hover:shadow-green-500/50"
      variants={floatVariants}
      animate="notify"
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
}

// --- 2. COMPONENTE CARRUSEL PARA SERVICIOS ---
function ServiceCarousel({
  images,
  isDark = false,
}: {
  images: string[];
  isDark?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden group shadow-inner ${isDark ? "bg-gray-800 border border-gray-700" : "bg-gray-100 border border-gray-200"}`}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
          alt={`Ejemplo ${currentIndex + 1}`}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-green-600 opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-green-600 opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-4 bg-green-500" : "w-1.5 bg-white/60"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

// --- 3. COMPONENTE PRINCIPAL ---
export default function Home() {
  // ESTADO PARA CONTROLAR LAS PESTAÑAS (TABS)
  const [activeTab, setActiveTab] = useState("presencia");

  // NUEVO: ESTADO PARA CONTROLAR EL MENÚ MÓVIL
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // EFECTO PARA LEER EL ENLACE (DEEP LINKING)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (["presencia", "catalogo", "medida"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  // FUNCIÓN PARA CAMBIAR DE PESTAÑA Y ACTUALIZAR LA URL SILENCIOSAMENTE
  const changeTab = (tab: string) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  };

  const getWhatsAppLink = (planName: string) => {
    const msg = encodeURIComponent(
      `¡Hola Faroweb! Me interesa el *${planName}*. ¿Podrían darme más información?`,
    );
    return `https://wa.me/56971874099?text=${msg}`;
  };

  return (
    <div className="bg-white selection:bg-green-100 selection:text-green-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <div className="flex-shrink-0 cursor-pointer relative z-50">
              <a href="#" className="flex items-center gap-2 group">
                <div className="relative h-12 w-auto overflow-hidden">
                  <Image
                    src="/farologo.png"
                    alt="Logo Faroweb"
                    width={100}
                    height={100}
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </a>
            </div>

            {/* NAVEGACIÓN DESKTOP (Oculta en móviles) */}
            <nav className="hidden md:flex md:space-x-8 font-medium text-sm tracking-wide">
              {["Beneficios", "Planes", "Bodas", "Nosotros"].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Planes"
                      ? "#planes-y-servicios"
                      : `#${item.toLowerCase()}`
                  }
                  className="text-gray-500 hover:text-green-600 transition-colors relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* BOTONES (Contacto y Menú Móvil) */}
            <div className="flex items-center gap-4 relative z-50">
              <a
                href={getWhatsAppLink("Servicios Generales")}
                className="hidden md:inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-600/30 transition-all hover:bg-green-700 hover:shadow-green-600/50 hover:-translate-y-0.5 active:scale-95"
              >
                Hablemos
              </a>

              {/* BOTÓN HAMBURGUESA MÓVIL */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Alternar menú"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* --- OVERLAY DEL MENÚ MÓVIL --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 pb-6 md:hidden flex flex-col min-h-screen"
            >
              <nav className="flex flex-col space-y-8 text-center mt-12">
                {["Beneficios", "Planes", "Bodas", "Nosotros"].map((item) => (
                  <a
                    key={item}
                    href={
                      item === "Planes"
                        ? "#planes-y-servicios"
                        : `#${item.toLowerCase()}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al clickear
                    className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <div className="mt-auto mb-10 w-full flex flex-col items-center gap-4">
                <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-2">
                  ¿Listo para empezar?
                </p>
                <a
                  href={getWhatsAppLink("Servicios Generales")}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-green-600/40 transition-all active:scale-95"
                >
                  Hablemos por WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpg"
              alt="Agencia de Diseño Web La Serena"
              fill
              className="object-cover object-center"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <motion.div
              className="max-w-4xl text-left"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                Desarrollo Web IV Región
              </span>
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Tu Negocio Abierto las <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  24 Horas
                </span>
              </motion.h1>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                Páginas web ultra-rápidas, modernas y optimizadas para vender en
                La Serena, Coquimbo y todo el país. Tu competencia ya está en
                línea, ¿y tú?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#planes-y-servicios"
                  className="group inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-green-700 shadow-xl shadow-green-900/40"
                >
                  Ver Planes{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section id="beneficios" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl italic">
                Beneficios Inmediatos
              </h2>
              <div className="h-1.5 w-20 bg-green-600 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Clock />,
                  title: "Ventas 24/7",
                  desc: "Tu página web trabaja por ti sin descanso, captando clientes incluso mientras duermes.",
                },
                {
                  icon: <MapPin />,
                  title: "Posicionamiento Local",
                  desc: "Optimizamos tu web para que aparezcas en Google cuando busquen tus servicios en la IV Región.",
                },
                {
                  icon: <Smartphone />,
                  title: "Diseño Móvil Perfecto",
                  desc: "La mayoría de tus clientes te visitará desde su celular. Les daremos la mejor experiencia.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-8 bg-white rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGÍA DE PUNTA */}
        <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-black sm:text-5xl mb-6 leading-tight">
                Tu web construida con la tecnología de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-emerald-500">
                  TikTok, Instagram, Facebook, y Netflix.
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                No usamos plantillas lentas ni sistemas anticuados.
                Desarrollamos tu proyecto con el mismo "stack" tecnológico que
                usan las grandes empresas para garantizar velocidad y seguridad
                total.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: "React",
                  color: "text-blue-400",
                  desc: "Interfaces instantáneas creadas por Meta. La misma tecnología que mueve Instagram.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Next.js",
                  color: "text-white",
                  desc: "Carga a la velocidad de la luz. Optimizada para que Google ame tu sitio.",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8" />,
                  title: "TypeScript",
                  color: "text-blue-500",
                  desc: "Código robusto y profesional que evita errores antes de que sucedan.",
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Edge Network",
                  color: "text-orange-400",
                  desc: "Servidores globales para que tu web vuele desde cualquier rincón de Chile.",
                },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div
                    className={`mb-5 ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    {tech.icon}
                  </div>
                  <h4 className="font-bold text-xl text-white mb-2">
                    {tech.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6">
                Ecosistema de alto rendimiento
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
                <span className="text-2xl font-black font-mono tracking-tighter">
                  React
                </span>
                <span className="text-2xl font-black tracking-tighter">
                  NEXT.js
                </span>
                <span className="text-2xl font-bold font-serif italic">
                  Typescript
                </span>
                <span className="text-2xl font-black tracking-tight">
                  Cloudflare
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN UNIFICADA: PORTAFOLIO Y PLANES (TABS) --- */}
        <section
          id="planes-y-servicios"
          className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden"
        >
          {/* ANCLAS INVISIBLES PARA LOS ENLACES DIRECTOS (TABS DEEP LINKING) */}
          <div id="presencia" className="absolute top-0 scroll-mt-24"></div>
          <div id="catalogo" className="absolute top-0 scroll-mt-24"></div>
          <div id="medida" className="absolute top-0 scroll-mt-24"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-gray-900 sm:text-5xl italic mb-6">
                Nuestros Planes
              </h2>
            </div>

            {/* CONTROL DE PESTAÑAS (TABS) */}
            <div className="flex flex-col items-center">
              <div className="flex w-full md:w-auto overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-2 md:gap-4 justify-start md:justify-center mb-12">
                {["presencia", "catalogo", "medida"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => changeTab(tab)}
                    className={`whitespace-nowrap px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === tab
                        ? "bg-green-600 text-white shadow-lg shadow-green-600/30"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-green-50 hover:text-green-600"
                      }`}
                  >
                    {tab === "presencia" && "✨ Plan Presencia (Landing)"}
                    {tab === "catalogo" && "📦 Plan Catálogo (E-commerce)"}
                    {tab === "medida" && "💻 Desarrollo a Medida"}
                  </button>
                ))}
              </div>

              {/* CONTENIDO DE LAS PESTAÑAS */}
              <div className="w-full bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
                <AnimatePresence mode="wait">
                  {/* --- TAB 1: PRESENCIA --- */}
                  {activeTab === "presencia" && (
                    <motion.div
                      key="presencia"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12"
                    >
                      {/* Lado Izquierdo: Info y Precio */}
                      <div className="p-8 md:p-12 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-between bg-gray-50/50">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            Presencia
                          </h3>
                          <p className="text-gray-700 mb-6 italic">
                            Paginas informativas (Landing Pages)
                          </p>

                          <div className="mb-8">
                            <span className="text-gray-400 line-through text-lg">
                              $160.000
                            </span>
                            <p className="text-5xl font-black text-green-600">
                              $79.990
                            </p>
                            <span className="text-xs font-bold text-red-500 uppercase tracking-widest mt-1 block">
                              Oferta Pago Único
                            </span>
                          </div>

                          <ul className="space-y-4 text-gray-700 font-medium mb-8">
                            <li className="flex items-center">
                              <Star className="h-5 w-5 text-green-500 mr-3" />{" "}
                              Landing Page Informativa
                            </li>
                            <li className="flex items-center">
                              <Star className="h-5 w-5 text-green-500 mr-3" />{" "}
                              Botón directo a WhatsApp
                            </li>
                            <li className="flex items-center">
                              <Star className="h-5 w-5 text-green-500 mr-3" />{" "}
                              Formulario y Mapa
                            </li>
                            <li className="flex items-center">
                              <Star className="h-5 w-5 text-green-500 mr-3" /> 5
                              Correos corporativos
                            </li>
                            <li className="flex items-center">
                              <Star className="h-5 w-5 text-green-500 mr-3" />{" "}
                              Hosting + Dominio (1 año)
                            </li>
                          </ul>
                        </div>
                        <a
                          href={getWhatsAppLink("Plan Presencia")}
                          className="w-full py-4 text-center font-bold bg-gray-900 text-white rounded-xl shadow-lg hover:bg-gray-800 transition-all"
                        >
                          Contratar Plan Presencia
                        </a>
                      </div>

                      {/* Lado Derecho: Ejemplos Visuales */}
                      <div className="p-8 md:p-12 lg:col-span-7 bg-white">
                        <h4 className="font-bold text-gray-900 mb-6 flex items-center">
                          <Globe className="w-5 h-5 mr-2 text-green-500" />{" "}
                          Ejemplos Reales
                        </h4>

                        <div className="mb-8">
                          <ServiceCarousel
                            images={[
                              "/domo1.jpg",
                              "/domo2.jpg",
                              "/domo3.jpg",
                              "/domo4.jpg",
                              "/cafe1.jpg",
                              "/cafe2.jpg",
                            ]}
                          />
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <a
                            href="https://domos-9vg.pages.dev"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm px-4 py-2 rounded-full border-2 border-gray-400 hover:border-green-500 hover:text-green-600 transition-colors flex items-center"
                          >
                            Domo Ejemplo{" "}
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                          <a
                            href="https://cafeteria-template.pages.dev"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm px-4 py-2 rounded-full border-2 border-gray-400 hover:border-green-500 hover:text-green-600 transition-colors flex items-center"
                          >
                            Cafetería Ejemplo{" "}
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                          <a
                            href="https://abogados-template.pages.dev"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm px-4 py-2 rounded-full border-2 border-gray-400 hover:border-green-500 hover:text-green-600 transition-colors flex items-center"
                          >
                            Abogados Ejemplo{" "}
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                          <a
                            href="https://arguedasconstrucciones.cl/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm px-4 py-2 rounded-full border-2 border-gray-400 hover:border-green-500 hover:text-green-600 transition-colors flex items-center"
                          >
                            Arguedas Construcciones{" "}
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                          <a
                            href="https://lacasitadelmolle.cl"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm px-4 py-2 rounded-full border-2 border-gray-500 hover:border-green-500 hover:text-green-600 transition-colors flex items-center"
                          >
                            La Casita del Molle{" "}
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* --- TAB 2: CATÁLOGO --- */}
                  {activeTab === "catalogo" && (
                    <motion.div
                      key="catalogo"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12"
                    >
                      {/* Lado Izquierdo: Info y Precio */}
                      <div className="p-8 md:p-12 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-between bg-green-50/30">
                        <div>
                          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3 tracking-widest uppercase">
                            El más vendido
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            Catálogo Básico
                          </h3>
                          <p className="text-gray-500 mb-6 italic">
                            Tienda online con carrito de compras y pedidos
                            directos a tu WhatsApp.
                          </p>

                          <div className="mb-8">
                            <span className="text-gray-400 line-through text-lg">
                              $250.000
                            </span>
                            <p className="text-5xl font-black text-green-600">
                              $129.990
                            </p>
                            <span className="text-xs font-bold text-red-500 uppercase tracking-widest mt-1 block">
                              Oferta Pago Único
                            </span>
                          </div>

                          <ul className="space-y-4 text-gray-700 font-medium mb-8">
                            <li className="flex items-center">
                              <Award className="h-5 w-5 text-green-500 mr-3" />{" "}
                              Todo lo del Plan Presencia
                            </li>
                            <li className="flex items-center">
                              <Award className="h-5 w-5 text-green-500 mr-3" />{" "}
                              Catálogo de productos
                            </li>
                            <li className="flex items-center">
                              <Award className="h-5 w-5 text-green-500 mr-3" />{" "}
                              Carrito de compras
                            </li>
                            <li className="flex items-center">
                              <Award className="h-5 w-5 text-green-500 mr-3" />{" "}
                              Pedidos al WhatsApp
                            </li>
                          </ul>
                        </div>
                        <a
                          href={getWhatsAppLink("Plan Catálogo Básico")}
                          className="w-full py-4 text-center font-bold bg-green-600 text-white rounded-xl shadow-lg shadow-green-600/30 hover:bg-green-700 transition-all"
                        >
                          Contratar Plan Catálogo
                        </a>
                      </div>

                      {/* Lado Derecho: Ejemplos Visuales */}
                      <div className="p-8 md:p-12 lg:col-span-7 bg-white">
                        <h4 className="font-bold text-gray-900 mb-6 flex items-center">
                          <ShoppingCart className="w-5 h-5 mr-2 text-green-500" />{" "}
                          Así se verá tu tienda
                        </h4>
                        <div className="relative group rounded-xl overflow-hidden aspect-[16/10] bg-gray-900 mb-6 shadow-md">
                          <video
                            src="/pet.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex">
                          <a
                            href="https://petshop-aoc.pages.dev/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm px-6 py-3 rounded-full bg-gray-100 hover:bg-green-100 hover:text-green-700 font-bold transition-colors flex items-center"
                          >
                            Ver E-commerce de ejemplo{" "}
                            <ExternalLink size={16} className="ml-2" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* --- TAB 3: A MEDIDA --- */}
                  {activeTab === "medida" && (
                    <motion.div
                      key="medida"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12 bg-gray-900 text-white"
                    >
                      {/* Lado Izquierdo: Info */}
                      <div className="p-8 md:p-12 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold mb-2">
                            Sistemas A Medida
                          </h3>
                          <p className="text-gray-400 mb-6 italic">
                            Soluciones robustas para empresas que necesitan
                            digitalizar procesos o e-commerce avanzado.
                          </p>

                          <div className="mb-8">
                            <p className="text-4xl font-black text-white">
                              Cotizar Proyecto
                            </p>
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mt-1 block">
                              Sistemas Personalizados
                            </span>
                          </div>

                          <ul className="space-y-4 text-gray-300 font-medium mb-8">
                            <li className="flex items-center">
                              <Users className="h-5 w-5 text-blue-400 mr-3" />{" "}
                              E-commerce Full (Pagos Webpay)
                            </li>
                            <li className="flex items-center">
                              <Users className="h-5 w-5 text-blue-400 mr-3" />{" "}
                              Software SaaS (Sistemas Propios)
                            </li>
                            <li className="flex items-center">
                              <Users className="h-5 w-5 text-blue-400 mr-3" />{" "}
                              CRM e Intranets
                            </li>
                            <li className="flex items-center">
                              <Users className="h-5 w-5 text-blue-400 mr-3" />{" "}
                              Integración con Facturación
                            </li>
                          </ul>
                        </div>
                        <a
                          href={getWhatsAppLink("Desarrollo a Medida")}
                          className="w-full py-4 text-center font-bold bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all"
                        >
                          Agendar Asesoría Gratuita
                        </a>
                      </div>

                      {/* Lado Derecho: Imagen y Contexto */}
                      <div className="p-8 md:p-12 lg:col-span-7 bg-gray-950 flex flex-col">
                        <h4 className="font-bold text-gray-200 mb-6 flex items-center">
                          <Briefcase className="w-5 h-5 mr-2 text-blue-400" />{" "}
                          Tecnología Empresarial
                        </h4>

                        <div className="mb-6">
                          <ServiceCarousel
                            images={["/saas.jpg", "/ecommerce.jpg"]}
                            isDark={true}
                          />
                        </div>

                        <div className="flex gap-4 items-center opacity-70 mt-auto">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                            className="h-6"
                            alt="Mastercard"
                          />
                          <div className="h-6 w-px bg-gray-700"></div>
                          <span className="font-bold tracking-widest text-sm">
                            WEBPAY PLUS / TRANSBANK
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN BOUTIQUE: BODAS --- */}
        <section
          id="bodas"
          className="py-24 bg-[#72957a] border-t border-[#6b9071]/20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[#6b9071]/5 border border-[#6b9071]/10 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#6b9071] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

              <div className="md:w-1/2 relative z-10">
                <div className="inline-flex rounded-full bg-[#6b9071]/10 border border-[#6b9071]/20 px-4 py-1.5 text-xs font-bold text-[#2c3f30] uppercase tracking-widest mb-6">
                  🌿 Servicio Boutique
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Invitaciones de <br />
                  <span className="text-[#6b9071] font-serif italic font-normal">
                    Boda Digitales
                  </span>
                </h3>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Sorprende a tus invitados con una experiencia única, elegante
                  y moderna. Confirmación de asistencia a WhatsApp, cuenta
                  regresiva, mapas y lista de regalos en un enlace inolvidable.
                </p>

                <a
                  href={'https://faroweb.cl/bodas'}
                  className="inline-flex items-center px-8 py-4 font-bold bg-[#6b9071] text-white rounded-full shadow-lg shadow-[#6b9071]/30 hover:bg-[#527056] hover:-translate-y-1 transition-all duration-300"
                >
                  Ver demos y valores <ArrowRight size={18} className="ml-2" />
                </a>
              </div>

              <div className="md:w-1/2 w-full flex items-start gap-4 relative z-10">
                <div className="w-1/2 h-fit rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border-[6px] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/weeding1.jpg"
                    alt="Boda 1"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="w-1/2 h-fit rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border-[6px] border-white transform rotate-[5deg] hover:rotate-0 transition-transform duration-500 mt-10">
                  <img
                    src="/weeding2.jpg"
                    alt="Boda 2"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUIENES SOMOS */}
        <section
          id="nosotros"
          className="py-24 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-gray-100 shadow-sm">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Expertos Locales.
                  <br />
                  <span className="text-green-600">Resultados Globales.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Somos <b>Faroweb</b>. Un equipo de desarrolladores apasionados
                  viviendo en La Serena. Entendemos el mercado local porque
                  somos parte de él.
                </p>
                <div className="flex gap-4 items-center">
                  <div className="flex -space-x-4">
                    {["/gift1.jpg", "/gift2.jpg", "/gift3.jpg"].map(
                      (imgSrc, i) => (
                        <div
                          key={i}
                          className="relative w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm bg-gray-100"
                        >
                          <img
                            src={imgSrc}
                            alt={`Equipo ${i}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ),
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold text-gray-900">
                      Equipo Faroweb
                    </span>
                    <span className="text-xs text-gray-500">
                      Listos para ayudarte
                    </span>
                  </div>
                </div>
              </motion.div>
              <div className="md:w-1/2 w-full h-64 md:h-80 bg-gray-100 rounded-3xl relative overflow-hidden shadow-lg border-2 border-white">
                <video
                  src="/laserena.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN DE MANTENIMIENTO --- */}
        <section className="py-16 bg-gray-900 relative overflow-hidden z-20 border-y border-gray-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-green-500/10 blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-7/12 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-green-500 animate-[spin_10s_linear_infinite]" />
                  <span className="text-green-400 text-xs font-bold uppercase tracking-widest">
                    Servicio Opcional de Mantención
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                  Tú dedícate a vender. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 italic">
                    Nosotros cuidamos tu web.
                  </span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-2xl">
                  Eres dueño de tu página al 100%. Pero si no tienes tiempo para
                  subir fotos o cambiar precios, lo hacemos por ti a través de
                  WhatsApp. Rápido y sin estrés.
                </p>

                <div className="grid grid-cols-2 gap-4 max-w-xl">
                  <div className="flex items-center text-gray-300 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />{" "}
                    Actualización de fotos
                  </div>
                  <div className="flex items-center text-gray-300 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />{" "}
                    Cambios de precios
                  </div>
                  <div className="flex items-center text-gray-300 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />{" "}
                    Soporte directo
                  </div>
                  <div className="flex items-center text-gray-300 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />{" "}
                    Respaldos de seguridad
                  </div>
                </div>
              </div>

              <div className="md:w-5/12 w-full flex justify-end">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900 border border-gray-800 rounded-3xl px-8 py-8 shadow-2xl w-full max-w-md relative"
                >
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                    Inversión Transparente
                  </p>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-4xl md:text-5xl font-black text-white">
                      $20.000
                    </span>
                    <span className="text-green-400 font-bold text-sm md:text-base">
                      / mes o por evento
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-4 mb-6 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-green-500" />{" "}
                    Pídelo directo a nuestro WhatsApp.
                  </p>

                  <div className="border-t border-gray-800 pt-4 mt-2">
                    <p className="text-gray-500 text-xs leading-relaxed">
                      * <strong className="text-gray-400">Nota técnica:</strong>{" "}
                      Este plan cubre modificaciones sobre el contenido
                      existente (textos e imágenes). El desarrollo de nuevas
                      secciones, funciones o rediseños estructurales se cotizan
                      por separado.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-gray-600">Resolvemos tus dudas en segundos.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* PAGOS */}
        <section className="py-24 bg-green-600 text-white text-center">
          <h3 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">
            Aceptamos Todo Medio de Pago
          </h3>
          <div className="inline-flex flex-wrap justify-center items-center gap-8 bg-white py-8 px-12 rounded-3xl shadow-2xl">
            <img
              src="https://img.icons8.com/?size=100&id=13608&format=png&color=000000"
              alt="Visa"
              className="h-10 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-10 w-auto"
            />
            <div className="flex items-center gap-3 text-gray-800 font-bold border-l-2 border-gray-200 pl-8 ml-4">
              <CheckCircle2 className="text-green-600 h-8 w-8" />
              <span className="text-lg leading-tight text-left">
                Transferencia
                <br />
                Bancaria
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900 ">
        <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center gap-5">
          <span className="text-2xl font-black text-white tracking-tighter italic">
            FARO<span className="text-green-500">WEB</span>
          </span>
          <p className=" text-md text-gray-500">
            Desarrollo web estratégico en La Serena, Chile.
          </p>
          <p className=" text-md text-gray-500">faroweb@gmail.com</p>
          <p className=" text-md text-gray-500">+56971874099</p>
          <p className="flex items-center justify-center text-sm">
            &copy; 2026 Faroweb.cl. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppFloating />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-green-100 rounded-2xl bg-white overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
