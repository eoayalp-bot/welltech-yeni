import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Activity, Thermometer, ThermometerSun, Snowflake, Layers, Droplets, Repeat, Gauge, Cpu, Factory, Settings } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Tam Otomatik CIP Sistemleri | Welltech®",
    description: "İlaç, gıda ve kimya tesisleri için hijyen standartlarını garanti altına alan, PLC kontrollü otomatik Clean-in-Place (Yerinde Yıkama) üniteleri.",
  };
}

export default async function CIPSystemsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tam Otomatik CIP (Clean-in-Place) Sistemleri",
    "image": "https://www.welltech.com/assets/images/proses-sistemleri/kategori-cip.webp",
    "description": "Tesisinizin hijyen standartlarını garanti altına alan, iletkenlik kontrollü ve PLC otomasyonlu Clean-in-Place (Yerinde Yıkama) sistemleri.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Cleaning & Hygiene Equipment"
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
            src="/assets/images/proses-sistemleri/kategori-cip.webp" 
            alt="Tam Otomatik CIP Sistemleri" 
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
            <span className="text-[#E35205]">CIP Sistemleri</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <Droplets className="w-6 h-6 text-white" />
              <Repeat className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Tam Otomatik CIP Sistemleri
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Tesisinizin hijyen standartlarını garanti altına alan, PLC kontrollü ve iletkenlik bazlı kimyasal dozajlamalı Clean-in-Place (Yerinde Yıkama) üniteleri.
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
                  İzlenebilir Hijyen Güvencesi
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Gıda, içecek ve ilaç üretim hatlarında çapraz kontaminasyonu önlemenin tek yolu validasyonu yapılabilen yıkama prosesleridir. Welltech CIP (Clean-in-Place) sistemleri, boru hatlarınızı ve tanklarınızı sökmeden, yüksek türbülanslı akış (min. 1.5 m/s) ile yıkar. Hatta geri dönen sıvının iletkenliği anlık olarak ölçülerek, asit ve kostik konsantrasyonları PLC üzerinden otomatik olarak dozaj pompalarıyla tamamlanır. Su ve enerji tasarrufu maksimum seviyede tutulur.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/proses-sistemleri/cip/proses.webp" 
                  alt="İletkenlik ve Dozaj Kontrolü" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Sistem ve Otomasyon Özellikleri</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "PLC & Dokunmatik HMI Ekran Kontrolü", icon: <Gauge className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Bağımsız Kostik ve Asit Dozaj Pompaları", icon: <Droplets className="w-5 h-5 text-[#005284]"/>},
                          {text: "Anlık İletkenlik (Conductivity) Ölçümü", icon: <Activity className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Isı Eşanjörü ile Otomatik Sıcaklık Kontrolü", icon: <Settings className="w-5 h-5 text-[#005284]"/>},
                          {text: "EHEDG Onaylı Hijyenik Santrifüj Pompalar", icon: <ShieldCheck className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Kayıt Edilebilir Yıkama Reçeteleri", icon: <FileText className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/proses-sistemleri/cip/otomasyon.webp" 
                      alt="Geri Kazanım Sistemi ve Otomasyon" 
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
                  src="/assets/images/proses-sistemleri/cip/cizim.webp" 
                  alt="Modüler Tasarım ve CIP P&ID Şeması" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">CIP İstasyon Modelleri</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Tesis ihtiyacına göre yıkama hatları eşzamanlı (multi-line) veya tek hat (single-line) olarak tasarlanabilir.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Konfigürasyon</th>
                        <th className="p-4 border-b">Tank İçeriği</th>
                        <th className="p-4 border-b">Tavsiye Edilen Sektör</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Mobil / 1 Tanklı CIP</td>
                        <td className="p-4">Su (Kayıp Yıkama)</td>
                        <td className="p-4">Şarap, Butik Üretim</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">2 Tanklı CIP Sistemi</td>
                        <td className="p-4">Kostik + Su</td>
                        <td className="p-4">Su, İçecek, Hafif Proses</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">3 Tanklı CIP Sistemi</td>
                        <td className="p-4">Kostik + Asit + Su</td>
                        <td className="p-4">Süt, Meyve Suyu, Gıda</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">4 Tanklı CIP Sistemi</td>
                        <td className="p-4">Kostik + Asit + Su + Geri Kazanım</td>
                        <td className="p-4">İlaç, Biyoteknoloji, Ağır Sanayi</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#E35205]" />
                  CIP Sistemleri Sıkça Sorulanlar
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "Yıkama sıvısının yeterli hıza ulaştığını nasıl garanti ediyorsunuz?", a: "Boru hatlarındaki hijyenin sağlanması için sıvının türbülanslı akışa geçmesi gerekir. Sisteme entegre edilen debimetreler (Flowmeter) sayesinde, yıkama akış hızı minimum 1.5 - 2.0 m/s aralığında sabit tutulur ve PLC üzerinden izlenir." },
                    { q: "Kimyasal solüsyonlar yeniden kullanılabiliyor mu?", a: "Evet, 3 ve 4 tanklı CIP sistemlerimizde geri kazanım (Recovery) döngüleri bulunur. Hattan dönen asit ve kostik solüsyonları iletkenlik sensörleri ile analiz edilir, konsantrasyonu düşmüşse dozajlanarak tekrar tanka alınır. Bu sayede ciddi bir kimyasal ve su tasarrufu sağlanır." },
                    { q: "Raporlama ve validasyon imkanı var mı?", a: "Tüm CIP operasyonları; süre, sıcaklık, iletkenlik ve debi verileriyle birlikte otomasyon panosuna kaydedilir. Denetimler için bu veriler USB veya ağ üzerinden PDF formatında çıktı alınarak tam izlenebilirlik sağlanır." },
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
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "4 Tanklı Otomatik CIP Ünitesi" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Dozaj Pompaları ve Kollektör Grubu" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Isı Eşanjörü Entegrasyonu" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Süt Tesisi Çoklu Yıkama Hattı" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/proses-sistemleri/cip/${item.src}`} 
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
                    <p className="text-xs text-gray-500 tracking-widest">DOK-16 PDF Şartname</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">CIP sistemi akış diyagramları, eşanjör kapasiteleri ve pnömatik vana matrisi teknik detayları.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-16-cip-sistemleri.pdf" 
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
                    src="/assets/images/proses-sistemleri/cip/referans.webp" 
                    alt="Süt Tesisi Yıkama Hattı Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Günde 200 ton süt işleyen entegre tesis için, 3 hatlı eşzamanlı (multi-line) çalışan tam otomatik 4 tanklı CIP geri kazanım sistemi kurulumu."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#E35205]" />
                  Proje Mühendisliği
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Tesisinizin kapasitesine ve yıkanacak hatların uzunluğuna en uygun CIP modülünü belirlemek için bize ulaşın.</p>
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