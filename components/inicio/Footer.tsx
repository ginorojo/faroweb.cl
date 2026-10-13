import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { RUBROS } from "@/data/pseo";
import { EMAIL_CONTACTO } from "./data";
import { IconoInstagram, IconoWhatsApp } from "./Iconos";

const ENLACES = [
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Planes", href: "#planes-y-servicios" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
  { label: "Sobre nosotros", href: "/nosotros" },
  { label: "Invitaciones de boda", href: "/bodas" },
  { label: "Política de privacidad", href: "/privacidad" },
];

export default function Footer() {
  return (
    <footer className="bg-fw-ink pb-24 text-white/80 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,3fr)_minmax(0,5fr)]">
          <div>
            {/* El logo es oscuro: va sobre una placa clara en vez de recolorearlo. */}
            <span className="inline-flex rounded-2xl bg-white px-4 py-3">
              <Image src="/rediseno/faroweb-logo.webp" alt="Faroweb" width={400} height={160} className="h-9 w-auto" />
            </span>
            <p className="mt-5 max-w-[22rem] leading-relaxed">
              Páginas web y tiendas online a medida para negocios de La Serena y la Región de
              Coquimbo.
            </p>
            <ul className="mt-6 space-y-3 text-[0.9375rem]">
              <li>
                <a href="https://wa.me/56971874099" target="_blank" rel="noopener noreferrer" data-track="whatsapp_footer" className="inline-flex items-center gap-2.5 hover:text-white">
                  <IconoWhatsApp className="h-4 w-4" /> +56 9 7187 4099
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL_CONTACTO}`} className="inline-flex items-center gap-2.5 hover:text-white">
                  <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" /> {EMAIL_CONTACTO}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/faroweb.cl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-white">
                  <IconoInstagram className="h-4 w-4" /> @faroweb.cl
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Pie de página">
            <h2 className="font-display text-base font-semibold text-white">Faroweb</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {ENLACES.map((e) => (
                <li key={e.href}>
                  <a href={e.href} className="hover:text-white">
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Diseño web por rubro">
            <h2 className="font-display text-base font-semibold text-white">Diseño web por rubro</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {Object.keys(RUBROS).map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/diseno-web/${slug}`}
                    className="inline-flex rounded-full border border-white/15 px-3 py-1.5 text-sm transition-colors hover:border-white/40 hover:text-white"
                  >
                    {RUBROS[slug].nombrePlural}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 py-7 text-sm text-white/65 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Faroweb.cl · La Serena, Chile</p>
          <p>Atendemos La Serena, Coquimbo, Ovalle y Vicuña</p>
        </div>
      </div>
    </footer>
  );
}
