import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, ChevronRight, FileText, ShieldCheck, Award, Microscope, Search, FileBadge, Globe } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "Sertifikalar ve Kalite | Welltech®",
    description: "Welltech paslanmaz çelik üretim standartları, kalite belgeleri, ISO 9001, PED 2014/68/EU ve kaynak test (NDT) prosedürleri.",
  };
}

export default async function DocumentsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sertifikalar ve Kalite",
    "description": "Welltech paslanmaz çelik üretim standartları, kalite belgeleri, ISO 9001, PED 2014/68/EU ve kaynak test (NDT) prosedürleri.",
    "publisher": {
      "@type": "Organization",
      "name": "Welltech® International Engineering"
    }
  };

  return (
    <div className="bg-gray-50 pb-24 selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/kurumsal/kalite-banner.webp"
            alt="Sertifikalar ve Kalite Standartları"
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
            <span className="text-[#E35205]">Kurumsal</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Sertifikalar ve Kalite</span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg flex gap-2">
              <Award className="w-8 h-8 text-white" />
              <ShieldCheck className="w-6 h-6 text-blue-100 mt-2" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
              Sertifikalar ve Kalite
            </h1>
          </div>
          
          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            Sıfır hata prensibi ve tam izlenebilirlik. Ürettiğimiz her ekipman, uluslararası geçerliliğe sahip sertifikasyonlarla (PED, ASME, ISO) güvence altına alınır.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#E35205]" />
                  Global Kalite Standartları
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  Welltech® üretim hattına giren her paslanmaz çelik plaka, EN 10204 3.1 malzeme sertifikası ile kayıt altına alınır ve projenin teslimine kadar tam izlenebilirlik sağlanır. Kaynak işlemlerimiz onaylı (Sertifikalı) kaynakçılarımız tarafından, uluslararası WPS (Kaynak Prosedür Şartnamesi) ve PQR (Prosedür Kalifikasyon Kaydı) standartlarına harfiyen uyularak gerçekleştirilir.
                </p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-gray-100 rounded-xl shadow-md group">
                <Image 
                  src="/assets/images/kurumsal/kalite-izlenebilirlik.webp" 
                  alt="EN 10204 3.1 İzlenebilirlik" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">NDT (Tahribatsız Muayene)</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          {text: "RT (Radyografik / X-Ray) Kaynak Testi", icon: <Microscope className="w-5 h-5 text-[#E35205]"/>},
                          {text: "PT (Sıvı Penetrant) Yüzey Çatlak Testi", icon: <Search className="w-5 h-5 text-[#005284]"/>},
                          {text: "UT (Ultrasonik) Kalınlık Muayenesi", icon: <Microscope className="w-5 h-5 text-[#E35205]"/>},
                          {text: "VT (Görsel) Tahribatsız Muayene", icon: <Search className="w-5 h-5 text-[#005284]"/>},
                          {text: "Hidrostatik Basınç Sızdırmazlık Testi", icon: <CheckCircle className="w-5 h-5 text-[#E35205]"/>},
                          {text: "Yüzey Pürüzlülük (Ra) Ölçümü", icon: <CheckCircle className="w-5 h-5 text-[#005284]"/>}
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                            {feature.icon}
                            <span className="text-xs font-semibold text-gray-700 leading-tight">{feature.text}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                  
                  <div className="relative h-48 md:h-full w-full overflow-hidden border border-gray-100 rounded-xl shadow-md group">
                    <Image 
                      src="/assets/images/kurumsal/kalite-ndt.webp" 
                      alt="Kalite Kontrol ve NDT Testleri" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                    />
                  </div>
                </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 grid md:grid-cols-3 gap-8 items-center">
              <div className="relative h-64 sm:h-96 w-full overflow-hidden border border-gray-100 rounded-xl shadow-md group">
                <Image 
                  src="/assets/images/kurumsal/kalite-sertifika.webp" 
                  alt="Kurumsal Global Onaylar" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <div className="md:col-span-2 overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight border-b pb-4">Kurumsal Sertifikasyonlar</h3>
                <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">* Tesisimiz uluslararası bağımsız denetim kuruluşları (TÜV, SGS, Bureau Veritas vb.) tarafından periyodik olarak denetlenmektedir.</p>
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs tracking-widest">
                        <th className="p-4 border-b">Standart / Yönetmelik</th>
                        <th className="p-4 border-b">Kapsam</th>
                        <th className="p-4 border-b">Durum</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">ISO 9001:2015</td>
                        <td className="p-4">Kalite Yönetim Sistemi</td>
                        <td className="p-4 text-green-600 font-bold">Aktif</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">EN ISO 3834-2</td>
                        <td className="p-4">Metalik Kaynak Kalite Şartları</td>
                        <td className="p-4 text-green-600 font-bold">Aktif</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">PED 2014/68/EU</td>
                        <td className="p-4">Basınçlı Ekipmanlar Direktifi</td>
                        <td className="p-4 text-green-600 font-bold">Aktif</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#005284]">ASME Sec. VIII Div.1</td>
                        <td className="p-4">Basınçlı Kaplar Üretim Standardı</td>
                        <td className="p-4 text-gray-500">Uygunluk</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#E35205]">CE İşareti / Markalama</td>
                        <td className="p-4">Avrupa Birliği Uygunluk Beyanı</td>
                        <td className="p-4 text-green-600 font-bold">Aktif</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#E35205]" />
                  Kalite Kontrol FAQ
                </h2>
                <div className="space-y-6">
                  {[
                    { q: "Teslimatta hangi dökümanları sağlıyorsunuz?", a: "Proje tesliminde 'Kalite Dosyası' (Data Book) sunuyoruz. Bu dosya; EN 10204 3.1 malzeme sertifikalarını, kaynakçı sertifikalarını, NDT test raporlarını, hidrostatik test tutanaklarını ve genel teknik resimleri kapsar." },
                    { q: "Üçüncü taraf (Third Party) denetimlerine açık mısınız?", a: "Kesinlikle. Müşterilerimizin talebi doğrultusunda TÜV SÜD, SGS, Bureau Veritas veya Lloyd's Register gibi bağımsız kuruluşların fabrikamızdaki üretim ve test süreçlerine refakat etmesini sağlıyoruz." },
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

          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#005284]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-[#005284]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ISO 9001:2015</h4>
                    <p className="text-xs text-gray-500 tracking-widest uppercase">Kalite Sertifikası</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Kalite yönetim sistemimizin güncel ISO 9001:2015 sertifikasını PDF formatında indirebilirsiniz.</p>
                <a 
                  href="/assets/documents/welltech-iso-9001.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#005284] text-white px-4 py-3 rounded-xl text-sm font-bold tracking-wider hover:bg-[#E35205] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Belgeyi İndir
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#E35205]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-50 rounded-lg text-red-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Kurumsal Katalog</h4>
                    <p className="text-xs text-gray-500 tracking-widest uppercase">Genel Tanıtım</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Tüm üretim bantlarımızı, kapasite bilgilerimizi ve kalite standartlarımızı içeren genel firma kataloğumuz.</p>
                <a 
                  href="/assets/documents/welltech-kurumsal-katalog.pdf" 
                  download
                  className="w-full flex items-center justify-center gap-2 bg-[#E35205] text-white px-4 py-3 rounded-xl text-sm font-bold tracking-wider hover:bg-[#005284] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Kataloğu İndir
                </a>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#E35205]" />
                  Kalite Departmanı
                </h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Projenizle ilgili özel sertifikasyon talepleri veya kalite kontrol (QC) prosedürleri için departmanımıza ulaşın.</p>
                <a 
                  href="mailto:kalite@welltech.com.tr" 
                  className="w-full block text-center bg-gray-800 text-white border border-gray-700 px-4 py-3 rounded-xl text-sm font-bold tracking-wider hover:bg-white hover:text-gray-900 transition-colors shadow-md"
                >
                  kalite@welltech.com.tr
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}