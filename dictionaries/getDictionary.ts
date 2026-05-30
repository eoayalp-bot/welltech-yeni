import 'server-only';

const dictionaries = {
  tr: () => import('./tr.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
  de: () => import('./de.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
  pt: () => import('./pt.json').then((module) => module.default),
  it: () => import('./it.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
  ar: () => import('./ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<any> => {
  const loadDictionary = dictionaries[locale as keyof typeof dictionaries] || dictionaries['tr'];
  return loadDictionary();
};