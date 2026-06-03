import Link from 'next/link';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { ChevronRight, Calendar, Tag, Share2, ShieldCheck, FileText, ChevronLeft, Clock, User } from 'lucide-react';
import { blogPosts } from '../../../../data/blogData';
import { getDictionary } from '../../../../dictionaries/getDictionary';
import { routeDictionary } from '../../../../dictionaries/routes';

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  const allLangs = Object.keys(blogPosts);

  allLangs.forEach((lang) => {
    const posts = blogPosts[lang as keyof typeof blogPosts] || [];
    posts.forEach((post) => {
      params.push({ lang, slug: post.slug });
    });
  });

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const resolvedParams = await params;
  const targetLang = resolvedParams.lang;
  const currentSlug = decodeURIComponent(resolvedParams.slug || '');
  
  const currentLanguagePosts = blogPosts[targetLang as keyof typeof blogPosts] || [];
  let post = currentLanguagePosts.find((p) => p?.slug === currentSlug);

  if (!post) {
    for (const [languageKey, posts] of Object.entries(blogPosts)) {
      const foundIndex = posts.findIndex(p => p?.slug === currentSlug);
      if (foundIndex !== -1) {
        const correctPost = currentLanguagePosts[foundIndex];
        if (correctPost) {
          return {
            title: `${correctPost?.title || 'Blog'} | Welltech®`,
            description: correctPost?.excerpt || "",
          };
        }
      }
    }
  }

  if (!post) return { title: "Not Found | Welltech®" };

  return {
    title: `${post?.title || 'Blog'} | Welltech®`,
    description: post?.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const slug = decodeURIComponent(resolvedParams.slug || '');

  const currentLanguagePosts = blogPosts[lang as keyof typeof blogPosts] || [];
  let post = currentLanguagePosts.find((p) => p?.slug === slug);

  if (!post) {
    let foundIndex = -1;
    for (const [languageKey, posts] of Object.entries(blogPosts)) {
      const index = posts.findIndex((p) => p?.slug === slug);
      if (index !== -1) {
        foundIndex = index;
        break;
      }
    }

    if (foundIndex !== -1) {
      const correctPostForTargetLang = currentLanguagePosts[foundIndex];
      if (correctPostForTargetLang) {
        const localizedBlogRoute = (routeDictionary as any)['blog']?.[lang] || 'blog';
        redirect(`/${lang}/${localizedBlogRoute}/${correctPostForTargetLang.slug}`);
      }
    }
    notFound();
  }

  const dict = await getDictionary(lang);
  
  const localizedBlogRoute = (routeDictionary as any)['blog']?.[lang] || 'blog';
  const localizedContactRoute = (routeDictionary as any)['iletisim']?.[lang] || 'iletisim';
  const localizedDocsRoute = (routeDictionary as any)['dokumanlar']?.[lang] || 'dokumanlar';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post?.title || "",
    "image": post?.image ? `https://www.welltech.com${post.image}` : undefined,
    "description": post?.excerpt || "",
    "author": {
      "@type": "Person",
      "name": post?.author || "Welltech"
    },
    "datePublished": post?.date || "",
    "articleSection": post?.category || "",
    "publisher": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    }
  };

  const backToPostsText = dict?.blogPost?.backToPosts || "Geri Dön";
  const tagsEngineeringText = dict?.blogPost?.tags?.engineering || "Mühendislik";
  const tagsProcessText = dict?.blogPost?.tags?.process || "Proses";
  const shareArticleText = dict?.blogPost?.shareArticle || "Paylaş";
  const sidebarEngineeringTitle = dict?.blogPost?.sidebar?.engineeringTitle || "Mühendislik Desteği";
  const sidebarEngineeringDesc = dict?.blogPost?.sidebar?.engineeringDesc || "Projeleriniz için teknik ekibimizle iletişime geçin.";
  const sidebarGetSupportBtn = dict?.blogPost?.sidebar?.getSupportBtn || "İletişime Geç";
  const sidebarDocsTitle = dict?.blogPost?.sidebar?.docsTitle || "Dökümanlar";
  const sidebarDocsSubtitle = dict?.blogPost?.sidebar?.docsSubtitle || "Sertifikalar";
  const sidebarDocsDesc = dict?.blogPost?.sidebar?.docsDesc || "Kalite standartlarımızı inceleyin.";
  const sidebarGoToDocsBtn = dict?.blogPost?.sidebar?.goToDocsBtn || "İncele";

  return (
    <div className="bg-gray-50 pb-32 selection:bg-[#E35205] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative h-[65vh] min-h-[500px] flex flex-col justify-end pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {post?.image ? (
            <Image src={post.image} alt={post?.title || 'Blog'} fill priority className="object-cover transition-transform duration-[3000ms] scale-105" sizes="100vw" />
          ) : (
            <div className="absolute inset-0 bg-[#005284]"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <Link href={`/${lang}/${localizedBlogRoute}`} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-200 hover:text-white transition-colors mb-8 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <ChevronLeft className="w-4 h-4" />
            {backToPostsText}
          </Link>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 text-[10px] md:text-xs font-bold tracking-widest">
            <span className="bg-[#E35205] text-white px-3 py-1.5 rounded-md shadow-md uppercase">{post?.category}</span>
            <span className="text-gray-300 flex items-center gap-2"><Calendar className="w-4 h-4 text-[#E35205]" />{post?.date}</span>
            <span className="text-gray-300 flex items-center gap-2"><Clock className="w-4 h-4 text-[#E35205]" />{post?.readTime}</span>
            <span className="text-gray-300 flex items-center gap-2"><User className="w-4 h-4 text-[#E35205]" />{post?.author}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-2xl leading-tight max-w-4xl">
            {post?.title}
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-8 space-y-8">
            <article className="bg-white p-8 md:p-14 rounded-2xl shadow-2xl border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl md:text-2xl leading-relaxed text-[#005284] font-medium mb-10 pb-10 border-b border-gray-100">
                  {post?.excerpt}
                </p>
                <div className="leading-loose text-gray-700 whitespace-pre-wrap text-base md:text-lg font-light">
                  {post?.content}
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-gray-400" />
                  <div className="flex gap-2">
                    <span className="bg-gray-50 text-gray-500 px-3 py-1 rounded text-xs font-bold tracking-widest border border-gray-100">{tagsEngineeringText}</span>
                    <span className="bg-gray-50 text-gray-500 px-3 py-1 rounded text-xs font-bold tracking-widest border border-gray-100">{tagsProcessText}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500 hover:text-[#005284] transition-colors bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 hover:border-[#005284]">
                  <Share2 className="w-4 h-4" />
                  {shareArticleText}
                </button>
              </div>
            </article>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-900 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#E35205] via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-40"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 tracking-tight flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-[#E35205]" />
                    {sidebarEngineeringTitle}
                  </h3>
                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                    {sidebarEngineeringDesc}
                  </p>
                  <Link href={`/${lang}/${localizedContactRoute}`} className="w-full flex items-center justify-center gap-2 bg-[#E35205] text-white px-4 py-4 rounded-xl text-sm font-bold tracking-widest hover:bg-white hover:text-[#E35205] transition-all shadow-md hover:shadow-xl">
                    {sidebarGetSupportBtn}
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#005284]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl text-[#005284]"><FileText className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">{sidebarDocsTitle}</h4>
                    <p className="text-[10px] text-gray-500 tracking-widest uppercase">{sidebarDocsSubtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{sidebarDocsDesc}</p>
                <Link href={`/${lang}/${localizedDocsRoute}`} className="inline-flex items-center justify-center w-full gap-2 text-xs font-bold tracking-widest text-[#005284] bg-blue-50 hover:bg-[#005284] hover:text-white px-4 py-4 rounded-xl transition-all">
                  {sidebarGoToDocsBtn} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}