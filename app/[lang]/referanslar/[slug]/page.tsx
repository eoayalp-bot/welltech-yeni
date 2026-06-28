import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Factory, Settings, CheckCircle, ArrowLeft } from 'lucide-react';
import { referanslar } from '../../../../lib/referanslar'; 

export async function generateMetadata({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  const project = referanslar.find(p => p.slug === slug);
  
  if (!project) return { title: 'Proje Bulunamadı | Welltech' };

  const translatedContent = project.translations[lang] || project.translations['en'];

  return {
    title: `${translatedContent?.title || 'Project'} | Welltech`,
    description: translatedContent?.excerpt || '',
  };
}

export default async function ReferansDetayPage({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  
  const project = referanslar.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  const translatedContent = project.translations[lang] || project.translations['en'];

  if (!translatedContent) {
    notFound();
  }

  const uiContent = {
    tr: {
      backBtn: "TÜM PROJELERE DÖN",
      summary: "Proje Özeti",
      info: "Proje Künyesi",
      client: "Müşteri / Lokasyon",
      year: "Teslim Yılı",
      techData: "Teknik Veriler",
      capacity: "Kapasite / Hacim",
      material: "Malzeme Kalitesi",
      standards: "Tasarım Standartları",
      features: "Ekstra Donanımlar"
    },
    en: {
      backBtn: "BACK TO ALL PROJECTS",
      summary: "Project Summary",
      info: "Project Details",
      client: "Client / Location",
      year: "Delivery Year",
      techData: "Technical Data",
      capacity: "Capacity / Volume",
      material: "Material Quality",
      standards: "Design Standards",
      features: "Extra Features"
    },
    de: {
      backBtn: "ZURÜCK ZU ALLEN PROJEKTEN",
      summary: "Projektzusammenfassung",
      info: "Projektdetails",
      client: "Kunde / Standort",
      year: "Lieferjahr",
      techData: "Technische Daten",
      capacity: "Kapazität / Volumen",
      material: "Materialqualität",
      standards: "Designstandards",
      features: "Zusätzliche Ausstattung"
    },
    fr: {
      backBtn: "RETOUR À TOUS LES PROJETS",
      summary: "Résumé du Projet",
      info: "Détails du Projet",
      client: "Client / Emplacement",
      year: "Année de Livraison",
      techData: "Données Techniques",
      capacity: "Capacité / Volume",
      material: "Qualité du Matériel",
      standards: "Normes de Conception",
      features: "Caractéristiques Supplémentaires"
    },
    es: {
      backBtn: "VOLVER A TODOS LOS PROYECTOS",
      summary: "Resumen del Proyecto",
      info: "Detalles del Proyecto",
      client: "Cliente / Ubicación",
      year: "Año de Entrega",
      techData: "Datos Técnicos",
      capacity: "Capacidad / Volumen",
      material: "Calidad del Material",
      standards: "Estándares de Diseño",
      features: "Características Adicionales"
    },
    pt: {
      backBtn: "VOLTAR PARA TODOS OS PROJETOS",
      summary: "Resumo do Projeto",
      info: "Detalhes do Projeto",
      client: "Cliente / Localização",
      year: "Ano de Entrega",
      techData: "Dados Técnicos",
      capacity: "Capacidade / Volume",
      material: "Qualidade do Material",
      standards: "Padrões de Design",
      features: "Recursos Adicionais"
    },
    it: {
      backBtn: "TORNA A TUTTI I PROGETTI",
      summary: "Sintesi del Progetto",
      info: "Dettagli del Progetto",
      client: "Cliente / Posizione",
      year: "Anno di Consegna",
      techData: "Dati Tecnici",
      capacity: "Capacità / Volume",
      material: "Qualità del Materiale",
      standards: "Standard di Progettazione",
      features: "Funzionalità Aggiuntive"
    },
    ru: {
      backBtn: "ВЕРНУТЬСЯ КО ВСЕМ ПРОЕКТАМ",
      summary: "Резюме Проекта",
      info: "Детали Проекта",
      client: "Клиент / Местоположение",
      year: "Год Поставки",
      techData: "Технические Данные",
      capacity: "Вместимость / Объем",
      material: "Качество Материала",
      standards: "Стандарты Проектирования",
      features: "Дополнительные Особенности"
    },
    ar: {
      backBtn: "العودة إلى جميع المشاريع",
      summary: "ملخص المشروع",
      info: "تفاصيل المشروع",
      client: "العميل / الموقع",
      year: "سنة التسليم",
      techData: "البيانات الفنية",
      capacity: "السعة / الحجم",
      material: "جودة المواد",
      standards: "معايير التصميم",
      features: "ميزات إضافية"
    }
  };

  const currentUI = uiContent[lang as keyof typeof uiContent] || uiContent['en'];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 selection:bg-[#E35205] selection:text-white">
      <section className="relative h-[55vh] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image} 
            alt={translatedContent.title} 
            fill 
            priority 
            className="object-cover transition-transform duration-[3000ms] scale-105" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-[#005284]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-black/60"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-end pb-8">
          <Link 
            href={`/${lang}/referanslar`} 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-200 hover:text-white transition-colors mb-6 w-fit bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            {currentUI.backBtn}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#E35205] text-white px-3 py-1 rounded-md text-[10px] font-black tracking-widest uppercase shadow-md">
              {translatedContent.category}
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-md text-[10px] font-bold tracking-widest border border-white/30">
              {project.year}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-lg max-w-4xl leading-tight">
            {translatedContent.title}
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3 border-b border-gray-100 pb-4">
                <Factory className="w-6 h-6 text-[#E35205]" />
                {currentUI.summary}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
                {translatedContent.excerpt}
              </p>
              
              <div className="relative h-80 sm:h-[28rem] w-full overflow-hidden rounded-xl shadow-inner group">
                <Image 
                  src={project.image} 
                  alt={translatedContent.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 66vw" 
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-[#005284] p-6 rounded-2xl shadow-xl text-white">
                <h3 className="text-sm font-bold tracking-widest text-blue-200 mb-6 uppercase border-b border-blue-400/30 pb-3">
                  {currentUI.info}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <User className="w-5 h-5 text-blue-100" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-200 tracking-widest font-bold uppercase mb-1">{currentUI.client}</p>
                      <p className="font-semibold text-sm">{translatedContent.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-100" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-200 tracking-widest font-bold uppercase mb-1">{currentUI.year}</p>
                      <p className="font-semibold text-sm">{project.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#E35205]">
                <h3 className="text-sm font-black tracking-widest text-gray-900 mb-6 uppercase flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#E35205]" />
                  {currentUI.techData}
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <CheckCircle className="w-4 h-4 text-[#E35205] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{currentUI.capacity}</span>
                      <strong className="text-sm text-gray-800">{translatedContent.technical.capacity}</strong>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <CheckCircle className="w-4 h-4 text-[#E35205] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{currentUI.material}</span>
                      <strong className="text-sm text-gray-800">{translatedContent.technical.material}</strong>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <CheckCircle className="w-4 h-4 text-[#E35205] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{currentUI.standards}</span>
                      <strong className="text-sm text-gray-800">{translatedContent.technical.standards}</strong>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#E35205] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{currentUI.features}</span>
                      <strong className="text-sm text-gray-800">{translatedContent.technical.features}</strong>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}