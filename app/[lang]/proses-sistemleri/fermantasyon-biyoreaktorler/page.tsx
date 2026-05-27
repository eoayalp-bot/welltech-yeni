import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ShieldCheck, Activity, Settings, CheckCircle, Download, FileText, FlaskConical, Gauge, Thermometer, Droplets, Wind } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Fermantasyon ve Biyoreaktör Sistemleri | Welltech®",
    description: "Biyoteknoloji, ilaç ve gıda sanayisi için hassas pH, oksijen ve sıcaklık kontrollü, tam steril (SIP) paslanmaz fermantasyon sistemleri.",
  };
}

export default async function BioreactorsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fermantasyon ve Biyoreaktör Sistemleri",
    "image": "https://www.welltech.com/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/banner.webp",
    "description": "Biyoteknoloji, ilaç ve gıda sanayisi için hassas pH, oksijen (DO2) ve sıcaklık kontrollü, tam steril (SIP) paslanmaz fermantasyon sistemleri.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Bioprocessing Equipment"
  };

  return (
    <div className="bg-gray-50 pb-24 font-sans selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="relative h-[65vh] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/banner.webp" 
            alt="Fermantasyon ve Biyoreaktörler" 
            fill 
            priority 
            className="object-cover" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-[#005284]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${lang}/proses-sistemleri`} className="hover:text-white transition-colors">Proses Sistemleri</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">Fermantasyon ve Biyoreaktörler</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <FlaskConical className="w-6 h-6 text-white" />
              <Activity className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Fermantasyon ve Biyoreaktörler
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Mikrobiyal hücre kültürleri ve enzim üretimleri için kusursuz sterilizasyon. Hassas pH, Çözünmüş Oksijen (DO2) ve sıcaklık kontrolü sağlayan endüstriyel biyoproses sistemleri.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#E35205]" />
                  Hassas Biyoproses Kontrolü
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Fermantasyon süreçlerinde mikrobiyal yaşamın sürdürülebilmesi ve hedeflenen ürün verimine ulaşılması, ortam şartlarının milimetrik kontrolüne bağlıdır.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/proses.webp" 
                  alt="Biyoreaktör Termodinamik Kontrol Detayı" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Donanım ve Mühendislik Özellikleri</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "Ra < 0.4 µm Elektropolisajlı İç Yüzey", icon: <ShieldCheck className="w-5 h-5 text-[#E35205]"/>},
                          {text: "ASME BPE Standardında Steril Dizayn", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/>},
                          {text: "Otomatik SIP (Yerinde Sterilizasyon)", icon: <Droplets className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Yüksek Kütle Transferli Aerasyon", icon: <Wind className="w-5 h-5 text-[#005284]"/>},
                          {text: "Tam İzoleli Dimple/Yarım Boru Ceket", icon: <Thermometer className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Ölü Noktasız (Dead-Leg Free) Vana Yapısı", icon: <Settings className="w-5 h-5 text-[#005284]"/>}
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                            {feature.icon}
                            <span className="text-xs font-semibold text-gray-700 leading-tight">{feature.text}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                  
                  <div className="relative h-48 md:h-full w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                    <Image 
                      src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/otomasyon.webp" 
                      alt="Biyoreaktör PLC SCADA Sistemi" 
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
                  src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/cizim.webp" 
                  alt="Biyoreaktör P&ID Şeması" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Kapasite Tablosu</h3>
                <p className="text-[10px] text-gray-400 mb-4 italic leading-relaxed">* Tesis kapasiteleri Ar-Ge ölçeğinden endüstriyel boyuta kadar tasarlanmaktadır.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-[10px] tracking-widest">
                        <th className="p-2 border-b uppercase">Seri</th>
                        <th className="p-2 border-b uppercase">Hacim</th>
                        <th className="p-4 border-b uppercase">Basınç</th>
                    </tr>
                    </thead>
                    <tbody className="text-xs text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-2 font-bold text-[#005284]">WT-BIO Lab</td>
                        <td className="p-2">10 L - 100 L</td>
                        <td className="p-4">-1 / +3 Bar</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-2 font-bold text-[#005284]">WT-BIO Pilot</td>
                        <td className="p-2">200 L - 2.000 L</td>
                        <td className="p-4">-1 / +3 Bar</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-2 font-bold text-[#E35205]">WT-BIO Pro</td>
                        <td className="p-2">5.000 L - 20.000 L</td>
                        <td className="p-4">-1 / +4 Bar</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 mb-8 bg-transparent">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight border-b-2 border-gray-200 pb-4">
                Örnek Uygulamalarımız
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "Steril Biyoreaktör Montajı" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Hücre Kültürü Fermantasyon Ünitesi" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Hassas pH Oksijen Sensor Grubu" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Endüstriyel Biyoproses Tesis Kurulumu" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/${item.src}`} 
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
                  </div>
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
                    <h4 className="font-bold text-gray-900">Teknik Doküman</h4>
                    <p className="text-xs text-gray-500 tracking-widest">DOK-15 PDF Şartname</p>
                  </div>
                </div>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-15-biyoreaktorler.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Şartnameyi İndir (PDF)
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">Referans Uygulama</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image 
                    src="/assets/images/proses-sistemleri/fermantasyon-biyoreaktorler/referans.webp" 
                    alt="Aşı Üretim Tesisi Biyoreaktör Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-[10px] text-gray-500 line-clamp-2 mt-2">Hücre kültürü üretimi yapan tesise özel; 2.000 L kapasiteli biyoreaktör hattı kurulumu.</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#E35205]" />
                  Proje Mühendisliği
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Laboratuvar ölçeğinden endüstriyel üretime geçiş süreçleriniz için teknik ekibimizle planlayın.</p>
                <Link 
                  href={`/${lang}/iletisim`} 
                  className="w-full flex items-center justify-center gap-2 bg-[#E35205] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md"
                >
                  Teknik Destek Alın
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}