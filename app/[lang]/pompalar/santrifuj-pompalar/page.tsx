import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Waves, Activity, Zap, Droplets, Gauge } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Hijyenik Santrifüj Pompalar | Welltech®",
    description: "Süt, su, meyve suyu ve zeytinyağı transferi için yüksek debili, CIP uyumlu, paslanmaz çelik hijyenik santrifüj pompalar.",
  };
}

export default async function CentrifugalPumpsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hijyenik Santrifüj Pompalar",
    "image": "https://www.welltech.com/assets/images/pompalar/santrifuj/banner.webp",
    "description": "Süt, su, meyve suyu ve zeytinyağı transferi için yüksek debili, CIP uyumlu, paslanmaz çelik hijyenik santrifüj pompalar.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Centrifugal Pumps"
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
            src="/assets/images/pompalar/santrifuj/banner.webp" 
            alt="Hijyenik Santrifüj Pompalar" 
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
            <Link href={`/${lang}/pompalar`} className="hover:text-white transition-colors">Pompalar</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">Santrifüj Pompalar</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <Waves className="w-6 h-6 text-white" />
              <Activity className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Hijyenik Santrifüj Pompalar
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Düşük viskoziteli akışkanlar için maksimum debi ve hidrodinamik verimlilik. Süt, zeytinyağı ve içecek proseslerinde CIP standartlarına tam uyumlu transfer sistemleri.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <Waves className="w-6 h-6 text-[#E35205]" />
                  Yüksek Debi, Kesintisiz Akış
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Santrifüj pompalar, motorun tahrik ettiği fanın (impeller) dönüşüyle oluşan merkezkaç kuvvetini kullanarak akışkanı sisteme basar. Süt, meyve suyu, şarap, zeytinyağı ve akışkan kimyasallar gibi düşük viskoziteli (1-500 cP) ürünlerin transferi için en ideal, uzun ömürlü ve düşük maliyetli çözümdür. Tesisinizin boru çapına, istenilen debiye ve basma yüksekliğine (mSS) göre optimize edilmiş motor güçleriyle sunulur.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/pompalar/santrifuj/fan.webp" 
                  alt="Hidrodinamik Fan Sistemi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Donanım ve Malzeme Özellikleri</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "AISI 316L Hassas Döküm Gövde", icon: <ShieldCheck className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Açık ve Kapalı Fan (Impeller) Opsiyonu", icon: <Zap className="w-5 h-5 text-[#005284]"/>},
                          {text: "SiC/SiC/EPDM Mekanik Salmastra", icon: <CheckCircle className="w-5 h-5 text-[#E35205]"/>},
                          {text: "CIP ve SIP Sistemlerine Tam Uyum", icon: <Droplets className="w-5 h-5 text-[#005284]"/>},
                          {text: "Paslanmaz Çelik Motor Muhafazası", icon: <ShieldCheck className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Düşük NPSH (Kavitasyon Koruması)", icon: <Activity className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/pompalar/santrifuj/motor.webp" 
                      alt="Paslanmaz Muhafazalı Motor" 
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
                  src="/assets/images/pompalar/santrifuj/cizim.webp" 
                  alt="Pompa Performans Eğrisi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Santrifüj Kapasite Tablosu</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Tablodaki değerler su (1 cP) viskozitesine göre referans alınmıştır. Hattınızdaki dirsek sayısı ve basma yüksekliğine göre hidrolik mühendislerimiz doğru motor seçimini yapacaktır.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Seri No</th>
                        <th className="p-4 border-b">Maks. Debi (m³/h)</th>
                        <th className="p-4 border-b">Basma Yüksekliği (mSS)</th>
                        <th className="p-4 border-b">Motor Gücü (kW)</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">WT-C 20</td>
                        <td className="p-4">20 m³/h</td>
                        <td className="p-4">25 mSS</td>
                        <td className="p-4">1.5 - 2.2 kW</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">WT-C 40</td>
                        <td className="p-4">40 m³/h</td>
                        <td className="p-4">35 mSS</td>
                        <td className="p-4">3.0 - 4.0 kW</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">WT-C 80</td>
                        <td className="p-4">80 m³/h</td>
                        <td className="p-4">45 mSS</td>
                        <td className="p-4">5.5 - 7.5 kW</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">WT-C 150</td>
                        <td className="p-4">150 m³/h</td>
                        <td className="p-4">60 mSS</td>
                        <td className="p-4">11.0 - 15.0 kW</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#E35205]" />
                  Santrifüj Pompa FAQ
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "Açık fan (Impeller) ile kapalı fan arasındaki fark nedir?", a: "Süt ve su gibi tamamen sıvı ürünlerde kapalı fan kullanılarak maksimum basınç (mSS) elde edilir. Ancak meyve suyu (posalı) veya şıra gibi içerisinde küçük partiküller barındıran akışkanlarda tıkanmayı önlemek için açık fan tercih edilir." },
                    { q: "Pompanın kavitasyon yapması ne demektir?", a: "Pompanın emiş hattındaki sıvı yetersiz kaldığında veya boru çapı dar olduğunda akışkanın kaynama noktası düşer ve hava kabarcıkları oluşur. Bu kabarcıklar fan kanatlarına çarparak metali aşındırır. Mühendislerimiz düşük NPSH değerine sahip pompalar seçerek bu riski sıfırlar." },
                    { q: "Mekanik salmastra sızdırırsa ne yapmalıyım?", a: "Gıda pompalarımızda sızdırmazlık, örgülü ip yerine yüksek teknolojili Karbon/Silisyum Karbür mekanik salmastralarla sağlanır. Aşınma durumunda salmastra takımı tesisinizde dakikalar içinde kolayca değiştirilebilecek şekilde tasarlanmıştır." },
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

            <div className="mt-12 mb-8 bg-transparent">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight border-b-2 border-gray-200 pb-4">
                Örnek Uygulamalarımız
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "Süt Transfer Pompası" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Mekanik Salmastra Detayı" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Hijyenik Açık Fan Uygulaması" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "CIP Yıkama Hattı Pompası" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/pompalar/santrifuj/${item.src}`} 
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
                    <p className="text-xs text-gray-500 tracking-widest">DOK-10 PDF Şartname</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Santrifüj pompa performans eğrileri, NPSH değerleri ve mekanik salmastra malzeme uyumluluk tablosu.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-10-santrifuj-pompalar.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Eğrileri İndir (PDF)
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">Öne Çıkan Referans</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image 
                    src="/assets/images/pompalar/santrifuj/referans.webp" 
                    alt="Süt Transfer Hattı Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Günde 500 ton çiğ süt işleyen tesis için paslanmaz kapaklı, 40 m³/h kapasiteli CIP uyumlu santrifüj pompa bataryası."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-[#E35205]" />
                  Pompa Seçimi
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Sıvının cinsi, debi talebiniz ve boru hattı uzunluğunu bize iletin, en verimli motor ve fan çapını hesaplayalım.</p>
                <a 
                  href="https://wa.me/905324125152?text=Merhaba,%20santrifüj%20pompa%20kapasite%20hesaplaması%20ve%20fiyat%20almak%20istiyorum." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#E35205] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md"
                >
                  Debi Hesaplama →
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}