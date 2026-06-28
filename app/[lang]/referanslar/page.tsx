import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Settings } from 'lucide-react';
import { referanslar } from '../../../lib/referanslar'; 

export default async function ReferanslarPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const uiContent = {
    tr: {
      title: "Tamamlanan Projeler",
      desc: "Uluslararası standartlarda mühendisliğini üstlendiğimiz, devreye aldığımız ve güvenle çalışan yüksek teknoloji endüstriyel tesis çözümlerimiz."
    },
    en: {
      title: "Completed Projects",
      desc: "Our high-tech industrial facility solutions, engineered to international standards, commissioned, and operating safely."
    },
    de: {
      title: "Abgeschlossene Projekte",
      desc: "Unsere hochtechnologischen Industrieanlagenlösungen, die nach internationalen Standards entwickelt, in Betrieb genommen und sicher betrieben werden."
    },
    fr: {
      title: "Projets Réalisés",
      desc: "Nos solutions d'installations industrielles high-tech, conçues selon les normes internationales, mises en service et fonctionnant en toute sécurité."
    },
    es: {
      title: "Proyectos Completados",
      desc: "Nuestras soluciones de instalaciones industriales de alta tecnología, diseñadas según normas internacionales, puestas en servicio y operando con seguridad."
    },
    pt: {
      title: "Projetos Concluídos",
      desc: "Nossas soluções de instalações industriais de alta tecnologia, projetadas segundo padrões internacionais, comissionadas e operando com segurança."
    },
    it: {
      title: "Progetti Completati",
      desc: "Le nostre soluzioni per impianti industriali ad alta tecnologia, progettate secondo gli standard internazionali, messe in servizio e che operano in sicurezza."
    },
    ru: {
      title: "Завершенные Проекты",
      desc: "Наши высокотехнологичные решения для промышленных объектов, спроектированные по международным стандартам, введенные в эксплуатацию и безопасно работающие."
    },
    ar: {
      title: "المشاريع المنجزة",
      desc: "حلول منشآتنا الصناعية عالية التقنية، المصممة وفقًا للمعايير الدولية، والتي تم تشغيلها وتعمل بأمان."
    }
  };

  const currentUI = uiContent[lang as keyof typeof uiContent] || uiContent['en'];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      
      <section className="relative h-[60vh] min-h-[450px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/images/paslanmaz-tanklar/depolama/banner.webp" 
            alt={currentUI.title} 
            fill 
            priority 
            className="object-cover transition-transform duration-[3000ms] scale-105 hover:scale-100" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-[#005284]/60 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto w-full mt-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
            {currentUI.title}
          </h1>
          <p className="text-lg md:text-2xl text-blue-50 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            {currentUI.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {referanslar.map((project, idx) => {
            // İlgili dil verisini çekiyoruz, yoksa İngilizceye düşüyoruz
            const translatedContent = project.translations[lang] || project.translations['en'];
            
            // Eğer çeviri verisi eksikse döngüyü kırma, güvenli geç
            if (!translatedContent) return null;

            return (
              <Link 
                href={`/${lang}/referanslar/${project.slug}`} 
                key={idx} 
                className="group bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#005284]/30"
              >
                <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={translatedContent.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur p-2 rounded-lg shadow-lg text-[#005284] group-hover:bg-[#E35205] group-hover:text-white transition-colors duration-300 z-10">
                    <span className="text-[10px] font-black tracking-widest uppercase px-1">
                      {translatedContent.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 tracking-wider mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-md">{project.year}</span>
                    <span className="text-[#E35205]">{translatedContent.client}</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 leading-tight mb-3 group-hover:text-[#E35205] transition-colors">
                    {translatedContent.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {translatedContent.excerpt}
                  </p>

                  <div className="pt-5 border-t border-gray-100 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#005284] bg-blue-50 px-3 py-1.5 rounded-lg">
                      <Settings className="w-4 h-4" />
                      {translatedContent.technical.capacity}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#E35205] transition-colors shadow-sm">
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}