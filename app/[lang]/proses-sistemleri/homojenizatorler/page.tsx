import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Cpu, Waves, Activity, Settings, Zap } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Homojenizatörlü Sistemler | Welltech®",
    description: "Kozmetik, ilaç ve gıda prosesleri için yüksek devirli (high-shear) rotor-stator homojenizatör sistemleri.",
  };
}

export default async function HomogenizersPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Homojenizatörlü Sistemler",
    "image": "https://www.welltech.com/assets/images/proses-sistemleri/kategori-homojenizator.webp",
    "description": "Kozmetik, ilaç ve gıda prosesleri için yüksek devirli (high-shear) rotor-stator homojenizatör sistemleri.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Homogenizers"
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
            src="/assets/images/proses-sistemleri/kategori-homojenizator.webp" 
            alt="Endüstriyel Homojenizatör Sistemleri" 
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
            <span className="text-[#E35205]">Homojenizatörler</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <Cpu className="w-6 h-6 text-white" />
              <Waves className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Homojenizatörlü Sistemler
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Sıvı-sıvı ve sıvı-katı emülsiyonlarında kusursuz partikül parçalama. Kozmetik, ilaç ve ileri kimya prosesleri için yüksek kesme (high-shear) gücüne sahip rotor-stator teknolojisi.
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
                  Rotor & Stator Teknolojisi
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Sıradan karıştırıcılar (mikserler) akışkanı sadece hareket ettirir. Homojenizatörler ise çok dar bir aralıkta (micron seviyesinde) dönen rotor ve sabit stator bıçakları sayesinde akışkanı devasa bir mekanik kesme (shear) kuvvetine maruz bırakır. Bu sayede yağ ve su gibi normalde karışmayan maddeler kusursuz bir emülsiyona (krem, mayonez, losyon vb.) dönüşür ve partiküller mikronize edilerek çökme engellenir.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/proses-sistemleri/homojenizator/stator.webp" 
                  alt="Rotor ve Stator Bıçak Detayı" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Kritik Mühendislik Özellikleri</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "3000 RPM Yüksek Devir Kapasitesi", icon: <Zap className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Çift Etkili Soğutmalı Salmastra", icon: <ShieldCheck className="w-5 h-5 text-[#005284]"/>},
                          {text: "AISI 316L Özel Alaşım Kesici Kafa", icon: <CheckCircle className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Değiştirilebilir Stator Başlıkları", icon: <Settings className="w-5 h-5 text-[#005284]"/>},
                          {text: "CIP / SIP Yıkanabilirlik (Hijyenik)", icon: <Waves className="w-5 h-5 text-[#E35205]"/>},
                          {text: "İnvertörlü Hassas Hız Kontrolü", icon: <Cpu className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/proses-sistemleri/homojenizator/motor.webp" 
                      alt="Yüksek Devirli Homojenizatör Motoru" 
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
                  src="/assets/images/proses-sistemleri/homojenizator/cizim.webp" 
                  alt="In-Line Homojenizatör Çizimi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Homojenizatör Montaj Tipleri</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Tesisinizin borulama sistemine, tank yapınıza ve ürün reoloji (akışkanlık) özelliklerine göre seçilir.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Montaj Tipi</th>
                        <th className="p-4 border-b">Çalışma Prensibi</th>
                        <th className="p-4 border-b">Kullanım Alanı</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">Alttan Girişli (Bottom Entry)</td>
                        <td className="p-4">Tank dibine monte edilir, ürün yerçekimiyle beslenir.</td>
                        <td className="p-4">Kozmetik Kremler, Mayonez, Losyon</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">In-Line (Sürekli Akış)</td>
                        <td className="p-4">Boru hattı üzerine monte edilir, sirkülasyon yapar.</td>
                        <td className="p-4">Büyük hacimli şuruplar, Süt Ürünleri</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Üstten Daldırmalı (Top Entry)</td>
                        <td className="p-4">Tankın üstünden asansör veya flanş ile daldırılır.</td>
                        <td className="p-4">Açık kazanlar, Mobil ar-ge tankları</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">Toz Emişli (Powder Mixer)</td>
                        <td className="p-4">Oluşan vakumla dışarıdan toz hammadeyi çeker.</td>
                        <td className="p-4">Karbon siyahı, Süt tozu, Pektin ergitme</td>
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
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "Alttan Girişli Homojenizatör" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Kozmetik Krem Üretim Tankı" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "In-Line Sürekli Akış Sistemi" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Toz Emişli Dispersiyon Ünitesi" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/proses-sistemleri/homojenizator/${item.src}`} 
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
                    <p className="text-xs text-gray-500 tracking-widest">DOK-08 PDF Dökümanı</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Rotor-stator toleransları, mekanik salmastra soğutma devresi ve motor kw hesaplamalarını içeren teknik şartname.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-08-homojenizatorler-tr.pdf" 
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
                    src="/assets/images/proses-sistemleri/homojenizator/referans.webp" 
                    alt="Kozmetik Proses Projesi Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Lüks cilt bakım ürünleri üreten tesis için vakum altında çalışan, alttan girişli (bottom-entry) 22kW homojenizatörlü krem üretim reaktörü."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#E35205]" />
                  Emülsiyon Çözümü
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Kozmetik, gıda veya kimya... Ürün reçetenizi bizimle paylaşın, en verimli partikül parçalama (high-shear) sistemini tasarlayalım.</p>
                <a 
                  href="https://wa.me/905322830628?text=Merhaba,%20homojenizatör%20ve%20emülsiyon%20sistemleri%20için%20kapasite%20ve%20fiyat%20bilgisi%20almak%20istiyorum." 
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