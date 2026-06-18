import { MetadataRoute } from 'next'
import { RUBROS, CIUDADES } from '@/data/pseo'

export const dynamic = 'force-static'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://faroweb.cl',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://faroweb.cl/bodas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://faroweb.cl/calculadora-web',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ];

  const pseoRoutes: MetadataRoute.Sitemap = [];
  
  Object.keys(RUBROS).forEach((rubroSlug) => {
    CIUDADES.forEach((ciudadObj) => {
      pseoRoutes.push({
        url: `https://faroweb.cl/diseno-web/${rubroSlug}/${ciudadObj.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    });
  });

  return [...baseRoutes, ...pseoRoutes];
}