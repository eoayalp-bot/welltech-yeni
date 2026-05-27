import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Droplets, FlaskConical, Target, ThermometerSun, BookOpenCheck } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Azot Yastıklamalı Zeytinyağı Depolama Tankları | Welltech®",
    description: "Inert gaz teknolojisi ile oksidasyonu sıfıra indiren, 150 tona kadar kapasiteli, konik taban paslanmaz zeytinyağı tankları.",
  };
}

export default async function OliveOilTanksPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Azot Yastıklamalı Zeytinyağı Depolama Tankları",
    "image": "https://www.welltech.com/assets/images/paslanmaz-tanklar/zeytinyagi/banner.webp",
    "description": "Inert gaz teknolojisi ile oksidasyonu sıfıra indiren, 150 tona kadar kapasiteli, konik taban paslanmaz zeytinyağı tankları.",
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
            alt="Zeytinyağı Depolama Tesisleri" 
            fill 
            priority 
            className="object-cover" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-[#005284]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${lang}/paslanmaz-tanklar`} className="hover:text-white transition-colors">Paslanmaz Tanklar</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">Zeytinyağı Tankları</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Zeytinyağı Depolama Sistemleri
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Değerli hasadınızı yıllarca ilk günkü nefasetiyle korumak için azot yastıklama teknolojisi. 150 ton kapasiteye kadar özel projelendirilen paslanmaz çözümler.
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
                  Mühendislik Harikası Depolama
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Zeytinyağı depolamasında en büyük düşman hava (oksijen) ve ışıktır. Welltech® tankları, içerideki havayı tahliye edip yerine Azot (Nitrojen) gazı basmaya uygun özel armatürlerle donatılmıştır. Bu teknoloji oksidasyonu sıfıra indirir. Küçük butik tesislerden 150 tonluk mega tesislere kadar tüm ihtiyaçlarınıza uygun konik veya düz tabanlı üretim yapmaktayız.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/paslanmaz-tanklar/zeytinyagi/tank.webp" 
                  alt="Paslanmaz Zeytinyağı Tankı" 
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
                          {text: "Azot Yastıklama (Inert) Sistemi", icon: <FlaskConical className="w-5 h-5 text-[#E35205]"/>},
                          {text: "150 Tona Kadar Kapasite Opsiyonu", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/>},
                          {text: "Tam Tahliyeli Konik Taban", icon: <Target className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Gıdaya Uygun AISI 304 / 316L", icon: <ShieldCheck className="w-5 h-5 text-[#005284]"/>},
                          {text: "Işık ve Isı İzolasyon Seçenekleri", icon: <ThermometerSun className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Numune Alma ve Seviye Vanaları", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/paslanmaz-tanklar/zeytinyagi/azot.webp" 
                      alt="Azot Armatürü ve Sistem Detayı" 
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
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Standart Kapasite ve Ölçüler</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Tablodaki değerler referans içindir. Welltech mühendislik ekibi tesisinize 150 tona kadar özel ölçülendirme yapar.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Hacim</th>
                        <th className="p-4 border-b">Çap (mm)</th>
                        <th className="p-4 border-b">Yükseklik (mm)</th>
                        <th className="p-4 border-b">Sac Kalınlığı</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    {[
                        {v: "3.000 L", d: "1.400", h: "2.000", t: "3 mm"},
                        {v: "5.000 L", d: "1.600", h: "2.500", t: "4 mm"},
                        {v: "10.000 L", d: "2.200", h: "2.750", t: "4 mm"},
                        {v: "15.000 L", d: "2.400", h: "3.300", t: "4 mm"},
                        {v: "20.000 L", d: "2.600", h: "4.000", t: "5 mm"},
                        {v: "25.000 L", d: "2.800", h: "4.200", t: "5 mm"},
                        {v: "50.000 L", d: "3.200", h: "6.500", t: "6 mm"},
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
                        <td className="p-4" colSpan={3}>Mega Saha Montajı Tank Bataryaları</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <FlaskConical className="w-6 h-6 text-[#E35205]" />
                  Zeytinyağı Depolaması FAQ
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "Neden zeytinyağı depolamasında azot kullanılır?", a: "Zeytinyağının hava (oksijen) ile teması acılaşmayı tetikler. Azot gazı havadan daha ağır olduğu için tankın içine basıldığında yağın üzerinde koruyucu bir yastık oluşturur." },
                    { q: "Konik taban mı yoksa düz taban mı seçmeliyim?", a: "Tortulu (taze) zeytinyağını dinlendirmek için tam konik taban tanklar tortuyu tek noktada toplayıp kolay tahliye sağlar. Tortudan arındırılmış yağlar için büyük tonajlı düz tabanlı tanklar uygundur." },
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

            {/* PREMIUM KURUMSAL VİTRİN GALERİSİ (Zeytinyağı) */}
            <div className="mt-12 mb-8 bg-transparent">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight border-b-2 border-gray-200 pb-4">
                Örnek Uygulamalarımız
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "Konik Taban Zeytinyağı Tankı" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Azot Yastıklama Sistemi Kurulumu" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Butik Üretim Tesis Kurulumu" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Mega Depolama Bataryası" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/paslanmaz-tanklar/zeytinyagi/${item.src}`} 
                      alt={item.alt} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                    />
                    {/* Siyah Gradient Geçiş */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* PROJE Metni */}
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <span className="block text-white text-lg font-black tracking-widest drop-shadow-lg transform translate-y-1 group-hover:-translate-y-1 transition-transform duration-300">
                        {item.title}
                      </span>
                      {/* Üzerine gelince alttan çıkan turuncu çizgi efekti */}
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
                    <p className="text-xs text-gray-500 tracking-widest">DOK-02 PDF Dökümanı</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Boyutlandırma, sac kalınlıkları, konik taban açıları ve azot armatür detaylarını içeren döküman.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-02-zeytinyagi-tanklari-tr.pdf" 
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
                    src="/assets/images/paslanmaz-tanklar/zeytinyagi/referans.webp" 
                    alt="Zeytinyağı Tesisi Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">Büyük ölçekli zeytinyağı üretim tesisi için konik tabanlı, azot yastıklamalı ve tam otomasyonlu paslanmaz çelik tank bataryası.</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#E35205]" />
                  Özel Projeniz mi var?
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">150 Tona kadar olan azot yastıklamalı tank bataryaları için mühendislerimizden projelendirme desteği alın.</p>
                <a 
                  href="https://wa.me/905324125152?text=Merhaba,%20zeytinyağı%20depolama%20tankları%20hakkında%20teknik%20bilgi%20ve%20fiyat%20almak%20istiyorum." 
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