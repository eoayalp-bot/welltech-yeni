import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Droplets, Factory, TestTube, FlaskConical, ShieldCheck } from 'lucide-react';
import { getDictionary } from '../../../dictionaries/getDictionary';
import { getLocalizedUrl } from '../../../dictionaries/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  return {
    title: dict.stainlessTanksPage.metadata.title,
    description: dict.stainlessTanksPage.metadata.description,
  };
}

export default async function TankCategoriesPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": dict.stainlessTanksPage.metadata.title,
    "description": dict.stainlessTanksPage.metadata.description,
    "publisher": { "@type": "Organization", "name": "Welltech® International Engineering" },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": dict.stainlessTanksPage.categories.map((cat: { title: string }, i: number) => ({
        "@type": "ListItem", "position": i + 1, "name": cat.title
      }))
    }
  };

  const icons = [
    <Factory className="w-6 h-6" />,
    <Droplets className="w-6 h-6" />,
    <FlaskConical className="w-6 h-6" />,
    <TestTube className="w-6 h-6" />
  ];

  const links = [
    getLocalizedUrl('paslanmaz-tanklar/depolama-tanklari', lang),
    getLocalizedUrl('paslanmaz-tanklar/zeytinyagi-tanklari', lang),
    getLocalizedUrl('paslanmaz-tanklar/sut-tanklari', lang),
    getLocalizedUrl('paslanmaz-tanklar/kimyasal-tanklar', lang),
  ];

  const images = [
    "/assets/images/paslanmaz-tanklar/kategori-depolama.webp",
    "/assets/images/paslanmaz-tanklar/kategori-zeytinyagi.webp",
    "/assets/images/paslanmaz-tanklar/kategori-sut.webp",
    "/assets/images/paslanmaz-tanklar/kategori-kimyasal.webp",
  ];

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/paslanmaz-tanklar/kategori-banner.webp" alt={dict.stainlessTanksPage.hero.title} fill priority className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100" sizes="100vw" />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto w-full mt-16">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.stainlessTanksPage.breadcrumb.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">{dict.stainlessTanksPage.breadcrumb.current}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
            {dict.stainlessTanksPage.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            {dict.stainlessTanksPage.hero.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dict.stainlessTanksPage.categories.map((cat: { title: string; desc: string }, index: number) => (
            <Link href={links[index]} key={index} className="group flex flex-col sm:flex-row bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#005284] transition-all duration-500">
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto bg-gray-100 overflow-hidden">
                <Image src={images[index]} alt={cat.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#005284]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur p-2.5 rounded-lg shadow-lg text-[#005284] group-hover:bg-[#E35205] group-hover:text-white transition-colors duration-300 z-10">
                  {icons[index]}
                </div>
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#E35205] transition-colors tracking-tight">{cat.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">{cat.desc}</p>
                <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#005284] group-hover:text-[#E35205] transition-colors">
                  {dict.stainlessTanksPage.viewModels}
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-2xl p-10 lg:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#005284] via-transparent to-transparent"></div>
          <div className="relative z-10 mb-8 md:mb-0 max-w-2xl">
            <h4 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#E35205]" />
              {dict.stainlessTanksPage.cta.title}
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{dict.stainlessTanksPage.cta.desc}</p>
          </div>
          <Link href={getLocalizedUrl('iletisim', lang)} className="relative z-10 shrink-0 bg-[#E35205] text-white px-8 py-4 rounded-xl text-sm font-bold tracking-widest hover:bg-white hover:text-[#E35205] transition-all shadow-lg hover:shadow-xl">
            {dict.stainlessTanksPage.cta.btn}
          </Link>
        </div>
      </section>
    </div>
  );
}