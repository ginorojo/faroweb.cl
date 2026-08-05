"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Code2,
  Globe,
  ListOrdered,
  MapPin,
  Rocket,
  ShieldCheck,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { RUBROS, CIUDADES } from "@/data/pseo";

const faqs = [
  {
    question: "¿Cuánto tiempo demoran en entregar mi página?",
    answer:
      "Para el Plan Corporativo y Catálogo Básico, nuestros tiempos récord son de 3 a 5 días hábiles una vez que nos entregas la información. Para desarrollos a medida, suele tomar entre 2 a 3 semanas dependiendo de la complejidad del proyecto.",
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
  {
    question: "¿Por qué elegir Faroweb en la Cuarta Región?",
    answer:
      "En Faroweb, entendemos que el diseño de páginas web en La Serena, Coquimbo y toda la Cuarta Región no se trata solo de crear sitios bonitos, sino de construir herramientas digitales que generen ventas y prospectos reales para tu negocio. Nos especializamos en el desarrollo de catálogos online ultra rápidos, softwares a medida y sitios web corporativos utilizando tecnologías de vanguardia como Next.js y React. Esto garantiza que tu página cargue en milisegundos, dándote una ventaja competitiva brutal en el posicionamiento SEO frente a tu competencia. Además, no te dejamos solo una vez terminado el proyecto. Ofrecemos planes de mantención web y soporte directo para que tú te enfoques exclusivamente en atender a tus nuevos clientes mientras nosotros nos encargamos de que tu plataforma digital esté siempre segura, actualizada y funcionando 24/7.",
  },
];

// --- 1. COMPONENTE BOTÓN WHATSAPP FLOTANTE (DINÁMICO) ---
function WhatsAppFloating() {
  const floatVariants: Variants = {
    idle: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: 3,
        ease: "easeInOut",
      },
    },
    notify: {
      scale: [1, 1.1, 1, 1.1, 1],
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: 3,
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
      className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-shadow hover:shadow-green-500/50"
      variants={floatVariants}
      animate="notify"
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{ scale: 0.9 }}
    >
      <WhatsAppIcon className="h-9 w-9 fill-current" />
    </motion.a>
  );
}

// --- 1.5. COMPONENTE BOTÓN INSTAGRAM FLOTANTE ---
function InstagramFloating() {
  const floatVariants: Variants = {
    idle: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: 3,
        ease: "easeInOut",
      },
    },
    notify: {
      scale: [1, 1.1, 1, 1.1, 1],
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: 3,
        repeatDelay: 5,
      },
    },
  };

  return (
    <motion.a
      href="https://instagram.com/faroweb.cl"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-card transition-shadow hover:shadow-pink-500/50"
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
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
      <AnimatePresence mode="wait" initial={false}>
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
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-card hover:bg-white text-green-600 opacity-0 group-hover:opacity-100 transition-[opacity,transform,background-color] duration-200 ease-out hover:scale-110 active:scale-[0.97]"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-card hover:bg-white text-green-600 opacity-0 group-hover:opacity-100 transition-[opacity,transform,background-color] duration-200 ease-out hover:scale-110 active:scale-[0.97]"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out ${idx === currentIndex ? "w-4 bg-green-500" : "w-1.5 bg-white/60"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

// El logo de WhatsApp estaba pegado seis veces en el archivo.
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Las cinco tarjetas eran copia literal, ~45 lineas cada una. Con los datos
// separados, un cambio de estilo llega a las cinco por igual.
const proyectos = [
  { href: "https://lacasitadelmolle.cl", img: "/casita.webp", titulo: "La Casita del Molle", plan: "Plan a Medida", wa: "Plan A Medida (La Casita del Molle)", destacado: true },
  { href: "https://domos-9vg.pages.dev", img: "/domo1.webp", titulo: "Domos", plan: "Landing Page", wa: "Plan Corporativo (Domos)" },
  { href: "https://arguedasconstrucciones.cl/", img: "/arguedas.webp", titulo: "Arguedas Construcciones", plan: "Landing Page", wa: "Plan Corporativo (Arguedas Construcciones)" },
  { href: "https://modularnorte.cl/", img: "/modular.webp", titulo: "Modular Norte", plan: "Catálogo", wa: "Plan Corporativo (Modular Norte)" },
  { href: "https://movigest.cl/", img: "/movigest.webp", titulo: "Movigest", plan: "Landing Page", wa: "Plan Corporativo (Movigest)" },
];

function ProyectoCard({
  proyecto,
  waLink,
}: {
  proyecto: (typeof proyectos)[number];
  waLink: string;
}) {
  const { href, img, titulo, plan, destacado } = proyecto;
  return (
    <div
      className={`snap-center shrink-0 w-[85vw] sm:w-[400px] md:w-auto flex flex-col group/card bg-white rounded-3xl p-5 shadow-card hover:shadow-card-hover border border-gray-100 hover:border-gray-200 hover:-translate-y-1.5 transition-[box-shadow,border-color,transform] duration-300 ease-out${
        destacado ? " lg:col-span-2" : ""
      }`}
    >
      <a href={href} target="_blank" rel="noreferrer" className="flex-grow group/link block">
        <div
          className={`w-full ${
            destacado ? "aspect-[21/9]" : "aspect-[16/11]"
          } relative overflow-hidden mb-6 rounded-2xl bg-gray-50/50`}
        >
          <div className="absolute inset-0 bg-gray-900/0 group-hover/link:bg-gray-900/10 transition-colors duration-300 z-20" />
          <img
            src={img}
            alt={titulo}
            className="absolute inset-0 w-full h-full object-cover group-hover/link:scale-105 transition-transform duration-300 z-10"
          />
        </div>
        <div className="px-1 mb-6">
          <span className="text-[13px] font-medium text-gray-500 mb-3 block">{plan}</span>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-h4 text-gray-900 group-hover/link:text-emerald-600 transition-colors">
              {titulo}
            </h3>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover/link:bg-emerald-50 transition-colors">
              <ArrowRight className="text-gray-400 group-hover/link:text-emerald-600 transition-colors w-4 h-4 group-hover/link:-rotate-45" />
            </div>
          </div>
        </div>
      </a>
      <div className="mt-auto px-1">
        <a
          href={waLink}
          className="inline-flex w-full items-center justify-between bg-gray-900 text-white rounded-2xl pl-5 pr-2 py-2 hover:bg-gray-800 hover:shadow-card active:scale-[0.97] transition-[background-color,box-shadow,transform] duration-200 ease-out group/wa"
        >
          <span className="font-bold text-sm mr-2 tracking-wide">Quiero una web así</span>
          <div className="bg-emerald-500 w-10 h-10 rounded-xl text-white shadow-card group-hover/wa:scale-105 transition-transform flex items-center justify-center shrink-0">
            <WhatsAppIcon className="h-5 w-5 fill-current" />
          </div>
        </a>
      </div>
    </div>
  );
}

// --- 3. COMPONENTE PRINCIPAL ---
export default function Home() {

  const getWhatsAppLink = (planName: string) => {
    const msg = encodeURIComponent(
      `¡Hola Faroweb! Me interesa el *${planName}*. ¿Podrían darme más información?`,
    );
    return `https://wa.me/56971874099?text=${msg}`;
  };

  return (
    <div className="bg-white selection:bg-green-100 selection:text-green-900 font-sans">
      <SharedHeader />

      <main>
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative min-h-[90svh] flex items-center justify-center overflow-hidden pt-12 md:pt-16"
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

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10 md:mb-0">
            {/* Entrada en CSS y no en framer-motion: es el H1 (elemento LCP) y
                no puede depender de que corra el JS para hacerse visible. */}
            <div className="max-w-4xl text-left animate-hero-in">
              <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-eyebrow uppercase mb-6 backdrop-blur-sm">
                Desarrollo Web IV Región
              </span>
              <h1 className="text-h1 text-balance text-white mb-6">
                Agencia de Diseño Web en La Serena. Tu negocio abierto las{" "}
                <span className="text-green-400">
                  24 Horas
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                Faroweb es una agencia de diseño de páginas web en La Serena y Coquimbo especializada en crear sitios ultra-rápidos, tiendas online y sistemas a medida. Utilizamos tecnologías modernas como React, Next.js y Astro para potenciar negocios locales en toda la Cuarta Región.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#planes-y-servicios"
                  className="group inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 ease-out hover:bg-green-700 active:scale-[0.97] shadow-card"
                >
                  Ver Planes{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section id="beneficios" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-h2 text-balance text-gray-900">
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
                  className="group p-8 bg-white rounded-3xl shadow-card border border-gray-100 transition-[box-shadow,transform] duration-300 ease-out hover:shadow-card-hover hover:-translate-y-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-h4 text-gray-900">
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
        <section className="py-16 md:py-24 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
              <h2 className="text-h2 text-balance mb-6">
                Tu web construida con la tecnología de{" "}
                <span className="text-green-400">
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
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Astro",
                  color: "text-orange-500",
                  desc: "Utilizamos Astro para lograr sitios estáticos extremadamente rápidos y optimizados para SEO.",
                },
              ].map((tech, i) => (
                <div
                  key={i}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="animate-reveal p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-green-500/30 transition-colors duration-200 ease-out group"
                >
                  <div
                    className={`mb-5 ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="text-h4 text-white mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              {/* Mismo tratamiento para los cinco: mezclar mono, serif y sans
                  para fingir logos distintos se lee como amateur. */}
              <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
                <span className="text-2xl font-bold tracking-tight">
                  React
                </span>
                <span className="text-2xl font-bold tracking-tight">
                  NEXT.js
                </span>
                <span className="text-2xl font-bold tracking-tight">
                  Typescript
                </span>
                <span className="text-2xl font-bold tracking-tight">
                  Astro
                </span>
                <span className="text-2xl font-bold tracking-tight">
                  Cloudflare
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN: PLANES Y PORTAFOLIO --- */}
        <section
          id="planes-y-servicios"
          className="py-20 md:py-32 bg-gray-50 border-t border-gray-100 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-h2 text-balance text-gray-900 mb-6">
                Nuestros Planes
              </h2>
            </div>

            {/* PLANES UNO ABAJO DE OTRO */}
            <div className="flex flex-col gap-8 max-w-4xl mx-auto mb-24">

              {/* PLAN CORPORATIVO */}
              <div id="corporativo" className="relative rounded-3xl overflow-hidden scroll-mt-24 group">
                {/* Fondo con gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-emerald-50/40 z-0" />
                {/* Borde con brillo */}
                <div className="absolute inset-0 rounded-3xl border border-gray-200/80 z-0" />
                <div className="relative z-10 flex flex-col md:flex-row shadow-card rounded-3xl">
                  {/* Izquierdo: Info */}
                  <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="text-h3 text-gray-900 mb-2">
                        Corporativo
                      </h3>
                      <details className="group cursor-pointer mb-8">
                        <summary className="text-sm font-bold text-emerald-600 list-none hover:underline focus:outline-none">
                          <span className="inline-flex items-center gap-1 group-open:hidden">
                            Leer descripción completa
                            <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
                          </span>
                          <span className="hidden items-center gap-1 group-open:inline-flex">
                            Ocultar descripción
                            <ChevronUp className="h-4 w-4" strokeWidth={1.5} />
                          </span>
                        </summary>
                        <div className="text-gray-500 text-sm leading-relaxed mt-3 cursor-auto space-y-3">
                          <p>
                            El Plan Corporativo es para empresas en La Serena y Coquimbo que necesitan establecer su marca en internet de forma rápida, profesional y económica. Obtienes una Landing Page corporativa y moderna, optimizada para móviles y para buscadores como Google.
                          </p>
                          <p>
                            <strong className="text-gray-700 font-semibold">Diseño personalizado, sin plantillas prediseñadas.</strong> Cada sitio se construye desde cero a partir de tu marca, tus colores y las necesidades de tu rubro, así que no terminas con una página igual a la de tu competencia.
                          </p>
                          <p>
                            Como tu objetivo es recibir consultas, integramos botón directo a WhatsApp, formulario de contacto y mapa interactivo. Incluye además 5 correos electrónicos corporativos, alojamiento (hosting) de alta velocidad y registro de dominio gratis el primer año. De toda la configuración técnica nos encargamos nosotros.
                          </p>
                        </div>
                      </details>

                      <ul className="space-y-3 mb-8">
                        {[
                          "Diseño personalizado, sin plantillas prediseñadas",
                          "Landing Page Informativa",
                          "Botón directo a WhatsApp",
                          "Formulario y Mapa",
                          "5 Correos corporativos",
                          "Hosting + Dominio (1 año)",
                        ].map((feat) => (
                          <li key={feat} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium text-sm">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Derecho: Precio + CTA */}
                  <div className="p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-gray-100/80">
                    <div className="w-full mb-6">
                      <span className="text-gray-400 line-through text-base block mb-1">Desde $229.990</span>
                      <p className="text-h2 text-gray-900 mb-1 flex items-baseline justify-center gap-2">
                        <span className="text-2xl font-bold text-gray-500">Desde</span>
                        $189.990
                      </p>
                      <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
                        <span className="text-[13px] font-semibold text-red-600">Oferta pago único</span>
                      </div>
                      <span className="text-xs text-gray-500 font-semibold block mt-2">* Valores no incluyen IVA</span>
                    </div>
                    <a
                      href={getWhatsAppLink("Plan Corporativo")}
                      className="w-full py-4 text-center font-bold bg-gray-900 text-white rounded-2xl shadow-card hover:bg-gray-800 hover:-translate-y-0.5 active:scale-[0.97] transition-[background-color,transform] duration-200 ease-out text-sm tracking-wide"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        Contratar Plan
                        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* PLAN CATÁLOGO — DESTACADO */}
              <div id="catalogo" className="relative rounded-3xl overflow-hidden scroll-mt-24 group">
                {/* Fondo con gradiente verde más vibrante */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 z-0" />
                <div className="relative z-10 flex flex-col md:flex-row shadow-card rounded-3xl">
                  {/* Izquierdo: Info */}
                  <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-between">
                    <div>
                      {/* Badge "más vendido" */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-5 backdrop-blur-sm">
                        <Star className="h-3 w-3 shrink-0 fill-current text-white" strokeWidth={1.5} />
                        <span className="text-eyebrow uppercase text-white">El más vendido</span>
                      </div>
                      <h3 className="text-h3 text-white mb-2">
                        Catálogo Básico
                      </h3>
                      <details className="group cursor-pointer mb-8">
                        <summary className="text-sm font-bold text-emerald-300 list-none hover:underline focus:outline-none">
                          <span className="inline-flex items-center gap-1 group-open:hidden">
                            Leer descripción completa
                            <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
                          </span>
                          <span className="hidden items-center gap-1 group-open:inline-flex">
                            Ocultar descripción
                            <ChevronUp className="h-4 w-4" strokeWidth={1.5} />
                          </span>
                        </summary>
                        <div className="text-emerald-50/90 text-sm leading-relaxed mt-3 cursor-auto space-y-3">
                          <p>
                            El Plan Catálogo Básico es para comerciantes y emprendedores de la Cuarta Región que quieren vender productos por internet sin pagar comisiones por venta.
                          </p>
                          <p>
                            Esta tienda online incluye un catálogo interactivo y un carrito de compras fácil de usar: tus clientes seleccionan sus productos y te envían el pedido detallado directo a tu WhatsApp.
                          </p>
                          <p>
                            Suma todo lo del Plan Corporativo —correos corporativos, hosting, dominio y diseño responsivo— más un panel de control intuitivo para autogestionar tus productos y precios. Es la forma más rápida de digitalizar tus ventas locales sin depender de plataformas de terceros que retienen tu dinero.
                          </p>
                        </div>
                      </details>

                      <ul className="space-y-3 mb-8">
                        {[
                          "Todo lo del Plan Corporativo",
                          "Catálogo de productos",
                          "Carrito de compras",
                          "Pedidos al WhatsApp",
                        ].map((feat) => (
                          <li key={feat} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-white/90 font-medium text-sm">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Derecho: Precio + CTA */}
                  <div className="p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-white/10">
                    <div className="w-full mb-6">
                      <span className="text-white/50 line-through text-base block mb-1">Desde $359.990</span>
                      <p className="text-h2 text-white mb-1 flex items-baseline justify-center gap-2">
                        <span className="text-2xl font-bold text-white/70">Desde</span>
                        $289.990
                      </p>
                      <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                        <span className="text-[13px] font-semibold text-white/80">Oferta pago único</span>
                      </div>
                      <span className="text-xs text-white/60 font-semibold block mt-2">* Valores no incluyen IVA</span>
                    </div>
                    <a
                      href={getWhatsAppLink("Plan Catálogo Básico")}
                      className="w-full py-4 text-center font-bold bg-white text-emerald-700 rounded-2xl shadow-card hover:bg-emerald-50 hover:-translate-y-0.5 active:scale-[0.97] transition-[background-color,transform] duration-200 ease-out text-sm tracking-wide"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        Contratar Plan
                        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* PLAN A MEDIDA */}
              <div id="medida" className="relative rounded-3xl overflow-hidden scroll-mt-24 group">
                {/* Fondo oscuro premium */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 z-0" />
                <div className="absolute inset-0 rounded-3xl border border-white/5 z-0" />
                <div className="relative z-10 flex flex-col md:flex-row shadow-raised rounded-3xl">
                  {/* Izquierdo: Info */}
                  <div className="p-8 md:p-12 md:w-5/12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                    <div>
                      <h3 className="text-h3 text-white mb-2">
                        Sistemas A Medida
                      </h3>
                      <div className="text-gray-400 text-sm leading-relaxed mb-8 space-y-3">
                        <p>
                          <strong className="text-gray-300 font-semibold">Softwares a medida, CRM, Intranets.</strong> Para empresas y pymes en Chile que necesitan más que una página web: sistemas propios (SaaS) y digitalización de procesos internos.
                        </p>
                        <p>
                          Nuestro equipo Full-Stack diseña arquitecturas de software seguras y rápidas, conectadas con los sistemas que ya usas. Tecnología empresarial que automatiza tus operaciones y reduce costos a largo plazo.
                        </p>
                      </div>

                      <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-h3 text-white">Cotizar Proyecto</p>
                        <span className="text-xs text-blue-400 font-semibold mt-1 block">Presupuesto personalizado sin costo</span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {[
                          "Softwares a medida",
                          "Software SaaS (Sistemas Propios)",
                          "CRM e Intranets",
                          "Integración con sistemas internos",
                        ].map((feat) => (
                          <li key={feat} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-300 font-medium text-sm">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={getWhatsAppLink("Desarrollo a Medida")}
                      className="w-full py-4 text-center font-bold bg-blue-600 text-white rounded-2xl shadow-card hover:bg-blue-500 hover:-translate-y-0.5 active:scale-[0.97] transition-[background-color,transform] duration-200 ease-out text-sm tracking-wide"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        Agendar Asesoría Gratuita
                        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </a>
                  </div>

                  {/* Derecho: Imagen y Contexto */}
                  <div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-between">
                    <div>
                      <div className="text-eyebrow uppercase text-gray-300 mb-6 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-xl bg-blue-500/20 flex items-center justify-center">
                          <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        Tecnología Empresarial
                      </div>

                      <div className="mb-6 w-full">
                        <ServiceCarousel
                          images={["/saas.jpg"]}
                          isDark={true}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 items-center opacity-60 mt-6 pt-4 border-t border-white/5">
                      <span className="text-eyebrow uppercase text-gray-400">
                        REACT / NEXT.JS / TYPESCRIPT
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* TABLA COMPARATIVA AEO */}
            <div className="max-w-4xl mx-auto mb-24 overflow-x-auto rounded-xl border border-gray-200 shadow-card bg-white">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-gray-900">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bold">Características</th>
                    <th scope="col" className="px-6 py-4 font-bold border-l border-gray-200">Corporativo</th>
                    <th scope="col" className="px-6 py-4 font-bold border-l border-gray-200">Catálogo Básico</th>
                    <th scope="col" className="px-6 py-4 font-bold border-l border-gray-200">A Medida</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50/50">Diseño Responsivo (Móvil)</th>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">Sí</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">Sí</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">Sí, a medida</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50/50">Hosting y Dominio (1 año)</th>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">Incluido</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">Incluido</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-gray-500">Según requerimiento</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50/50">Correos Corporativos</th>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">5 cuentas</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">5 cuentas</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">5 cuentas</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50/50">Pedidos / Ventas</th>
                    <td className="px-6 py-4 border-l border-gray-200 text-gray-500">Contacto Directo</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">Carrito a WhatsApp</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-gray-500">Según requerimiento</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50/50">Integraciones y Software</th>
                    <td className="px-6 py-4 border-l border-gray-200 text-gray-400">No</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-gray-400">No</td>
                    <td className="px-6 py-4 border-l border-gray-200 text-emerald-600 font-medium">SaaS, CRM, Intranets</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SECCIÓN: PROYECTOS QUE YA ESTÁN VENDIENDO */}
            <div className="mt-24 md:mt-32 max-w-6xl mx-auto">
              {/* Encabezado renovado */}
              <div className="mb-14 text-left md:text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-eyebrow uppercase text-emerald-700">Resultados Reales</span>
                </div>
                <h2 className="text-h2 text-balance text-gray-900">
                  Proyectos que ya
                  <span className="block text-gray-400">están vendiendo.</span>
                </h2>
                <p className="text-gray-500 mt-6 text-lg max-w-xl md:mx-auto">
                  Mira lo que hemos construido para otros negocios — y pide algo similar para el tuyo.
                </p>
              </div>

              {/* INDICADOR MÓVIL */}
              <div className="md:hidden flex items-center justify-end w-full mb-4 px-2 gap-2 text-gray-400">
                <span className="text-sm font-medium">Desliza para ver todos</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: 3, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* CARRUSEL DE PROYECTOS */}
              <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:gap-8 -mx-4 px-4 md:mx-0 md:px-0">

                {proyectos.map((proyecto) => (
                  <ProyectoCard
                    key={proyecto.href}
                    proyecto={proyecto}
                    waLink={getWhatsAppLink(proyecto.wa)}
                  />
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN BOUTIQUE: BODAS --- */}
        <section
          id="bodas"
          className="py-20 md:py-32 bg-[#72957a] border-t border-[#6b9071]/20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-[#6b9071]/10 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">

              <div className="md:w-1/2 relative z-10">
                <h2 className="text-h2 text-balance text-gray-900 mb-6">
                  Invitaciones de <br />
                  <span className="text-[#6b9071]">
                    Boda Digitales
                  </span>
                </h2>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Sorprende a tus invitados con una experiencia única, elegante
                  y moderna. Confirmación de asistencia a WhatsApp, cuenta
                  regresiva, mapas y lista de regalos en un enlace inolvidable.
                </p>

                <a
                  href={'https://faroweb.cl/bodas'}
                  className="inline-flex items-center px-8 py-4 font-bold bg-[#6b9071] text-white rounded-full shadow-card hover:bg-[#527056] hover:-translate-y-1 active:scale-[0.97] transition-[background-color,transform] duration-200 ease-out"
                >
                  Ver demos y valores <ArrowRight size={18} className="ml-2" />
                </a>
              </div>

              <div className="md:w-1/2 w-full flex items-start gap-4 relative z-10">
                <div className="w-1/2 h-fit rounded-2xl overflow-hidden shadow-card border-[6px] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/weeding1.jpg"
                    alt="Boda 1"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="w-1/2 h-fit rounded-2xl overflow-hidden shadow-card border-[6px] border-white transform rotate-[5deg] hover:rotate-0 transition-transform duration-300 mt-10">
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
          className="py-16 md:py-24 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-gray-100 shadow-card">
              <div className="md:w-1/2 animate-reveal">
                <h2 className="text-h2 text-balance text-gray-900 mb-6">
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
                          className="relative w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-card bg-gray-100"
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
              </div>
              <div className="md:w-1/2 w-full h-64 md:h-80 bg-gray-100 rounded-3xl relative overflow-hidden shadow-card border-2 border-white">
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
        <section className="py-12 md:py-16 bg-gray-900 relative overflow-hidden z-20 border-y border-gray-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-green-500/10 blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-7/12 text-left">

                <h2 className="text-h2 text-balance text-white mb-4">
                  Tú dedícate a vender. <br />
                  <span className="text-green-400">
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
                  className="bg-gray-900 border border-gray-800 rounded-3xl px-8 py-8 shadow-card w-full max-w-md relative"
                >
                  <p className="text-[13px] font-medium text-gray-400 mb-2">
                    Inversión Transparente
                  </p>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-h2 text-white flex items-baseline gap-2">
                      <span className="text-xl md:text-2xl font-bold text-gray-400">Desde</span>
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
        <section id="faq" className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-h2 text-balance text-gray-900 mb-4">
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

        {/* INTERNAL LINKS (pSEO) */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <details className="group border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden shadow-card">
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-xl text-gray-900 hover:bg-gray-100 transition-colors">
                <span className="flex items-center gap-3">
                  <ListOrdered className="w-6 h-6 text-green-600" /> Soluciones Especializadas por Ciudad
                </span>
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </span>
              </summary>
              <div className="p-6 border-t border-gray-200 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.keys(RUBROS).slice(0, 8).map((rubroSlug) => {
                    const rubro = RUBROS[rubroSlug];
                    return CIUDADES.slice(0, 2).map((ciudad) => (
                      <Link
                        key={`${rubroSlug}-${ciudad.slug}`}
                        href={`/diseno-web/${rubroSlug}/${ciudad.slug}`}
                        className="text-sm text-gray-500 hover:text-green-600 transition-colors p-3 rounded-xl hover:bg-green-50 border border-transparent hover:border-green-100 flex items-center gap-2"
                      >
                        <span>{rubro.emoji}</span>
                        <span>Páginas web para {rubro.nombrePlural} en {ciudad.nombre}</span>
                      </Link>
                    ));
                  })}
                </div>
              </div>
            </details>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

      <WhatsAppFloating />
      <InstagramFloating />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-green-100 rounded-2xl bg-white overflow-hidden shadow-card">
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
