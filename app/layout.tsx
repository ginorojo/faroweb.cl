import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Diseño de Páginas Web en La Serena | AgenciaWeb",
    description: "Agencia de desarrollo web en La Serena, Chile. Creamos sitios web modernos, rápidos y optimizados para SEO local. Aumenta tus ventas con nosotros.",
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
                            "name": "AgenciaWeb",
                            "image": "https://tusitio.cl/logo.png",
                            "telephone": "+569XXXXXXXX",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Av. Del Mar 123",
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
