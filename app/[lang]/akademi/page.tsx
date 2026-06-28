import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../../../lib/mdx';
import { Calendar, ChevronRight, BookOpen } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  return {
    title: lang === 'tr' ? 'Endüstriyel Akademi ve Makaleler | Welltech®' : 'Industrial Academy & Articles | Welltech®',
    description: lang === 'tr' 
      ? 'Paslanmaz çelik prosesleri, endüstriyel reaktör tasarımı ve mühendislik hesaplamaları üzerine hakemli makaleler.' 
      : 'Peer-reviewed articles on stainless steel processes, industrial reactor design, and engineering calculations.',
  };
}

export default async function AcademyIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  const rawPosts = getAllPosts(lang) || [];
  const posts = rawPosts.filter((post: any) => post !== null && post !== undefined);

  const bannerContent = {
    tr: {
      title: 'Endüstriyel Mühendislik Akademisi',
      desc: 'Paslanmaz çelik endüstrisi, termodinamik prosesler ve ekipman tasarımları üzerine uzman mühendis kadromuzun teknik makaleleri.',
      readMore: 'MAKALE DETAYI',
      emptyTitle: 'Henüz Makale Bulunmuyor',
      emptyDesc: 'Akademi içerikleri çok yakında eklenecektir.'
    },
    en: {
      title: 'Industrial Engineering Academy',
      desc: 'Technical articles by our expert engineering team on the stainless steel industry, thermodynamic processes, and equipment design.',
      readMore: 'READ ARTICLE',
      emptyTitle: 'No Articles Found',
      emptyDesc: 'Academy content will be added very soon.'
    },
    de: {
      title: 'Akademie für Wirtschaftsingenieurwesen',
      desc: 'Fachartikel unseres Expertenteams über die Edelstahlindustrie, thermodynamische Prozesse und das Gerätedesign.',
      readMore: 'ARTIKEL LESEN',
      emptyTitle: 'Keine Artikel gefunden',
      emptyDesc: 'Akademieinhalte werden in Kürze hinzugefügt.'
    },
    fr: {
      title: 'Académie d\'Ingénierie Industrielle',
      desc: 'Articles techniques de notre équipe d\'ingénieurs experts sur l\'industrie de l\'acier inoxydable, les processus thermodynamiques et la conception d\'équipements.',
      readMore: 'LIRE L\'ARTICLE',
      emptyTitle: 'Aucun article trouvé',
      emptyDesc: 'Le contenu de l\'académie sera ajouté très prochainement.'
    },
    es: {
      title: 'Academia de Ingeniería Industrial',
      desc: 'Artículos técnicos de nuestro equipo de ingenieros expertos sobre la industria del acero inoxidable, procesos termodinámicos y diseño de equipos.',
      readMore: 'LEER ARTÍCULO',
      emptyTitle: 'No se encontraron artículos',
      emptyDesc: 'El contenido de la academia se agregará muy pronto.'
    },
    pt: {
      title: 'Academia de Engenharia Industrial',
      desc: 'Artigos técnicos de nossa equipe de engenheiros especialistas sobre a indústria de aço inoxidável, processos termodinâmicos e design de equipamentos.',
      readMore: 'LER ARTIGO',
      emptyTitle: 'Nenhum artigo encontrado',
      emptyDesc: 'O conteúdo da academia será adicionado em breve.'
    },
    it: {
      title: 'Accademia di Ingegneria Industriale',
      desc: 'Articoli tecnici del nostro team di ingegneri esperti sull\'industria dell\'acciaio inossidabile, processi termodinamici e progettazione di apparecchiature.',
      readMore: 'LEGGI L\'ARTICOLO',
      emptyTitle: 'Nessun articolo trovato',
      emptyDesc: 'I contenuti dell\'accademia verranno aggiunti a breve.'
    },
    ru: {
      title: 'Академия промышленной инженерии',
      desc: 'Технические статьи нашей команды инженеров-экспертов о производстве нержавеющей стали, термодинамических процессах и проектировании оборудования.',
      readMore: 'ЧИТАТЬ СТАТЬЮ',
      emptyTitle: 'Статьи не найдены',
      emptyDesc: 'Содержание академии будет добавлено в ближайшее время.'
    },
    ar: {
      title: 'أكاديمية الهندسة الصناعية',
      desc: 'مقالات فنية من قبل فريق المهندسين الخبراء لدينا حول صناعة الفولاذ المقاوم للصدأ والعمليات الديناميكية الحرارية وتصميم المعدات.',
      readMore: 'قراءة المقال',
      emptyTitle: 'لم يتم العثور على مقالات',
      emptyDesc: 'سيتم إضافة محتوى الأكاديمية قريبًا جدًا.'
    }
  };

  const currentContent = bannerContent[lang as keyof typeof bannerContent] || bannerContent['en'];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 selection:bg-[#E35205] selection:text-white">
      
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/akademi/akademi-banner.webp"
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
          <span className="inline-block px-4 py-1.5 bg-[#E35205] text-white text-[10px] sm:text-xs font-bold tracking-[0.4em] mb-4 shadow-lg uppercase">
            {lang === 'tr' ? 'MÜHENDİSLİK AKADEMİSİ' : 'ENGINEERING ACADEMY'}
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
        
        {posts.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 text-center max-w-3xl mx-auto">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">
              {currentContent.emptyTitle}
            </h3>
            <p className="text-gray-500">
              {currentContent.emptyDesc}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              if (!post.title) {
                console.warn(`Dikkat: Başlığı eksik dosya bulundu -> ${lang} klasöründeki ${post.slug}.mdx`);
              }

              const formattedDate = new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              const coverImage = post.image || "/assets/images/akademi/akademi-banner.webp";

              return (
                <article key={post.slug} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#005284]/30 transition-all duration-500 flex flex-col h-full">
                  
                  <Link href={`/${lang}/akademi/${post.slug}`} className="block relative h-64 w-full overflow-hidden">
                    <div className="absolute top-4 left-4 z-20 bg-[#E35205] text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg tracking-widest uppercase">
                      {post.category || 'AKADEMİ'}
                    </div>
                    <Image
                      src={coverImage}
                      alt={post.title || 'Welltech Akademi Makalesi'}
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
                    
                    <Link href={`/${lang}/akademi/${post.slug}`} className="block mb-4">
                      <h2 className="text-xl font-extrabold text-gray-900 group-hover:text-[#005284] transition-colors leading-tight line-clamp-2">
                        {post.title || 'İsimsiz Makale'}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="mt-auto border-t border-gray-100 pt-6 flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{post.author || 'Welltech Engineering'}</span>
                      <Link href={`/${lang}/akademi/${post.slug}`} className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#E35205] group-hover:text-[#005284] transition-colors">
                        {currentContent.readMore} <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </article>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}