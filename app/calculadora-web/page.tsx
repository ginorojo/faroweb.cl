"use client";
import React, { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";

// Los mismos planes y precios que se publican en la home. Si cambian alla,
// cambian aca.
const PRECIO_PAGINA_EXTRA = 15000;

const PLANES = {
  onepage: {
    nombre: "One Page (sitio de una pagina)",
    base: 249990,
    paginasIncluidas: null,
    nota: "Toda tu informacion en una sola pagina: servicios, contacto y ubicacion.",
  },
  corporativo: {
    nombre: "Sitio Web Corporativo (multipagina)",
    base: 389990,
    paginasIncluidas: 5,
    nota: "Incluye hasta 5 paginas. Cada pagina adicional suma $15.000.",
  },
  medida: {
    nombre: "Sistema a Medida (complejo)",
    base: 450000,
    paginasIncluidas: 5,
    nota: "Valor referencial de entrada: el alcance final se cotiza segun las funciones que necesites.",
  },
} as const;

type PlanId = keyof typeof PLANES;

export default function CalculadoraWebPage() {
  const [tipoWeb, setTipoWeb] = useState<PlanId>("onepage");
  const [paginas, setPaginas] = useState(5);

  const plan = PLANES[tipoWeb];
  // El One Page es de una sola pagina por definicion: el contador solo aplica
  // a los planes que crecen en secciones.
  const paginasCobrables = plan.paginasIncluidas === null ? 0 : Math.max(0, paginas - plan.paginasIncluidas);

  const calcularPrecio = () => plan.base + paginasCobrables * PRECIO_PAGINA_EXTRA;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Presupuesto Web - Faroweb",
    url: "https://faroweb.cl/calculadora-web",
    description: "Calcula el costo de tu sitio web One Page o corporativo multipágina en Chile en base a las funcionalidades que tu negocio necesita.",
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
                onChange={(e) => setTipoWeb(e.target.value as PlanId)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-3 sm:p-4 text-sm sm:text-base truncate focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {(Object.keys(PLANES) as PlanId[]).map((id) => (
                  <option key={id} value={id}>
                    {PLANES[id].nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* Cantidad de páginas */}
            {plan.paginasIncluidas === null ? (
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                <p className="text-sm font-bold text-emerald-800 mb-1">Este plan es de una sola página</p>
                <p className="text-sm text-emerald-700/90">{plan.nota}</p>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Cantidad aproximada de páginas o secciones
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={paginas}
                  onChange={(e) => setPaginas(Math.min(50, Math.max(1, Number(e.target.value) || 1)))}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-xs text-gray-400 mt-2">
                  {plan.nota}
                  {paginasCobrables > 0
                    ? ` Estás sumando ${paginasCobrables} página${paginasCobrables === 1 ? "" : "s"} extra.`
                    : ""}
                </p>
              </div>
            )}

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
                  `Hola Faroweb, usé su calculadora. Me interesa el plan ${plan.nombre}${plan.paginasIncluidas === null ? "" : ` con ${paginas} páginas`}. El estimado fue de $${calcularPrecio().toLocaleString("es-CL")}. ¿Me asesoran?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-400 transition-colors"
              >
                Solicitar este Presupuesto por WhatsApp →
              </a>
              <p className="text-xs text-gray-500 mt-4">* Valor referencial, no incluye impuestos.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
