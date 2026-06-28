import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ShieldCheck, Activity, Settings, CheckCircle, Download, FileText, FlaskConical, Thermometer, Droplets, Wind } from 'lucide-react';
import { getDictionary } from '../../../../dictionaries/getDictionary';
import { getLocalizedUrl } from '../../../../dictionaries/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang, 'bioreactors');
  const t = dict.bioreactorsPage;
  return { title: t.metadata.title, description: t.metadata.description };
}

export default async function BioreactorsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang, 'bioreactors');
  const t = dict.bioreactorsPage;

  const jsonLd = {
    "@context": "https://schema.org", "@type": "Product",
    "name": t.hero.title,
    "image": "https://www.welltech.com.tr/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/banner.webp",
    "description": t.metadata.description,
    "brand": { "@type": "Brand", "name": "Welltech®" },
    "manufacturer": { "@type": "Organization", "name": "Welltech® International Engineering" },
    "category": "Industrial Bioprocessing Equipment"
  };

  return (
    <div className="bg-gray-50 pb-24 font-sans selection:bg-[#E35205] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative h-[65vh] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/banner.webp" alt={t.hero.title} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#005284]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">{t.breadcrumb.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={getLocalizedUrl('proses-sistemleri', lang)} className="hover:text-white transition-colors">{t.breadcrumb.process}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">{t.breadcrumb.current}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <FlaskConical className="w-6 h-6 text-white" />
              <Activity className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">{t.hero.title}</h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">{t.hero.desc}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-10">

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#E35205]" />
                  {t.technology.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6" dangerouslySetInnerHTML={{ __html: t.technology.desc }} />
              </div>
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/proses.webp" alt={t.technology.imgAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{t.features.title}</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { text: t.features.items[0], icon: <ShieldCheck className="w-5 h-5 text-[#E35205]" /> },
                      { text: t.features.items[1], icon: <CheckCircle className="w-5 h-5 text-[#005284]" /> },
                      { text: t.features.items[2], icon: <Droplets className="w-5 h-5 text-[#E35205]" /> },
                      { text: t.features.items[3], icon: <Wind className="w-5 h-5 text-[#005284]" /> },
                      { text: t.features.items[4], icon: <Thermometer className="w-5 h-5 text-[#E35205]" /> },
                      { text: t.features.items[5], icon: <Settings className="w-5 h-5 text-[#005284]" /> },
                    ].map((f, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                        {f.icon}
                        <span className="text-xs font-semibold text-gray-700 leading-tight">{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-48 md:h-full w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                  <Image src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/otomasyon.webp" alt={t.features.imgAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-3 gap-8 items-center">
              <div className="relative h-64 sm:h-96 w-full overflow-hidden border border-gray-100 rounded-lg shadow-sm group">
                <Image src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/cizim.webp" alt={t.table.imgAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="md:col-span-2 overflow-x-auto p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">{t.table.title}</h3>
                <p className="text-[10px] text-gray-400 mb-4 italic leading-relaxed">{t.table.note}</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-[10px] tracking-widest">
                      <th className="p-2 border-b uppercase">{t.table.headers[0]}</th>
                      <th className="p-2 border-b uppercase">{t.table.headers[1]}</th>
                      <th className="p-4 border-b uppercase">{t.table.headers[2]}</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-gray-700">
                    {t.table.rows.map((row: { series: string; volume: string; pressure: string; highlight: string }, i: number) => (
                      <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                        <td className={`p-2 font-bold ${row.highlight === 'orange' ? 'text-[#E35205]' : 'text-[#005284]'}`}>{row.series}</td>
                        <td className="p-2">{row.volume}</td>
                        <td className="p-4">{row.pressure}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight border-b-2 border-gray-200 pb-4">{t.gallery.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.gallery.items.map((item: { src: string; label: string; alt: string }, index: number) => (
                  <Link href={`/${lang}/referanslar`} key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer block">
                    <Image src={`/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/${item.src}`} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <span className="block text-white text-lg font-black tracking-widest drop-shadow-lg transform translate-y-1 group-hover:-translate-y-1 transition-transform duration-300">{item.label}</span>
                      <div className="h-1 w-8 bg-[#E35205] mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 space-y-6">

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#E35205]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-50 rounded-lg text-red-600"><FileText className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.sidebar.doc.title}</h4>
                    <p className="text-xs text-gray-500 tracking-widest">{t.sidebar.doc.subtitle}</p>
                  </div>
                </div>
                <a href={t.sidebar.doc.fileUrl} download className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md">
                  <Download className="w-4 h-4" />
                  {t.sidebar.doc.btn}
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">{t.sidebar.reference.badge}</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/referans.webp" alt={t.sidebar.reference.imgAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p className="text-[10px] text-gray-500 line-clamp-2 mt-2">{t.sidebar.reference.desc}</p>
                
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                   {t.sidebar.reference.link}
                </Link>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#E35205]" />
                  {t.sidebar.cta.title}
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{t.sidebar.cta.desc}</p>
                <Link href={getLocalizedUrl('iletisim', lang)} className="w-full flex items-center justify-center gap-2 bg-[#E35205] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md">
                  {t.sidebar.cta.btn}
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}