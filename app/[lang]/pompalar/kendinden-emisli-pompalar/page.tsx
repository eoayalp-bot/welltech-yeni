import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Wind, Activity, ArrowUpFromLine, RefreshCw } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Kendinden Emişli Hijyenik Pompalar | Welltech®",
    description: "Hava ve gaz karışımlı sıvıların, köpüklü ürünlerin ve CIP dönüş hatlarının transferi için sıvı halkalı kendinden emişli paslanmaz pompalar.",
  };
}

export default async function SelfPrimingPumpsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kendinden Emişli Pompalar",
    "image": "https://www.welltech.com/assets/images/pompalar/kendinden-emisli/banner.webp",
    "description": "Hava ve gaz karışımlı sıvıların, köpüklü ürünlerin ve CIP dönüş hatlarının transferi için sıvı halkalı kendinden emişli paslanmaz pompalar.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Self-Priming Pumps"
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
            src="/assets/images/pompalar/kendinden-emisli/banner.webp" 
            alt="Kendinden Emişli Pompalar" 
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
            <span className="text-[#E35205]">Kendinden Emişli Pompalar</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <ArrowUpFromLine className="w-6 h-6 text-white" />
              <Wind className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Kendinden Emişli Pompalar
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Emme hattında hava olsa dahi vakum yaratarak akışı kesintiye uğratmayan, CIP dönüş hatlarının ve köpüklü sıvıların vazgeçilmez sıvı halkalı transfer teknolojisi.
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
                  Hava ve Sıvı Karışımında Güç
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Standart santrifüj pompalar, boru hattında veya tankın dibinde hava boşluğu oluştuğunda kavitasyona uğrar ve transferi durdurur. Kendinden emişli (Yan Kanallı / Sıvı Halkalı) pompalarımız, özel yıldız fan (impeller) dizaynı sayesinde içerdeki sıvı ile havayı karıştırarak bir vakum oluşturur. Hatta hava olsa dahi emiş yapabilen bu teknoloji; özellikle tanktan kamyona ürün çekerken, peynir altı suyu gibi köpüklü ürünlerde ve CIP yıkama sıvılarının sisteme geri dönüşünde (CIP Return) kullanılır.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/pompalar/kendinden-emisli/fan.webp" 
                  alt="Sıvı Halkalı Yıldız Fan Sistemi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Teknik Donanım ve Kapasite</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "8 Metreye Kadar Derin Emiş Kapasitesi", icon: <ArrowUpFromLine className="w-5 h-5 text-[#E35205]"/>},
                          {text: "AISI 316L Hassas Döküm Açık Yıldız Fan", icon: <ShieldCheck className="w-5 h-5 text-[#005284]"/>},
                          {text: "Köpüklü (Gaz İçeren) Akışkan Uyumu", icon: <Wind className="w-5 h-5 text-[#E35205]"/>},
                          {text: "CIP Dönüş (Return) Pompası Olarak İdeal", icon: <RefreshCw className="w-5 h-5 text-[#005284]"/>},
                          {text: "İki Yönlü (Reversible) Çalışabilme Seçeneği", icon: <Activity className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Kolay Sökülebilir Ön Kapak Tasarımı", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/pompalar/kendinden-emisli/motor.webp" 
                      alt="Çift Yönlü Motor ve Gövde" 
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
                  src="/assets/images/pompalar/kendinden-emisli/cizim.webp" 
                  alt="Emiş Eğrisi ve Pompa Çizimi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Performans ve Seçim Tablosu</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Pompanın emiş yapabilmesi için pompa gövdesinde bir miktar sıvı bulunması gerekir (priming liquid). Tablodaki değerler 1 cP viskoziteye göre hidrolik mühendislerimizce belirlenmiştir.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Seri No</th>
                        <th className="p-4 border-b">Maks. Debi (m³/h)</th>
                        <th className="p-4 border-b">Emiş / Basma (mSS)</th>
                        <th className="p-4 border-b">Motor Gücü (kW)</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">WT-SP 15</td>
                        <td className="p-4">15 m³/h</td>
                        <td className="p-4">-7 m / 25 mSS</td>
                        <td className="p-4">2.2 - 3.0 kW</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">WT-SP 30</td>
                        <td className="p-4">30 m³/h</td>
                        <td className="p-4">-7 m / 32 mSS</td>
                        <td className="p-4">4.0 - 5.5 kW</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">WT-SP 50</td>
                        <td className="p-4">50 m³/h</td>
                        <td className="p-4">-8 m / 35 mSS</td>
                        <td className="p-4">7.5 - 11.0 kW</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">WT-SP 70</td>
                        <td className="p-4">70 m³/h</td>
                        <td className="p-4">-8 m / 40 mSS</td>
                        <td className="p-4">15.0 - 18.5 kW</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <ArrowUpFromLine className="w-6 h-6 text-[#E35205]" />
                  Vakum Transfer FAQ
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "CIP Return (Yıkama Dönüş) pompası olarak neden santrifüj kullanılamaz?", a: "CIP işlemi sırasında tanktan dönen kimyasal sıvının içinde yoğun miktarda hava ve köpük bulunur. Santrifüj pompa havayı görünce akışı keser ve yıkama hattı tıkanır. Kendinden emişli pompa sıvı-hava karışımını yutarak sisteme basabilir." },
                    { q: "İlk çalıştırmada (Priming) neden içine sıvı koymak zorundayız?", a: "Pompa gövdesinde sıvı halkası oluşabilmesi ve içerdeki havayı vakumlayarak atabilmesi için gövdenin bir kısmının baştan sıvı ile dolu olması gerekmektedir." },
                    { q: "Kamyondan veya yer altı tankından süt çekebilir miyim?", a: "Kesinlikle. Emme borusu yerin 7-8 metre altında dahi olsa, pompa vakum yaratarak sıvıyı yukarı çeker ve ana tanklara basar. Yüzeyüstü transferlerde kurtarıcıdır." },
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
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "CIP Dönüş Pompası Montajı" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Sıvı Halkalı Fan Tasarımı" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Yer Altı Tankından Ürün Çekme" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Süt ve Köpük Transfer Hattı" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/pompalar/kendinden-emisli/${item.src}`} 
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
                    <p className="text-xs text-gray-500 tracking-widest">DOK-11 PDF Şartname</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Vakum / emiş derinlik grafikleri, sıvı halkalı fan toleransları ve mekanik bağlantı ölçüleri.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-11-kendinden-emisli-pompalar.pdf" 
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
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">Referans Uygulama</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image 
                    src="/assets/images/pompalar/kendinden-emisli/referans.webp" 
                    alt="CIP Return Otomasyonu" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Büyük ölçekli meyve suyu tesisi için köpüklü asit ve kostik dönüş hatlarına entegre edilmiş 30 m³/h kapasiteli CIP dönüş pompaları."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <ArrowUpFromLine className="w-5 h-5 text-[#E35205]" />
                  Vakum Hesabı
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Emme derinliğinizi (eksi kot) ve boru hattındaki hava oranını iletin, ürününüzü kavitasyonsuz taşıyacak sistemi projelendirelim.</p>
                <a 
                  href="https://wa.me/905324125152?text=Merhaba,%20kendinden%20emişli%20ve%20CIP%20dönüş%20pompası%20hakkında%20teknik%20hesaplama%20ve%20fiyat%20almak%20istiyorum." 
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