export type RouteDictionary = {
  [key: string]: {
    [locale: string]: string;
  };
};

export const routeDictionary: RouteDictionary = {
  'hakkimizda': {
    tr: 'hakkimizda',
    en: 'about-us'
  },
  'iletisim': {
    tr: 'iletisim',
    en: 'contact'
  },
  'dokumanlar': {
    tr: 'dokumanlar',
    en: 'documents'
  },
  'paslanmaz-tanklar': {
    tr: 'paslanmaz-tanklar',
    en: 'stainless-tanks'
  },
  'proses-sistemleri': {
    tr: 'proses-sistemleri',
    en: 'process-systems'
  },
  'pompalar': {
    tr: 'pompalar',
    en: 'pumps'
  },
  'projeler': {
    tr: 'projeler',
    en: 'projects'
  },
  'referanslar': {
    tr: 'referanslar',
    en: 'references'
  },
  'blog': {
    tr: 'blog',
    en: 'blog'
  },
  'akademi': {
    tr: 'akademi',
    en: 'academy',
    de: 'akademie',
    fr: 'academie',
    es: 'academia',
    pt: 'academia',
    it: 'accademia',
    ru: 'akademiya',
    ar: 'academy'
  }
};

export const getLocalizedUrl = (physicalRoute: string, locale: string) => {
  return routeDictionary[physicalRoute]?.[locale] || physicalRoute;
};