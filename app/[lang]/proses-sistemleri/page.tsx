import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Settings, Beaker, FlaskConical, Truck, ThermometerSun, Microscope, Sparkles, ShieldCheck } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Endüstriyel Proses Sistemleri ve Reaktörler | Welltech®",
    description: "Yüksek viskoziteli karışımlar, tehlikeli reaksiyonlar ve termodinamik işlemler için ASME ve ATEX standartlarında projelendirilmiş karıştırıcılı üretim hatları.",
  };
}

export default async function ProcessMachinesPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Endüstriyel Proses Sistemleri Kataloğu",
    "description": "Yüksek viskoziteli karışımlar, tehlikeli reaksiyonlar ve termodinamik işlemler için ASME ve ATEX standartlarında projelendirilmiş karıştırıcılı üretim hatları.",
    "publisher": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Karıştırıcılı Proses Tankları" },
        { "@type": "ListItem", "position": 2, "name": "Kimyasal ve İlaç Reaktörleri" },
        { "@type": "ListItem", "position": 3, "name": "High-Shear Homojenizatörler" },
        { "@type": "ListItem", "position": 4, "name": "Mobil Proses Üniteleri (Skid Systems)" },
        { "@type": "ListItem", "position": 5, "name": "Isıtma ve Soğutma Ceketli Tanklar" },
        { "@type": "ListItem", "position": 6, "name": "Fermantasyon ve Biyoreaktörler" },
        { "@type": "ListItem", "position": 7, "name": "Tam Otomatik CIP Sistemleri" }
      ]
    }
  };

  const categories = [
    {
      id: "karistiricili-tanklar",
      title: "Karıştırıcılı Proses Tankları",
      desc: "İhtiyacınıza özel kanat geometrisi ve termodinamik ceketli ısıtma/soğutma sistemleriyle kusursuz homojenizasyon.",
      icon: <Settings className="w-6 h-6" />,
      image: "/assets/images/proses-sistemleri/kategori-karistirici.webp",
      link: `/${lang}/proses-sistemleri/karistiricili-tanklar`
    },
    {
      id: "reaktorler",
      title: "Kimyasal ve İlaç Reaktörleri",
      desc: "10 Bar basınca ve tam vakuma dayanıklı, 316Ti / Hastelloy alaşımlı, ATEX standartlarında ex-proof alan reaktörleri.",
      icon: <Beaker className="w-6 h-6" />,
      image: "/assets/images/proses-sistemleri/kategori-reaktor.webp",
      link: `/${lang}/proses-sistemleri/kimyasal-reaktorler`
    },
    {
      id: "homojenizatorler",
      title: "High-Shear Homojenizatörler",
      desc: "Sıvı-sıvı ve sıvı-katı emülsiyonları için yüksek devirli, rotor-stator teknolojili parçalayıcı mikser sistemleri.",
      icon: <FlaskConical className="w-6 h-6" />,
      image: "/assets/images/proses-sistemleri/kategori-homojenizator.webp",
      link: `/${lang}/proses-sistemleri/homojenizatorler`
    },
    {
      id: "mobil-uniteler",
      title: "Mobil Proses Üniteleri (Skid Systems)",
      desc: "Hızlı kurulum (Plug & Play) için tasarlanmış; reaktör, pompa ve otomasyonun tek şasede toplandığı kompakt çözümler.",
      icon: <Truck className="w-6 h-6" />,
      image: "/assets/images/proses-sistemleri/kategori-mobil.webp",
      link: `/${lang}/proses-sistemleri/mobil-uniteler`
    },
    {
      id: "ceketli-tanklar",
      title: "Isıtma ve Soğutma Ceketli Tanklar",
      desc: "Roll-bond (dimple) ve yarım boru serpantin ceketli, yüksek termal verimliliğe sahip paslanmaz çelik proses tankları.",
      icon: <ThermometerSun className="w-6 h-6" />,
      image: "/assets/images/proses-sistemleri/kategori-ceketli.webp",
      link: `/${lang}/proses-sistemleri/ceketli-tanklar`
    },
    {
      id: "fermantasyon",
      title: "Fermantasyon ve Biyoreaktörler",
      desc: "Biyoteknoloji ve gıda sanayisi için hassas pH/Oksijen kontrollü, steril paslanmaz fermantasyon sistemleri.",
      icon: <Microscope className="w-6 h-6" />,
      image: "/assets/images/proses-sistemleri/kategori-fermantasyon.webp",
      link: `/${lang}/proses-sistemleri/fermantasyon-biyoreaktorler`
    },
    {
      id: "cip-sistemleri",
      title: "Tam Otomatik CIP Sistemleri",
      desc: "Tesisinizin hijyen standartlarını garanti altına alan, PLC kontrollü Clean-in-Place (Yerinde Yıkama) üniteleri.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/assets/images/proses-sistemleri/kategori-cip.webp",
      link: `/${lang}/proses-sistemleri/tam-otomatik-cip`
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
            src="/assets/images/proses-sistemleri/kategori-banner.webp"
            alt="Endüstriyel Proses Sistemleri"
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
            <span className="text-[#E35205]">Proses Sistemleri</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
            Proses Sistemleri
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            Yüksek viskoziteli karışımlar, tehlikeli reaksiyonlar ve termodinamik işlemler için ASME ve ATEX standartlarında projelendirilmiş karıştırıcılı üretim hatları.
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
          
          <div className="relative z-10 mb-8 md:mb-0 max-w-2xl">
            <h4 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#E35205]" />
              Özel Proses İhtiyaçlarınız Mı Var?
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Kataloğumuzda yer almayan özel ölçü, yüksek basınç (ASME) veya ATEX sertifikalı tehlikeli saha reaktör ihtiyaçlarınız için mühendislik departmanımızla görüşün.
            </p>
          </div>

          <Link 
            href={`/${lang}/iletisim`} 
            className="relative z-10 shrink-0 bg-[#E35205] text-white px-8 py-4 rounded-xl text-sm font-bold tracking-widest hover:bg-white hover:text-[#E35205] transition-all shadow-lg hover:shadow-xl"
          >
            Teklif İsteyin
          </Link>
        </div>
      </section>

    </div>
  );
}