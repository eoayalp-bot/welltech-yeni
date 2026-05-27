import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ShieldCheck, Factory, CheckCircle, Globe } from 'lucide-react';
import { getDictionary } from '../../dictionaries/getDictionary';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  // Çeviri motorunu ateşliyoruz!
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Welltech® International Engineering | Proses ve Depolama Teknolojileri",
    "description": "Gıda, kimya ve ilaç sanayisi için uluslararası ASME ve PED standartlarında tasarlanmış; 150 tona varan mega kapasiteli paslanmaz çelik çözümler.",
    "publisher": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    }
  };

  const services = [
    {
      title: dict.home.services.items[0].title,
      desc: dict.home.services.items[0].desc,
      image: "/assets/images/ana-sayfa/hizmet-depolama.webp",
      link: "/paslanmaz-tanklar/depolama-tanklari"
    },
    {
      title: dict.home.services.items[1].title,
      desc: dict.home.services.items[1].desc,
      image: "/assets/images/ana-sayfa/hizmet-proses.webp",
      link: "/proses-sistemleri/karistiricili-tanklar"
    },
    {
      title: dict.home.services.items[2].title,
      desc: dict.home.services.items[2].desc,
      image: "/assets/images/ana-sayfa/hizmet-mobil.webp",
      link: "/proses-sistemleri/kimyasal-reaktorler"
    },
    {
      title: dict.home.services.items[3].title,
      desc: dict.home.services.items[3].desc,
      image: "/assets/images/ana-sayfa/hizmet-sut.webp", 
      link: "/paslanmaz-tanklar/sut-tanklari"
    }
  ];

  return (
    <div className="bg-gray-50 pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/ana-sayfa/hero-bg.webp"
            alt="Welltech Industrial Plant"
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto mt-16">
          <span className="inline-block px-4 py-1.5 bg-[#E35205] text-white text-[10px] sm:text-xs font-bold tracking-[0.4em] mb-6 shadow-lg">
            {dict.home.hero.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1] drop-shadow-2xl">
            {dict.home.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-2xl">
            {dict.home.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={`/${lang}/iletisim`} 
              className="w-full sm:w-auto inline-block bg-[#E35205] text-white px-8 sm:px-10 py-4 rounded-sm font-bold text-sm tracking-widest hover:bg-white hover:text-[#E35205] transition-all duration-300 shadow-2xl hover:shadow-[#E35205]/20 hover:-translate-y-1"
            >
              {dict.home.hero.btn1}
            </Link>
            <Link 
              href={`/${lang}/dokumanlar`} 
              className="w-full sm:w-auto inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 sm:px-10 py-4 rounded-sm font-bold text-sm tracking-widest hover:bg-white/20 transition-all duration-300 shadow-xl"
            >
              {dict.home.hero.btn2}
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-30 -mt-12 sm:-mt-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white shadow-2xl border border-gray-100 rounded-xl overflow-hidden divide-x divide-y md:divide-y-0 divide-gray-50">
          {dict.home.stats.map((stat: any, i: number) => (
            <div key={i} className="p-6 sm:p-8 text-center group hover:bg-gray-50 transition-colors duration-300 flex flex-col justify-center">
              <div className={`text-2xl sm:text-3xl font-black mb-2 transition-transform duration-300 group-hover:scale-110 ${i === 3 ? "text-[#E35205]" : "text-[#005284]"}`}>
                {stat.n}
              </div>
              <div className="text-[9px] sm:text-[10px] text-gray-400 font-bold tracking-widest">
                {stat.t}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto py-24 sm:py-32 px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#005284] tracking-tighter mb-6">
            {dict.home.services.title}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#005284] to-[#E35205] mx-auto rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed mt-6">
            {dict.home.services.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {services.map((service, index) => (
            <Link href={`/${lang}${service.link}`} key={index} className="group flex flex-col h-full bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#005284] transition-all duration-500 p-8 sm:p-10">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden mb-8 rounded-xl bg-gray-100">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#005284]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-[#E35205] transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <div className="mt-auto inline-block">
                <span className="text-xs font-black tracking-widest text-[#005284] flex items-center gap-2 group-hover:text-[#E35205] transition-all">
                  {dict.home.services.view_details} <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: '#005284' }} className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Factory className="w-8 h-8 text-[#E35205]" />
              <span className="text-xs font-bold tracking-widest text-blue-200">{dict.home.why_us.badge}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
              {dict.home.why_us.title}
            </h2>
            <p className="text-lg text-blue-100 font-light leading-relaxed mb-10">
              {dict.home.why_us.desc}
            </p>
            
            <div className="flex flex-col gap-6 mb-12">
              {dict.home.why_us.list.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E35205]/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#E35205]" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center transform lg:translate-y-8">
              <Globe className="w-12 h-12 text-blue-200 mb-6" />
              <h4 className="text-white font-bold tracking-widest mb-2">{dict.home.why_us.box1.title}</h4>
              <p className="text-xs text-blue-200 leading-relaxed">{dict.home.why_us.box1.desc}</p>
            </div>
            <div className="bg-[#E35205] p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-2xl">
              <ShieldCheck className="w-12 h-12 text-white mb-6" />
              <h4 className="text-white font-bold tracking-widest mb-2">{dict.home.why_us.box2.title}</h4>
              <p className="text-xs text-white/90 leading-relaxed">{dict.home.why_us.box2.desc}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}