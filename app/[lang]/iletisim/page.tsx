import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, Globe, Factory, Building2, MessageCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return {
    title: "İletişim & Üretim Merkezi | Welltech®",
    description: "Welltech paslanmaz çelik proses ve depolama teknolojileri üretim merkezi. İzmir Kemalpaşa fabrikamız iletişim bilgileri.",
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Welltech®",
      "telephone": "+905324125152",
      "email": "info@welltech.com.tr",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Kemalpaşa OSB Mah. 509 Sok. No: 15",
          "addressLocality": "Kemalpaşa, İzmir",
          "addressCountry": "TR"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Ulucak İstiklal, Gazi Blv. No:169",
          "postalCode": "35735",
          "addressLocality": "Kemalpaşa, İzmir",
          "addressCountry": "TR"
        }
      ]
    }
  };

  return (
    <div className="bg-gray-50 pb-32 selection:bg-[#E35205] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/kurumsal/iletisim-banner.webp"
            alt="Welltech İletişim ve Üretim Merkezi"
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
            <span className="text-white">İletişim</span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg">
              <Factory className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
              İletişim Merkezi
            </h1>
          </div>

          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            İzmir Kemalpaşa'daki modern üretim tesisimizde, dünya standartlarında paslanmaz çelik teknolojileri geliştiriyoruz. Projeleriniz için doğrudan teknik ekibimize ulaşın.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-10 h-full">
              
              <div>
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl">
                     <MapPin className="w-6 h-6 text-[#E35205]" />
                   </div>
                   <h2 className="text-2xl font-black text-gray-900 tracking-tight">Lokasyonlar</h2>
                </div>
                
                <div className="flex flex-col gap-8">
                  
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100 group hover:border-[#005284] transition-colors">
                      <Building2 className="w-6 h-6 text-[#E35205] group-hover:text-[#005284] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">Genel Merkez</span>
                      <span className="text-sm text-gray-700 leading-relaxed font-medium">
                        Organize Sanayi Bölgesi, Kemalpaşa OSB<br />
                        10. Sk. No:6, 35730<br />
                        Kemalpaşa / İZMİR / TÜRKİYE
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100 group hover:border-[#005284] transition-colors">
                      <Factory className="w-6 h-6 text-[#E35205] group-hover:text-[#005284] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">İmalathane</span>
                      <span className="text-sm text-gray-700 leading-relaxed font-medium">
                        Ulucak İstiklal, Gazi Blv. No:169<br />
                        35735 Kemalpaşa / İZMİR
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100 group hover:border-[#E35205] transition-colors">
                      <Phone className="w-6 h-6 text-[#005284] group-hover:text-[#E35205] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">Teknik Destek & Satış (GSM)</span>
                      <a href="tel:+905324125152" className="text-sm text-gray-900 font-bold hover:text-[#E35205] transition-colors">
                        +90 (532) 412 51 52
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-[#25D366]/10 rounded-xl shrink-0 border border-[#25D366]/20 group hover:border-[#E35205] transition-colors">
                      <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-[#E35205] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">WhatsApp Hattı</span>
                      <a href="https://wa.me/905324125152" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-900 font-bold hover:text-[#E35205] transition-colors">
                        +90 (532) 412 51 52
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100 group hover:border-[#E35205] transition-colors">
                      <Mail className="w-6 h-6 text-[#005284] group-hover:text-[#E35205] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">Kurumsal İletişim</span>
                      <a href="mailto:info@welltech.com.tr" className="text-sm text-gray-900 font-bold hover:text-[#E35205] transition-colors">
                        info@welltech.com.tr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100">
                      <Clock className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">Ziyaret & Destek Saatleri</span>
                      <span className="text-sm text-gray-700 font-medium leading-relaxed">
                        Hafta İçi: 08:30 - 18:30<br/>
                        <span className="text-[11px] text-gray-400 font-normal tracking-wide">(Türkiye Saati, GMT+3)</span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <span className="text-xs font-bold tracking-widest text-gray-400 mb-4 block">Bizi Takip Edin</span>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/inokstek/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:border-[#E35205] hover:bg-white transition-all group">
                    <Image src="/assets/images/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://www.instagram.com/inokstek_tr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:border-[#E35205] hover:bg-white transition-all group">
                    <Image src="/assets/images/icons/instagram.svg" alt="Instagram" width={20} height={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://www.facebook.com/inokstek/?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:border-[#E35205] hover:bg-white transition-all group">
                    <Image src="/assets/images/icons/facebook.svg" alt="Facebook" width={20} height={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCS2q0VBo8vSKv_HO04OghCg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:border-[#E35205] hover:bg-white transition-all group">
                    <Image src="/assets/images/icons/youtube.svg" alt="YouTube" width={20} height={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-gray-100 h-full">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">Proje Teklif Formu</h2>
                <Globe className="w-10 h-10 text-gray-100" />
              </div>
              
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold tracking-widest text-gray-500">Ad Soyad</label>
                    <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-bold tracking-widest text-gray-500">Firma Adı</label>
                    <input type="text" id="company" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold tracking-widest text-gray-500">E-Posta Adresi</label>
                    <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold tracking-widest text-gray-500">Telefon Numarası</label>
                    <input type="tel" id="phone" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold tracking-widest text-gray-500">Talep Edilen Ekipman / Proses Sistemi</label>
                  <select id="subject" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all cursor-pointer">
                    <option value="">Lütfen ilgilendiğiniz ürün grubunu seçiniz...</option>
                    
                    <optgroup label="Paslanmaz Tanklar">
                      <option value="endustriyel-depolama">Endüstriyel Depolama Tankları</option>
                      <option value="zeytinyagi-depolama">Zeytinyağı Depolama Sistemleri</option>
                      <option value="sut-gida-proses">Süt ve Gıda Proses Tankları</option>
                      <option value="kimyasal-asit-tank">Kimyasal ve Asit Tankları</option>
                    </optgroup>

                    <optgroup label="Proses Sistemleri">
                      <option value="karistiricili-proses">Karıştırıcılı Proses Tankları</option>
                      <option value="kimyasal-ilac-reaktor">Kimyasal ve İlaç Reaktörleri</option>
                      <option value="high-shear-homojenizator">High-Shear Homojenizatörler</option>
                      <option value="mobil-proses-skid">Mobil Proses Üniteleri (Skid Systems)</option>
                      <option value="isitma-sogutma-ceketli">Isıtma ve Soğutma Ceketli Tanklar</option>
                      <option value="fermantasyon-biyoreaktor">Fermantasyon ve Biyoreaktörler</option>
                      <option value="otomatik-cip">Tam Otomatik CIP Sistemleri</option>
                    </optgroup>

                    <optgroup label="Hijyenik Transfer Çözümleri">
                      <option value="santrifuj-pompa">Santrifüj Pompalar</option>
                      <option value="pozitif-deplasmanli-pompa">Pozitif Deplasmanlı Pompalar</option>
                      <option value="kendinden-emisli-pompa">Kendinden Emişli Pompalar</option>
                      <option value="varil-pompasi">Varil Pompaları</option>
                      <option value="havali-diyafram-pompa">Havalı Diyafram Pompalar</option>
                      <option value="monopomp-pompa">Monopomp Pompalar</option>
                    </optgroup>

                    <optgroup label="Diğer Hizmetler">
                      <option value="anahtar-teslim-tesis">Anahtar Teslim Tesis Kurulumu</option>
                      <option value="ozel-talep">Özel / Kataloğunuzda Olmayan Bir Talebim Var</option>
                    </optgroup>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold tracking-widest text-gray-500">Proje Detayları</label>
                  <textarea id="message" rows={5} placeholder="Örn: 20 Ton kapasiteli, 316L kalite, karıştırıcılı proses tankı talebimiz bulunmaktadır..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all resize-none"></textarea>
                </div>

                <div className="flex flex-col gap-6 mt-4">
                  <button type="button" className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#E35205] text-white px-8 py-5 rounded-xl text-sm font-bold tracking-widest hover:bg-[#005284] transition-colors shadow-lg">
                    <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Teklif Talebi Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-[400px] relative group">
            <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-gray-100 pointer-events-none">
              <span className="text-xs font-black text-[#005284] tracking-widest uppercase">Genel Merkez</span>
            </div>
            <iframe 
              src="https://maps.google.com/maps?q=Inokstek,+Organize+Sanayi+B%C3%B6lgesi,+Kemalpa%C5%9Fa+OSB,+10.+Sk.+No:6,+35730+Kemalpa%C5%9Fa/%C4%B0zmir&t=m&z=15&output=embed&iwloc=near" 
              className="w-full h-full rounded-xl border-0 filter grayscale contrast-110 opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-700" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-[400px] relative group">
            <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-gray-100 pointer-events-none">
              <span className="text-xs font-black text-[#E35205] tracking-widest uppercase">İmalathane</span>
            </div>
            <iframe 
              src="https://maps.google.com/maps?q=Ulucak+%C4%B0stiklal,+Gazi+Blv.+No:169,+35735+Kemalpa%C5%9Fa/%C4%B0zmir&t=m&z=15&output=embed&iwloc=near" 
              className="w-full h-full rounded-xl border-0 filter grayscale contrast-110 opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-700" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </section>
    </div>
  );
}