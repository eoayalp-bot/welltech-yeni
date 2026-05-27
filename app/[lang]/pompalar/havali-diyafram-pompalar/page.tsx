import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Wind, Activity, ZapOff, Droplets, ShieldAlert } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Havalı Diyafram Pompalar | Welltech®",
    description: "Yanıcı (ATEX) ortamlar ve agresif kimyasallar için elektrik kıvılcımı riski taşımayan pnömatik havalı diyafram pompa teknolojileri.",
  };
}

export default async function DiaphragmPumpsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Havalı Diyafram Pompalar",
    "image": "https://www.welltech.com/assets/images/pompalar/havali-diyafram/banner.webp",
    "description": "Yanıcı (ATEX) ortamlar ve agresif kimyasallar için elektrik kıvılcımı riski taşımayan pnömatik havalı diyafram pompa teknolojileri.",
    "brand": {
      "@type": "Brand",
      "name": "Welltech®"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    },
    "category": "Industrial Pneumatic Pumps"
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
            src="/assets/images/pompalar/havali-diyafram/banner.webp" 
            alt="Havalı Diyafram Pompalar" 
            fill 
            priority 
            className="object-cover transition-transform duration-[3000ms] scale-105" 
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
            <span className="text-[#E35205]">Havalı Diyafram Pompalar</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <Wind className="w-6 h-6 text-white" />
              <ShieldAlert className="w-6 h-6 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-md">
              Havalı Diyafram Pompalar
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl font-light italic leading-relaxed mt-4 drop-shadow-lg">
            Sıfır elektrik kıvılcımı, tam ATEX uyumu. Basınçlı hava ile çalışan; katı partiküllü, yanıcı ve agresif kimyasalların transferinde rakipsiz güvenlik sağlayan pnömatik sistemler.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <ZapOff className="w-6 h-6 text-[#E35205]" />
                  Elektriksiz Tam Güvenlik
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Solvent, alkol veya parlayıcı gaz emisyonu olan ortamlarda elektrik motorlu bir pompanın yaratacağı ufacık bir kıvılcım felakete yol açabilir. Havalı (Pnömatik) Diyafram pompalar, enerjisini fabrikadaki kompresörden gelen basınçlı havadan alır. Elektrik bağlantısı olmadığı için %100 Ex-Proof (ATEX) koruması sağlar. Ayrıca mekanik bir fana sahip olmadıkları için içinde meyve parçacıkları veya katı partiküller olan sıvıları hiç zorlanmadan, ürünü ezmeden 150 tonluk depolama silolarımıza kadar basabilir.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-lg shadow-inner group">
                <Image 
                  src="/assets/images/pompalar/havali-diyafram/detay.webp" 
                  alt="Pnömatik Hava Valfi Detayı" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Kritik Mühendislik Özellikleri</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "Zarar Görmeden Kuru Çalışabilme", icon: <ShieldCheck className="w-5 h-5 text-[#E35205]"/>},
                          {text: "ATEX (Ex-Proof) Bölge Uyumluluğu", icon: <ShieldAlert className="w-5 h-5 text-[#005284]"/>},
                          {text: "Katı Partikül ve Viskoz Madde Transferi", icon: <Droplets className="w-5 h-5 text-[#E35205]"/>},
                          {text: "PTFE (Teflon) ve Santopren Diyafram", icon: <Activity className="w-5 h-5 text-[#005284]"/>},
                          {text: "Hava Basıncı İle Kolay Debi Ayarı", icon: <Wind className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Sızdırmaz Contasız Tasarım", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/>}
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
                      src="/assets/images/pompalar/havali-diyafram/atex.webp" 
                      alt="ATEX Koruma ve Topraklama" 
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
                  src="/assets/images/pompalar/havali-diyafram/cizim.webp" 
                  alt="Diyaframlı Pompa Performans Eğrisi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Diyafram Pompa Kapasite Tablosu</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Pnömatik pompaların performansı tesisinizdeki kompresörün ürettiği hava basıncına (Bar) doğrudan bağlıdır. Tablodaki veriler 7 Bar hava beslemesi referans alınarak hesaplanmıştır.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Bağlantı Çapı</th>
                        <th className="p-4 border-b">Maks. Debi (lt/dk)</th>
                        <th className="p-4 border-b">Maks. Hava Basıncı</th>
                        <th className="p-4 border-b">Katı Partikül Çapı</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">1/2" İnç</td>
                        <td className="p-4">50 lt/dk</td>
                        <td className="p-4">7 Bar</td>
                        <td className="p-4">3 mm</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">1" İnç</td>
                        <td className="p-4">160 lt/dk</td>
                        <td className="p-4">7 Bar</td>
                        <td className="p-4">4 mm</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">1.5" İnç</td>
                        <td className="p-4">350 lt/dk</td>
                        <td className="p-4">7 Bar</td>
                        <td className="p-4">6 mm</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">2" İnç</td>
                        <td className="p-4">600 lt/dk</td>
                        <td className="p-4">7 Bar</td>
                        <td className="p-4">8 mm</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <Wind className="w-6 h-6 text-[#E35205]" />
                  Pnömatik Transfer FAQ
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "Kuru çalışma (Dry Running) pompayı bozar mı?", a: "Hayır. Santrifüj ve loblu pompaların aksine havalı diyafram pompalar saatlerce susuz (kuru) çalışsalar dahi mekanik bir sürtünme olmadığı için ısınmaz ve bozulmazlar." },
                    { q: "Debiyi (Akış hızını) nasıl ayarlayabilirim?", a: "Elektrik motorlu pompalarda pahalı invertörler (frekans sürücüleri) gerekirken, diyafram pompalarda kompresörden gelen hava vanasını kısmak veya açmak debiyi değiştirmek için yeterlidir." },
                    { q: "Diyafram malzemesini neye göre seçmeliyiz?", a: "Agresif asitler ve solventler için mükemmel kimyasal dayanımı olan PTFE (Teflon), gıda uygulamaları veya aşındırıcı partiküller içeren çamurlu ürünler için ise esnek yapılı Santopren veya NBR tercih edilmelidir." },
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
                  { src: "galeri-1.webp", title: "PROJE 01", alt: "ATEX Kimya Transfer Pompası" },
                  { src: "galeri-2.webp", title: "PROJE 02", alt: "PTFE Diyafram Grubu" },
                  { src: "galeri-3.webp", title: "PROJE 03", alt: "Gıda Sektörü Hijyenik AODD" },
                  { src: "galeri-4.webp", title: "PROJE 04", alt: "Havalı Pompa Bataryası" }
                ].map((item, index) => (
                  <div key={index} className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md group cursor-pointer">
                    <Image 
                      src={`/assets/images/pompalar/havali-diyafram/${item.src}`} 
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
                    <p className="text-xs text-gray-500 tracking-widest">DOK-13 PDF Şartname</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">ATEX sertifikasyon belgeleri, diyafram kimyasal direnç tablosu ve basınç/hava tüketim eğrileri.</p>
                <a 
                  href="/assets/documents/teknik-sartnameler/DOK-13-havali-diyafram-pompalar.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Dökümanı İndir (PDF)
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#E35205]" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">Referans Uygulama</span>
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-gray-100 rounded shadow-inner group">
                  <Image 
                    src="/assets/images/pompalar/havali-diyafram/referans.webp" 
                    alt="Kimya ATEX Hattı Referansı" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">"Parlama riski yüksek kimyasal üretim tesisinde reaktörlerden 50 tonluk stok tanklarına PTFE diyaframlı ATEX transfer istasyonu."</p>
                <Link href={`/${lang}/referanslar`} className="text-[10px] font-bold tracking-widest text-[#005284] border-b-2 border-transparent hover:border-[#E35205] pb-0.5 transition-all inline-block mt-2">
                  Tüm Referansları Gör
                </Link>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Wind className="w-5 h-5 text-[#E35205]" />
                  Pnömatik Projelendirme
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Tesisinizdeki kompresör kapasitesini ve transfer edeceğiniz sıvıyı belirtin, doğru diyafram materyalini ve ölçüyü hesaplayalım.</p>
                <a 
                  href="https://wa.me/905324125152?text=Merhaba,%20havalı%20diyafram%20pompası%20hakkında%20kimyasal%20uyumluluk%20ve%20fiyat%20bilgisi%20almak%20istiyorum." 
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