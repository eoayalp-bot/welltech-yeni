import { getPostBySlug } from '../../../../lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronLeft } from 'lucide-react';
import WeightCalculator from '../../../../components/WeightCalculator';
import MDXImage from '../../../../components/MDXImage';

const mdxComponents = {
  WeightCalculator: WeightCalculator,
  MDXImage: MDXImage
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, resolvedParams.lang);
  if (!post) return { title: 'Makale Bulunamadı' };

  return {
    title: `${post.meta.title} | Welltech® Akademi`,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  
  const post = getPostBySlug(slug, lang);
  if (!post) notFound();

  const formattedDate = new Date(post.meta.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const backText = lang === 'tr' ? 'AKADEMİYE DÖN' : 'BACK TO ACADEMY';
  const coverImage = post.meta.image || "/assets/images/kurumsal/blog-banner.webp";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.meta.title,
    "description": post.meta.description,
    "image": coverImage,
    "author": { "@type": "Organization", "name": post.meta.author },
    "datePublished": post.meta.date,
    "publisher": { "@type": "Organization", "name": "Welltech® International Engineering" }
  };

  return (
    <article className="bg-gray-50 min-h-screen pb-24 selection:bg-[#E35205] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={coverImage}
            alt={post.meta.title || 'Welltech Akademi Makalesi'}
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-black/20 z-10"></div>
        </div>

        <div className="relative z-20 px-4 sm:px-6 w-full max-w-4xl mx-auto">
          <Link 
            href={`/${lang}/akademi`} 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase mb-8 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" /> {backText}
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block px-3 py-1 bg-[#E35205] text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded shadow-lg">
              {post.meta.category}
            </span>
            <span className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.meta.date}>{formattedDate}</time>
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
            {post.meta.title}
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-16 -mt-8 relative z-30">
          
          <p className="text-xl sm:text-2xl text-[#005284] font-medium leading-relaxed mb-10 pb-10 border-b border-gray-100">
            {post.meta.description}
          </p>

          <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:text-[#005284] prose-a:text-[#E35205] prose-blockquote:border-l-[#E35205] prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-700 marker:text-[#E35205]">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
          
        </div>
      </div>
    </article>
  );
}