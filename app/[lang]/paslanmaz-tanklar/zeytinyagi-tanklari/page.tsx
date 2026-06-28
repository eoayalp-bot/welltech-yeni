import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Droplets, FlaskConical, Target, ThermometerSun, BookOpenCheck } from 'lucide-react';
import { getDictionary } from '../../../../dictionaries/getDictionary';
import { getLocalizedUrl } from '../../../../dictionaries/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang, 'oliveOilTanks');

  return {
    title: dict.oliveOilTanksPage.metadata.title,
    description: dict.oliveOilTanksPage.metadata.description,
  };
}

export default async function OliveOilTanksPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang, 'oliveOilTanks');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": dict.oliveOilTanksPage.metadata.title,
    "image": "https://www.welltech.com.tr/assets/images/paslanmaz-tanklar/zeytinyagi/banner.webp",
    "description": dict.oliveOilTanksPage.metadata.description,
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Tanks"
  };

  const featuresList = [
    { text: dict.oliveOilTanksPage.features.items["1"], icon: <FlaskConical className="w-5 h-5 text-[#E35205]"/> },
    { text: dict.oliveOilTanksPage.features.items["2"], icon: <CheckCircle className="w-5 h-5 text-[#005284]"/> },
    { text: dict.oliveOilTanksPage.features.items["3"], icon: <Target className="w-5 h-5 text-[#E35205]"/> },
    { text: dict.oliveOilTanksPage.features.items["4"], icon: <ShieldCheck className="w-5 h-5 text-[#005284]"/> },
    { text: dict.oliveOilTanksPage.features.items["5"], icon: <ThermometerSun className="w-5 h-5 text-[#E35205]"/> },
    { text: dict.oliveOilTanksPage.features.items["6"], icon: <CheckCircle className="w-5 h-5 text-[#005284]"/> }
  ];

  const tableData = [
    { v: "3.000 L", d: "1.400", h: "2.000", t: "3 mm" },
    { v: "5.000 L", d: "1.600", h: "2.500", t: "4 mm" },
    { v: "10.000 L", d: "2.200", h: "2.750", t: "4 mm" },
    { v: "15.000 L", d: "2.400", h: "3.300", t: "4 mm" },
    { v: "20.000 L", d: "2.600", h: "4.000", t: "5 mm" },
    { v: "25.000 L", d: "2.800", h: "4.200", t: "5 mm" },
    { v: "50.000 L", d: "3.200", h: "6.500", t: "6 mm" },
  ];

  const projectsList = [
    { src: "galeri-1.webp", title: dict.oliveOilTanksPage.projects.p1.title, alt: dict.oliveOilTanksPage.projects.p1.alt },
    { src: "galeri-2.webp", title: dict.oliveOilTanksPage.projects.p2.title, alt: dict.oliveOilTanksPage.projects.p2.alt },
    { src: "galeri-3.webp", title: dict.oliveOilTanksPage.projects.p3.title, alt: dict.oliveOilTanksPage.projects.p3.alt },
    { src: "galeri-4.webp", title: dict.oliveOilTanksPage.projects.p4.title, alt: dict.oliveOilTanksPage.projects.p4.alt }
  ];

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative h-[65vh] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/images/paslanmaz-tanklar/zeytinyagi/banner.webp" 
            alt={dict.oliveOilTanksPage.hero.title} 
            fill 
            priority 
            className="object-cover transition-transform duration-[3000ms] scale-105" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-[#005284]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.oliveOilTanksPage.breadcrumb.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={getLocalizedUrl('paslanmaz-tanklar', lang)} className="hover:text-white transition-colors">{dict.oliveOilTanksPage.breadcrumb.tanks}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">{dict.oliveOilTanksPage.breadcrumb.current}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              {dict.oliveOilTanksPage.hero.title}
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            {dict.oliveOilTanksPage.hero.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <BookOpenCheck className="w-6 h-6 text-[#E35205]" />
                  {dict.oliveOilTanksPage.engineering.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {dict.oliveOilTanksPage.engineering.desc}
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/paslanmaz-tanklar/zeytinyagi/tank.webp" 
                  alt={dict.oliveOilTanksPage.engineering.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{dict.oliveOilTanksPage.features.title}</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {featuresList.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                            {feature.icon}
                            <span className="text-xs font-semibold text-gray-700 leading-tight">{feature.text}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                  
                  <div className="relative h-48 md:h-full w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                    <Image 
                      src="/assets/images/paslanmaz-tanklar/zeytinyagi/azot.webp" 
                      alt={dict.oliveOilTanksPage.features.items["1"]} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                    />
                  </div>
                </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-3 gap-8 items-center">
              <div className="relative h-64 sm:h-96 w-full overflow-hidden border border-gray-100 rounded-lg shadow-sm group">
                <Image 
                  src="/assets/images/paslanmaz-tanklar/zeytinyagi/cizim.webp" 
                  alt="Zeytinyağı Tankı Teknik Çizimi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">{dict.oliveOilTanksPage.capacityTable.title}</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">{dict.oliveOilTanksPage.capacityTable.note}</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">{dict.oliveOilTanksPage.capacityTable.headers.volume}</th>
                        <th className="p-4 border-b">{dict.oliveOilTanksPage.capacityTable.headers.diameter}</th>
                        <th className="p-4 border-b">{dict.oliveOilTanksPage.capacityTable.headers.height}</th>
                        <th className="p-4 border-b">{dict.oliveOilTanksPage.capacityTable.headers.thickness}</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    {tableData.map((row, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold">{row.v}</td>
                        <td className="p-4">{row.d}</td>
                        <td className="p-4">{row.h}</td>
                        <td className="p-4">{row.t}</td>
                        </tr>
                    ))}
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">150.000 L</td>
                        <td className="p-4" colSpan={3}>{dict.oliveOilTanksPage.capacityTable.customRow}</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <FlaskConical className="w-6 h-6 text-[#E35205]" />
                  {dict.oliveOilTanksPage.faq.title}
                </h2>
                <div className="space-y-6">
                  {dict.oliveOilTanksPage.faq.items.map((faq: { q: string, a: string }, i: number) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E35205] mt-0.5 shrink-0" />
                        {faq.q}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed ml-6">{faq.a}</p>
                    </div>
                  ))}
                </div>
            </div>

            <div className="mt-12 mb-8 bg-transparent">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight border-b-2 border-gray-200 pb-4">
                {dict.oliveOilTanksPage.projects.title}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectsList.map((item, index) => (
                  <Link href={`/${lang}/referanslar`} key={index} className="block relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/paslanmaz-tanklar/zeytinyagi/${item.src}`} 
                      alt={item.alt} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <span className="block text-white text-lg font-black tracking-widest drop-shadow-lg transform translate-y-1 group-hover:-translate-y-1 transition-transform duration-300">
                        {item.title}
                      </span>
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
                  <div className="p-3 bg-red-50 rounded-lg text-red-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{dict.oliveOilTanksPage.sidebar.spec.title}</h4>
                    <p className="text-xs text-gray-500 tracking-widest">{dict.oliveOilTanksPage.sidebar.spec.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{dict.oliveOilTanksPage.sidebar.spec.desc}</p>
                <a 
                  href={dict.oliveOilTanksPage.sidebar.spec.fileUrl} 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  {dict.oliveOilTanksPage.sidebar.spec.btn}
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">{dict.oliveOilTanksPage.sidebar.reference.badge}</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image 
                    src="/assets/images/paslanmaz-tanklar/zeytinyagi/referans.webp" 
                    alt={dict.oliveOilTanksPage.sidebar.reference.badge} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">{dict.oliveOilTanksPage.sidebar.reference.desc}</p>
                
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  {dict.oliveOilTanksPage.sidebar.reference.link}
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#E35205]" />
                  {dict.oliveOilTanksPage.sidebar.cta.title}
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{dict.oliveOilTanksPage.sidebar.cta.desc}</p>
                <a 
                  href={`https://wa.me/905324125152?text=${encodeURIComponent(dict.oliveOilTanksPage.sidebar.cta.whatsappMsg)}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#E35205] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md"
                >
                  {dict.oliveOilTanksPage.sidebar.cta.btn}
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}