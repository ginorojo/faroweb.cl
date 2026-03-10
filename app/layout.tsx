import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Configura la base para que Next.js construya bien las URLs de tus imágenes automáticas
  metadataBase: new URL("https://faroweb.cl"),
  title: "Faroweb | Diseño de Páginas Web en La Serena y Coquimbo",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}