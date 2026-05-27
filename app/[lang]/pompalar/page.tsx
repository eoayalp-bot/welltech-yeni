import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Waves, Settings, Activity, Cylinder, Wind, Droplets } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Paslanmaz Endüstriyel Pompalar | Welltech®",
    description: "Santrifüj, Pozitif Deplasmanlı, Kendinden Emişli, Varil, Havalı Diyafram ve Monopomp endüstriyel hijyenik pompa sistemleri.",
  };
}

export default async function PumpsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Paslanmaz Endüstriyel Pompalar Kataloğu",
    "description": "Santrifüj, Pozitif Deplasmanlı, Kendinden Emişli, Varil, Havalı Diyaframlı ve Monopomp endüstriyel pompa sistemleri.",
    "publisher": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Santrifüj Pompalar" },
        { "@type": "ListItem", "position": 2, "name": "Pozitif Deplasmanlı Pompalar" },
        { "@type": "ListItem", "position": 3, "name": "Kendinden Emişli Pompalar" },
        { "@type": "ListItem", "position": 4, "name": "Varil Pompaları" },
        { "@type": "ListItem", "position": 5, "name": "Havalı Diyafram Pompalar" },
        { "@type": "ListItem", "position": 6, "name": "Monopomp Pompalar" }
      ]
    }
  };

  const categories = [
    {
      id: "santrifuj-pompalar",
      title: "Santrifüj Pompalar",
      desc: "Süt, su, meyve suyu ve zeytinyağı gibi düşük viskoziteli ürünlerin yüksek debilerde hızlı, kesintisiz ve hijyenik (CIP) transferi için ideal çözümler.",
      icon: <Waves className="w-6 h-6" />,
      image: "/assets/images/pompalar/santrifuj-pompa-kategori.webp",
      link: `/${lang}/pompalar/santrifuj-pompalar`
    },
    {
      id: "pozitif-deplasmanli",
      title: "Pozitif Deplasmanlı Pompalar",
      desc: "Bal, çikolata, salça ve kozmetik kremler gibi yüksek viskoziteli ürünleri ezmeden, yapısını bozmadan transfer eden loblu ve rotorlu hassas pompalar.",
      icon: <Settings className="w-6 h-6" />,
      image: "/assets/images/pompalar/loblu-pompa-kategori.webp",
      link: `/${lang}/pompalar/pozitif-deplasmanli-pompalar`
    },
    {
      id: "kendinden-emisli",
      title: "Kendinden Emişli Pompalar",
      desc: "Hatta sıvı olmasa dahi vakum oluşturarak emiş yapabilen, hava karışımlı ve köpüklü akışkanların transferinde kullanılan özel tasarımlı sistemler.",
      icon: <Activity className="w-6 h-6" />,
      image: "/assets/images/pompalar/kendinden-emisli-pompa-kategori.webp",
      link: `/${lang}/pompalar/kendinden-emisli-pompalar`
    },
    {
      id: "varil-pompalari",
      title: "Varil Pompaları",
      desc: "Varil, IBC tank veya konteynerlerdeki asit, kimyasal ve akışkan gıdaların güvenli ve kayıpsız bir şekilde boşaltılması için portatif çözümler.",
      icon: <Cylinder className="w-6 h-6" />,
      image: "/assets/images/pompalar/varil-pompa-kategori.webp",
      link: `/${lang}/pompalar/varil-pompalari`
    },
    {
      id: "havali-diyafram",
      title: "Havalı Diyafram Pompalar",
      desc: "Elektrik kıvılcımı riski olan yanıcı/parlayıcı (ATEX) ortamlarda basınçlı hava ile çalışan, katı partikül içeren ürünleri rahatça aktarabilen pompalar.",
      icon: <Wind className="w-6 h-6" />,
      image: "/assets/images/pompalar/havali-diyafram-kategori.webp",
      link: `/${lang}/pompalar/havali-diyafram-pompalar`
    },
    {
      id: "monopomp-pompalar",
      title: "Monopomp Pompalar",
      desc: "Çamur, bal, hamur ve polimer gibi aşırı viskoziteli ve partiküllü ürünlerin darbesiz, sürekli transferi için eksantrik vidalı (Rotor-Stator) pompalar.",
      icon: <Droplets className="w-6 h-6" />,
      image: "/assets/images/pompalar/monopomp_pompalar-kategori.webp",
      link: `/${lang}/pompalar/monopomp-pompalar`
    }
  ];

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/pompalar/kategori-banner.webp"
            alt="Endüstriyel Pompalar"
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto w-full mt-16">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">Endüstriyel Pompalar</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
            Hijyenik Transfer Çözümleri
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            Sıvıdan en yoğun viskoziteye, kimyasallardan akışkan gıdalara kadar her türlü ürünü prosesinize en uygun teknolojiyle transfer eden endüstriyel pompa sistemleri.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Link href={cat.link} key={cat.id} className="group flex flex-col sm:flex-row bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#005284] transition-all duration-500">
              
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto bg-gray-100 overflow-hidden">
                <Image 
                  src={cat.image} 
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#005284]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur p-2.5 rounded-lg shadow-lg text-[#005284] group-hover:bg-[#E35205] group-hover:text-white transition-colors duration-300 z-10">
                  {cat.icon}
                </div>
              </div>

              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#E35205] transition-colors tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">
                  {cat.desc}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#005284] group-hover:text-[#E35205] transition-colors">
                  Modelleri İncele
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-2xl p-10 lg:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#005284] via-transparent to-transparent"></div>
          
          <div className="relative z-10 mb-8 md:mb-0 max-w-2xl flex items-start gap-5">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm shrink-0 border border-white/10">
              <Droplets className="w-8 h-8 text-[#E35205]" />
            </div>
            <div>
              <h4 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-4">Doğru Pompa Seçimi</h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Akışkanınızın viskozitesi (kıvamı), hedeflenen transfer süresi ve boru hattındaki basınç kaybına göre prosesinize en uygun pompa gücünü mühendislerimiz hesaplasın.
              </p>
            </div>
          </div>

          <Link 
            href={`/${lang}/iletisim`} 
            className="relative z-10 shrink-0 bg-[#E35205] text-white px-8 py-4 rounded-xl text-sm font-bold tracking-widest hover:bg-white hover:text-[#E35205] transition-all shadow-lg hover:shadow-xl"
          >
            Mühendislik Desteği
          </Link>
        </div>

      </section>
    </div>
  );
}