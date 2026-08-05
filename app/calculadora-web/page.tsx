"use client";
import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";

export default function CalculadoraWebPage() {
  const [tipoWeb, setTipoWeb] = useState("landing");
  const [paginas, setPaginas] = useState(1);

  const calcularPrecio = () => {
    let base = 189990; // Plan Corporativo
    if (tipoWeb === "catalogo") base = 289990;
    if (tipoWeb === "medida") base = 450000;

    let extras = 0;
    if (paginas > 5) extras += (paginas - 5) * 15000;

    return base + extras;
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Presupuesto Web - Faroweb",
    url: "https://faroweb.cl/calculadora-web",
    description: "Calcula el costo de tu página web corporativa o tienda online en Chile en base a las funcionalidades que tu negocio necesita.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CLP",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Faroweb",
      address: {
        "@type": "PostalAddress",
        addressLocality: "La Serena",
        addressRegion: "Coquimbo",
        addressCountry: "CL",
      },
    },
  };

  return (
    <>
      <SharedHeader />
      <div className="min-h-screen bg-gray-50 pt-10 md:pt-16 pb-24">
      <Script
        id="calculadora-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-emerald-600 font-semibold mb-8 inline-block hover:underline">
          &larr; Volver al inicio
        </Link>
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            Calculadora de Presupuesto Web
          </h1>
          <p className="text-gray-500 mb-8">
            Responde estas sencillas preguntas para obtener un presupuesto estimado para tu proyecto web en La Serena o cualquier parte de Chile.
          </p>

          <div className="space-y-8">
            {/* Tipo de Web */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                ¿Qué tipo de página web necesitas?
              </label>
              <select
                value={tipoWeb}
                onChange={(e) => setTipoWeb(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-3 sm:p-4 text-sm sm:text-base truncate focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="landing">Landing Page (Servicios)</option>
                <option value="catalogo">Tienda Online (Productos)</option>
                <option value="medida">Sistema a Medida (Complejo)</option>
              </select>
            </div>

            {/* Cantidad de páginas */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Cantidad aproximada de páginas o secciones
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={paginas}
                onChange={(e) => setPaginas(Number(e.target.value))}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <p className="text-xs text-gray-400 mt-2">Ej: Inicio, Nosotros, Servicios, Contacto (4 páginas)</p>
            </div>

            {/* Resultado */}
            <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
              <span className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-widest">
                Presupuesto Estimado
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white mb-6">
                ${calcularPrecio().toLocaleString("es-CL")} <span className="text-xl font-normal text-gray-500">CLP</span>
              </div>
              <a
                href={`https://wa.me/56971874099?text=${encodeURIComponent(
                  `Hola Faroweb, usé su calculadora. Necesito una web tipo ${tipoWeb}, con ${paginas} secciones. El estimado fue de $${calcularPrecio()}. ¿Me asesoran?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-400 transition-colors"
              >
                Solicitar este Presupuesto por WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
