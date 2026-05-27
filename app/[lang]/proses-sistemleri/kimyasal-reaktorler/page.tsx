import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldAlert, Zap, Thermometer, Activity, Settings, ShieldCheck } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Kimyasal ve İlaç Reaktörleri | Welltech®",
    description: "10 Bar basınca ve tam vakuma dayanıklı, 316Ti / Hastelloy alaşımlı, ATEX standartlarında ex-proof üretim reaktörleri.",
  };
}

export default async function ReactorsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kimyasal ve İlaç Reaktörleri",
    "image": "https://www.welltech.com/assets/images/proses-sistemleri/kategori-reaktor.webp",
    "description": "10 Bar basınca ve tam vakuma dayanıklı, 316Ti / Hastelloy alaşımlı, ATEX standartlarında ex-proof ağır hizmet reaktörleri.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Chemical Reactors"
  };

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/proses-sistemleri/kategori-reaktor.webp" 
            alt="Kimyasal ve İlaç Reaktörleri"
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto w-full mt-16">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${lang}/proses-sistemleri`} className="hover:text-white transition-colors">Proses Sistemleri</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">Kimyasal Reaktörler</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
            Kimyasal ve İlaç Reaktörleri
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            10 Bar basınca ve tam vakuma dayanıklı, 316Ti / Hastelloy alaşımlı, ATEX standartlarında ex-proof tam otomasyonlu ağır hizmet reaktörleri.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-8 h-8 text-[#E35205]" />
                  <h2 className="text-2xl font-black text-gray-900 tracking-tight">Kritik Proses Kontrolü</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Polimerizasyon, kristalizasyon ve agresif kimyasal sentezler standart depolama tanklarında yapılamaz. Welltech® Kimyasal Reaktörleri, değişken vizkozitelerdeki ürünleri homojenize etmek ve endotermik/ekzotermik reaksiyonların ısısını anında transfer etmek için <strong>ASME VIII Div.1</strong> standartlarında projelendirilir.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Gövde üzerinde standart olarak sunulan <strong>Yarım Boru Serpantin (Half-Pipe Jacket)</strong> teknolojisi, klasik ceketlere göre termal şoklara ve yüksek buhar basıncına karşı %40 daha fazla dayanım sağlar.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/proses-sistemleri/reaktor/proses.webp" 
                  alt="Yarım Boru Serpantin ve Reaktör Gövdesi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Donanım ve Güvenlik</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { text: "Tam Vakum ve 10 Bar Basınç Dayanımı", icon: <Activity className="w-5 h-5 text-[#E35205]"/> },
                          { text: "316Ti veya Hastelloy C22 Malzeme", icon: <ShieldAlert className="w-5 h-5 text-[#005284]"/> },
                          { text: "Mekanik Salmastra Sızdırmazlık", icon: <Settings className="w-5 h-5 text-[#E35205]"/> },
                          { text: "ATEX Zone 1/2 Uyumlu Ex-Proof Motor", icon: <Zap className="w-5 h-5 text-[#005284]"/> },
                          { text: "Oransal Kontrollü Isıtma/Soğutma", icon: <Thermometer className="w-5 h-5 text-[#E35205]"/> },
                          { text: "%100 RT ve UT Kaynak Raporlaması", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/> }
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
                      src="/assets/images/proses-sistemleri/reaktor/donanim.webp" 
                      alt="Ex-Proof Motor ve Reaktör Donanımı" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                    />
                  </div>
                </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-3 gap-8 items-center">
              <div className="relative h-64 sm:h-96 w-full overflow-hidden border border-gray-100 rounded-lg shadow-sm group">
                <Image 
                  src="/assets/images/proses-sistemleri/reaktor/cizim.webp" 
                  alt="Kimyasal Reaktör Teknik Çizimi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-black text-gray-900 mb-6 tracking-tight border-b pb-4">Standart Reaktör Kapasite Tablosu</h3>
                <p className="text-xs text-gray-400 mb-6 italic leading-relaxed">* Tablodaki değerler referans amaçlıdır. Welltech, fabrikanızın tavan yüksekliği ve tesisat hatlarına göre özel mühendislik ölçüleri çalışmaktadır.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest border-b-2 border-gray-200">
                      <th className="p-4">Çalışma Hacmi</th>
                      <th className="p-4">Tasarım Basıncı</th>
                      <th className="p-4">Isıtma Tipi</th>
                      <th className="p-4">Karıştırıcı Tipi</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-[#005284]">1.000 Litre</td>
                      <td className="p-4">-1 / +6 Bar</td>
                      <td className="p-4">Yarım Boru / Elektrikli</td>
                      <td className="p-4">Çapa (Anchor) / Pervane</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-[#005284]">5.000 Litre</td>
                      <td className="p-4">-1 / +8 Bar</td>
                      <td className="p-4">Yarım Boru Serpantin</td>
                      <td className="p-4">Sıyırıcılı Çapa Tipi</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-[#E35205]">10.000 Litre</td>
                      <td className="p-4">-1 / +10 Bar</td>
                      <td className="p-4">Yarım Boru + İç Serpantin</td>
                      <td className="p-4">Türbin / Disperser</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-900">25.000 Litre</td>
                      <td className="p-4">-1 / +10 Bar</td>
                      <td className="p-4">Yarım Boru Serpantin</td>
                      <td className="p-4">Çift Yönlü Çapa Tipi</td>
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
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "10 Bar Dayanımlı Reaktör Üretimi" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "Yarım Boru Serpantin İmalatı" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "ATEX Ex-Proof Motor Entegrasyonu" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Petrokimya Reaktör Bataryası Kurulumu" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/proses-sistemleri/reaktor/${item.src}`} 
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

          <div className="lg:col-span-1 space-y-8">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#E35205]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-[#005284]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Teknik Şartname</h4>
                    <p className="text-[10px] text-gray-500 tracking-widest">WLL-RX-01 PDF</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">ASME malzeme kodları, kaynak kalınlıkları ve motor kw hesaplamalarını içeren mühendislik dökümanı.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/WLL-RX-01-reaktorler-tr.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  PDF Şartname İndir
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">Öne Çıkan Referans</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image 
                    src="/assets/images/proses-sistemleri/reaktor/referans.webp" 
                    alt="Petrokimya Reaktör Projesi Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Petrokimya tesisi için 25.000 Litre kapasiteli, Hastelloy C276 alaşımlı ve 10 Bar basınca dayanıklı polimerizasyon reaktörü teslimatı."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-8 rounded-xl shadow-lg text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
                <h4 className="font-black text-xl mb-3 relative z-10 tracking-tight">Özel Proses İhtiyacınız mı Var?</h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed relative z-10">
                  Agresif korozyon yaratan akışkanlar veya yüksek tork gerektiren vizkoziteler için Hastelloy alaşımlar ile özel projelendirme yapıyoruz.
                </p>
                <Link 
                  href={`/${lang}/iletisim`}
                  className="w-full block text-center bg-[#E35205] text-white px-4 py-4 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md relative z-10"
                >
                  Mühendise Danışın
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}