import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Database, Activity, ShieldCheck, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Welltech® | İleri Teknoloji Proses ve Depolama Çözümleri",
    description: "Gıda, İlaç ve Kimya Sektörleri İçin Uçtan Uca Mühendislik, Akıllı Tank Sistemleri ve Hijyenik Akışkan Transferi.",
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#E35205] selection:text-white font-sans">
      
      <section className="relative h-[90vh] min-h-[600px] flex items-center px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/ana-sayfa/banner.webp"
            alt="Welltech Endüstriyel Tesisler"
            fill
            priority
            className="object-cover transition-transform duration-[3000ms] scale-105 hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-black/70 to-transparent z-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E35205] animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-white">Global Mühendislik Çözümleri</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-lg leading-[1.1]">
              İleri Teknoloji <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E35205] to-[#ff7a33]">Proses ve Depolama</span><br />
              Çözümleri
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 font-medium mb-10 leading-relaxed max-w-2xl">
              Gıda, İlaç ve Kimya Sektörleri İçin Uçtan Uca Mühendislik, Akıllı Tank Sistemleri ve Hijyenik Akışkan Transferi.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link 
                href={`/${lang}/proses-sistemleri`}
                className="group flex items-center justify-center gap-2 bg-[#E35205] text-white px-8 py-4 rounded font-bold tracking-widest hover:bg-white hover:text-[#E35205] transition-all duration-300 shadow-[0_0_20px_rgba(227,82,5,0.4)]"
              >
                Sistemleri İncele
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href={`/${lang}/iletisim`}
                className="group flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded font-bold tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Mühendise Danış
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 relative z-30 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
              Ana Uzmanlık Alanlarımız
            </h2>
            <div className="w-24 h-1.5 bg-[#E35205] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Tesisinizin ihtiyaç duyduğu en zorlu termodinamik ve akışkan süreçleri için uluslararası standartlarda (ASME, EHEDG, ATEX) üretim yapıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#005284] transition-colors duration-300">
                <Database className="w-8 h-8 text-[#005284] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">Paslanmaz Tanklar</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Gıda, ilaç ve kimya sanayisine özel; ısıtma ceketli, izolasyonlu veya tek cidarlı yüksek kapasiteli depolama ve dinlendirme siloları.
              </p>
              <Link href={`/${lang}/paslanmaz-tanklar`} className="inline-flex items-center gap-2 text-sm font-bold text-[#005284] tracking-widest group-hover:text-[#E35205] transition-colors">
                Kataloğu Gör <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-50 to-transparent -z-10 rounded-bl-full opacity-50"></div>
              <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#E35205] transition-colors duration-300">
                <Activity className="w-8 h-8 text-[#E35205] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">Proses Sistemleri</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Zorlu reaksiyonlar için karıştırıcılı reaktörler, homojenizatörler, biyoreaktörler ve tak-çalıştır (skid) mobil proses üniteleri.
              </p>
              <Link href={`/${lang}/proses-sistemleri`} className="inline-flex items-center gap-2 text-sm font-bold text-[#E35205] tracking-widest hover:text-[#005284] transition-colors">
                İncele <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-colors duration-300">
                <ShieldCheck className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">Hijyenik Pompalar</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Sıfır partikül hasarı gerektiren akışkanlar için paslanmaz Lobe pompalar, santrifüj pompalar ve esnek pervaneli transfer çözümleri.
              </p>
              <Link href={`/${lang}/pompalar`} className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 tracking-widest group-hover:text-[#E35205] transition-colors">
                Modelleri Gör <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#005284] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
              Tesisinizi Geleceğe <br />
              <span className="text-[#E35205]">Bizimle Taşıyın.</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
              Anahtar teslim (Turnkey) fabrika kurulumları, kapasite artırım projeleri ve özel mühendislik gerektiren hat otomasyonlarınız için teknik ekibimizle tanışın.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "3D Tesis Projelendirme ve P&ID Dizaynı",
                "Uluslararası Sertifikasyon (CE, ATEX, EHEDG)",
                "Yerinde Montaj, Devreye Alma ve FAT/SAT Testleri"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#E35205] flex items-center justify-center shrink-0">
                    <CheckCircleIcon className="w-4 h-4 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              href={`/${lang}/iletisim`}
              className="inline-flex items-center gap-3 bg-white text-[#005284] px-8 py-4 rounded font-black tracking-widest hover:bg-[#E35205] hover:text-white transition-all duration-300 shadow-xl"
            >
              Proje Ekibine Ulaşın
            </Link>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 hidden md:block">
            <Image 
              src="/assets/images/ana-sayfa/proje.webp" 
              alt="Anahtar Teslim Fabrika Projesi" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#005284] mix-blend-overlay opacity-40"></div>
          </div>
        </div>
      </section>

    </div>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}