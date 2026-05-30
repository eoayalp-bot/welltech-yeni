import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, MapPin, ArrowRight, ShieldCheck, Factory } from 'lucide-react';
import { referanslar } from '../../../data/referanslarData';
import { getDictionary } from '../../../dictionaries/getDictionary';
import { getLocalizedUrl } from '../../../dictionaries/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  const t = dict.referencesPage;
  return { title: t.metadata.title, description: t.metadata.description };
}

export default async function ReferencesPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);
  const t = dict.referencesPage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": t.metadata.title,
    "description": t.metadata.description,
    "publisher": { "@type": "Organization", "name": "Welltech® International Engineering" }
  };

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative h-[65vh] min-h-[500px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/kurumsal/referanslar-banner.webp" alt={t.hero.title} fill priority className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100" sizes="100vw" />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[#005284]/40 z-10 mix-blend-multiply"></div>
        </div>
        <div className="relative z-20 max-w-4xl mx-auto w-full mt-16">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">{t.breadcrumb.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">{t.breadcrumb.current}</span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">{t.hero.title}</h1>
          </div>
          <p className="text-lg md:text-2xl text-blue-50 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl italic">{t.hero.quote}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 -mt-16 relative z-30">
        <div className="grid grid-cols-1 gap-12">
          {referanslar.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row group hover:shadow-2xl transition-shadow duration-500">
              <div className="w-full lg:w-2/5 relative h-80 lg:h-auto overflow-hidden bg-gray-100">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-6 left-6 bg-[#005284] text-white px-4 py-2 text-[10px] font-bold tracking-widest rounded shadow-lg uppercase">
                  {project.category}
                </div>
              </div>
              <div className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-6 mb-4 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#E35205]" /> {project.year}</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#E35205]" /> {project.client}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#005284] transition-colors">{project.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base">{project.excerpt}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-100 mb-8 bg-gray-50/50 rounded-lg px-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-[#E35205] uppercase">{t.labels.capacity}</span>
                    <span className="text-xs font-bold text-gray-800">{project.technical.capacity}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-[#E35205] uppercase">{t.labels.material}</span>
                    <span className="text-xs font-bold text-gray-800">{project.technical.material}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-[#E35205] uppercase">{t.labels.standard}</span>
                    <span className="text-xs font-bold text-gray-800">{project.technical.standards}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-[#E35205] uppercase">{t.labels.features}</span>
                    <span className="text-xs font-bold text-gray-800">{project.technical.features}</span>
                  </div>
                </div>
                <Link href={getLocalizedUrl('iletisim', lang)} className="mt-auto inline-flex items-center gap-3 text-xs font-bold tracking-widest text-[#005284] hover:text-[#E35205] transition-all group/btn uppercase w-max">
                  {t.ctaBtn}
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-900 rounded-2xl p-10 lg:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#005284] via-transparent to-transparent"></div>
          <div className="relative z-10 mb-8 md:mb-0 max-w-2xl flex items-start gap-5">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm shrink-0 border border-white/10">
              <Factory className="w-8 h-8 text-[#E35205]" />
            </div>
            <div>
              <h4 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-4">{t.cta.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{t.cta.desc}</p>
            </div>
          </div>
          <Link href={getLocalizedUrl('iletisim', lang)} className="relative z-10 shrink-0 bg-[#E35205] text-white px-8 py-4 rounded-xl text-sm font-bold tracking-widest hover:bg-white hover:text-[#E35205] transition-all shadow-lg hover:shadow-xl uppercase">
            {t.cta.btn}
          </Link>
        </div>
      </section>
    </div>
  );
}
