"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SharedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getWhatsAppLink = (planName: string) => {
    const msg = encodeURIComponent(`¡Hola Faroweb! Me interesa el *${planName}*. ¿Podrían darme más información?`);
    return `https://wa.me/56971874099?text=${msg}`;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0 cursor-pointer relative z-50">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative h-12 w-auto overflow-hidden">
                  <Image src="/farologo.png" alt="Logo Faroweb" width={100} height={100} className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex md:space-x-8 font-medium text-sm tracking-wide">
              {["Beneficios", "Planes", "Bodas", "Nosotros", "Calculadora"].map((item) => (
                <Link key={item} href={item === "Calculadora" ? "/calculadora-web" : `/#${item === "Planes" ? "planes-y-servicios" : item.toLowerCase()}`} className="text-gray-500 hover:text-emerald-600 transition-colors relative group py-2">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 relative z-50">
              <a href={getWhatsAppLink("Servicios Generales")} className="hidden md:inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-700 hover:shadow-emerald-600/50 hover:-translate-y-0.5 active:scale-95">
                Hablemos
              </a>
              <button className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Alternar menú">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 pb-6 md:hidden flex flex-col min-h-screen">
              <nav className="flex flex-col space-y-8 text-center mt-12">
                {["Beneficios", "Planes", "Bodas", "Nosotros", "Calculadora"].map((item) => (
                  <Link key={item} href={item === "Calculadora" ? "/calculadora-web" : `/#${item === "Planes" ? "planes-y-servicios" : item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-emerald-600 transition-colors">
                    {item}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto mb-10 w-full flex flex-col items-center gap-4">
                <a href={getWhatsAppLink("Servicios Generales")} onClick={() => setIsMobileMenuOpen(false)} className="w-full inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-600/40 transition-all active:scale-95">
                  Hablemos por WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
