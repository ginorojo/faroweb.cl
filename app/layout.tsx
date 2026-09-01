import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { CIUDADES } from "@/data/pseo";

// Archivo: una sola familia variable, con ejes de peso Y de ancho. El contraste
// de los titulares sale del ancho, no de una segunda fuente.
// La variable CSS es lo que hace que `font-sans` resuelva aca y no a la fuente
// del sistema: varias paginas llevan esa clase en su div raiz y, al estar en un
// descendiente del body, ganaba por cercania en la cascada.
// Dos omisiones deliberadas, ambas medidas sobre el corte latin (el unico que
// baja un navegador en español):
//   - italica: +99 KB para 5 palabras decorativas.
//   - eje de ancho (wdth): 87 KB contra 34 KB, o sea 2,5x el peso del archivo.
// El contraste de los titulares sale de tamaño y peso, que en una fuente
// variable no cuestan un byte extra.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  // Configura la base para que Next.js construya bien las URLs de tus imágenes automáticas
  metadataBase: new URL("https://faroweb.cl"),
  title: "Diseño Web en La Serena | Páginas Web y Tiendas Online",
  description:
    "Diseño web y páginas web autoadministrables en La Serena y Coquimbo. Sitios ultra rápidos, sin plantillas y listos para vender. Cotiza por WhatsApp hoy.",
  // Cada ruta sobreescribe su propio canonical. Sin esto no habia ni una sola
  // etiqueta rel=canonical en el sitio.
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Faroweb",
    url: "/",
    title: "Diseño Web en La Serena | Páginas Web y Tiendas Online",
    description:
      "Diseño web y páginas web autoadministrables en La Serena y Coquimbo. Sitios ultra rápidos, sin plantillas y listos para vender.",
  },
  // Next.js leerá automáticamente icon.png, favicon.ico y opengraph-image.jpg desde tu carpeta app/
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Datos estructurados para Google (Local SEO y corrección de imagen).
            ProfessionalService en vez de LocalBusiness: es el tipo especifico
            para una agencia. `sameAs` es el mecanismo con el que Google une esta
            entidad a sus perfiles, y hace falta porque existen al menos dos
            empresas homonimas (faroweb.com y farowebstudio.com) que hoy
            rankean por encima de nosotros para la busqueda "faroweb".
            No se declara `streetAddress`: somos un negocio de area de servicio
            sin local de cara al publico, y el valor anterior ("La Serena, Chile")
            era un dato incorrecto que duplicaba addressLocality. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://faroweb.cl/#organizacion",
              name: "Faroweb",
              alternateName: "Faro Web",
              description:
                "Agencia de diseño web y desarrollo de software en La Serena, Región de Coquimbo. Creamos páginas web, tiendas online y sistemas a medida con React, Next.js y Astro.",
              url: "https://faroweb.cl",
              logo: "https://faroweb.cl/icon.png", // Señal directa a Google de cuál es tu logo
              image: "https://faroweb.cl/opengraph-image.jpg", // Foto principal de la agencia
              telephone: "+56971874099",
              email: "soporte@faroweb.cl",
              address: {
                "@type": "PostalAddress",
                addressLocality: "La Serena",
                addressRegion: "Coquimbo",
                postalCode: "1700000",
                addressCountry: "CL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+56971874099",
                email: "soporte@faroweb.cl",
                areaServed: "CL",
                availableLanguage: ["es"],
              },
              areaServed: CIUDADES.map((ciudad) => ({
                "@type": "City",
                name: ciudad.nombre,
              })),
              sameAs: ["https://www.instagram.com/faroweb.cl"],
              priceRange: "$$",
              // Abierto 24 horas, de lunes a domingo. Debe seguir coincidiendo
              // con el horario declarado en la ficha de Google Business Profile:
              // una discrepancia entre ambos debilita la validacion de la
              // entidad. Para 24 horas, Google espera opens 00:00 y closes 23:59.
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </head>
      {/* `font-sans` aca cubre las paginas pSEO, que no lo llevan en su raiz */}
      <body className={`${archivo.variable} font-sans`}>{children}</body>
    </html>
  );
}