import type { Metadata } from "next";

// page.tsx es "use client" y por eso no puede exportar `metadata`: sin este
// layout la ruta heredaba el <title> de la home tal cual, dejando dos URLs
// distintas con titulo y descripcion identicos.
export const metadata: Metadata = {
  title: "Calculadora de Precio Web | Cuánto Cuesta tu Página",
  description:
    "Calcula en un minuto cuánto cuesta tu página web en Chile. Responde 4 preguntas y obtén un rango de precio estimado, sin registro ni datos de contacto.",
  alternates: { canonical: "/calculadora-web" },
  openGraph: {
    title: "Calculadora de Precio Web | Cuánto Cuesta tu Página",
    description:
      "Calcula en un minuto cuánto cuesta tu página web en Chile. Responde 4 preguntas y obtén un rango de precio estimado.",
    url: "/calculadora-web",
    type: "website",
  },
};

export default function CalculadoraLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
