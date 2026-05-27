import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Activity, Droplets, Zap, Gauge } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Monopomp (Eksantrik Vidalı) Pompalar | Welltech®",
    description: "Yüksek viskoziteli, çamur, bal ve aşındırıcı partiküllü akışkanlar için darbesiz ve kesintisiz transfer sağlayan rotor-stator monopomp sistemleri.",
  };
}

export default async function MonopompPumpsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Monopomp (Eksantrik Vidalı) Pompalar",
    "image": "https://www.welltech.com/assets/images/pompalar/monopomp_pompalar/banner.webp",
    "description": "Yüksek viskoziteli, çamur, bal ve aşındırıcı partiküllü akışkanlar için darbesiz ve kesintisiz transfer sağlayan rotor-stator monopomp sistemleri.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Progressive Cavity Pumps"
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
            src="/assets/images/pompalar/monopomp_pompalar/banner.webp" 
            alt="Monopomp (Eksantrik Vidalı) Pompalar" 
            fill 
            priority 
            className="object-cover transition-transform duration-[3000ms] scale-105" 
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
            <span className="text-[#E35205]">Monopomp Pompalar</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <Droplets className="w-6 h-6 text-white" />
              <Activity className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Monopomp Pompalar
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Sıvıların en zorlusu için tasarlandı. Eksantrik vidalı (Rotor-Stator) çalışma prensibi ile yüksek viskoziteli, aşındırıcı ve katı partiküllü ürünlerde sıfır titreşimli, sürekli akış.
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
                  Darbesiz ve Sürekli Transfer
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Monopomplar (Eksantrik Vidalı Pompalar), helezonik paslanmaz çelik bir rotorun, elastomerik (kauçuk) bir stator içinde dönmesi prensibiyle çalışır. Bu eşsiz geometri, sıvı içinde sürekli kapalı boşluklar (kaviteler) yaratarak akışkanı basınçla ileri iter. Su gibi akışkanlardan; hamur, bal, arıtma çamuru, meyve püresi, tutkal ve reçine gibi viskozitesi 1.000.000 cP'ye kadar olan ürünlerin transferinde hiçbir dalgalanma (pulsasyon) yapmadan kusursuz ve sabit debili bir akış sağlar.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/pompalar/monopomp_pompalar/rotor.webp" 
                  alt="Monopomp Rotor ve Stator Detayı" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Üstün Mekanik Özellikler</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "Düşük Sürtünme (Low Shear) Teknolojisi", icon: <CheckCircle className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Katı Partiküllü ve Çamur Transferi", icon: <Droplets className="w-5 h-5 text-[#005284]"/>},
                          {text: "NBR, EPDM, FKM, PTFE Stator Opsiyonu", icon: <ShieldCheck className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Hassas Oransal Dozajlama Kabiliyeti", icon: <Gauge className="w-5 h-5 text-[#005284]"/>},
                          {text: "12-24 Bar Yüksek Basınç Dayanımı", icon: <Zap className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Meyve ve Gıda Hücrelerini Ezmeyen Akış", icon: <Activity className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/pompalar/monopomp_pompalar/stator.webp" 
                      alt="Elastomer Stator ve Rotor" 
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
                  src="/assets/images/pompalar/monopomp_pompalar/cizim.webp" 
                  alt="Monopomp Basınç ve Kapasite Eğrisi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Monopomp Kapasite Tablosu</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Tablodaki değerler ortalama viskoziteli akışkanlar referans alınarak (12 Bar maks. basınca kadar) hesaplanmıştır. Redüktör devrine göre debi değişkenlik gösterir.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Seri No</th>
                        <th className="p-4 border-b">Maks. Debi (m³/h)</th>
                        <th className="p-4 border-b">Maks. Basınç</th>
                        <th className="p-4 border-b">Bağlantı Çapı</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">WT-M 05</td>
                        <td className="p-4">5 m³/h</td>
                        <td className="p-4">12 Bar</td>
                        <td className="p-4">2" İnç</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">WT-M 10</td>
                        <td className="p-4">10 m³/h</td>
                        <td className="p-4">12 Bar</td>
                        <td className="p-4">2.5" İnç</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">WT-M 20</td>
                        <td className="p-4">20 m³/h</td>
                        <td className="p-4">12 Bar</td>
                        <td className="p-4">3" İnç</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">WT-M 40</td>
                        <td className="p-4">40 m³/h</td>
                        <td className="p-4">12 Bar</td>
                        <td className="p-4">4" İnç</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <Gauge className="w-6 h-6 text-[#E35205]" />
                  Eksantrik Vidalı Pompa FAQ
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "Monopomplar susuz (kuru) çalışabilir mi?", a: "Hayır. Stator kısmı genellikle elastomer (kauçuk vb.) malzemeden üretildiği için, içerisinden akışkan (kaydırıcı) geçmediği durumlarda paslanmaz rotor statora sürtünerek aşırı ısınır ve statorun yanmasına sebep olur. Sistem mutlaka kuru çalışma koruma sensörleri ile donatılmalıdır." },
                    { q: "Katı partiküllü veya çekirdekli ürünleri basabilir mi?", a: "Kesinlikle. Monopompların en büyük gücü budur. Arıtma çamurları, çekirdekli meyve püreleri veya zeytin hamuru gibi partikül ve elyaf içeren ürünleri, rotor/stator boşluk geometrisi sayesinde tıkanmadan ve yapısını ezmeden transfer eder." },
                    { q: "Stator malzemesini neye göre seçiyoruz?", a: "Akışkanınızın kimyasal yapısına ve sıcaklığına göre. Süt ve bal gibi gıdalar için FDA uyumlu beyaz NBR veya EPDM; aşındırıcı agresif asit ve kimyasallar için ise FKM (Viton) veya PTFE (Teflon) stator tercih edilmektedir." },
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
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "Gıda Uyumlu Monopomp" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Arıtma Çamuru Pompası" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Rotor ve Stator Detayı" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Redüktörlü Monopomp Grubu" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/pompalar/monopomp_pompalar/${item.src}`} 
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
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Monopomp redüktör devir oranları, stator kimyasal dayanım tablosu ve basınç/debi ölçüm eğrileri.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-11-monopomp-pompalar.pdf" 
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
                    src="/assets/images/pompalar/monopomp_pompalar/referans.webp" 
                    alt="Ağır Hizmet Çamur Pompası Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Atıksu arıtma tesisinde %20 yoğunluklu aktif çamur transferi için FKM statorlu, 12 Bar basınca dayanıklı ağır hizmet tipi monopomp bataryası."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-[#E35205]" />
                  Monopomp Seçimi
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Akışkanınızın vizkozitesini (cP) ve partikül yoğunluğunu belirtin, en uygun rotor-stator ikilisini belirleyelim.</p>
                <a 
                  href="https://wa.me/905324125152?text=Merhaba,%20yüksek%20viskoziteli%20ürün%20transferi%20için%20monopomp%20fiyatı%20almak%20istiyorum." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#E35205] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md"
                >
                  Mühendislik Desteği →
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}