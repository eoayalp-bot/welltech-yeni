import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Cylinder, Zap, Wind, ArrowDownToLine, MoveDown } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Endüstriyel Varil ve IBC Pompaları | Welltech®",
    description: "Varil, IBC tank ve konteynerlerden asit, kimyasal ve akışkan gıdaların güvenli tahliyesi için portatif pompa çözümleri.",
  };
}

export default async function DrumPumpsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Endüstriyel Varil ve IBC Pompaları",
    "image": "https://www.welltech.com/assets/images/pompalar/varil/banner.webp",
    "description": "Varil, IBC tank ve konteynerlerden asit, kimyasal ve akışkan gıdaların güvenli tahliyesi için portatif pompa çözümleri.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Drum Pumps"
  };

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="relative h-[65vh] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/images/pompalar/varil/banner.webp" 
            alt="Endüstriyel Varil ve IBC Pompaları" 
            fill 
            priority 
            className="object-cover" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-[#005284]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${lang}/pompalar`} className="hover:text-white transition-colors">Pompalar</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">Varil Pompaları</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <Cylinder className="w-6 h-6 text-white" />
              <ArrowDownToLine className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Varil & IBC Tank Pompaları
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Hammaddelerin manuel tahliyesindeki ürün kayıplarına son. Asit, kimyasal ve akışkan gıdalar için özel tasarlanmış hafif, portatif ve yüksek verimli tahliye üniteleri.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <MoveDown className="w-6 h-6 text-[#E35205]" />
                  Güvenli Hammadde Tahliyesi
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Endüstriyel üretimde hammaddeler genellikle 200 litrelik varillerde veya 1000 litrelik IBC tanklarda tedarik edilir. Bu kapların manuel yöntemlerle boşaltılması hem ürün kaybına hem de iş kazalarına yol açar. Welltech varil pompaları, daldırma tipi boru tasarımı sayesinde kabın dibinde sadece birkaç damla ürün bırakacak şekilde %99 tahliye verimliliği sağlar. Elektrikli ve havalı (pneumatic) motor seçenekleriyle en zorlu saha şartlarına uyum gösterir.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/pompalar/varil/daldirma.webp" 
                  alt="Varil Daldırma Ünitesi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Ürün ve Motor Seçenekleri</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "ATEX Sertifikalı Patlama Korumalı Motor", icon: <ShieldCheck className="w-5 h-5 text-[#E35205]"/>},
                          {text: "AISI 316L veya PP / PVDF Boru Seçeneği", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/>},
                          {text: "Yüksek Viskoziteli Bal ve Salça İçin Vidalı Tip", icon: <Zap className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Kademesiz Hassas Hız Kontrolü", icon: <Wind className="w-5 h-5 text-[#005284]"/>},
                          {text: "IBC Tanklar İçin 1200mm Boru Boyu", icon: <Cylinder className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Kolay Temizlenebilir Modüler Tasarım", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/>}
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                            {feature.icon}
                            <span className="text-xs font-semibold text-gray-700 leading-tight">{feature.text}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                  
                  <div className="relative h-48 md:h-full w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                    <Image 
                      src="/assets/images/pompalar/varil/motor.webp" 
                      alt="Yüksek Devirli Elektrikli Motor" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                    />
                  </div>
                </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-3 gap-8 items-center">
              <div className="relative h-64 sm:h-96 w-full overflow-hidden border border-gray-100 rounded-lg shadow-sm group">
                <Image 
                  src="/assets/images/pompalar/varil/cizim.webp" 
                  alt="Boru Ölçüleri ve Montaj Çizimi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Varil Pompası Seçim Tablosu</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Daldırma borusu malzemesi transfer edilecek kimyasalın korozyon tablosuna göre seçilmelidir. Yanıcı sıvılarda mutlaka ATEX motor kullanılmalıdır.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Uygulama Alanı</th>
                        <th className="p-4 border-b">Boru Malzemesi</th>
                        <th className="p-4 border-b">Boru Boyu (mm)</th>
                        <th className="p-4 border-b">Viskozite (cP)</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">Standart Varil (200L)</td>
                        <td className="p-4">AISI 316L / PP</td>
                        <td className="p-4">1000 mm</td>
                        <td className="p-4">0 - 800 cP</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">IBC Tank (1000L)</td>
                        <td className="p-4">AISI 316L / PVDF</td>
                        <td className="p-4">1200 mm</td>
                        <td className="p-4">0 - 1000 cP</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">Viskoz Gıda (Bal/Krem)</td>
                        <td className="p-4">Gıdaya Uygun 316L</td>
                        <td className="p-4">1000 - 1200 mm</td>
                        <td className="p-4">100.000 cP'ye kadar</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Laboratuvar/Küçük Kap</td>
                        <td className="p-4">PP / PVDF</td>
                        <td className="p-4">700 mm</td>
                        <td className="p-4">0 - 200 cP</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#E35205]" />
                  Varil Tahliye FAQ
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "Solvent veya alkol transferinde hangi motoru seçmeliyim?", a: "Yanıcı ve parlayıcı akışkanların transferinde standart elektrikli motorlar kıvılcım çıkarabilir. Bu durumda mutlaka ATEX sertifikalı patlama korumalı motorlar veya basınçlı hava ile çalışan pneumatic motorlar kullanılmalıdır." },
                    { q: "Vidalı (Excentric Screw) varil pompası ne işe yarar?", a: "Standart varil pompaları bal, glikoz veya yoğun kozmetik kremler gibi akışkanlığı çok az olan ürünleri çekemez. Vidalı tip varil pompaları, içerisindeki sonsuz vida mekanizması sayesinde bu yoğunluktaki ürünleri zorlanmadan vakumlayıp basabilir." },
                    { q: "Pompa borusu temizliği nasıl yapılır?", a: "Welltech varil pompaları modüler yapıdadır. Motor ve boru kısmı saniyeler içinde birbirinden ayrılır. Boru içindeki mil ve fan kolayca dışarı alınarak sterilizasyon veya CIP banyosuna sokulabilir." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E35205] mt-0.5 shrink-0" />
                        {faq.q}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed ml-6">{faq.a}</p>
                    </div>
                  ))}
                </div>
            </div>

            <div className="mt-12 mb-8 bg-transparent">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight border-b-2 border-gray-200 pb-4">
                Örnek Uygulamalarımız
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "ATEX Motorlu Kimyasal Transfer" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "PVDF Borulu IBC Pompa" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Vidalı Tip Gıda Pompası" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Hassas Debili Varil Boşaltma" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/pompalar/varil/${item.src}`} 
                      alt={item.alt} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <span className="block text-white text-lg font-black tracking-widest drop-shadow-lg transform translate-y-1 group-hover:-translate-y-1 transition-transform duration-300">
                        {item.title}
                      </span>
                      <div className="h-1 w-8 bg-[#E35205] mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#E35205]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-50 rounded-lg text-red-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Teknik Doküman</h4>
                    <p className="text-xs text-gray-500 tracking-widest">DOK-12 PDF Şartname</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Kimyasal dayanım tablosu, motor devir aralıkları ve IBC tank bağlantı aparatları teknik dökümanı.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-12-varil-pompalar.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Şartnameyi İndir (PDF)
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">Referans Uygulama</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image 
                    src="/assets/images/pompalar/varil/referans.webp" 
                    alt="Kimya Hammadde Transferi Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Boya fabrikası için ATEX sertifikalı, solvent dayanımlı PVDF borulu otomatik varil boşaltma istasyonu."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#E35205]" />
                  Motor Seçimi
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Transfer edeceğiniz hammaddeyi ve varil sayınızı belirtin, elektrikli veya pneumatic motor seçeneğini birlikte belirleyelim.</p>
                <a 
                  href="https://wa.me/905324125152?text=Merhaba,%20varil%20ve%20IBC%20boşaltma%20pompası%20hakkında%20teknik%20bilgi%20ve%20fiyat%20almak%20istiyorum." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#E35205] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-white hover:text-[#E35205] transition-colors shadow-md"
                >
                  Teklif İsteyin →
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}