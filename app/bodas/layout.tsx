import { Metadata } from "next";

export const metadata: Metadata = {
  // Esto cambia el texto que sale en la pestaña del navegador
  title: "Invitaciones de Boda Digitales | Web con RSVP y Lista de Regalos",

  // Esto cambia el texto pequeñito que sale debajo del título al compartir el link
  description:
    "Invitaciones de matrimonio digitales con confirmación de asistencia y lista de regalos online. Diseño a medida, sin plantillas. Cotiza por WhatsApp.",

  alternates: { canonical: "/bodas" },
  openGraph: {
    title: "Invitaciones de Boda Digitales | Web con RSVP y Lista de Regalos",
    description:
      "Invitaciones de matrimonio digitales con confirmación de asistencia y lista de regalos online. Diseño a medida, sin plantillas.",
    url: "/bodas",
    type: "website",
  },

  // Sin `icons` propio: apuntaba a /favicon-bodas.png, que no existe en public/,
  // asi que esta ruta pedia un icono 404 en vez de heredar el del sitio.
};

export default function BodasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}