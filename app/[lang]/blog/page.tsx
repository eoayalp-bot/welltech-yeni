import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight } from 'lucide-react';
import { getDictionary } from '../../../dictionaries/getDictionary';
import { routeDictionary } from '../../../dictionaries/routes';
import { blogData } from '../../../data/blogData';

function getLink(physicalKey: string, lang: string): string {
  const translatedPath = routeDictionary[physicalKey]?.[lang] || physicalKey;
  return `/${lang}/${translatedPath}`;
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  const dict = await getDictionary(lang, 'common');

  // Banner metinlerini tüm diller için statik objede topladık
  const bannerContent = {
    tr: {
      title: 'Endüstriyel Mühendislik Blogu',
      desc: 'Paslanmaz tanklar, reaktörler, proses sistemleri ve hijyenik pompalar hakkında teknik makaleler, standartlar ve mühendislik rehberleri.',
      readMore: 'YAZIYI OKU'
    },
    en: {
      title: 'Industrial Engineering Blog',
      desc: 'Technical articles, standards, and engineering guides about stainless tanks, reactors, process systems, and hygienic pumps.',
      readMore: 'READ MORE'
    },
    de: {
      title: 'Industrial Engineering Blog',
      desc: 'Technische Artikel, Normen und Konstruktionsleitfäden zu Edelstahltanks, Reaktoren, Prozesssystemen und Hygienepumpen.',
      readMore: 'MEHR LESEN'
    },
    fr: {
      title: 'Blog d\'Ingénierie Industrielle',
      desc: 'Articles techniques, normes et guides d\'ingénierie sur les cuves en acier inoxydable, les réacteurs, les systèmes de processus et les pompes hygiéniques.',
      readMore: 'LIRE LA SUITE'
    },
    es: {
      title: 'Blog de Ingeniería Industrial',
      desc: 'Artículos técnicos, normas y guías de ingeniería sobre tanques de acero inoxidable, reactores, sistemas de procesos y bombas higiénicas.',
      readMore: 'LEER MÁS'
    },
    pt: {
      title: 'Blog de Engenharia Industrial',
      desc: 'Artigos técnicos, normas e guias de engenharia sobre tanques de aço inoxidável, reatores, sistemas de processos e bombas higiênicas.',
      readMore: 'LEIA MAIS'
    },
    it: {
      title: 'Blog di Ingegneria Industriale',
      desc: 'Articoli tecnici, standard e guide ingegneristiche su serbatoi in acciaio inossidabile, reattori, sistemi di processo e pompe igieniche.',
      readMore: 'LEGGI DI PIÙ'
    },
    ru: {
      title: 'Блог промышленной инженерии',
      desc: 'Технические статьи, стандарты и инженерные руководства по резервуарам из нержавеющей стали, реакторам, технологическим системам и гигиеническим насосам.',
      readMore: 'ЧИТАТЬ ДАЛЕЕ'
    },
    ar: {
      title: 'مدونة الهندسة الصناعية',
      desc: 'مقالات فنية ومعايير وأدلة هندسية حول خزانات الفولاذ المقاوم للصدأ والمفاعلات وأنظمة العمليات والمضخات الصحية.',
      readMore: 'اقرأ المزيد'
    }
  };

  const currentContent = bannerContent[lang as keyof typeof bannerContent] || bannerContent['en'];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/kurumsal/blog-banner.webp"
            alt={currentContent.title}
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#005284]/60 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        <div className="relative z-20 text-center px-4 w-full max-w-4xl mx-auto mt-16">
          <span className="inline-block px-4 py-1.5 bg-[#E35205] text-white text-[10px] sm:text-xs font-bold tracking-[0.4em] mb-4 shadow-lg">
            WELLTECH®
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1] drop-shadow-2xl">
            {currentContent.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-xl">
            {currentContent.desc}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        
        {/* Blog Grid Yapısı (Senin orijinal yapın) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => {
            const postContent = post.translations[lang] || post.translations['en'];
            
            const formattedDate = new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <article key={post.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#005284]/30 transition-all duration-500 flex flex-col h-full">
                
                <Link href={`${getLink('blog', lang)}/${post.slug}`} className="block relative h-64 w-full overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-[#E35205] text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg tracking-widest uppercase">
                    {postContent.category}
                  </div>
                  <Image
                    src={post.image}
                    alt={postContent.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#005284]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </Link>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 font-medium">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{formattedDate}</time>
                  </div>
                  
                  <Link href={`${getLink('blog', lang)}/${post.slug}`} className="block mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900 group-hover:text-[#005284] transition-colors leading-tight line-clamp-2">
                      {postContent.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {postContent.excerpt}
                  </p>
                  
                  <div className="mt-auto border-t border-gray-100 pt-6">
                    <Link href={`${getLink('blog', lang)}/${post.slug}`} className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#E35205] group-hover:text-[#005284] transition-colors">
                      {currentContent.readMore} <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </div>
  );
}