import 'server-only';

export type DictionaryNamespace =
  | 'navbar'
  | 'common'
  | 'footer'
  | 'home'
  | 'documents'
  | 'about'
  | 'contact'
  | 'stainlessTanks'
  | 'storageTanks'
  | 'chemicalTanks'
  | 'milkTanks'
  | 'oliveOilTanks'
  | 'pumps'
  | 'diaphragmPumps'
  | 'selfPrimingPumps'
  | 'monopompPumps'
  | 'positivePumps'
  | 'centrifugalPumps'
  | 'drumPumps'
  | 'references'
  | 'processSystems'
  | 'jacketedTanks'
  | 'bioreactors'
  | 'homogenizers'
  | 'mixingTanks'
  | 'reactors'
  | 'skidSystems'
  | 'cipSystems'
  | 'academy';

const supportedLocales = ['tr', 'en', 'de', 'fr', 'es', 'pt', 'ru', 'it', 'ar'];

export const getDictionary = async (locale: string, namespace: DictionaryNamespace): Promise<any> => {
  const validLocale = supportedLocales.includes(locale) ? locale : 'tr';

  try {
    const module = await import(`./${validLocale}/${namespace}.json`);
    return module.default;
  } catch (error) {
    console.error(`Dosya bulunamadı: Dil: ${validLocale}, Modül: ${namespace}`);
    const fallbackModule = await import(`./tr/${namespace}.json`);
    return fallbackModule.default;
  }
};