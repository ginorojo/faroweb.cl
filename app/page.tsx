"use client";

import { useState } from "react";
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
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Importamos Variants para corregir el error

export default function Home() {
  // -- CONFIGURACIÓN DE ANIMACIONES (CORREGIDO PARA TYPESCRIPT) --
  // Ahora definimos explícitamente que esto es de tipo 'Variants'
  const autoShake: Variants = {
    idle: {
      rotate: [0, -1, 1, -1, 1, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotate: 0,
      transition: { duration: 0.2 },
    },
  };

  const autoShakeFeatured: Variants = {
    idle: {
      rotate: [0, -1, 1, -1, 1, 0],
      scale: 1.05,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.08,
      rotate: 0,
      transition: { duration: 0.2 },
    },
  };

  // -- DATOS DE PREGUNTAS FRECUENTES --
  const faqs = [
    {
      question: "¿Cuánto tiempo demoran en entregar mi página?",
      answer:
        "Para el Plan Presencia y Catálogo, nuestros tiempos récord son de 3 a 5 días hábiles una vez que nos entregas la información. Para desarrollos a medida, suele tomar entre 2 a 3 semanas.",
    },
    {
      question: "¿Debo pagar mensualidades?",
      answer:
        "¡No! El pago por el diseño es único. Tú eres dueño de tu página web al 100%. Solo ofrecemos mensualidades opcionales si deseas que nosotros la mantengamos actualizada por ti.",
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

  return (
    <div className="bg-white selection:bg-green-100 selection:text-green-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0 cursor-pointer">
              <a href="#" className="flex items-center gap-2 group">
                <div className="relative h-12 w-auto overflow-hidden">
                  <Image
                    src="/logofaro.png"
                    alt="Logo Faroweb"
                    width={100}
                    height={100}
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </a>
            </div>
            <nav className="hidden md:flex md:space-x-8 font-medium text-sm tracking-wide">
              {["Beneficios", "Planes", "Diseños", "Nosotros"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-500 hover:text-green-600 transition-colors relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <a
              href="https://wa.me/569XXXXXXXX"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-600/30 transition-all hover:bg-green-700 hover:shadow-green-600/50 hover:-translate-y-0.5 active:scale-95"
            >
              Hablemos
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/Gemini_Generated_Image_hxkz3bhxkz3bhxkz.png"
              alt="Agencia de Diseño Web La Serena"
              fill
              className="object-cover object-center"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <div className="max-w-4xl text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                Desarrollo Web IV Región
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Tu Negocio Abierto las <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  24 Horas
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                Páginas web ultra-rápidas, modernas y optimizadas para vender en
                La Serena, Coquimbo y todo el país. Tu competencia ya está en
                línea, ¿y tú?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#planes"
                  className="group inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-green-700 hover:scale-105 shadow-xl shadow-green-900/40"
                >
                  Ver Planes{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
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
                  desc: "Optimizamos tu web para que aparezcas en google cuando busquen tus servicios en la IV Región.",
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

        {/* PLANES */}
        <section id="planes" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                Planes Transparentes
              </h2>
              <p className="mt-4 text-green-600 font-bold uppercase tracking-widest">
                Pago Único • Oferta Lanzamiento
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-center">
              {/* Plan Presencia */}
              <motion.div
                className="rounded-3xl border border-gray-200 p-8 bg-white hover:border-green-300 hover:shadow-xl cursor-default"
                variants={autoShake}
                initial="idle"
                animate="idle"
                whileHover="hover"
              >
                <h3 className="text-2xl font-bold">Presencia</h3>
                <p className="mt-2 text-gray-500 text-sm italic">
                  Para empezar hoy mismo.
                </p>
                <div className="mt-6">
                  <span className="text-gray-400 line-through text-lg">
                    $160.000
                  </span>
                  <p className="text-4xl font-black text-gray-900">$79.990</p>
                </div>
                <div className="flex items-center  gap-2 my-4">
                    <Timer size={18} className="text-red-500" />{" "}
                    {/* Aquí tienes tu "emoji" en B/N */}
                    <p className="text-red-500 font-semibold">
                      Tiempo limitado
                    </p>
                  </div>
                <ul className=" space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    Landing Page Profesional
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    Botón de WhatsApp
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    Hasta 5 secciones
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    Formulario de contacto(opcional)
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    Mapa de ubicación
                  </li>
                </ul>
                <a
                  href="https://wa.me/..."
                  className="mt-10 block w-full py-3 text-center font-bold border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all"
                >
                  Elegir Plan
                </a>
              </motion.div>

              {/* Plan Catálogo */}
              <motion.div
                className="relative rounded-3xl border-2 border-green-600 p-10 shadow-2xl bg-white z-10 cursor-default"
                variants={autoShakeFeatured}
                initial="idle"
                animate="idle"
                whileHover="hover"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 px-6 py-1 text-sm font-bold text-white uppercase tracking-tighter">
                  Más Recomendado
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Catálogo</h3>
                <div className="mt-6">
                  <span className="text-gray-400 line-through text-lg">
                    $250.000
                  </span>
                  <p className="text-5xl font-black text-green-600">$129.990</p>
                  <div className="flex items-center  gap-2 my-4">
                    <Timer size={18} className="text-red-500" />{" "}
                    {/* Aquí tienes tu "emoji" en B/N */}
                    <p className="text-red-500 font-semibold">
                      Tiempo limitado
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 font-medium">
                  <li className="flex items-center text-gray-900">
                    <Award className="h-5 w-5 text-green-500 mr-2" />
                    Todo de Presencia
                  </li>
                  <li className="flex items-center text-gray-900">
                    <Award className="h-5 w-5 text-green-500 mr-2" />
                    Catálogo de Productos
                  </li>
                  <li className="flex items-center text-gray-900">
                    <Award className="h-5 w-5 text-green-500 mr-2" />
                    Pedidos directos por whatsapp
                  </li>
                </ul>
                <a
                  href="https://wa.me/..."
                  className="mt-10 block w-full py-4 text-center font-bold bg-green-600 text-white rounded-xl shadow-lg shadow-green-600/30 hover:bg-green-700 transition-all"
                >
                  Lo quiero ahora
                </a>
              </motion.div>

              {/* Plan A Medida */}
              <motion.div
                className="rounded-3xl border border-gray-200 p-8 bg-white hover:border-green-300 hover:shadow-xl cursor-default"
                variants={autoShake}
                initial="idle"
                animate="idle"
                whileHover="hover"
              >
                <h3 className="text-2xl font-bold text-gray-900">A Medida</h3>
                <p className="mt-6 text-4xl font-black text-gray-900">
                  Cotizar
                </p>
                <ul className="mt-8 space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-green-500 mr-2" />
                    E-commerce Completo
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-green-500 mr-2" />
                    Sistemas Propios
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-green-500 mr-2" />
                    Sistemas de pago
                  </li>
                </ul>
                <a
                  href="https://wa.me/..."
                  className="mt-10 block w-full py-3 text-center font-bold border-2 border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all"
                >
                  Consultar
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PORTAFOLIO */}
        <section id="diseños" className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-center mb-16 italic">
              Diseños de Próxima Generación
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer border-4 border-gray-100   ">
                <div className="absolute inset-0 bg-blue-900 opacity-40 transition-transform duration-700 group-hover:scale-110"></div>
                {/* VIDEO AQUI */}
                <video
                  src="/abogado.mp4" // Cambia esto por el nombre real de tu archivo
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-300 group-hover:pb-12">
                  <span className="text-green-500 font-bold text-sm tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                    Abogados laborales
                  </span>
                  <h3 className="text-2xl font-bold leading-tight">
                    Plan presencia
                  </h3>
                  <div className="mt-4 flex items-center text-sm font-bold text-white/60 opacity-0 group-hover:opacity-100 transition-all delay-100">
                    <a
                      href="https://abogados-template.pages.dev/"
                      className="flex items-center text-green-500"
                      target="_blank"
                    >
                      <p>Ver Demo</p>
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer border-4 border-gray-100">
                <div className="absolute inset-0 bg-red-900 opacity-40 transition-transform duration-700 group-hover:scale-110"></div>
                {/* VIDEO AQUI */}
                <video
                  src="/pet.mp4" // Cambia esto por el nombre real de tu archivo
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-300 group-hover:pb-12">
                  <span className="text-green-500 font-bold text-sm tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                    Pet shop
                  </span>
                  <h3 className="text-2xl font-bold leading-tight">
                    Plan Catálogo
                  </h3>
                  <div className="mt-4 flex items-center text-sm font-bold text-white/60 opacity-0 group-hover:opacity-100 transition-all delay-100">
                    <a
                      href="https://petshop-aoc.pages.dev/"
                      className="flex items-center text-green-500"
                      target="_blank"
                    >
                      <p>Ver Demo</p>
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer border-4 border-gray-100">
                <div className="absolute inset-0 bg-amber-900 opacity-40 transition-transform duration-700 group-hover:scale-110"></div>
                {/* VIDEO AQUI */}
                <video
                  src="/amedida.mp4" // Cambia esto por el nombre real de tu archivo
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-300 group-hover:pb-12">
                  <span className="text-green-500 font-bold text-sm tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                    e-commerce
                  </span>
                  <h3 className="text-2xl font-bold leading-tight">
                    Plan a medida
                  </h3>
                  <div className="mt-4 flex items-center text-sm font-bold text-white/60 opacity-0 group-hover:opacity-100 transition-all delay-100">
                    <a
                      href="https://wa.me/..."
                      className="flex items-center text-green-500"
                      target="_blank"
                    >
                      <p>Cotizar</p>
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10 text-xl px-8 content-center">
            <p className="flex justify-center">
              * Diseños referenciales, adaptamos el diseño a tu negocio y
              necesidades.
            </p>
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
                  viviendo y trabajando aquí mismo, en La Serena. Entendemos el
                  mercado local porque somos parte de él. Sin intermediarios,
                  sin letra chica.
                </p>

                <div className="flex gap-4 items-center">
                  <div className="flex -space-x-4">
                    {/* --- TUS IMÁGENES DE EQUIPO --- */}
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

              {/* --- ESPACIO PARA EL VIDEO --- */}
              <div className="md:w-1/2 w-full h-64 md:h-80 bg-gray-100 rounded-3xl relative overflow-hidden shadow-lg border-2 border-white">
                <video
                  src="/laserena.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5"></div>
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

        {/* --- SECCIÓN DE PAGOS DESTACADA --- */}
        <section className="py-24 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">
              Aceptamos Todo Medio de Pago
            </h3>

            <div className="inline-flex flex-wrap justify-center items-center gap-8 bg-white py-8 px-12 rounded-3xl shadow-2xl">
              <img
                src="https://img.icons8.com/?size=100&id=13608&format=png&color=000000"
                alt="Visa"
                className="h-10 w-auto"
                loading="lazy"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-10 w-auto"
                loading="lazy"
              />
              <img
                src="https://img.icons8.com/?size=100&id=nTLVtpxsNPaz&format=png&color=000000"
                alt="Mercado Pago"
                className="h-10 w-auto"
                loading="lazy"
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
            <p className="mt-8 text-green-100 font-medium opacity-80">
              Tu seguridad es nuestra prioridad. Transacciones encriptadas.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-black text-white tracking-tighter italic">
                FARO<span className="text-green-500">WEB</span>
              </span>
              <p className="mt-4 text-sm max-w-xs leading-relaxed text-gray-500">
                Ayudamos a las PYMES de la IV Región y todo Chile a destacar en
                el mundo digital. Diseño web estratégico y resultados reales.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Diseño Web
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    E-commerce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    SEO Local
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>La Serena, Chile</li>
                <li>faroweb@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; 2026 Faroweb.cl. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// COMPONENTE AUXILIAR FAQ
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-green-100 rounded-2xl bg-white overflow-hidden transition-all hover:border-green-400 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown
            className={`w-5 h-5 ${isOpen ? "text-green-600" : "text-gray-400"}`}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
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
