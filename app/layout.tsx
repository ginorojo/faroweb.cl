import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Faroweb | Diseño de Páginas Web en La Serena',
  description: 'Desarrollo web profesional en la Cuarta Región y todo Chile...', 

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
                            "image": "/farologo.png",
                            "telephone": "+569XXXXXXXX",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "la serena,chile",
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
