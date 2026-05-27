import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Settings, Activity, Droplets, Layers, Zap } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Pozitif Deplasmanlı ve Loblu Pompalar | Welltech®",
    description: "Bal, çikolata, salça ve kozmetik gibi yüksek vizkoziteli ürünler için ezmeden transfer sağlayan hijyenik loblu pompalar.",
  };
}

export default async function PositiveDisplacementPumpsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pozitif Deplasmanlı ve Loblu Pompalar",
    "image": "https://www.welltech.com/assets/images/pompalar/pozitif-deplasmanli/banner.webp",
    "description": "Bal, çikolata, salça ve kozmetik gibi yüksek vizkoziteli ürünler için ezmeden transfer sağlayan hijyenik loblu pompalar.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Positive Displacement Pumps"
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
            src="/assets/images/pompalar/pozitif-deplasmanli/banner.webp" 
            alt="Pozitif Deplasmanlı Pompalar" 
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
            <span className="text-[#E35205]">Pozitif Deplasmanlı Pompalar</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <Settings className="w-6 h-6 text-white" />
              <Layers className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Pozitif Deplasmanlı Pompalar
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Bal, çikolata, salça ve kozmetik ürünleri gibi yüksek viskoziteli akışkanları ezmeden, hücresel yapısını bozmadan transfer eden hijyenik loblu pompa sistemleri.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <Settings className="w-6 h-6 text-[#E35205]" />
                  Hassas ve Korumacı Transfer
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Santrifüj pompaların yüksek devirli fanları, bal veya çikolata gibi yoğun kıvamlı ürünleri parçalayarak kalitesini bozar. Pozitif deplasmanlı (Loblu) pompalarımız ise birbirine temas etmeden çok düşük devirlerde dönen paslanmaz loblar sayesinde akışkanı geniş odacıklar halinde taşır. Bu sayede, ürünün hücresel bütünlüğü (partikül, kıvam) kesinlikle bozulmaz. 100.000 cP viskoziteye kadar olan en yoğun ürünleri bile sabit ve yüksek basınçla hatta basabilir.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/pompalar/pozitif-deplasmanli/loblar.webp" 
                  alt="Loblu Rotor Sistemi Detayı" 
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
                          {text: "Düşük Devirli (Low-RPM) Transfer", icon: <Activity className="w-5 h-5 text-[#E35205]"/>},
                          {text: "AISI 316L Gıdaya Uygun Gövde ve Loblar", icon: <ShieldCheck className="w-5 h-5 text-[#005284]"/>},
                          {text: "Değişken Debiler İçin Redüktör & İnvertör", icon: <Zap className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Çikolata İçin Isıtma Ceketli Ön Kapak Opsiyonu", icon: <Droplets className="w-5 h-5 text-[#005284]"/>},
                          {text: "Çift Etkili Karbon Mekanik Salmastra", icon: <CheckCircle className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Tersine Döndürülebilir (İki Yönlü) Akış", icon: <Settings className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/pompalar/pozitif-deplasmanli/reduktor.webp" 
                      alt="Redüktörlü Motor Bağlantısı" 
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
                  src="/assets/images/pompalar/pozitif-deplasmanli/cizim.webp" 
                  alt="Loblu Pompa Teknik Çizimi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Loblu Pompa Kapasite Tablosu</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Viskozite (kıvam) arttıkça pompanın devir hızının düşürülmesi gerekir. Redüktör seçimi, transfer edeceğiniz spesifik ürüne (salça, bal, glikoz vb.) göre mühendislerimizce hesaplanır.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Seri No</th>
                        <th className="p-4 border-b">Maks. Debi (m³/h)</th>
                        <th className="p-4 border-b">Maks. Basınç (Bar)</th>
                        <th className="p-4 border-b">Bağlantı Çapı</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">WT-L 20</td>
                        <td className="p-4">3 - 5 m³/h</td>
                        <td className="p-4">5 - 10 Bar</td>
                        <td className="p-4">DN 40 / 1.5"</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">WT-L 40</td>
                        <td className="p-4">8 - 12 m³/h</td>
                        <td className="p-4">5 - 10 Bar</td>
                        <td className="p-4">DN 50 / 2.0"</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">WT-L 80</td>
                        <td className="p-4">18 - 25 m³/h</td>
                        <td className="p-4">5 - 12 Bar</td>
                        <td className="p-4">DN 65 / 2.5"</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">WT-L 150</td>
                        <td className="p-4">30 - 45 m³/h</td>
                        <td className="p-4">5 - 12 Bar</td>
                        <td className="p-4">DN 100 / 4.0"</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#E35205]" />
                  Pozitif Deplasman FAQ
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "Loblu pompalar CIP (Yerinde Yıkama) için uygun mudur?", a: "Evet, gıda ve ilaç sanayisi standartlarına (EHEDG ve 3A) uygun olarak tasarlandıklarından, boru hattı üzerinden gelen sıcak su ve kostik ile kendilerini mükemmel şekilde temizleyebilirler." },
                    { q: "Çikolata transferinde donmayı nasıl engelliyorsunuz?", a: "Çikolata ve bitkisel yağlar oda sıcaklığında donma eğilimi gösterir. Loblu pompalarımızın ön kapağına ceket opsiyonu ekleyerek, içerisinden sıcak su dolaştırıyor ve ürünün sıvı halde kalmasını garanti ediyoruz." },
                    { q: "Neden santrifüj pompalar balı basamaz?", a: "Santrifüj pompaların fanları yüksek hızda döner. Bal gibi yüksek viskoziteli bir akışkan fana çarptığında büyük bir direnç oluşturur, motoru yakabilir veya ürünün moleküler yapısını (kristallenme) bozabilir. Loblu pompalar bu yoğunluğu düşük devir ve yüksek tork ile yener." },
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
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "Hijyenik Loblu Pompa" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Bal Transfer Hattı" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Çikolata Pompası ve Ceketli Kapak" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Redüktör ve Motor Grubu" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/pompalar/pozitif-deplasmanli/${item.src}`} 
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
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Loblu pompa viskozite/devir diyagramları, ceketli kapak ölçüleri ve redüktör güç seçim tablosu.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-11-loblu-pompalar.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Diyagramları İndir (PDF)
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">Referans Uygulama</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image 
                    src="/assets/images/pompalar/pozitif-deplasmanli/referans.webp" 
                    alt="Kozmetik Transfer Hattı Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Vücut losyonu ve krem üretimi yapan tesis için hız kontrollü (invertörlü), çift loblu, 316L hijyenik deplasman pompası entegrasyonu."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#E35205]" />
                  Tork ve Güç Hesabı
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Transfer edeceğiniz ürünün cinsi ve yoğunluğunu (cP) bildirin, ürününüzü ezmeyecek en doğru redüktör tahrikli loblu pompayı seçelim.</p>
                <a 
                  href="https://wa.me/905324125152?text=Merhaba,%20yüksek%20viskoziteli%20ürünüm%20için%20loblu%20pompa%20kapasite%20hesaplaması%20ve%20fiyat%20almak%20istiyorum." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#E35205] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md"
                >
                  Fiyat Alın →
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}