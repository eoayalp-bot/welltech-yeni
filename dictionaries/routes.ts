export const routeDictionary: Record<string, Record<string, string>> = {

  "paslanmaz-tanklar": { tr: "paslanmaz-tanklar", en: "stainless-tanks" },
  "proses-sistemleri": { tr: "proses-sistemleri", en: "process-systems" },
  "pompalar": { tr: "pompalar", en: "hygienic-pumps" },
  "hakkimizda": { tr: "hakkimizda", en: "about-us" },
  "blog": { tr: "blog", en: "blog" },
  "dokumanlar": { tr: "dokumanlar", en: "documents" },
  "iletisim": { tr: "iletisim", en: "contact" },

  "depolama-tanklari": { tr: "depolama-tanklari", en: "storage-tanks" },
  "kimyasal-tanklar": { tr: "kimyasal-tanklar", en: "chemical-tanks" },
  "sut-tanklari": { tr: "sut-tanklari", en: "dairy-tanks" },
  "zeytinyagi-tanklari": { tr: "zeytinyagi-tanklari", en: "olive-oil-tanks" },

  "karistiricili-tanklar": { tr: "karistiricili-tanklar", en: "mixing-tanks" },
  "kimyasal-reaktorler": { tr: "kimyasal-reaktorler", en: "chemical-reactors" },
  "ceketli-tanklar": { tr: "ceketli-tanklar", en: "jacketed-tanks" },
  "fermantasyon-biyoreaktorler": { tr: "fermantasyon-biyoreaktorler", en: "fermentation-bioreactors" },
  "homojenizator": { tr: "homojenizator", en: "homogenizers" },
  "cip-sistemleri": { tr: "cip-sistemleri", en: "cip-systems" },
  "mobil": { tr: "mobil", en: "mobile-systems" },
  "reaktor": { tr: "reaktor", en: "reactors" },

  "santrifuj": { tr: "santrifuj", en: "centrifugal-pumps" },
  "santrifuj-pompalar": { tr: "santrifuj-pompalar", en: "centrifugal-pumps" },
  "loblu-pompalar": { tr: "loblu-pompalar", en: "lobe-pumps" },
  "havali-diyafram": { tr: "havali-diyafram", en: "air-diaphragm-pumps" },
  "havali-diyafram-pompalar": { tr: "havali-diyafram-pompalar", en: "air-diaphragm-pumps" },
  "monopomp_pompalar": { tr: "monopomp_pompalar", en: "monopumps" },
  "varil": { tr: "varil", en: "drum-pumps" },
  "varil-pompalar": { tr: "varil-pompalar", en: "drum-pumps" },
  "kendinden-emisli": { tr: "kendinden-emisli", en: "self-priming-pumps" },
  "kendinden-emisli-pompalar": { tr: "kendinden-emisli-pompalar", en: "self-priming-pumps" },
  "pozitif-deplasmanli": { tr: "pozitif-deplasmanli", en: "positive-displacement-pumps" }
};

export const getLocalizedUrl = (physicalPath: string, lang: string) => {
  const segments = physicalPath.split('/').filter(Boolean);
  const translatedSegments = segments.map(segment => {
    return routeDictionary[segment]?.[lang] || segment;
  });
  return `/${lang}/${translatedSegments.join('/')}`;
};