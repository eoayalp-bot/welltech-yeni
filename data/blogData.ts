export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "zeytinyagi-depolama-tanklarinda-304-vs-316l",
    title: "Zeytinyağı Depolama Tanklarında 304 ve 316L Karşılaştırması",
    category: "Malzeme Bilimi",
    date: "24 Nisan 2026",
    author: "Welltech Mühendislik",
    readTime: "8 dk",
    excerpt: "Oleik asit dengesi ve polifenol koruması için hangi çelik kalitesi seçilmeli? Teknik verilerle paslanmaz çelik seçimi.",
    image: "/assets/images/blog/zeytinyagi.webp",
    content: "Zeytinyağının kalitesini hasattan şişelemeye kadar korumak, doğru depolama teknolojisiyle mümkündür. Oleik asit seviyeleri ve polifenol değerleri, yanlış malzeme seçimiyle hızla bozulabilir.\n\nBu noktada en çok sorulan soru şudur: 304 kalite mi, yoksa 316L kalite paslanmaz çelik mi tercih edilmelidir? Mühendislik açısından 304 kalite çelik, standart asiditeye sahip zeytinyağları için mükemmel bir fiyat/performans sunar. Ancak yüksek asitli veya uzun süreli depolama gerektiren özel üretimlerde, molibden ilavesiyle korozyon direnci artırılmış 316L (Low Carbon) serisi kullanmak, yatırımın ömrünü uzatır.\n\nWelltech olarak tanklarımızın taban geometrisini, tortu birikimini sıfıra indirecek konik açılarla tasarlıyor ve nitrojen (azot) yastıklama sistemleriyle oksidasyonu tamamen durduruyoruz. Doğru polisaj (Ra) değerleri sayesinde bakteriyel tutunmayı engelliyor ve zeytinyağınızın ilk günkü nefasetini yıllarca korumasını sağlıyoruz."
  },
  {
    slug: "ilac-ve-gida-endustrisinde-cip-sip-sistemleri",
    title: "İlaç ve Gıda Endüstrisinde CIP / SIP Sistemleri Kriterleri",
    category: "Hijyenik Tasarım",
    date: "18 Nisan 2026",
    author: "Welltech Mühendislik",
    readTime: "12 dk",
    excerpt: "Hijyenik tasarımın temeli: Clean-in-Place ve Sterilization-in-Place süreçlerinde termodinamik hesaplamalar ve mühendislik yaklaşımı.",
    image: "/assets/images/blog/cip-sip.webp",
    content: "Endüstriyel tesislerde çapraz bulaşma riskini sıfıra indirmek için CIP (Clean-in-Place) ve SIP (Sterilization-in-Place) sistemleri hayati öneme sahiptir. İlaç, süt ve içecek proseslerinde üretim hattının sökülmeden yıkanabilmesi, işletme maliyetlerini doğrudan etkiler.\n\nÖzel spreyleme topları, yüksek basınçlı yıkama hatları ve ölü nokta barındırmayan vana tasarımlarımızla uluslararası hijyen standartlarını (EHEDG, 3A) tam karşılıyoruz. Akışkanın boru çeperlerinde yaratacağı türbülans hızını (genellikle 1.5 - 2.0 m/s) doğru hesaplamak, yıkama kimyasallarının yüzeye tam temas etmesi için kritiktir.\n\nIsı transfer hesaplamaları ve akışkan dinamiği simülasyonlarımız sayesinde, her yıkama periyodunda maksimum su ve enerji tasarrufu sağlarken, tesisinizin üretim duruş (downtime) sürelerini en aza indirgiyoruz. Welltech otomasyon panoları ile asit, kostik ve durulama adımları milisaniyelik hassasiyetle kontrol edilir."
  },
  {
    slug: "asme-basinc-standartlari-ve-guvenlik",
    title: "ASME VIII Div.1 Basınçlı Kap Standartlarında Yeni Güvenlik Protokolleri",
    category: "Mühendislik Standartları",
    date: "10 Nisan 2026",
    author: "Welltech Kalite Kontrol",
    readTime: "15 dk",
    excerpt: "Yüksek basınçlı reaktörler ve depolama tanklarında uygulanması gereken zorunlu et kalınlığı toleransları ve NDT test süreçleri.",
    image: "/assets/images/blog/asme-standart.webp",
    content: "Endüstriyel tesislerde kullanılan reaktörlerin ve basınçlı kapların çalışma şartları her geçen gün daha agresif hale gelmektedir. ASME standartlarındaki güncellemeler, özellikle 150 derece üzeri sıcaklıklarda çalışan sistemlerde çeliğin akma mukavemeti (yield strength) düşüşlerinin çok daha katı bir şekilde hesaplanmasını zorunlu kılıyor.\n\nWelltech mühendislik departmanı olarak, yüksek basınçlı reaktör tasarımlarımızda artık nominal et kalınlığı üzerine eklenen korozyon payını spesifik akışkan türüne göre formüle ediyoruz. Gözle görülmeyen mikro çatlaklar hidrostatik testlerde sızdırmazlık sağlasa dahi, yıllar süren yorulma etkileriyle birleştiğinde sorun yaratabilir.\n\nBu nedenle tüm boyuna ve enine kaynak dikişlerinde %100 Radyografik (RT) ve Ultrasonik (UT) test prosedürlerini standart olarak uyguluyoruz. Teslim edilen her proje, EN 10204 3.1 malzeme izlenebilirlik sertifikaları ve bağımsız gözetim kuruluşu onaylarıyla güvence altına alınır."
  },
  {
    slug: "tehlikeli-kimyasallar-icin-atex-reaktor-secimi",
    title: "Tehlikeli Kimyasallar İçin ATEX Sertifikalı Reaktör Seçimi",
    category: "Kimya Endüstrisi",
    date: "02 Nisan 2026",
    author: "Welltech Proses Grubu",
    readTime: "10 dk",
    excerpt: "Patlayıcı ve yanıcı solventlerin kullanıldığı üretim hatlarında ex-proof motor, mekanik salmastra ve topraklama standartları.",
    image: "/assets/images/blog/atex-reaktor.webp",
    content: "Kimya ve boya sanayisinde solvent, alkol veya parlayıcı gaz emisyonu olan kapalı alanlarda standart ekipman kullanımı felaketlere yol açabilir. Bu tür Bölge 0 (Zone 0) ve Bölge 1 (Zone 1) alanlarda çalışacak paslanmaz çelik reaktörlerin ve mikserlerin %100 Ex-Proof (ATEX) sertifikasyonuna sahip olması yasal bir zorunluluktur.\n\nATEX reaktörlerimizde statik elektriği sıfırlayan özel topraklama baraları, kıvılcım çıkarmayan mekanik salmastralar ve patlama korumalı redüktörlü motorlar kullanıyoruz. Ayrıca gövde içindeki sürtünme katsayısını düşürmek için karıştırıcı kanat geometrilerini özel simülasyon testlerine tabi tutuyoruz.\n\nReaktör otomasyon panoları, tehlikeli alanın dışına veya özel basınçlandırılmış kabinler içerisine yerleştirilerek operatör güvenliği maksimum seviyeye çıkarılır. Welltech olarak, agresif prosesleriniz için 316Ti, Duplex veya Hastelloy alaşımlarından size en uygun ATEX çözümlerini üretiyoruz."
  }
];