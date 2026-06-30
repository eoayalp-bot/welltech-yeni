import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.welltech.com.tr';

  const locales = ['tr', 'en', 'de', 'fr', 'es', 'pt', 'it', 'ru', 'ar'];

  const routes = [
    '',
    '/kurumsal/hakkimizda',
    '/kurumsal/iletisim',
    '/paslanmaz-tanklar',
    '/paslanmaz-tanklar/depolama-tanklari',
    '/proses-sistemleri',
    '/hijyenik-pompalar',
    '/referanslar'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'yearly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}