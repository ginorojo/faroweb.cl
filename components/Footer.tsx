import React from "react";
import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { RUBROS, CIUDADES } from "@/data/pseo";

// El footer aparece en todas las rutas, asi que es el unico lugar donde un
// enlace llega de verdad a todo el sitio. Antes no tenia ni un solo <a>: solo
// texto plano con el correo y el telefono. Las 14 paginas de rubro dependen de
// aca para recibir enlaces internos; sin eso Google las dejaba en "Descubierta:
// actualmente sin indexar".
const SERVICIOS = [
  { label: "Planes y precios", href: "/#planes-y-servicios" },
  { label: "Invitaciones de boda", href: "/bodas" },
  { label: "Calculadora de precio", href: "/calculadora-web" },
  { label: "Blog", href: "/blog" },
];

const EMPRESA = [
  { label: "Sobre nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
  { label: "Política de privacidad", href: "/privacidad" },
];

const COBERTURA = CIUDADES.map((c) => c.nombre)
  .join(", ")
  .replace(/, ([^,]*)$/, " y $1");

export default function Footer() {
  const rubros = Object.keys(RUBROS);

  return (
    <footer className="bg-gray-950 text-gray-400 pt-14 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Identidad y NAP. El nombre, telefono y correo deben coincidir
              caracter por caracter con la ficha de Google Business Profile. */}
          <div className="lg:col-span-1">
            <span className="text-h3 text-white block mb-4">
              FARO<span className="text-emerald-500">WEB</span>
            </span>
            <p className="text-body-sm text-gray-500 mb-5 leading-relaxed">
              Desarrollo web estratégico en La Serena, Chile.
            </p>
            <ul className="space-y-2.5 text-body-sm">
              <li>
                <a href="mailto:soporte@faroweb.cl" className="flex items-center gap-2.5 text-gray-500 hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  soporte@faroweb.cl
                </a>
              </li>
              <li>
                <a href="https://wa.me/56971874099" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-gray-500 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  +56 9 7187 4099
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/faroweb.cl" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-gray-500 hover:text-emerald-400 transition-colors">
                  <Instagram className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  @faroweb.cl
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-500">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>La Serena, Región de Coquimbo</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Servicios</h2>
            <ul className="space-y-2.5 text-body-sm">
              {SERVICIOS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-500 hover:text-emerald-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4 mt-8">Empresa</h2>
            <ul className="space-y-2.5 text-body-sm">
              {EMPRESA.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-500 hover:text-emerald-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Diseño web por rubro</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-body-sm">
              {rubros.map((slug) => (
                <li key={slug}>
                  <Link href={`/diseno-web/${slug}`} className="text-gray-500 hover:text-emerald-400 transition-colors">
                    Páginas web para {RUBROS[slug].nombrePlural}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-gray-600 text-center sm:text-left">
            &copy; 2026 Faroweb.cl. Todos los derechos reservados.
          </p>
          <p className="text-caption text-gray-600 text-center sm:text-right">
            Atendemos {COBERTURA}
          </p>
        </div>
      </div>
    </footer>
  );
}
