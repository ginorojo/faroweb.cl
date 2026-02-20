import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Faroweb | Diseño de Páginas Web en La Serena y Coquimbo',
  description: 'Desarrollo web profesional y tiendas online en la Cuarta Región. Creamos sitios rápidos y modernos para potenciar tu negocio local en Chile.', 
  icons: {
    icon: '/farologo.png',
    apple: '/farologo.png', // Añadido para que se vea perfecto en iPhones
  },
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
                            "name": "Faroweb",
                            "image": "https://faroweb.cl/farologo.png", // URL Absoluta para el robot de Google
                            "telephone": "+56971874099", // Tu número de contacto real
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "La Serena, Chile",
                                "addressLocality": "La Serena",
                                "addressRegion": "Coquimbo",
                                "postalCode": "1700000",
                                "addressCountry": "CL"
                            },
                            "priceRange": "$$"
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}