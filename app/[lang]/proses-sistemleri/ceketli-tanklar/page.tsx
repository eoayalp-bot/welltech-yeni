import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Activity, Thermometer, ThermometerSun, Snowflake, Layers } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Isıtma ve Soğutma Ceketli Tanklar | Welltech®",
    description: "Roll-bond (dimple) ve yarım boru serpantin ceketli, yüksek termal verimliliğe sahip paslanmaz çelik ısıtmalı/soğutmalı proses tankları.",
  };
}

export default async function JacketedTanksPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Isıtma ve Soğutma Ceketli Tanklar",
    "image": "https://www.welltech.com/assets/images/proses-sistemleri/ceketli/banner.webp",
    "description": "Roll-bond (dimple) ve yarım boru serpantin ceketli, yüksek termal verimliliğe sahip paslanmaz çelik ısıtmalı/soğutmalı proses tankları.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Jacketed Tanks"
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
            src="/assets/images/proses-sistemleri/ceketli/banner.webp" 
            alt="Isıtma ve Soğutma Ceketli Tanklar" 
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
            <span className="text-[#E35205]">Ceketli Tanklar</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <ThermometerSun className="w-6 h-6 text-white" />
              <Snowflake className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Isıtma & Soğutma Ceketli Tanklar
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Hassas sıcaklık kontrolü gerektiren prosesleriniz için maksimum termal verimlilik. Roll-bond, yarım boru veya tam ceket teknolojisiyle donatılmış özel izolasyonlu sistemler.
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
                  Termodinamik Mühendisliği
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Üretim proseslerinde akışkanın doğru sıcaklıkta tutulması, son ürün kalitesini doğrudan belirler. Sistemlerimiz, içerisinden buhar, kızgın yağ, sıcak su veya glikol/buzlu su geçebilen özel ceketlerle tasarlanır. Düşük basınçlı soğutma prosesleri için <strong className="text-gray-900 font-semibold">Roll-Bond (Dimple)</strong> ceketleri tercih ederken, yüksek basınç ve buhar gerektiren ısıtma reaksiyonları için kaynatılmış <strong className="text-gray-900 font-semibold">Yarım Boru (Half-Pipe) Serpantin</strong> teknolojisini kullanıyoruz.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/proses-sistemleri/ceketli/serpantin.webp" 
                  alt="Yarım Boru ve Dimple Ceket Detayı" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Donanım ve İzolasyon Özellikleri</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "Lazer Kaynaklı Dimple Jacket", icon: <Layers className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Yarım Boru (Half-Pipe) Serpantin", icon: <Activity className="w-5 h-5 text-[#005284]"/>},
                          {text: "Taşyünü (Rockwool) İzolasyon", icon: <ThermometerSun className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Poliüretan İzolasyon (Soğutma)", icon: <Snowflake className="w-5 h-5 text-[#005284]"/>},
                          {text: "Tam Sızdırmaz Dış Kaplama Sacı", icon: <ShieldCheck className="w-5 h-5 text-[#E35205]"/>},
                          {text: "PT100 Termokupl Sıcaklık Sensörü", icon: <Thermometer className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/proses-sistemleri/ceketli/izolasyon.webp" 
                      alt="Tank İzolasyon Kesiti" 
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
                  src="/assets/images/proses-sistemleri/ceketli/cizim.webp" 
                  alt="Ceketli Tank Teknik Çizimi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Ceket Teknolojisi Seçim Tablosu</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Tesisinizdeki ısıtıcı/soğutucu akışkanın tipine ve basıncına göre mühendislerimiz en uygun ceket tipini belirler.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Ceket Tipi</th>
                        <th className="p-4 border-b">Kullanım Amacı</th>
                        <th className="p-4 border-b">Akışkan (Medyum)</th>
                        <th className="p-4 border-b">Çalışma Basıncı</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">Dimple (Roll-Bond)</td>
                        <td className="p-4">Hassas Soğutma</td>
                        <td className="p-4">Buzlu Su / Glikol</td>
                        <td className="p-4">Düşük / Orta (2-4 Bar)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">Yarım Boru Serpantin</td>
                        <td className="p-4">Hızlı Isıtma</td>
                        <td className="p-4">Buhar / Kızgın Yağ</td>
                        <td className="p-4">Yüksek (6-10+ Bar)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Tam Ceket (Full Jacket)</td>
                        <td className="p-4">Genel Isıtma/Soğutma</td>
                        <td className="p-4">Sıcak veya Soğuk Su</td>
                        <td className="p-4">Düşük (1-2 Bar)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">İçten Serpantinli</td>
                        <td className="p-4">Şok Isıtma/Soğutma</td>
                        <td className="p-4">Buhar / Su</td>
                        <td className="p-4">Orta / Yüksek</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#E35205]" />
                  Isıtma / Soğutma FAQ (SSS)
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "Neden buhar uygulamalarında Dimple Ceket yerine Yarım Boru kullanmalıyım?", a: "Buhar ve kızgın yağ çok yüksek basınca ve sıcaklığa sahiptir. Dimple (petekli) ceketler ince cidarlı olduğu için yüksek basınçta şişme veya deformasyon yapabilir. Yarım boru serpantinler ise tankın gövdesine kalın kaynaklarla sarıldığı için yüksek basınç mukavemetine sahiptir." },
                    { q: "Isı izolasyonu yapılmazsa ne olur?", a: "Tank ceketindeki enerji (sıcaklık veya soğukluk) sadece içindeki ürüne geçmek yerine havaya karışır. Bu durum enerji maliyetlerinizi korkunç boyutlara çıkarır ve proses süresini uzatır. Isıtma tanklarında yoğun taşyünü, soğutma tanklarında ise terlemeyi önleyen poliüretan izolasyon şarttır." },
                    { q: "Ceket alanı nasıl hesaplanıyor?", a: "Ceket alanı, tankın içindeki ürünün miktarına (kg), ürünün özgül ısısına, ilk sıcaklığına ve hedeflenen sıcaklığa ne kadar sürede (dakika/saat) ulaşması gerektiğine göre termodinamik mühendislik formülleriyle hesaplanır." },
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
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "Yarım Boru Ceketli Tank" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Dimple Ceket Soğutma" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Taşyünü İzolasyon Uygulaması" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Isıtmalı Proses Tank Bataryası" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/proses-sistemleri/ceketli/${item.src}`} 
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
                    <p className="text-xs text-gray-500 tracking-widest">DOK-05 PDF Dökümanı</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Termodinamik alan hesaplamaları, çalışma basınçları ve izolasyon kalınlıklarını içeren mühendislik şartnamesi.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-05-ceketli-tanklar-tr.pdf" 
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
                    src="/assets/images/proses-sistemleri/ceketli/referans.webp" 
                    alt="Isıtmalı Proses Projesi Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Gıda endüstrisinde buhar ısıtmalı, yarım boru serpantinli ve taşyünü izolasyonlu pişirme tankı bataryası."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#E35205]" />
                  Termal Hesaplama
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Prosesinizin hedeflenen süre ve sıcaklık değerlerine göre gereken ceket yüzey alanını hesaplamamız için bize ulaşın.</p>
                <a 
                  href="https://wa.me/905322830628?text=Merhaba,%20ısıtma%20soğutma%20ceketli%20tanklar%20için%20termodinamik%20hesaplama%20ve%20fiyat%20almak%20istiyorum." 
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