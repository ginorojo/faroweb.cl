import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faroweb | Diseño de Páginas Web en La Serena y Coquimbo",
  description:
    "Desarrollo web profesional y tiendas online en la Cuarta Región. Creamos sitios rápidos y modernos para potenciar tu negocio local en Chile.",
  // ¡La propiedad 'icons' fue eliminada! Next.js 14 ahora la genera automáticamente leyendo tu carpeta app/
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Faroweb",
              // Actualizamos esta URL para que Google use tu nuevo logo cuadrado en su ficha de negocio
              image: "https://faroweb.cl/icon.png",
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
