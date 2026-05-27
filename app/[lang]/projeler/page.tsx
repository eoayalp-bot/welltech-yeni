import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { projects } from '../../../data/projectsData';

export async function generateMetadata() {
  return {
    title: "Tamamlanan Projeler | Welltech®",
    description: "Welltech tarafından başarıyla teslim edilen endüstriyel paslanmaz çelik projeleri ve vaka analizleri.",
  };
}

const getDictionary = async (lang: string) => {
  if (lang === 'en') return import('../../../dictionaries/en.json').then((module) => module.default);
  return import('../../../dictionaries/tr.json').then((module) => module.default);
};

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-[#E35205] selection:text-white pb-32">
      <Navbar lang={lang} dict={dict} />
      
      <section style={{ backgroundColor: '#005284' }} className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-blue-200 mb-8">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">Tamamlanan Projeler</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 drop-shadow-md">
            Mühendislik Referansları
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light italic leading-relaxed drop-shadow-lg">
            Sadece tank üretmiyoruz; küresel endüstrinin ihtiyaç duyduğu yüksek teknolojili proses sahalarını inşa ediyoruz.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row group">
              
              <div className="w-full lg:w-1/2 relative h-80 lg:h-auto overflow-hidden bg-gray-200">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-[#005284] text-white px-4 py-2 text-[10px] font-bold tracking-widest rounded shadow-lg">
                  {project.category}
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-6 mb-6 text-[10px] font-bold tracking-widest text-gray-400">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#E35205]" /> {project.year}</span>
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#E35205]" /> {project.client}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 tracking-tight group-hover:text-[#005284] transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-10 font-light italic">
                    {project.excerpt}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-y border-gray-100 mb-10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400">Kapasite</span>
                      <span className="text-sm font-bold text-gray-800">{project.technical.capacity}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400">Malzeme</span>
                      <span className="text-sm font-bold text-gray-800">{project.technical.material}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400">Standart</span>
                      <span className="text-sm font-bold text-gray-800">{project.technical.standards}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400">Öne Çıkan</span>
                      <span className="text-sm font-bold text-gray-800">{project.technical.features}</span>
                    </div>
                  </div>
                </div>

                <Link href={`/${lang}/projeler/${project.slug}`} className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-[#005284] hover:text-[#E35205] transition-all group/btn">
                  Proje Detaylarını ve Teknik Analizi Gör 
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <div style={{ backgroundColor: '#111827' }} className="p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#005284]/40 via-transparent to-transparent"></div>
          <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-6 relative z-10">
            Sizin Projeniz İçin Mühendislik Çözümü Üretelim
          </h3>
          <p className="text-gray-300 mb-10 relative z-10 leading-relaxed font-medium">
            Spesifik kapasite ihtiyaçlarınız ve teknik standartlarınız için uzman kadromuzla iletişime geçin.
          </p>
          <Link href={`/${lang}/iletisim`} className="inline-block bg-[#E35205] text-white px-10 py-4 rounded-lg font-bold text-sm tracking-widest hover:bg-white hover:text-[#E35205] transition-all relative z-10 shadow-xl">
            Teknik Destek Alın
          </Link>
        </div>
      </section>
    </main>
  );
}