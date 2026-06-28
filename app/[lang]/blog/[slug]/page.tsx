import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ChevronLeft } from 'lucide-react';
import { blogData } from '../../../../data/blogData';
import { routeDictionary } from '../../../../dictionaries/routes';

function getLink(physicalKey: string, lang: string): string {
  const translatedPath = routeDictionary[physicalKey]?.[lang] || physicalKey;
  return `/${lang}/${translatedPath}`;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) return { title: 'Bulunamadı | Welltech' };

  const postContent = post.translations[lang] || post.translations['en'];

  return {
    title: `${postContent.title} | Welltech® Blog`,
    description: postContent.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postContent = post.translations[lang] || post.translations['en'];
  
  const formattedDate = new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Geri dön butonunu dillere göre dinamikleştirdik
  const backTextContent = {
    tr: 'BLOGA DÖN',
    en: 'BACK TO BLOG',
    de: 'ZURÜCK ZUM BLOG',
    fr: 'RETOUR AU BLOG',
    es: 'VOLVER AL BLOG',
    pt: 'VOLTAR AO BLOG',
    it: 'TORNA AL BLOG',
    ru: 'ВЕРНУТЬСЯ В БЛОГ',
    ar: 'العودة إلى المدونة'
  };
  const backText = backTextContent[lang as keyof typeof backTextContent] || backTextContent['en'];

  return (
    <article className="bg-gray-50 min-h-screen pb-24">
      
      {/* Yazıya Özel Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={postContent.title}
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-black/20 z-10"></div>
        </div>

        <div className="relative z-20 px-4 sm:px-6 w-full max-w-4xl mx-auto">
          <Link 
            href={getLink('blog', lang)} 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase mb-8 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" /> {backText}
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block px-3 py-1 bg-[#E35205] text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded shadow-lg">
              {postContent.category}
            </span>
            <span className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
            {postContent.title}
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-16 -mt-8 relative z-30">
          
          <p className="text-xl sm:text-2xl text-[#005284] font-medium leading-relaxed mb-10 pb-10 border-b border-gray-100">
            {postContent.excerpt}
          </p>

          <div 
            className="text-gray-600 text-lg leading-relaxed space-y-6 [&>p]:mb-6 [&>h2]:text-3xl [&>h2]:font-black [&>h2]:text-[#005284] [&>h2]:mb-4 [&>h2]:mt-12 [&>h2]:tracking-tight [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>strong]:text-gray-900"
            dangerouslySetInnerHTML={{ __html: postContent.content }}
          />
          
        </div>
      </div>
    </article>
  );
}