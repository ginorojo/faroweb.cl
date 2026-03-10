import { Metadata } from "next";

export const metadata: Metadata = {
  // Esto cambia el texto que sale en la pestaña del navegador
  title: "Invitaciones de Boda Boutique | Faroweb",
  
  // Esto cambia el texto pequeñito que sale debajo del título al compartir el link
  description: "Sorprende a tus invitados con una experiencia única, elegante y moderna.",
  
  // Aquí enlazas tu Favicon (el ícono chiquito de la pestaña) que debe estar en la carpeta public/
  icons: {
    icon: "/favicon-bodas.png", 
  },
};

export default function BodasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}