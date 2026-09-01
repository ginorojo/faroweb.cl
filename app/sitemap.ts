import { MetadataRoute } from 'next'
import { RUBROS } from '@/data/pseo'

export const dynamic = 'force-static'

// Fecha fija en vez de `new Date()`. Antes cada build estampaba la fecha de hoy
// en las 59 URLs a la vez, y un lastmod que siempre miente es un lastmod que
// Google aprende a ignorar. Actualizar a mano cuando cambie el contenido.
const LAST_MODIFIED = '2026-09-01'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://faroweb.cl',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://faroweb.cl/nosotros',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://faroweb.cl/contacto',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://faroweb.cl/privacidad',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://faroweb.cl/bodas',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://faroweb.cl/calculadora-web',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://faroweb.cl/blog',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  // Una entrada por rubro. La dimension ciudad se colapso: generaba cuatro
  // cuasi-copias por rubro que Google dejo en "Descubierta: actualmente sin
  // indexar".
  const pseoRoutes: MetadataRoute.Sitemap = Object.keys(RUBROS).map((rubroSlug) => ({
    url: `https://faroweb.cl/diseno-web/${rubroSlug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...baseRoutes, ...pseoRoutes];
}
