import { MetadataRoute } from 'next';
import { routeDictionary } from '../dictionaries/routes';

const baseUrl = 'https://www.welltech.com.tr';
const locales = ['tr', 'en', 'de', 'ru', 'fr', 'ar', 'es', 'pt', 'it'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '', 
    'kurumsal',
    'paslanmaz-tanklar',
    'proses-sistemleri',
    'pompalar',
    'referanslar',
    'iletisim',
    'blog'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  staticRoutes.forEach((route) => {
    locales.forEach((locale) => {
      const translatedRoute = routeDictionary[route as keyof typeof routeDictionary]?.[locale] || route;
      const path = route === '' ? `/${locale}` : `/${locale}/${translatedRoute}`;

      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}