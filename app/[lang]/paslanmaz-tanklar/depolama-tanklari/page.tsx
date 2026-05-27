import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Database, Maximize, Anchor, Shield, BookOpenCheck } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Endüstriyel Depolama Tankları | Welltech® International",
    description: "150 tona kadar kapasiteli, uluslararası standartlarda paslanmaz çelik sıvı depolama ve stok tankları.",
  };
}

export default async function StorageTanksPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Endüstriyel Depolama Tankları",
    "image": "https://www.welltech.com/assets/images/paslanmaz-tanklar/depolama/banner.webp",
    "description": "150 tona kadar kapasiteli, uluslararası standartlarda paslanmaz çelik sıvı depolama ve stok tankları.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Storage Tanks"
  };

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative h-[65vh] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/images/paslanmaz-tanklar/depolama/banner.webp" 
            alt="Endüstriyel Depolama Tankları" 
            fill 
            priority 
            className="object-cover transition-transform duration-[3000ms] scale-105" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-[#005284]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${lang}/paslanmaz-tanklar`} className="hover:text-white transition-colors">Paslanmaz Tanklar</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">Depolama Tankları</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Endüstriyel Depolama Tankları
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Devasa stoklama ihtiyaçlarınız için 150 tona kadar kapasite. ASME ve EN mühendislik standartlarıyla tasarlanmış, uzun ömürlü paslanmaz çelik çözümler.
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
                  150 Tonluk Mühendislik Gücü
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Welltech® üretim hattı, butik ölçekli 1.000 litrelik tanklardan, endüstriyel tesisler için devasa 150 tonluk (150.000 Litre) saha tanklarına kadar geniş bir kapasite sunar. Tonaj arttıkça gövdeye binen hidrostatik yük, sismik riskler ve rüzgar yükü analizleri özel mühendislik yazılımlarıyla hesaplanarak sıfır risk hedeflenir.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/paslanmaz-tanklar/depolama/mega-tank.webp" 
                  alt="Mega Kapasite Depolama Tankı" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Teknik Özellikler</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "Maksimum 150 Ton Kapasite", icon: <Maximize className="w-5 h-5 text-[#E35205]"/>},
                          {text: "AISI 304 / 316L Yüksek Kalite Çelik", icon: <ShieldCheck className="w-5 h-5 text-[#005284]"/>},
                          {text: "Tam Otomatik Plazma Kaynak", icon: <CheckCircle className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Konik, Bombe veya Düz Taban", icon: <Anchor className="w-5 h-5 text-[#005284]"/>},
                          {text: "Sismik ve Rüzgar Yükü Analizleri", icon: <Shield className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Seviye ve Hacim Otomasyonu", icon: <Database className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/paslanmaz-tanklar/depolama/guvenlik.webp" 
                      alt="Yapısal Güvenlik" 
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
                  src="/assets/images/paslanmaz-tanklar/depolama/cizim.webp" 
                  alt="Teknik Çizim" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Standart Kapasite Tablosu</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Yukarıdaki değerler standarttır. Tesisinizin yüksekliğine ve zemin etüdüne göre çap/boy oranları mühendislerimizce yeniden boyutlandırılır.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Hacim</th>
                        <th className="p-4 border-b">Çap (mm)</th>
                        <th className="p-4 border-b">Yükseklik (mm)</th>
                        <th className="p-4 border-b">Sac Tipi</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    {[
                        {v: "5.000 L", d: "1.600", h: "2.500", t: "304 / 316L"},
                        {v: "10.000 L", d: "2.200", h: "2.750", t: "304 / 316L"},
                        {v: "15.000 L", d: "2.400", h: "3.300", t: "304 / 316L"},
                        {v: "20.000 L", d: "2.500", h: "4.000", t: "304 / 316L"},
                        {v: "25.000 L", d: "2.600", h: "4.800", t: "304 / 316L"},
                        {v: "50.000 L", d: "3.200", h: "6.500", t: "304 / 316L"},
                        {v: "75.000 L", d: "3.500", h: "7.800", t: "304 / 316L"},
                        {v: "100.000 L", d: "3.800", h: "8.800", t: "304 / 316L"},
                    ].map((row, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold">{row.v}</td>
                        <td className="p-4">{row.d}</td>
                        <td className="p-4">{row.h}</td>
                        <td className="p-4">{row.t}</td>
                        </tr>
                    ))}
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">150.000 L</td>
                        <td className="p-4" colSpan={3}>Saha Montajı (On-site Fabrication)</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <Database className="w-6 h-6 text-[#E35205]" />
                  Depolama Sistemleri FAQ
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "150 tonluk tanklar tesise nasıl getiriliyor?", a: "Karayolu taşıma gabarilerini aşan 50.000 Litre ve üzeri mega tanklar, tesisinizde 'Saha Montajı' (On-site fabrication) yöntemiyle, uzman kaynak ekiplerimiz tarafından inşa edilir." },
                    { q: "Sismik yük analizi neden önemlidir?", a: "Özellikle 20 ton ve üzeri tanklarda, olası bir deprem anında akışkanın yaratacağı çalkantı (sloshing) etkisi tankı devirebilir. Biz bu kuvvetleri önceden hesaplayarak özel ankraj ve et kalınlığı tasarımı yapıyoruz." },
                  ].map((faq, i) => (
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

            <div className="bg-transparent">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight border-b-2 border-gray-200 pb-4">
                Örnek Uygulamalarımız
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "Depolama Projesi 1" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Depolama Projesi 2" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Depolama Projesi 3" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Depolama Projesi 4" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/paslanmaz-tanklar/depolama/${item.src}`} 
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
                    <h4 className="font-bold text-gray-900">Teknik Şartname</h4>
                    <p className="text-xs text-gray-500 tracking-widest">DOK-01 PDF Dökümanı</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Et kalınlığı hesaplamaları, kaynak sertifikasyonları ve statik yük toleransları.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-01-depolama-tanklari-tr.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded-xl text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Dökümanı İndir (PDF)
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">Öne Çıkan Referans</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                  <Image 
                    src="/assets/images/paslanmaz-tanklar/depolama/referans.webp" 
                    alt="Mega Depolama Tankı Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">Büyük ölçekli kimya tesisi için 150.000 Litre kapasiteli, saha montajlı paslanmaz çelik depolama tankı bataryası kurulumu.</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-[#E35205]" />
                  Kapasite Planlama
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">150 tona kadar olan depolama projeleriniz için alan ölçülerinizi ve akışkan özelliklerini paylaşın, projelendirelim.</p>
                <a 
                  href="https://wa.me/905324125152?text=Merhaba,%20endüstriyel%20depolama%20tankı%20kapasitesi%20ve%20fiyatlandırması%20hakkında%20bilgi%20almak%20istiyorum." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#E35205] text-white px-4 py-3 rounded-xl text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md"
                >
                  Teklif İsteyin →
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}