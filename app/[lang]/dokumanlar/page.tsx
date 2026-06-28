import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Award, Microscope, Search, FileBadge, Globe } from 'lucide-react';
import { getDictionary } from '../../../dictionaries/getDictionary';
import { getLocalizedUrl } from '../../../dictionaries/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang, 'documents');

  return {
    title: dict.documentsPage.metadata.title,
    description: dict.documentsPage.metadata.description,
  };
}

export default async function DocumentsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang, 'documents');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": dict.documentsPage.metadata.title,
    "description": dict.documentsPage.metadata.description,
    "publisher": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    }
  };

  const ndtFeatures = [
    { text: dict.documentsPage.ndt.items.rt, icon: <Microscope className="w-5 h-5 text-[#E35205]"/> },
    { text: dict.documentsPage.ndt.items.pt, icon: <Search className="w-5 h-5 text-[#005284]"/> },
    { text: dict.documentsPage.ndt.items.ut, icon: <Microscope className="w-5 h-5 text-[#E35205]"/> },
    { text: dict.documentsPage.ndt.items.vt, icon: <Search className="w-5 h-5 text-[#005284]"/> },
    { text: dict.documentsPage.ndt.items.hydro, icon: <CheckCircle className="w-5 h-5 text-[#E35205]"/> },
    { text: dict.documentsPage.ndt.items.roughness, icon: <CheckCircle className="w-5 h-5 text-[#005284]"/> }
  ];

  const tableData = [
    { std: "ISO 9001:2015", scope: dict.documentsPage.certifications.scopes.iso9001, status: dict.documentsPage.certifications.status.active, color: "text-[#005284]", statusColor: "text-green-600" },
    { std: "EN ISO 3834-2", scope: dict.documentsPage.certifications.scopes.iso3834, status: dict.documentsPage.certifications.status.active, color: "text-[#E35205]", statusColor: "text-green-600" },
    { std: "PED 2014/68/EU", scope: dict.documentsPage.certifications.scopes.ped, status: dict.documentsPage.certifications.status.active, color: "text-gray-900", statusColor: "text-green-600" },
    { std: "ASME Sec. VIII Div.1", scope: dict.documentsPage.certifications.scopes.asme, status: dict.documentsPage.certifications.status.compliant, color: "text-[#005284]", statusColor: "text-gray-500" },
    { std: "CE İşareti / Markalama", scope: dict.documentsPage.certifications.scopes.ce, status: dict.documentsPage.certifications.status.active, color: "text-[#E35205]", statusColor: "text-green-600" }
  ];

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/kurumsal/kalite-banner.webp"
            alt={dict.documentsPage.hero.title}
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto w-full mt-16">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.documentsPage.breadcrumb.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">{dict.documentsPage.breadcrumb.corporate}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{dict.documentsPage.breadcrumb.current}</span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <Award className="w-8 h-8 text-white" />
              <ShieldCheck className="w-6 h-6 text-blue-100 mt-2" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
              {dict.documentsPage.hero.title}
            </h1>
          </div>
          
          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            {dict.documentsPage.hero.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#E35205]" />
                  {dict.documentsPage.globalStandards.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {dict.documentsPage.globalStandards.desc}
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-xl shadow-md group">
                <Image 
                  src="/assets/images/kurumsal/kalite-izlenebilirlik.webp" 
                  alt={dict.documentsPage.globalStandards.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{dict.documentsPage.ndt.title}</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {ndtFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                            {feature.icon}
                            <span className="text-xs font-semibold text-gray-700 leading-tight">{feature.text}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                  
                  <div className="relative h-48 md:h-full w-full overflow-hidden border border-gray-100 rounded-xl shadow-md group">
                    <Image 
                      src="/assets/images/kurumsal/kalite-ndt.webp" 
                      alt={dict.documentsPage.ndt.title}
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                    />
                  </div>
                </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-3 gap-8 items-center">
              <div className="relative h-64 sm:h-96 w-full overflow-hidden border border-gray-100 rounded-xl shadow-md group">
                <Image 
                  src="/assets/images/kurumsal/kalite-sertifika.webp" 
                  alt={dict.documentsPage.certifications.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">{dict.documentsPage.certifications.title}</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">{dict.documentsPage.certifications.note}</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">{dict.documentsPage.certifications.tableHeaders.standard}</th>
                        <th className="p-4 border-b">{dict.documentsPage.certifications.tableHeaders.scope}</th>
                        <th className="p-4 border-b">{dict.documentsPage.certifications.tableHeaders.status}</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    {tableData.map((row, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                        <td className={`p-4 font-bold ${row.color}`}>{row.std}</td>
                        <td className="p-4">{row.scope}</td>
                        <td className={`p-4 font-bold ${row.statusColor}`}>{row.status}</td>
                      </tr>
                    ))}
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#E35205]" />
                  {dict.documentsPage.faq.title}
                </h2>
                <div className="space-y-6">
                  {dict.documentsPage.faq.items.map((faq: {q: string, a: string}, i: number) => (
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

          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#005284]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-[#005284]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{dict.documentsPage.sidebar.iso.title}</h4>
                    <p className="text-xs text-gray-500 tracking-widest uppercase">{dict.documentsPage.sidebar.iso.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{dict.documentsPage.sidebar.iso.desc}</p>
                <a 
                  href={dict.documentsPage.sidebar.iso.fileUrl} 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded-xl text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  {dict.documentsPage.sidebar.iso.btn}
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#E35205]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-50 rounded-lg text-red-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{dict.documentsPage.sidebar.catalog.title}</h4>
                    <p className="text-xs text-gray-500 tracking-widest uppercase">{dict.documentsPage.sidebar.catalog.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{dict.documentsPage.sidebar.catalog.desc}</p>
                <a 
                  href={dict.documentsPage.sidebar.catalog.fileUrl} 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#E35205] text-white px-4 py-3 rounded-xl text-sm font-bold tracking-wider hover:bg-[#005284] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  {dict.documentsPage.sidebar.catalog.btn}
                </a>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#E35205]" />
                  {dict.documentsPage.sidebar.department.title}
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{dict.documentsPage.sidebar.department.desc}</p>
                <a 
                  href="mailto:kalite@welltech.com.tr" 
                  className="w-full block text-center bg-gray-800 text-white border border-gray-700 px-4 py-3 rounded-xl text-sm font-bold tracking-wider hover:bg-white hover:text-gray-900 transition-colors shadow-md"
                >
                  kalite@welltech.com.tr
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}