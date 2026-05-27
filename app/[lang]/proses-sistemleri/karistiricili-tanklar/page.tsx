import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, RefreshCw, Zap, Gauge, Wind } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Karıştırıcılı Proses Tankları | Welltech®",
    description: "Farklı vizkozitelere özel mikser tasarımları, invertör destekli otomasyonlu paslanmaz çelik karıştırıcılı tanklar.",
  };
}

export default async function MixingTanksPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Karıştırıcılı Proses Tankları",
    "image": "https://www.welltech.com/assets/images/proses-sistemleri/karistirici/banner.webp",
    "description": "Sıvı-sıvı veya sıvı-katı karışımlarınız için optimum viskozite kontrolü sağlayan, invertör destekli paslanmaz mikser sistemleri.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Process Mixers"
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
            src="/assets/images/proses-sistemleri/karistirici/banner.webp" 
            alt="Endüstriyel Karıştırıcılı Tanklar" 
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
            <span className="text-[#E35205]">Karıştırıcılı Tanklar</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <RefreshCw className="w-6 h-6 text-white" />
              <Zap className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Karıştırıcılı Proses Tankları
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Sıvı-sıvı veya sıvı-katı karışımlarınız için optimum viskozite kontrolü sağlayan, invertör destekli ve farklı kanat tiplerine sahip ileri mühendislik mikser sistemleri.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <RefreshCw className="w-6 h-6 text-[#E35205]" />
                  Homojen Karışım Teknolojisi
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Bir prosesin başarısı, karışımın ne kadar doğru homojenize edildiği ile ölçülür. Ürününüzün viskozite değerine (su gibi akışkan veya bal gibi kıvamlı) ve yoğunluğuna göre; türbin, pervane, çapa (anchor) veya sıyırıcılı mikser kanatları tasarlıyoruz. Sistemlerimiz redüktörlü motorlar ve PLC kontrollü hız invertörleri ile donatılarak prosesinizde maksimum kontrol sağlar.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/proses-sistemleri/karistirici/kanat.webp" 
                  alt="Mikser Kanat Detayı" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Donanım ve Otomasyon</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "Değişken Devirli İnvertör Sistemi", icon: <Gauge className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Teflon (PTFE) Duvar Sıyırıcılar", icon: <ShieldCheck className="w-5 h-5 text-[#005284]"/>},
                          {text: "Mekanik Salmastra Sızdırmazlık", icon: <CheckCircle className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Alt, Üst veya Yandan Girişli Tasarım", icon: <RefreshCw className="w-5 h-5 text-[#005284]"/>},
                          {text: "CIP ve SIP Yıkama Topu Entegrasyonu", icon: <Wind className="w-5 h-5 text-[#E35205]"/>},
                          {text: "AISI 316L Komple Paslanmaz Şaft", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/proses-sistemleri/karistirici/otomasyon.webp" 
                      alt="Otomasyon ve İnvertör Paneli" 
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
                  src="/assets/images/proses-sistemleri/karistirici/cizim.webp" 
                  alt="Karıştırıcılı Proses Tankı Teknik Çizimi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Mikser Tipi Seçim Tablosu</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Karışımın viskozitesi (cP) ve içerdiği partikül yapısına göre mühendislerimiz tarafından hesaplanır.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Kanat Tipi</th>
                        <th className="p-4 border-b">Viskozite (Kıvam)</th>
                        <th className="p-4 border-b">Uygulama Örneği</th>
                        <th className="p-4 border-b">Devir Hızı</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">Pervane (Propeller)</td>
                        <td className="p-4">Düşük (Su gibi)</td>
                        <td className="p-4">Sıvı Kimyasallar, Meyve Suyu</td>
                        <td className="p-4">Yüksek (900-1400 rpm)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">Türbin (Turbine)</td>
                        <td className="p-4">Orta (Yağ gibi)</td>
                        <td className="p-4">Şurup, Madeni Yağ, Boya</td>
                        <td className="p-4">Orta (100-300 rpm)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Çapa (Anchor) Sıyırıcılı</td>
                        <td className="p-4">Yüksek (Bal gibi)</td>
                        <td className="p-4">Kozmetik Krem, Çikolata</td>
                        <td className="p-4">Düşük (10-60 rpm)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">Dispersiyon Tipi</td>
                        <td className="p-4">Katı/Sıvı Çözeltiler</td>
                        <td className="p-4">Toz Kimyasalların Sıvıya Erimesi</td>
                        <td className="p-4">Çok Yüksek (1500+ rpm)</td>
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
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "Özel Tasarım Çapa Mikser" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "İnvertör Kontrollü Karıştırıcı" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Boya Endüstrisi Disperser Tankı" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Gıda Sektörü Homojenizatör Bataryası" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/proses-sistemleri/karistirici/${item.src}`} 
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
                    <p className="text-xs text-gray-500 tracking-widest">DOK-06 PDF Dökümanı</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Farklı viskoziteler için motor gücü hesaplamaları ve mekanik salmastra sızdırmazlık detayları içeren mühendislik şartnamesi.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-06-karistiricili-tanklar-tr.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
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
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image 
                    src="/assets/images/proses-sistemleri/karistirici/referans.webp" 
                    alt="Kimya Proses Projesi Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Polimer kimya üretim tesisi için ex-proof motorlu, yüksek tork kapasiteli ve teflon sıyırıcılı 10.000 Litre mikser tankı."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-[#E35205]" />
                  Viskozite Analizi
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Ürününüzün viskozitesini (cP) ve çalışma şartlarını bizimle paylaşın, en uygun mikser dizaynını ve redüktör gücünü hesaplayalım.</p>
                <a 
                  href="https://wa.me/905322830628?text=Merhaba,%20karıştırıcılı%20tank%20projesi%20için%20viskozite%20değerlerime%20uygun%20hesaplama%20ve%20fiyat%20almak%20istiyorum." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#E35205] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md"
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