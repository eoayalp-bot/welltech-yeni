import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Building2, Target, ShieldCheck, Globe, MapPin } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Hakkımızda | Welltech®",
    description: "İzmir'den dünyaya uluslararası standartlarda paslanmaz çelik proses ve depolama teknolojileri.",
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Welltech® International Engineering",
      "description": "İzmir'den 6 kıtaya; gıda, kimya ve ilaç sanayisi için uluslararası standartlarda (ASME, PED) paslanmaz çelik proses ve depolama teknolojileri üretiyoruz.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kemalpaşa, İzmir",
        "addressCountry": "TR"
      },
      "industry": "Industrial Engineering & Manufacturing"
    }
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
            src="/assets/images/kurumsal/hakkimizda-banner.webp"
            alt="Welltech International Engineering Fabrikası"
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto w-full mt-16">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">Kurumsal</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Hakkımızda</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
            Mühendisliğin <span className="text-[#E35205]">Gücü</span>
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            İzmir'den dünyaya; gıda, kimya ve ilaç sanayisi için uluslararası standartlarda (ASME, PED) paslanmaz çelik proses ve depolama teknolojileri üretiyoruz.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="bg-white p-8 md:p-16 rounded-xl shadow-xl border border-gray-100">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <Building2 className="w-8 h-8 text-[#005284]" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">Köklerimiz</h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed text-base">
                <p>
                  Türkiye'nin sanayi başkentlerinden İzmir, Kemalpaşa Organize Sanayi Bölgesi'nde yer alan üretim tesisimizde, mühendislik gücümüzü uluslararası standartlarla birleştirerek endüstriyel proses ve depolama çözümleri tasarlıyoruz.
                </p>
                <p>
                  Welltech® International Engineering olarak sadece bir makine veya tank üreticisi değiliz. Projelerinizin başlangıcından devreye alınmasına kadar yanınızda olan güvenilir bir çözüm ortağıyız. Entegre tesis kurulumlarından, çok spesifik ekipman ihtiyaçlarına kadar her aşamada "Avrupa Kalitesi" ve "İş Güvenliğini" merkeze alıyoruz.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group">
                <Image 
                  src="/assets/images/kurumsal/fabrika-1.webp" 
                  alt="Welltech Fabrika İçi Üretim" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group sm:mt-12">
                <Image 
                src="/assets/images/kurumsal/fabrika-2.webp" 
                alt="Mühendislik ve Tasarım Ofisi" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

          </div>

          {/* İZMİR'DEN 6 KITA GLOBAL SEVKİYAT GÖRSEL PANELİ (ENTERPRISE DOKUNUŞI) */}
          <div className="mt-20 relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl group cursor-pointer border border-gray-100">
             <Image 
                src="/assets/images/kurumsal/6-kita-global-sevkiyat.webp" 
                alt="İzmir'den 6 Kıta'ya Global Mühendislik Sevkiyatı" 
                fill 
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105" 
                sizes="100vw" 
             />
             <div className="absolute inset-0 bg-black/50 z-10"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
             
             <div className="absolute bottom-0 left-0 p-8 lg:p-12 z-20 w-full max-w-xl">
                 <div className="flex items-center gap-3 mb-4 transform translate-y-1 group-hover:-translate-y-1 transition-transform">
                     <MapPin className="w-6 h-6 text-[#E35205]" />
                     <span className="text-xl md:text-2xl font-black text-white tracking-tight">İzmir'den 6 Kıta'ya...</span>
                 </div>
                 <p className="text-gray-200 leading-relaxed text-xs sm:text-sm transform translate-y-1 group-hover:-translate-y-1 transition-transform">
                     Türkiye'deki üretim üssümüzden, 6 kıtada 30'dan fazla ülkeye uluslararası (ASME & PED) standartlarında mühendislik çözümleri fışkırtıyoruz. Her teslimat, global güvenin bir eseridir.
                 </p>
                 <div className="h-1 w-8 bg-[#E35205] mt-6 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-[#005284] transition-colors group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-[#E35205]" />
              </div>
              <h3 className="text-xl font-black text-gray-900 tracking-tight mb-4">Misyonumuz</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Müşterilerimizin operasyonel verimliliğini artıran, uzun ömürlü, enerji tasarruflu ve hijyenik proses teknolojileri üretmek; üretim bandında sıfır hata prensibiyle endüstriye hizmet etmek.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-[#005284] transition-colors group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-[#005284]" />
              </div>
              <h3 className="text-xl font-black text-gray-900 tracking-tight mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Gıda, kimya, petrokimya ve ilaç sanayisinde 6 kıtada en çok güvenilen, mühendislik dendiğinde akla gelen ilk Türk paslanmaz çelik teknoloji ve proses markası olmak.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-[#005284] transition-colors group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 text-[#E35205]" />
              </div>
              <h3 className="text-xl font-black text-gray-900 tracking-tight mb-4">Kalite Anlayışımız</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Tüm süreçlerimiz uluslararası sertifikasyonlara tabidir. Kaynak penetrasyonlarından yüzey pürüzlülük (Ra) testlerine kadar her teknik detay, alanında uzman mühendislerimiz tarafından doğrulanarak teslim edilir.
              </p>
            </div>

          </div>

          <div className="mt-20 bg-gray-900 rounded-2xl p-10 lg:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#005284] via-transparent to-transparent"></div>
            
            <div className="relative z-10 mb-8 md:mb-0 max-w-2xl">
              <h4 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-4">Projelerinizi Birlikte İnşa Edelim</h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Fabrikanızın modernizasyonu, kapasite artırımı veya sıfırdan tesis kurulumu için tecrübeli mühendislik ekibimizle tanışın.
              </p>
            </div>

            <Link 
              href={`/${lang}/iletisim`} 
              className="relative z-10 shrink-0 bg-[#E35205] text-white px-8 py-4 rounded-xl text-sm font-bold tracking-widest hover:bg-white hover:text-[#E35205] transition-colors shadow-lg"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}