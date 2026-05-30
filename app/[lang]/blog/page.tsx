import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, ArrowRight, Tag, Newspaper, Send, FileText, Clock, User } from 'lucide-react';
import { blogPosts } from '../../../data/blogData';
import { getDictionary } from '../../../dictionaries/getDictionary';
import { getLocalizedUrl } from '../../../dictionaries/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return {
    title: dict.blogPage.metadataTitle,
    description: dict.blogPage.metadataDesc,
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": dict.blogPage.metadataTitle,
    "description": dict.blogPage.metadataDesc,
    "publisher": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    }
  };

  const engineeringCategories = [
    { name: dict.blogPage.categories.materials, count: "1" },
    { name: dict.blogPage.categories.hygiene, count: "1" },
    { name: dict.blogPage.categories.standards, count: "1" },
    { name: dict.blogPage.categories.chemistry, count: "1" }
  ];

  return (
    <div className="bg-gray-50 pb-32 selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/kurumsal/blog-banner.webp"
            alt={dict.blogPage.title}
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto w-full mt-16">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.blogPage.breadcrumbHome}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">{dict.blogPage.breadcrumbCorporate}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{dict.blogPage.breadcrumbBlog}</span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
              {dict.blogPage.title}
            </h1>
          </div>

          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            {dict.blogPage.description}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:border-[#005284] transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    
                    <div className="w-full md:w-1/3 bg-[#0b1120] relative overflow-hidden flex-shrink-0 min-h-[240px]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-[#0b1120] to-black opacity-80 z-0"></div>
                      
                      {post.image ? (
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill 
                          className="object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-700 z-0"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : null}

                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 transform group-hover:scale-110 transition-transform duration-700">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-gray-300 bg-black/60 px-3 py-1 rounded-full border border-gray-600">{dict.blogPage.techArticle}</span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-bold tracking-widest">
                          <span className="text-[#E35205] uppercase">{post.category}</span>
                          <span className="text-gray-300">|</span>
                          <span className="text-gray-400 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="text-gray-300">|</span>
                          <span className="text-gray-400 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <Link href={`${getLocalizedUrl('blog', lang)}/${post.slug}`} className="block">
                          <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#005284] transition-colors leading-tight">
                            {post.title}
                          </h2>
                        </Link>
                        
                        <p className="text-gray-600 leading-relaxed text-sm mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-400 font-medium uppercase tracking-wider">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </div>
                        <Link href={`${getLocalizedUrl('blog', lang)}/${post.slug}`} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#005284] group-hover:text-[#E35205] transition-colors">
                          {dict.blogPage.readArticle}
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-tight flex items-center gap-2 border-b border-gray-100 pb-4">
                <Tag className="w-5 h-5 text-[#E35205]" />
                {dict.blogPage.categoriesTitle}
              </h3>
              <ul className="space-y-4">
                {engineeringCategories.map((cat, i) => (
                  <li key={i}>
                    <Link href="#" className="group flex items-center justify-between text-sm text-gray-600 hover:text-[#005284] transition-colors">
                      <span className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#E35205] transition-colors" />
                        {cat.name}
                      </span>
                      <span className="bg-gray-50 px-2.5 py-1 rounded-md text-xs font-bold text-gray-400 group-hover:bg-[#005284] group-hover:text-white transition-colors">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 bg-[#005284] p-8 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
                <div className="relative z-10 text-white">
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{dict.blogPage.newsletterTitle}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed mb-6">{dict.blogPage.newsletterDesc}</p>
                  <form className="flex flex-col gap-3">
                    <input 
                      type="email" 
                      placeholder={dict.blogPage.newsletterPlaceholder} 
                      className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-blue-200 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                    />
                    <button type="button" className="w-full flex items-center justify-center gap-2 bg-[#E35205] text-white px-4 py-3 rounded-lg text-sm font-bold tracking-widest hover:bg-white hover:text-[#E35205] transition-colors shadow-md">
                      {dict.blogPage.newsletterBtn}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}