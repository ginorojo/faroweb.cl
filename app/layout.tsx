import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

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
  title: "Diseño Web en La Serena y Tiendas Online | Faroweb",
  description:
    "Desarrollo web profesional y tiendas online en la Cuarta Región. Creamos sitios rápidos y modernos para potenciar tu negocio local en Chile.",
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
        {/* Datos estructurados para Google (Local SEO y corrección de imagen) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Faroweb",
              url: "https://faroweb.cl",
              logo: "https://faroweb.cl/icon.png", // Señal directa a Google de cuál es tu logo
              image: "https://faroweb.cl/opengraph-image.jpg", // Foto principal de la agencia
              telephone: "+56971874099",
              address: {
                "@type": "PostalAddress",
                streetAddress: "La Serena, Chile",
                addressLocality: "La Serena",
                addressRegion: "Coquimbo",
                postalCode: "1700000",
                addressCountry: "CL",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      {/* `font-sans` aca cubre las paginas pSEO, que no lo llevan en su raiz */}
      <body className={`${archivo.variable} font-sans`}>{children}</body>
    </html>
  );
}