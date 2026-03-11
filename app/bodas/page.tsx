"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import {
  Heart,
  Music,
  MapPin,
  Gift,
  Camera,
  CalendarHeart,
  ArrowRight,
  ChevronDown,
  Mail,
  ArrowLeft,
  CheckCircle2,
  Star,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Menu,
  X,
  Calendar,
  ListOrdered,
} from "lucide-react";
import Link from "next/link";

const weddingFaqs = [
  {
    question: "¿Cómo envío la invitación a mis invitados?",
    answer:
      "Te entregamos un enlace (link) personalizado y elegante. Puedes enviarlo por WhatsApp, Instagram, correo o incluso usar un código QR en tus tarjetas físicas.",
  },
  {
    question: "¿Cuánto tiempo demora en estar lista?",
    answer:
      "Una vez que nos envías tus fotos y la información del evento, tu invitación estará lista en un plazo de 3 a 5 días hábiles.",
  },
  {
    question: "¿Puedo hacer cambios después de publicada?",
    answer:
      "¡Sí! Si cambias la hora, el lugar o necesitas actualizar la lista de regalos, solo nos avisas por WhatsApp y lo actualizamos de inmediato.",
  },
  {
    question: "¿Cuanto tiempo dura la invitacion publicada?",
    answer:
      "La pagina dura un mes despues de la boda, una vez que pasa el mes, esta es eliminada, pero te regalamos un lindo pdf con todo el contenido de la invitacion.",
  },
];

// --- COMPONENTE: SOBRE DIGITAL INTERACTIVO ---
function WeddingEnvelopeOpening({ onOpened }: { onOpened: () => void }) {
  const [isOpening, setIsOpening] = useState(false);
  const flapControls = useAnimationControls();
  const letterControls = useAnimationControls();

  const handleOpen = async () => {
    if (isOpening) return;
    setIsOpening(true);
    await flapControls.start({
      rotateX: 180,
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
    });
    await letterControls.start({
      y: "-110%",
      opacity: 0,
      transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
    });
    onOpened();
  };

  return (
    <motion.div
      key="envelope-opening-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFBF7] p-4"
    >
      <div
        className="relative w-full max-w-[600px] aspect-[16/10]"
        style={{ perspective: "1500px" }}
      >
        <div className="absolute inset-0 bg-[#2c3f30] rounded-xl shadow-[0_15px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[#1f2d22] z-0"></div>
          <div
            className="absolute bottom-0 left-0 w-1/2 h-[70%] bg-[#243427] z-20"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 10%, 0 0)" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-1/2 h-[70%] bg-[#243427] z-20"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0, 0 10%)" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-full h-[30%] bg-[#1f2d22] z-30"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }}
          ></div>
        </div>
        <motion.div
          animate={letterControls}
          initial={{ y: 0, opacity: 1 }}
          className="absolute inset-x-4 inset-y-2 bg-[#fcfaf8] rounded-md shadow-inner z-10 flex flex-col items-center justify-center p-6 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 rounded-full border border-[#d29090]/50 flex items-center justify-center bg-[#fcfaf8] mb-6"
          >
            <span className="text-3xl font-serif italic text-[#2c3f30]">
              F&W
            </span>
          </motion.div>
          <h1 className="font-serif italic text-4xl text-[#2c3f30] mb-3">
            La Gran Invitación
          </h1>
          <p className="text-gray-600 max-w-[200px] text-sm">
            Estamos creando algo inolvidable para su gran día.
          </p>
        </motion.div>
        <motion.div
          animate={flapControls}
          initial={{ rotateX: 0 }}
          className="absolute top-0 left-0 w-full h-1/2 bg-[#2c3f30] rounded-t-xl z-40 origin-top shadow-md"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 bg-[#2c3f30] rounded-t-xl"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 100%)",
              backfaceVisibility: "hidden",
            }}
          ></div>
          <div
            className="absolute inset-0 bg-[#3a4d3e] rounded-t-xl rotate-x-180"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              backfaceVisibility: "hidden",
            }}
          ></div>
        </motion.div>
        <motion.button
          onClick={handleOpen}
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpening ? 0 : 1 }}
          className="absolute top-[40%] left-[calc(50%-75px)] z-50 group"
        >
          <div className="relative w-[150px] h-14 rounded-full flex items-center justify-center bg-[#d29090] shadow-xl group-hover:bg-[#c27c7c] transition-all">
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              Abrir Invitación
            </span>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
}

// --- COMPONENTE CARRUSEL ---
function BodasCarousel({
  images,
  isVip = false,
}: {
  images: string[];
  isVip?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const accentColor = isVip ? "text-[#C5A059]" : "text-[#D29090]";

  return (
    <div
      className={`relative w-full aspect-[4/5] md:aspect-[16/10] rounded-[2rem] overflow-hidden group shadow-2xl ${isVip ? "border border-[#C5A059]/30" : "border border-black/5"}`}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all ${accentColor}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all ${accentColor}`}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}

export default function BodasPage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Premium");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = !isEnvelopeOpen ? "hidden" : "unset";
  }, [isEnvelopeOpen]);

  const getWhatsAppLink = (planName: string) => {
    const msg = encodeURIComponent(
      `¡Hola FaroWeb! Me interesa el *${planName}* para mi boda 💍.`,
    );
    return `https://wa.me/56971874099?text=${msg}`;
  };

  return (
    <div className="bg-[#FDFBF7] selection:bg-[#C5A059]/20 selection:text-[#1A1A1A] font-sans min-h-screen">
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <WeddingEnvelopeOpening onOpened={() => setIsEnvelopeOpen(true)} />
        )}
      </AnimatePresence>

      {isEnvelopeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* HEADER PREMIUM */}
          <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-black/5 h-20">
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 group z-50">
                <ArrowLeft
                  size={20}
                  className="text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors"
                />
                <span className="font-serif italic text-2xl font-bold text-[#1A1A1A]">
                  FaroWeb <span className="text-[#C5A059]">Bodas</span>
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-10">
                {["Características", "Planes", "FAQ"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C5A059] transition-all"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href={getWhatsAppLink("Consulta")}
                  className="bg-[#f3d7d1] text-black px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#C5A059] transition-all shadow-xl"
                >
                  Hablemos
                </a>
              </nav>

              <button
                className="md:hidden z-50 text-[#1A1A1A]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-0 bg-[#FDFBF7] z-40 flex flex-col items-center justify-center gap-10 md:hidden px-6"
                >
                  {["Características", "Planes", "FAQ"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-4xl font-serif italic text-[#1A1A1A]"
                    >
                      {item}
                    </a>
                  ))}
                  <a
                    href={getWhatsAppLink("Mobile Contact")}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold text-center"
                  >
                    Consultar Ahora
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          <main className="pt-9">
            {/* HERO SECTION CON TEXTURA MAESTRA */}
            <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 px-6 bg-white overflow-hidden border-b border-black/5">
              <div className="absolute inset-0 z-0 opacity-60 pointer-events-none mix-blend-multiply">
                <Image
                  src="/bodas-assets/papel-hero.jpg"
                  alt="Textura Papel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative w-full max-w-6xl aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl mb-24 "
                >
                  <Image
                    src="/bodas-assets/bodarecortada.jpg"
                    alt="Hero Bodas"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </motion.div>

                <div className="text-center max-w-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-block px-5 py-2 rounded-full bg-[#C5A059]/5 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-10 shadow-sm"
                  >
                    Momentos que duran para siempre
                  </motion.span>

                  <h1 className="mb-10 flex flex-col gap-2">
                    <motion.span
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="text-4xl md:text-6xl font-serif italic text-[#1A1A1A]"
                    >
                      Invitaciones de Boda
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9, type: "spring" }}
                      className="text-6xl md:text-9xl font-serif italic font-black text-[#1A1A1A] tracking-tighter leading-none"
                    >
                      Inolvidables
                    </motion.span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-xl md:text-2xl text-gray-500 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
                  >
                    Transformamos el anuncio de tu gran día en una{" "}
                    <br className="hidden md:block" />
                    <span className="text-[#1A1A1A] font-bold underline decoration-[#C5A059]/30 underline-offset-8">
                      experiencia digital de alta gama.
                    </span>
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="flex justify-center"
                  >
                    <a
                      href="#planes"
                      className="bg-[#f6cec5] text-gray-600 px-12 py-5 rounded-full text-sm font-bold tracking-widest uppercase shadow-2xl hover:scale-105 transition-all flex items-center gap-3"
                    >
                      Ver Colección y Precios <ArrowRight size={18} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* CARACTERÍSTICAS ICONOS */}
            <section
              id="características"
              className="py-24 bg-white border-y border-black/5"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16">
                  {[
                    { icon: <Mail size={32} />, title: "Sobre 3D" },
                    {
                      icon: <CalendarHeart size={32} />,
                      title: "Cuenta Regresiva",
                    },
                    { icon: <MapPin size={32} />, title: "GPS Integrado" },
                    { icon: <Gift size={32} />, title: "Mesa Regalos" },
                    { icon: <Music size={32} />, title: "Música HD" },
                    { icon: <Camera size={32} />, title: "Galería Pro" },
                  ].map((feature, idx) => (
                    <div key={idx} className="text-center group cursor-default">
                      <div className="w-12 h-12 mx-auto text-[#1A1A1A] mb-6 group-hover:text-[#C5A059] transition-all duration-500">
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em]">
                        {feature.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- SECCIÓN DE PLANES CON TABS --- */}
            <section
              id="planes"
              className="py-32 bg-[#FDFBF7] relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-multiply">
                <Image
                  src="/watercolor-paper.jpg"
                  alt="Textura"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24">
                  <h2 className="text-5xl md:text-7xl font-serif italic text-[#1A1A1A] mb-4">
                    Nuestra Colección
                  </h2>
                  <p className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-[10px]">
                    Un solo pago, un recuerdo eterno
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex w-full md:w-auto overflow-x-auto pb-4 gap-6 justify-start md:justify-center mb-20 no-scrollbar">
                    {["esencial", "Premium"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`whitespace-nowrap px-12 py-4 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all ${activeTab === tab ? "bg-[#1A1A1A] text-white shadow-2xl scale-105" : "bg-white text-gray-400 border border-black/5 hover:text-[#1A1A1A]"}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="w-full bg-[#fceeeb] rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-black/5">
                    <AnimatePresence mode="wait">
                      {/* PLAN ESENCIAL */}
                      {activeTab === "esencial" && (
                        <motion.div
                          key="esencial"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          className="grid grid-cols-1 lg:grid-cols-12 min-h-[650px]"
                        >
                          <div className="p-16 lg:col-span-5 bg-[#D29090]/5 flex flex-col justify-between border-r border-black/5">
                            <div>
                              <h3 className="text-4xl font-serif italic text-[#1A1A1A] mb-4">
                                Esencial
                              </h3>
                              <p className="text-5xl font-black text-[#1A1A1A] mb-10">
                                $58.990
                              </p>
                              <ul className="space-y-5 text-gray-500 text-sm">
                                <li className="flex items-center gap-3">
                                  <Calendar
                                    size={16}
                                    className="text-[#D29090]"
                                  />{" "}
                                  Cuenta Regresiva & Calendario
                                </li>
                                <li className="flex items-center gap-3">
                                  <Calendar
                                    size={16}
                                    className="text-[#D29090]"
                                  />{" "}
                                  Nuestra Historia
                                </li>
                                <li className="flex items-center gap-3">
                                  <MapPin
                                    size={16}
                                    className="text-[#D29090]"
                                  />{" "}
                                  Ubicación Google Maps / Waze
                                </li>
                                <li className="flex items-center gap-3">
                                  <Star size={16} className="text-[#D29090]" />{" "}
                                  Dress Code & Info General
                                </li>
                                <li className="flex items-center gap-3">
                                  <CheckCircle2
                                    size={16}
                                    className="text-[#D29090]"
                                  />{" "}
                                  Confirmación Directa WhatsApp
                                </li>
                                <li className="flex items-center gap-3">
                                  <Camera
                                    size={16}
                                    className="text-[#D29090]"
                                  />{" "}
                                  Galería de 8 Fotos HD
                                </li>
                              </ul>
                            </div>
                            <a
                              href={getWhatsAppLink("Esencial")}
                              className="mt-16 py-5 text-center font-bold bg-[#1A1A1A] text-white rounded-2xl tracking-widest uppercase text-[10px] hover:bg-[#D29090] transition-all"
                            >
                              Elegir Esencial
                            </a>
                          </div>
                          {/* Modificado flex-col y gap-6 aquí */}
                          <div className="p-12 lg:col-span-7 flex flex-col items-center justify-center bg-gray-50/50 gap-6">
                            <BodasCarousel
                              images={[
                                "../bodas-assets/esencial1.jpg",
                                "../bodas-assets/esencial2.jpg",
                                "../bodas-assets/esencial3.jpg",
                                "../bodas-assets/esencial4.jpg",
                              ]}
                            />
                            {/* Botón Ver ejemplo */}
                            <a
                              href="https://bodas-esencial.pages.dev/"
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-[10px] pt-4 font-bold tracking-widest uppercase text-[#C5A059] hover:text-[#afa89b] transition-colors"
                            >
                              <ExternalLink size={40} /> Ver ejemplo en vivo
                            </a>
                          </div>
                        </motion.div>
                      )}
                      {/* PLAN premium */}
                      {activeTab === "Premium" && (
                        <motion.div
                          key="Premium"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          className="grid grid-cols-1 lg:grid-cols-12 min-h-[650px]"
                        >
                          <div className="p-16 lg:col-span-5 bg-[#C5A059]/5 flex flex-col justify-between relative border-r border-black/5">
                            <div className="absolute top-8 right-8 bg-[#C5A059] text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                              El más popular
                            </div>
                            <div>
                              <h3 className="text-4xl font-serif italic text-[#1A1A1A] mb-4">
                                Premium
                              </h3>
                              <p className="text-5xl font-black text-[#C5A059] mb-10">
                                $69.990
                              </p>
                              <ul className="space-y-5 text-[#1A1A1A] text-sm font-bold">
                                <li className="flex items-center gap-3">
                                  <Mail size={18} className="text-[#C5A059]" />{" "}
                                  Todo el plan Esencial
                                </li>
                                <li className="flex items-center gap-3">
                                  <Mail size={18} className="text-[#C5A059]" />{" "}
                                  Apertura de Sobre Digital 3D
                                </li>
                                <li className="flex items-center gap-3">
                                  <Music size={18} className="text-[#C5A059]" />{" "}
                                  Música de Fondo Personalizada
                                </li>
                                <li className="flex items-center gap-3">
                                  <Music size={18} className="text-[#C5A059]" />{" "}
                                  Nuestra Historia
                                </li>
                                <li className="flex items-center gap-3">
                                  <ListOrdered
                                    size={18}
                                    className="text-[#C5A059]"
                                  />{" "}
                                  Itinerario / Agenda del Evento
                                </li>
                                <li className="flex items-center gap-3">
                                  <Gift size={18} className="text-[#C5A059]" />{" "}
                                  Mesa de Regalos (Datos/Link)
                                </li>
                                <li className="flex items-center gap-3">
                                  <ExternalLink
                                    size={18}
                                    className="text-[#C5A059]"
                                  />{" "}
                                  Playlist Spotify Colaborativa
                                </li>
                                <li className="flex items-center gap-3">
                                  <CheckCircle2
                                    size={18}
                                    className="text-[#C5A059]"
                                  />{" "}
                                  Formulario de confirmacion
                                </li>
                              </ul>
                            </div>
                            <a
                              href={getWhatsAppLink("Premium")}
                              className="mt-16 py-5 text-center font-bold bg-[#C5A059] text-white rounded-2xl tracking-widest uppercase text-[10px] hover:bg-[#1A1A1A] transition-all"
                            >
                              Quiero el Premium
                            </a>
                          </div>
                          {/* Modificado flex-col y gap-6 aquí */}
                          <div className="p-12 lg:col-span-7 flex flex-col items-center justify-center bg-gray-50/50 gap-6">
                            <BodasCarousel
                              images={[
                                "/bodas-assets/premium1-compressed.jpg",
                                "bodas-assets/premium2-compressed.jpg",
                                "bodas-assets/premium3-compressed.jpg",
                                "bodas-assets/premium4-compressed.jpg ",
                                "bodas-assets/premium5-compressed.jpg",
                              ]}
                            />
                            {/* Botón Ver ejemplo */}
                            <a
                              href="https://plan-boutique.pages.dev"
                              target="_blank"
                              rel="noreferrer"
                              className="pt-4 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#C5A059] hover:text-[#afa89b] transition-colors"
                            >
                              <ExternalLink size={40} /> Ver ejemplo en vivo
                            </a>
                          </div>
                        </motion.div>
                      )}
                      PLAN VIP
                      {activeTab === "vip" && (
                        <motion.div
                          key="vip"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          className="grid grid-cols-1 lg:grid-cols-12 min-h-[650px] bg-[#1A1A1A] "
                        >
                          <div className="p-16 lg:col-span-5 flex flex-col justify-between">
                            <div>
                              <Award
                                size={48}
                                className="text-[#C5A059] mb-10"
                              />
                              <h3 className="text-4xl font-serif italic text-white mb-4">
                                VIP a Medida
                              </h3>
                              <p className="text-5xl font-black text-white mb-10">
                                $99.990
                              </p>
                              <ul className="space-y-6 text-gray-400 text-sm">
                                <li className="flex items-center gap-4 text-white">
                                  <Star size={18} className="text-[#C5A059]" />{" "}
                                  Diseño 100% Personalizado
                                </li>
                                <li className="flex items-center gap-4 text-white">
                                  <Heart size={18} className="text-[#C5A059]" />{" "}
                                  Nuestra Historia (Storytelling)
                                </li>
                                <li className="flex items-center gap-4 text-white">
                                  <Globe size={18} className="text-[#C5A059]" />{" "}
                                  Sugerencia Hoteles / Transporte
                                </li>
                                <li className="flex items-center gap-4 text-white">
                                  <Camera
                                    size={18}
                                    className="text-[#C5A059]"
                                  />{" "}
                                  Fotos HD Ilimitadas
                                </li>
                              </ul>
                            </div>
                            <a
                              href={getWhatsAppLink("VIP")}
                              className="mt-16 py-5 text-center font-bold bg-white text-[#1A1A1A] rounded-2xl tracking-widest uppercase text-[10px] hover:bg-[#C5A059] transition-all shadow-2xl"
                            >
                              Hablar con Diseñador
                            </a>
                          </div>
                          {/* Modificado flex-col y gap-6 aquí */}
                          <div className="p-12 lg:col-span-7 flex flex-col items-center justify-center bg-white/5 gap-6">
                            <BodasCarousel
                              images={[
                                "/bodas-assets/bodarecortada.jpg",
                                "/boda-1.jpg",
                              ]}
                              isVip={true}
                            />
                            {/* Botón Ver ejemplo */}
                            <a
                              href="#"
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-[#C5A059] transition-colors"
                            >
                              <ExternalLink size={16} /> Ver ejemplo en vivo
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-32 bg-white">
              <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-24">
                  <h2 className="text-4xl font-serif italic text-[#1A1A1A]">
                    Preguntas Frecuentes
                  </h2>
                </div>
                <div className="space-y-10">
                  {weddingFaqs.map((faq, i) => (
                    <FAQItem
                      key={i}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </section>
          </main>

          {/* FOOTER */}
          <footer className="bg-[#1A1A1A] py-24 text-center text-white border-t border-[#C5A059]/20">
            <p className="font-serif italic text-3xl mb-4 text-white/90 uppercase tracking-widest">
              FaroWeb <span className="text-[#C5A059]">Bodas</span>
            </p>
            <p className="text-[10px] text-gray-500 mb-12 tracking-[0.4em] uppercase">
              Elegancia digital para momentos inolvidables
            </p>
            <Link
              href="/"
              className="text-[10px] border border-white/20 px-10 py-3 rounded-full text-white/40 hover:text-white hover:border-[#C5A059] transition-all uppercase tracking-widest"
            >
              Regresar a FaroWeb Corporativo
            </Link>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5 pb-8 overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left group"
      >
        <span className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-[#C5A059]"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-4 pb-4 text-gray-500 font-light leading-relaxed pt-4 text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
