import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Database, Maximize, Anchor, Shield, BookOpenCheck, FlaskConical, AlertTriangle, ShieldAlert } from 'lucide-react';
import { getDictionary } from '../../../../dictionaries/getDictionary';
import { getLocalizedUrl } from '../../../../dictionaries/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'chemicalTanks');
  return {
    title: dict.chemicalTanksPage.metadata.title,
    description: dict.chemicalTanksPage.metadata.description,
  };
}

export default async function ChemicalTanksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'chemicalTanks');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": dict.chemicalTanksPage.metadata.title,
    "image": "https://www.welltech.com.tr/assets/images/paslanmaz-tanklar/kimyasal/banner.webp",
    "description": dict.chemicalTanksPage.metadata.description,
    "brand": { "@type": "Brand", "name": "Welltech®" },
    "manufacturer": { "@type": "Organization", "name": "Welltech® International Engineering" },
    "category": "Industrial Heavy-Duty Tanks"
  };

  const featuresList = [
    { text: dict.chemicalTanksPage.features.items["1"], icon: <Maximize className="w-5 h-5 text-[#E35205]" /> },
    { text: dict.chemicalTanksPage.features.items["2"], icon: <ShieldCheck className="w-5 h-5 text-[#005284]" /> },
    { text: dict.chemicalTanksPage.features.items["3"], icon: <FileText className="w-5 h-5 text-[#E35205]" /> },
    { text: dict.chemicalTanksPage.features.items["4"], icon: <AlertTriangle className="w-5 h-5 text-[#005284]" /> },
    { text: dict.chemicalTanksPage.features.items["5"], icon: <BookOpenCheck className="w-5 h-5 text-[#E35205]" /> },
    { text: dict.chemicalTanksPage.features.items["6"], icon: <ShieldAlert className="w-5 h-5 text-[#005284]" /> }
  ];

  const tableData = [
    { v: "5.000 L", d: "1.600", h: "2.500", t: `4 mm${dict.chemicalTanksPage.capacityTable.heavy}` },
    { v: "10.000 L", d: "2.200", h: "2.750", t: `5 mm${dict.chemicalTanksPage.capacityTable.heavy}` },
    { v: "15.000 L", d: "2.400", h: "3.300", t: `5 mm${dict.chemicalTanksPage.capacityTable.heavy}` },
    { v: "20.000 L", d: "2.600", h: "4.000", t: `6 mm${dict.chemicalTanksPage.capacityTable.heavy}` },
    { v: "25.000 L", d: "2.600", h: "4.800", t: `6 mm${dict.chemicalTanksPage.capacityTable.heavy}` },
    { v: "50.000 L", d: "3.200", h: "6.500", t: `8 mm${dict.chemicalTanksPage.capacityTable.heavy}` },
  ];

  const projectsList = [
    { src: "galeri-1.webp", title: dict.chemicalTanksPage.projects.p1.title, alt: dict.chemicalTanksPage.projects.p1.alt },
    { src: "galeri-2.webp", title: dict.chemicalTanksPage.projects.p2.title, alt: dict.chemicalTanksPage.projects.p2.alt },
    { src: "galeri-3.webp", title: dict.chemicalTanksPage.projects.p3.title, alt: dict.chemicalTanksPage.projects.p3.alt },
    { src: "galeri-4.webp", title: dict.chemicalTanksPage.projects.p4.title, alt: dict.chemicalTanksPage.projects.p4.alt }
  ];

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: '#005284' }} className="relative h-[65vh] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/paslanmaz-tanklar/kimyasal/banner.webp" alt={dict.chemicalTanksPage.hero.title} fill priority className="object-cover transition-transform duration-[3000ms] scale-105" sizes="100vw" />
          <div className="absolute inset-0 bg-[#005284]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.chemicalTanksPage.breadcrumb.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={getLocalizedUrl('paslanmaz-tanklar', lang)} className="hover:text-white transition-colors">{dict.chemicalTanksPage.breadcrumb.tanks}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">{dict.chemicalTanksPage.breadcrumb.current}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <FlaskConical className="w-8 h-8 text-white" />
              <AlertTriangle className="w-6 h-6 text-blue-100 mt-2" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              {dict.chemicalTanksPage.hero.title}
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            {dict.chemicalTanksPage.hero.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-10">

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <ShieldAlert className="w-6 h-6 text-[#E35205]" />
                  {dict.chemicalTanksPage.corrosion.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">{dict.chemicalTanksPage.corrosion.desc}</p>
              </div>
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image src="/assets/images/paslanmaz-tanklar/kimyasal/test.webp" alt={dict.chemicalTanksPage.corrosion.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{dict.chemicalTanksPage.features.title}</h2>
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
                  <Image src="/assets/images/paslanmaz-tanklar/kimyasal/donanim.webp" alt={dict.chemicalTanksPage.features.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-3 gap-8 items-center">
              <div className="relative h-64 sm:h-96 w-full overflow-hidden border border-gray-100 rounded-lg shadow-sm group">
                <Image src="/assets/images/paslanmaz-tanklar/kimyasal/cizim.webp" alt={dict.chemicalTanksPage.capacityTable.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">{dict.chemicalTanksPage.capacityTable.title}</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">{dict.chemicalTanksPage.capacityTable.note}</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                      <th className="p-4 border-b">{dict.chemicalTanksPage.capacityTable.headers.volume}</th>
                      <th className="p-4 border-b">{dict.chemicalTanksPage.capacityTable.headers.diameter}</th>
                      <th className="p-4 border-b">{dict.chemicalTanksPage.capacityTable.headers.height}</th>
                      <th className="p-4 border-b">{dict.chemicalTanksPage.capacityTable.headers.thickness}</th>
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
                      <td className="p-4" colSpan={3}>{dict.chemicalTanksPage.capacityTable.customRow}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-[#E35205]" />
                {dict.chemicalTanksPage.faq.title}
              </h2>
              <div className="space-y-6">
                {dict.chemicalTanksPage.faq.items.map((faq: { q: string; a: string }, i: number) => (
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
                {dict.chemicalTanksPage.projects.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectsList.map((item, index) => (
                  <Link href={`/${lang}/referanslar`} key={index} className="block relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image src={`/assets/images/paslanmaz-tanklar/kimyasal/${item.src}`} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <span className="block text-white text-lg font-black tracking-widest drop-shadow-lg transform translate-y-1 group-hover:-translate-y-1 transition-transform duration-300">{item.title}</span>
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
                    <h4 className="font-bold text-gray-900">{dict.chemicalTanksPage.sidebar.spec.title}</h4>
                    <p className="text-xs text-gray-500 tracking-widest">{dict.chemicalTanksPage.sidebar.spec.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{dict.chemicalTanksPage.sidebar.spec.desc}</p>
                <a href={dict.chemicalTanksPage.sidebar.spec.fileUrl} download className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md">
                  <Download className="w-4 h-4" />
                  {dict.chemicalTanksPage.sidebar.spec.btn}
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">{dict.chemicalTanksPage.sidebar.reference.badge}</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image src="/assets/images/paslanmaz-tanklar/kimyasal/referans.webp" alt={dict.chemicalTanksPage.sidebar.reference.badge} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">{dict.chemicalTanksPage.sidebar.reference.desc}</p>
                
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  {dict.chemicalTanksPage.sidebar.reference.link}
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-[#E35205]" />
                  {dict.chemicalTanksPage.sidebar.cta.title}
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{dict.chemicalTanksPage.sidebar.cta.desc}</p>
                <a href={`https://wa.me/905324125152?text=${encodeURIComponent(dict.chemicalTanksPage.sidebar.cta.whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-[#E35205] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md">
                  {dict.chemicalTanksPage.sidebar.cta.btn}
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}