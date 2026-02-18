import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://faroweb.cl',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si en el futuro agregas más páginas, las pones aquí:
    // {
    //   url: 'https://faroweb.cl/servicios',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}