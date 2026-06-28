export type TechnicalDetails = {
  capacity: string;
  material: string;
  standards: string;
  features: string;
};

export type ReferansTranslation = {
  title: string;
  category: string;
  client: string;
  excerpt: string;
  technical: TechnicalDetails;
};

export type Referans = {
  slug: string;
  year: string;
  image: string;
  translations: Record<string, ReferansTranslation>;
};

export const referanslar: Referans[] = [
  {
    slug: "endustriyel-su-stok-250-ton",
    year: "2023",
    image: "/assets/images/paslanmaz-tanklar/depolama/referans.webp",
    translations: {
      tr: {
        title: "250 Ton Endüstriyel Su Regülasyon Tankları",
        category: "Paslanmaz Tanklar",
        client: "Global İçecek Fabrikası",
        excerpt: "Proses hattını beslemek üzere yüksek debili giriş-çıkışlara dayanıklı, rüzgar ve sismik yük hesaplamalı dış ortam depolama tankları projesi.",
        technical: { capacity: "250.000 Litre x 2 Adet", material: "AISI 304 Paslanmaz", standards: "API 650 / EN 14015", features: "Ağır Hizmet Ankraj, Çatı Yürüme Yolları" }
      },
      en: {
        title: "250 Ton Industrial Water Regulation Tanks",
        category: "Stainless Tanks",
        client: "Global Beverage Factory",
        excerpt: "Outdoor storage tanks project resistant to high-flow inputs-outputs to feed the process line, with wind and seismic load calculations.",
        technical: { capacity: "250,000 Liters x 2 Units", material: "AISI 304 Stainless", standards: "API 650 / EN 14015", features: "Heavy Duty Anchoring, Roof Walkways" }
      },
      de: {
        title: "250 Tonnen Industriewasser-Regelungstanks",
        category: "Edelstahltanks",
        client: "Globale Getränkefabrik",
        excerpt: "Projekt für Außenlagertanks, resistent gegen hohe Durchflüsse zur Speisung der Prozesslinie, mit Wind- und seismischen Lastberechnungen.",
        technical: { capacity: "250.000 Liter x 2 Stück", material: "AISI 304 Edelstahl", standards: "API 650 / EN 14015", features: "Schwerlastverankerung, Dachlaufstege" }
      },
      fr: {
        title: "Réservoirs de Régulation d'Eau Industrielle de 250 Tonnes",
        category: "Réservoirs en Acier Inoxydable",
        client: "Usine Mondiale de Boissons",
        excerpt: "Projet de réservoirs de stockage en extérieur résistant aux entrées-sorties à haut débit pour alimenter la ligne de processus, avec calculs de charges éoliennes et sismiques.",
        technical: { capacity: "250 000 Litres x 2 Unités", material: "Acier Inoxydable AISI 304", standards: "API 650 / EN 14015", features: "Ancrage Robuste, Passerelles de Toit" }
      },
      es: {
        title: "Tanques de Regulación de Agua Industrial de 250 Toneladas",
        category: "Tanques de Acero Inoxidable",
        client: "Fábrica Global de Bebidas",
        excerpt: "Proyecto de tanques de almacenamiento al aire libre resistentes a entradas y salidas de alto flujo para alimentar la línea de proceso, con cálculos de carga sísmica y de viento.",
        technical: { capacity: "250.000 Litros x 2 Unidades", material: "Acero Inoxidable AISI 304", standards: "API 650 / EN 14015", features: "Anclaje Pesado, Pasarelas de Techo" }
      },
      pt: {
        title: "Tanques de Regulação de Água Industrial de 250 Toneladas",
        category: "Tanques de Aço Inoxidável",
        client: "Fábrica Global de Bebidas",
        excerpt: "Projeto de tanques de armazenamento ao ar livre resistentes a entradas-saídas de alto fluxo para alimentar a linha de processo, com cálculos de carga de vento e sísmica.",
        technical: { capacity: "250.000 Litros x 2 Unidades", material: "Aço Inoxidável AISI 304", standards: "API 650 / EN 14015", features: "Ancoragem Pesada, Passarelas de Teto" }
      },
      it: {
        title: "Serbatoi di Regolazione dell'Acqua Industriale da 250 Tonnellate",
        category: "Serbatoi in Acciaio Inossidabile",
        client: "Fabbrica Globale di Bevande",
        excerpt: "Progetto di serbatoi di stoccaggio all'aperto resistenti ad ingressi-uscite ad alto flusso per alimentare la linea di processo, con calcoli di carico del vento e sismico.",
        technical: { capacity: "250.000 Litri x 2 Unità", material: "Acciaio Inossidabile AISI 304", standards: "API 650 / EN 14015", features: "Ancoraggio Pesante, Passerelle sul Tetto" }
      },
      ru: {
        title: "Промышленные резервуары для воды на 250 тонн",
        category: "Резервуары из нержавеющей стали",
        client: "Глобальный завод по производству напитков",
        excerpt: "Проект наружных резервуаров для хранения, устойчивых к высокому расходу для питания технологической линии, с расчетами ветровой и сейсмической нагрузки.",
        technical: { capacity: "250 000 литров x 2 шт.", material: "Нержавеющая сталь AISI 304", standards: "API 650 / EN 14015", features: "Усиленное анкерное крепление, мостики на крыше" }
      },
      ar: {
        title: "خزانات تنظيم المياه الصناعية بسعة 250 طن",
        category: "خزانات الفولاذ المقاوم للصدأ",
        client: "مصنع المشروبات العالمي",
        excerpt: "مشروع خزانات تخزين خارجية مقاومة لتدفقات الإدخال والإخراج العالية لتغذية خط العملية، مع حسابات أحمال الرياح والزلازل.",
        technical: { capacity: "250,000 لتر × 2 وحدة", material: "فولاذ مقاوم للصدأ AISI 304", standards: "API 650 / EN 14015", features: "إرساء للخدمة الشاقة، ممرات على السطح" }
      }
    }
  },
  {
    slug: "zeytinyagi-stok-tesisi-50-ton",
    year: "2022",
    image: "/assets/images/paslanmaz-tanklar/kategori-zeytinyagi.webp",
    translations: {
      tr: {
        title: "50 Ton Zeytinyağı Dinlendirme ve Stok Tesisi",
        category: "Paslanmaz Tanklar",
        client: "Ege Tarım Kooperatifi",
        excerpt: "Zeytinyağının kalitesini korumak için azot yastıklama sistemli, konik tabanlı ve özel izolasyonlu dinlendirme tankları.",
        technical: { capacity: "50.000 Litre x 4 Adet", material: "AISI 316L Paslanmaz", standards: "Gıda Yönetmeliğine Uygun", features: "Azot Yastıklama, Isı İzolasyonu" }
      },
      en: {
        title: "50 Ton Olive Oil Resting and Storage Facility",
        category: "Stainless Tanks",
        client: "Aegean Agricultural Cooperative",
        excerpt: "Resting tanks with nitrogen blanketing system, conical bottom, and special insulation to preserve the quality of olive oil.",
        technical: { capacity: "50,000 Liters x 4 Units", material: "AISI 316L Stainless", standards: "Food Regulation Compliant", features: "Nitrogen Blanketing, Thermal Insulation" }
      },
      de: {
        title: "50 Tonnen Olivenöl-Ruhe- und Lageranlage",
        category: "Edelstahltanks",
        client: "Ägäis-Landwirtschaftsgenossenschaft",
        excerpt: "Ruhetanks mit Stickstoffüberlagerungssystem, konischem Boden und spezieller Isolierung zur Erhaltung der Olivenölqualität.",
        technical: { capacity: "50.000 Liter x 4 Stück", material: "AISI 316L Edelstahl", standards: "Lebensmittelverordnung konform", features: "Stickstoffüberlagerung, Wärmeisolierung" }
      },
      fr: {
        title: "Installation de Repos et de Stockage d'Huile d'Olive de 50 Tonnes",
        category: "Réservoirs en Acier Inoxydable",
        client: "Coopérative Agricole Égéenne",
        excerpt: "Réservoirs de repos avec système de couverture d'azote, fond conique et isolation spéciale pour préserver la qualité de l'huile d'olive.",
        technical: { capacity: "50 000 Litres x 4 Unités", material: "Acier Inoxydable AISI 316L", standards: "Conforme à la Réglementation Alimentaire", features: "Couverture d'Azote, Isolation Thermique" }
      },
      es: {
        title: "Instalación de Reposo y Almacenamiento de Aceite de Oliva de 50 Toneladas",
        category: "Tanques de Acero Inoxidable",
        client: "Cooperativa Agrícola del Egeo",
        excerpt: "Tanques de reposo con sistema de inertización con nitrógeno, fondo cónico y aislamiento especial para preservar la calidad del aceite de oliva.",
        technical: { capacity: "50.000 Litros x 4 Unidades", material: "Acero Inoxidable AISI 316L", standards: "Normativa Alimentaria", features: "Inertización con Nitrógeno, Aislamiento Térmico" }
      },
      pt: {
        title: "Instalação de Repouso e Armazenamento de Azeite de 50 Toneladas",
        category: "Tanques de Aço Inoxidável",
        client: "Cooperativa Agrícola do Egeu",
        excerpt: "Tanques de repouso com sistema de inertização por nitrogênio, fundo cônico e isolamento especial para preservar a qualidade do azeite.",
        technical: { capacity: "50.000 Litros x 4 Unidades", material: "Aço Inoxidável AISI 316L", standards: "Regulamentação Alimentar", features: "Inertização por Nitrogênio, Isolamento Térmico" }
      },
      it: {
        title: "Impianto di Riposo e Stoccaggio Olio d'Oliva da 50 Tonnellate",
        category: "Serbatoi in Acciaio Inossidabile",
        client: "Cooperativa Agricola dell'Egeo",
        excerpt: "Serbatoi di riposo con sistema di copertura ad azoto, fondo conico e isolamento speciale per preservare la qualità dell'olio d'oliva.",
        technical: { capacity: "50.000 Litri x 4 Unità", material: "Acciaio Inossidabile AISI 316L", standards: "Normativa Alimentare", features: "Copertura ad Azoto, Isolamento Termico" }
      },
      ru: {
        title: "Установка для отстаивания оливкового масла на 50 тонн",
        category: "Резервуары из нержавеющей стали",
        client: "Эгейский сельскохозяйственный кооператив",
        excerpt: "Отстойные резервуары с системой азотной подушки, коническим дном и специальной изоляцией для сохранения качества оливкового масла.",
        technical: { capacity: "50 000 литров x 4 шт.", material: "Нержавеющая сталь AISI 316L", standards: "Пищевые стандарты", features: "Азотная подушка, теплоизоляция" }
      },
      ar: {
        title: "منشأة تخزين وإراحة زيت الزيتون بسعة 50 طن",
        category: "خزانات الفولاذ المقاوم للصدأ",
        client: "التعاونية الزراعية في بحر إيجة",
        excerpt: "خزانات إراحة مزودة بنظام تغطية بالنيتروجين، وقاع مخروطي، وعزل خاص للحفاظ على جودة زيت الزيتون.",
        technical: { capacity: "50,000 لتر × 4 وحدات", material: "فولاذ مقاوم للصدأ AISI 316L", standards: "متوافق مع لوائح الأغذية", features: "تغطية بالنيتروجين، عزل حراري" }
      }
    }
  },
  {
    slug: "sut-sogutma-ve-stok-100-ton",
    year: "2023",
    image: "/assets/images/paslanmaz-tanklar/kategori-sut.webp",
    translations: {
      tr: {
        title: "100 Ton Çiğ Süt Soğutma ve Stok Tankı",
        category: "Paslanmaz Tanklar",
        client: "Ulusal Süt Ürünleri A.Ş.",
        excerpt: "Rollbond ceketli soğutma sistemi ve poliüretan izolasyonu ile çiğ sütün ideal sıcaklıkta muhafaza edilmesini sağlayan silo tanklar.",
        technical: { capacity: "100.000 Litre", material: "AISI 304 Paslanmaz", standards: "EHEDG / 3-A", features: "Rollbond Soğutma Ceketi, Poliüretan İzolasyon" }
      },
      en: {
        title: "100 Ton Raw Milk Cooling and Storage Tank",
        category: "Stainless Tanks",
        client: "National Dairy Products Co.",
        excerpt: "Silo tanks ensuring raw milk is kept at the ideal temperature with Rollbond jacketed cooling system and polyurethane insulation.",
        technical: { capacity: "100,000 Liters", material: "AISI 304 Stainless", standards: "EHEDG / 3-A", features: "Rollbond Cooling Jacket, Polyurethane Insulation" }
      },
      de: {
        title: "100 Tonnen Rohmilchkühl- und Lagertank",
        category: "Edelstahltanks",
        client: "Nationale Milchprodukte AG",
        excerpt: "Silotanks, die mit einem Rollbond-Kühlmantel und einer Polyurethan-Isolierung sicherstellen, dass die Rohmilch auf der idealen Temperatur gehalten wird.",
        technical: { capacity: "100.000 Liter", material: "AISI 304 Edelstahl", standards: "EHEDG / 3-A", features: "Rollbond-Kühlmantel, Polyurethan-Isolierung" }
      },
      fr: {
        title: "Réservoir de Refroidissement et Stockage de Lait Cru 100 Tonnes",
        category: "Réservoirs en Acier Inoxydable",
        client: "Produits Laitiers Nationaux S.A.",
        excerpt: "Réservoirs silos assurant le maintien du lait cru à la température idéale avec un système de refroidissement à chemise Rollbond et une isolation en polyuréthane.",
        technical: { capacity: "100 000 Litres", material: "Acier Inoxydable AISI 304", standards: "EHEDG / 3-A", features: "Chemise de Refroidissement Rollbond, Isolation en Polyuréthane" }
      },
      es: {
        title: "Tanque de Enfriamiento y Almacenamiento de Leche Cruda 100 Ton.",
        category: "Tanques de Acero Inoxidable",
        client: "Productos Lácteos Nacionales S.A.",
        excerpt: "Tanques silo que aseguran que la leche cruda se mantenga a la temperatura ideal con sistema de enfriamiento de camisa Rollbond y aislamiento de poliuretano.",
        technical: { capacity: "100.000 Litros", material: "Acero Inoxidable AISI 304", standards: "EHEDG / 3-A", features: "Camisa de Enfriamiento Rollbond, Aislamiento Poliuretano" }
      },
      pt: {
        title: "Tanque de Resfriamento e Armazenamento de Leite Cru 100 Ton.",
        category: "Tanques de Aço Inoxidável",
        client: "Produtos Lácteos Nacionais S.A.",
        excerpt: "Tanques silo que garantem que o leite cru seja mantido na temperatura ideal com sistema de resfriamento com camisa Rollbond e isolamento de poliuretano.",
        technical: { capacity: "100.000 Litros", material: "Aço Inoxidável AISI 304", standards: "EHEDG / 3-A", features: "Camisa de Resfriamento Rollbond, Isolamento Poliuretano" }
      },
      it: {
        title: "Serbatoio di Raffreddamento e Stoccaggio Latte Crudo 100 Ton.",
        category: "Serbatoi in Acciaio Inossidabile",
        client: "Prodotti Lattiero-Caseari Nazionali",
        excerpt: "Serbatoi silo che garantiscono la conservazione del latte crudo alla temperatura ideale con sistema di raffreddamento a camicia Rollbond e isolamento in poliuretano.",
        technical: { capacity: "100.000 Litri", material: "Acciaio Inossidabile AISI 304", standards: "EHEDG / 3-A", features: "Camicia di Raffreddamento Rollbond, Isolamento Poliuretano" }
      },
      ru: {
        title: "Резервуар для охлаждения сырого молока на 100 тонн",
        category: "Резервуары из нержавеющей стали",
        client: "Национальная молочная компания",
        excerpt: "Силосные резервуары, обеспечивающие хранение сырого молока при идеальной температуре с системой охлаждения Rollbond и полиуретановой изоляцией.",
        technical: { capacity: "100 000 литров", material: "Нержавеющая сталь AISI 304", standards: "EHEDG / 3-A", features: "Охлаждающая рубашка Rollbond, полиуретановая изоляция" }
      },
      ar: {
        title: "خزان تبريد وتخزين الحليب الخام بسعة 100 طن",
        category: "خزانات الفولاذ المقاوم للصدأ",
        client: "الشركة الوطنية لمنتجات الألبان",
        excerpt: "صوامع تضمن حفظ الحليب الخام في درجة الحرارة المثالية باستخدام نظام تبريد بغلاف Rollbond وعزل البولي يوريثين.",
        technical: { capacity: "100,000 لتر", material: "فولاذ مقاوم للصدأ AISI 304", standards: "EHEDG / 3-A", features: "غلاف تبريد Rollbond، عزل بولي يوريثين" }
      }
    }
  },
  {
    slug: "tehlikeli-kimyasal-depolama-20-ton",
    year: "2024",
    image: "/assets/images/paslanmaz-tanklar/kategori-kimyasal.webp",
    translations: {
      tr: {
        title: "20 Ton Tehlikeli Kimyasal Depolama Tankı",
        category: "Paslanmaz Tanklar",
        client: "Kimya İhtisas Organize Sanayi",
        excerpt: "Agresif asit ve bazların depolanması için özel kalınlıkta tasarlanmış, sızdırmazlık ve basınç testlerinden geçmiş güvenlikli tanklar.",
        technical: { capacity: "20.000 Litre x 3 Adet", material: "AISI 316Ti / Hastelloy", standards: "AD 2000 Merkblatt", features: "Taşma Havuzu, Ex-Proof Enstrümantasyon" }
      },
      en: {
        title: "20 Ton Hazardous Chemical Storage Tank",
        category: "Stainless Tanks",
        client: "Chemical Specialized Organized Industry",
        excerpt: "Secured tanks designed with special thickness for storing aggressive acids and bases, passed tightness and pressure tests.",
        technical: { capacity: "20,000 Liters x 3 Units", material: "AISI 316Ti / Hastelloy", standards: "AD 2000 Merkblatt", features: "Overflow Pool, Ex-Proof Instrumentation" }
      },
      de: {
        title: "20 Tonnen Gefahrstofflagertank",
        category: "Edelstahltanks",
        client: "Chemische Spezialisierte Organisierte Industrie",
        excerpt: "Gesicherte Tanks in spezieller Dicke für die Lagerung aggressiver Säuren und Basen, die Dichtheits- und Druckprüfungen bestanden haben.",
        technical: { capacity: "20.000 Liter x 3 Stück", material: "AISI 316Ti / Hastelloy", standards: "AD 2000 Merkblatt", features: "Überlaufbecken, Ex-geschützte Instrumentierung" }
      },
      fr: {
        title: "Réservoir de Stockage de Produits Chimiques Dangereux 20 Ton.",
        category: "Réservoirs en Acier Inoxydable",
        client: "Industrie Spécialisée en Chimie",
        excerpt: "Réservoirs sécurisés conçus avec une épaisseur spéciale pour le stockage d'acides et de bases agressifs, ayant réussi les tests d'étanchéité.",
        technical: { capacity: "20 000 Litres x 3 Unités", material: "AISI 316Ti / Hastelloy", standards: "AD 2000 Merkblatt", features: "Bassin de Débordement, Instrumentation Ex-Proof" }
      },
      es: {
        title: "Tanque de Productos Químicos Peligrosos de 20 Toneladas",
        category: "Tanques de Acero Inoxidable",
        client: "Industria Especializada en Química",
        excerpt: "Tanques de seguridad diseñados con un espesor especial para almacenar ácidos y bases agresivos, superando pruebas de estanqueidad.",
        technical: { capacity: "20.000 Litros x 3 Unidades", material: "AISI 316Ti / Hastelloy", standards: "AD 2000 Merkblatt", features: "Piscina de Desbordamiento, Instrumentación Ex-Proof" }
      },
      pt: {
        title: "Tanque de Produtos Químicos Perigosos de 20 Toneladas",
        category: "Tanques de Aço Inoxidável",
        client: "Indústria Especializada em Química",
        excerpt: "Tanques seguros projetados com espessura especial para armazenamento de ácidos e bases agressivos, aprovados em testes de estanqueidade.",
        technical: { capacity: "20.000 Litros x 3 Unidades", material: "AISI 316Ti / Hastelloy", standards: "AD 2000 Merkblatt", features: "Piscina de Transbordamento, Instrumentação Ex-Proof" }
      },
      it: {
        title: "Serbatoio Prodotti Chimici Pericolosi da 20 Tonnellate",
        category: "Serbatoi in Acciaio Inossidabile",
        client: "Industria Specializzata in Chimica",
        excerpt: "Serbatoi di sicurezza progettati con spessore speciale per lo stoccaggio di acidi e basi aggressivi, che hanno superato prove di tenuta.",
        technical: { capacity: "20.000 Litri x 3 Unità", material: "AISI 316Ti / Hastelloy", standards: "AD 2000 Merkblatt", features: "Vasca di Trabocco, Strumentazione Ex-Proof" }
      },
      ru: {
        title: "Резервуар для опасных химических веществ на 20 тонн",
        category: "Резервуары из нержавеющей стали",
        client: "Специализированная химическая промышленная зона",
        excerpt: "Безопасные резервуары специальной толщины для хранения агрессивных кислот и щелочей, прошедшие испытания на герметичность.",
        technical: { capacity: "20 000 литров x 3 шт.", material: "AISI 316Ti / Hastelloy", standards: "AD 2000 Merkblatt", features: "Переливной бассейн, взрывозащищенные КИПиА" }
      },
      ar: {
        title: "خزان تخزين المواد الكيميائية الخطرة بسعة 20 طن",
        category: "خزانات الفولاذ المقاوم للصدأ",
        client: "الصناعة المتخصصة في الكيمياء",
        excerpt: "خزانات آمنة مصممة بسماكة خاصة لتخزين الأحماض والقواعد العدوانية، واجتازت اختبارات التسرب والضغط.",
        technical: { capacity: "20,000 لتر × 3 وحدات", material: "AISI 316Ti / Hastelloy", standards: "AD 2000 Merkblatt", features: "حوض الفائض، أدوات مقاومة للانفجار" }
      }
    }
  },
  {
    slug: "tam-otomatik-cip-sistemi-3-hatli",
    year: "2023",
    image: "/assets/images/proses-sistemleri/kategori-cip.webp",
    translations: {
      tr: {
        title: "3 Hatlı Tam Otomatik CIP (Yerinde Yıkama) Sistemi",
        category: "Proses Sistemleri",
        client: "Uluslararası Bira Üretim Tesisi",
        excerpt: "Fabrikadaki tüm tank ve boru hatlarının el değmeden, otomatik dozajlama ve ısıtma ile yıkanmasını sağlayan merkezi CIP ünitesi.",
        technical: { capacity: "3 x 3.000 Litre (Asit/Baz/Su)", material: "AISI 316L Paslanmaz", standards: "EHEDG / FDA", features: "Otomatik İletkenlik Ölçümü, Reçeteli Yıkama" }
      },
      en: {
        title: "3-Line Fully Automatic CIP (Clean-in-Place) System",
        category: "Process Systems",
        client: "International Beer Production Facility",
        excerpt: "Central CIP unit that allows washing of all tanks and pipelines in the factory untouched, with automatic dosing and heating.",
        technical: { capacity: "3 x 3,000 Liters (Acid/Base/Water)", material: "AISI 316L Stainless", standards: "EHEDG / FDA", features: "Automatic Conductivity Measurement, Recipe Washing" }
      },
      de: {
        title: "Vollautomatisches 3-Linien-CIP-System",
        category: "Prozesssysteme",
        client: "Internationale Bierproduktionsanlage",
        excerpt: "Zentrale CIP-Einheit, die das automatische und berührungslose Waschen aller Tanks und Rohrleitungen mit automatischer Dosierung ermöglicht.",
        technical: { capacity: "3 x 3.000 Liter (Säure/Base/Wasser)", material: "AISI 316L Edelstahl", standards: "EHEDG / FDA", features: "Automatische Leitfähigkeitsmessung, Rezepturgesteuertes Waschen" }
      },
      fr: {
        title: "Système CIP Entièrement Automatique à 3 Lignes",
        category: "Systèmes de Processus",
        client: "Usine Internationale de Bière",
        excerpt: "Unité CIP centrale permettant le lavage sans contact de tous les réservoirs et pipelines de l'usine, avec dosage et chauffage automatiques.",
        technical: { capacity: "3 x 3 000 Litres (Acide/Base/Eau)", material: "Acier Inoxydable AISI 316L", standards: "EHEDG / FDA", features: "Mesure Automatique de Conductivité, Lavage sur Ordonnance" }
      },
      es: {
        title: "Sistema CIP Totalmente Automático de 3 Líneas",
        category: "Sistemas de Procesos",
        client: "Instalación Internacional de Cerveza",
        excerpt: "Unidad CIP central que permite el lavado sin contacto de todos los tanques y tuberías de la fábrica, con dosificación y calentamiento automáticos.",
        technical: { capacity: "3 x 3.000 Litros (Ácido/Base/Agua)", material: "Acero Inoxidable AISI 316L", standards: "EHEDG / FDA", features: "Medición Automática de Conductividad, Lavado por Receta" }
      },
      pt: {
        title: "Sistema CIP Totalmente Automático de 3 Linhas",
        category: "Sistemas de Processos",
        client: "Instalação Internacional de Cerveja",
        excerpt: "Unidade CIP central que permite a lavagem intocada de todos os tanques e tubulações da fábrica, com dosagem e aquecimento automáticos.",
        technical: { capacity: "3 x 3.000 Litros (Ácido/Base/Água)", material: "Aço Inoxidável AISI 316L", standards: "EHEDG / FDA", features: "Medição Automática de Condutividade, Lavagem por Receita" }
      },
      it: {
        title: "Sistema CIP Completamente Automatico a 3 Linee",
        category: "Sistemi di Processo",
        client: "Impianto Internazionale di Birra",
        excerpt: "Unità CIP centrale che consente il lavaggio automatico e senza contatto di tutti i serbatoi e le tubazioni dello stabilimento.",
        technical: { capacity: "3 x 3.000 Litri (Acido/Base/Acqua)", material: "Acciaio Inossidabile AISI 316L", standards: "EHEDG / FDA", features: "Misurazione Automatica della Conducibilità, Lavaggio a Ricetta" }
      },
      ru: {
        title: "Полностью автоматическая 3-линейная система CIP",
        category: "Технологические системы",
        client: "Международный завод по производству пива",
        excerpt: "Центральная установка CIP, позволяющая автоматически, без контакта мыть все резервуары и трубопроводы на заводе с дозированием.",
        technical: { capacity: "3 x 3 000 литров (Кислота/Щелочь/Вода)", material: "Нержавеющая сталь AISI 316L", standards: "EHEDG / FDA", features: "Автоматическое измерение проводимости, мойка по рецепту" }
      },
      ar: {
        title: "نظام التنظيف في المكان (CIP) الآلي بالكامل بـ 3 خطوط",
        category: "أنظمة العمليات",
        client: "مصنع دولي لإنتاج البيرة",
        excerpt: "وحدة CIP مركزية تتيح غسل جميع الخزانات وخطوط الأنابيب في المصنع تلقائيًا دون لمس، مع جرعات وتسخين تلقائي.",
        technical: { capacity: "3 × 3000 لتر (حمض/قاعدة/ماء)", material: "فولاذ مقاوم للصدأ AISI 316L", standards: "EHEDG / FDA", features: "قياس الموصلية التلقائي، غسيل حسب الوصفة" }
      }
    }
  },
  {
    slug: "kimyasal-reaktor-sistemi-5-ton",
    year: "2022",
    image: "/assets/images/proses-sistemleri/kategori-reaktor.webp",
    translations: {
      tr: {
        title: "5 Ton Ceketli Kimyasal Reaktör Hattı",
        category: "Proses Sistemleri",
        client: "Kozmetik & Deterjan A.Ş.",
        excerpt: "Yüksek viskoziteli şampuan ve deterjan üretimi için tasarlanmış, sıyırıcılı karıştırıcıya ve ısıtma/soğutma ceketine sahip tam donanımlı reaktör.",
        technical: { capacity: "5.000 Litre", material: "AISI 316L Paslanmaz", standards: "CE / PED 2014/68/EU", features: "Teflon Sıyırıcılı Çapa Karıştırıcı, Yük Hücresi (Loadcell)" }
      },
      en: {
        title: "5 Ton Jacketed Chemical Reactor Line",
        category: "Process Systems",
        client: "Cosmetics & Detergent Co.",
        excerpt: "Fully equipped reactor designed for high viscosity shampoo and detergent production, featuring a scraper agitator and heating/cooling jacket.",
        technical: { capacity: "5,000 Liters", material: "AISI 316L Stainless", standards: "CE / PED 2014/68/EU", features: "Anchor Agitator with Teflon Scraper, Loadcell" }
      },
      de: {
        title: "5 Tonnen ummantelte chemische Reaktorlinie",
        category: "Prozesssysteme",
        client: "Kosmetik & Waschmittel AG",
        excerpt: "Voll ausgestatteter Reaktor für die Produktion hochviskoser Shampoos und Waschmittel, mit Schaber-Rührwerk und Heiz-/Kühlmantel.",
        technical: { capacity: "5.000 Liter", material: "AISI 316L Edelstahl", standards: "CE / PED 2014/68/EU", features: "Anker-Rührwerk mit Teflonschaber, Wägezelle" }
      },
      fr: {
        title: "Ligne de Réacteur Chimique à Double Enveloppe 5 Ton.",
        category: "Systèmes de Processus",
        client: "Cosmétiques & Détergents S.A.",
        excerpt: "Réacteur entièrement équipé conçu pour la production de shampoings et détergents à haute viscosité, doté d'un agitateur racleur.",
        technical: { capacity: "5 000 Litres", material: "Acier Inoxydable AISI 316L", standards: "CE / PED 2014/68/EU", features: "Agitateur à Ancre avec Racleur, Cellule de Charge" }
      },
      es: {
        title: "Línea de Reactor Químico Encamisado de 5 Toneladas",
        category: "Sistemas de Procesos",
        client: "Cosméticos y Detergentes S.A.",
        excerpt: "Reactor totalmente equipado diseñado para la producción de champús y detergentes de alta viscosidad, con agitador raspador y camisa.",
        technical: { capacity: "5.000 Litros", material: "Acero Inoxidable AISI 316L", standards: "CE / PED 2014/68/EU", features: "Agitador de Ancla con Raspador, Célula de Carga" }
      },
      pt: {
        title: "Linha de Reator Químico Encamisado de 5 Toneladas",
        category: "Sistemas de Processos",
        client: "Cosméticos e Detergentes S.A.",
        excerpt: "Reator totalmente equipado projetado para produção de xampus e detergentes de alta viscosidade, com agitador raspador e camisa.",
        technical: { capacity: "5.000 Litros", material: "Aço Inoxidável AISI 316L", standards: "CE / PED 2014/68/EU", features: "Agitador de Âncora com Raspador, Célula de Carga" }
      },
      it: {
        title: "Linea Reattore Chimico Incamiciato da 5 Tonnellate",
        category: "Sistemi di Processo",
        client: "Cosmetici e Detergenti S.p.A.",
        excerpt: "Reattore completamente attrezzato progettato per la produzione di shampoo e detergenti ad alta viscosità, dotato di agitatore a raschiatore.",
        technical: { capacity: "5.000 Litri", material: "Acciaio Inossidabile AISI 316L", standards: "CE / PED 2014/68/EU", features: "Agitatore ad Ancora con Raschiatore, Cella di Carico" }
      },
      ru: {
        title: "Линия химического реактора с рубашкой на 5 тонн",
        category: "Технологические системы",
        client: "АО Косметика и моющие средства",
        excerpt: "Полностью оборудованный реактор для производства высоковязких шампуней и моющих средств, со скребковой мешалкой и рубашкой.",
        technical: { capacity: "5 000 литров", material: "Нержавеющая сталь AISI 316L", standards: "CE / PED 2014/68/EU", features: "Якорная мешалка с тефлоновым скребком, тензодатчик" }
      },
      ar: {
        title: "خط مفاعل كيميائي بغلاف سعة 5 طن",
        category: "أنظمة العمليات",
        client: "شركة مستحضرات التجميل والمنظفات",
        excerpt: "مفاعل مجهز بالكامل مصمم لإنتاج الشامبو والمنظفات عالية اللزوجة، ويتميز بخلاط مكشطة وغلاف تسخين/تبريد.",
        technical: { capacity: "5,000 لتر", material: "فولاذ مقاوم للصدأ AISI 316L", standards: "CE / PED 2014/68/EU", features: "خلاط مرساة مع مكشطة تفلون، خلية تحميل" }
      }
    }
  },
  {
    slug: "endustriyel-homojenizator-tesisi",
    year: "2024",
    image: "/assets/images/proses-sistemleri/kategori-homojenizator.webp",
    translations: {
      tr: {
        title: "Yüksek Basınçlı Süt Homojenizasyon Hattı",
        category: "Proses Sistemleri",
        client: "Bölgesel Süt İşleme Tesisi",
        excerpt: "Süt yağının parçalanarak standartlaştırılmasını sağlayan, titreşim önleyici sistemlerle donatılmış yüksek basınçlı homojenizatör ve entegre borulama projesi.",
        technical: { capacity: "10.000 Litre / Saat", material: "Dubleks Paslanmaz Çelik", standards: "ISO 9001 / 3-A", features: "Seramik Pistonlar, Pnömatik Basınç Ayarı" }
      },
      en: {
        title: "High Pressure Milk Homogenization Line",
        category: "Process Systems",
        client: "Regional Milk Processing Facility",
        excerpt: "High-pressure homogenizer and integrated piping project equipped with anti-vibration systems, ensuring standardization by breaking down milk fat.",
        technical: { capacity: "10,000 Liters / Hour", material: "Duplex Stainless Steel", standards: "ISO 9001 / 3-A", features: "Ceramic Pistons, Pneumatic Pressure Adjustment" }
      },
      de: {
        title: "Hochdruck-Milchhomogenisierungslinie",
        category: "Prozesssysteme",
        client: "Regionale Milchverarbeitungsanlage",
        excerpt: "Hochdruck-Homogenisator und integriertes Rohrleitungsprojekt, ausgestattet mit Anti-Vibrations-Systemen, zur Standardisierung des Milchfetts.",
        technical: { capacity: "10.000 Liter / Stunde", material: "Duplex-Edelstahl", standards: "ISO 9001 / 3-A", features: "Keramikkolben, Pneumatische Druckeinstellung" }
      },
      fr: {
        title: "Ligne d'Homogénéisation de Lait Haute Pression",
        category: "Systèmes de Processus",
        client: "Usine Régionale de Lait",
        excerpt: "Homogénéisateur à haute pression et tuyauterie intégrée équipé de systèmes anti-vibrations, assurant la standardisation de la matière grasse.",
        technical: { capacity: "10 000 Litres / Heure", material: "Acier Inoxydable Duplex", standards: "ISO 9001 / 3-A", features: "Pistons en Céramique, Réglage de Pression" }
      },
      es: {
        title: "Línea de Homogeneización de Leche de Alta Presión",
        category: "Sistemas de Procesos",
        client: "Instalación Regional de Lácteos",
        excerpt: "Homogeneizador de alta presión y proyecto de tuberías equipado con sistemas antivibración, que garantiza la estandarización de la grasa.",
        technical: { capacity: "10.000 Litros / Hora", material: "Acero Inoxidable Dúplex", standards: "ISO 9001 / 3-A", features: "Pistones de Cerámica, Ajuste de Presión Neumático" }
      },
      pt: {
        title: "Linha de Homogeneização de Leite de Alta Pressão",
        category: "Sistemas de Processos",
        client: "Instalação Regional de Laticínios",
        excerpt: "Homogeneizador de alta pressão e tubulação integrada equipada com sistemas antivibração, garantindo a padronização da gordura do leite.",
        technical: { capacity: "10.000 Litros / Hora", material: "Aço Inoxidável Duplex", standards: "ISO 9001 / 3-A", features: "Pistões de Cerâmica, Ajuste de Pressão Pneumático" }
      },
      it: {
        title: "Linea di Omogeneizzazione Latte ad Alta Pressione",
        category: "Sistemi di Processo",
        client: "Impianto Regionale del Latte",
        excerpt: "Omogeneizzatore ad alta pressione e tubazioni integrate con sistemi antivibranti, che garantiscono la standardizzazione del grasso del latte.",
        technical: { capacity: "10.000 Litri / Ora", material: "Acciaio Inossidabile Duplex", standards: "ISO 9001 / 3-A", features: "Pistoni in Ceramica, Regolazione Pressione" }
      },
      ru: {
        title: "Линия гомогенизации молока под высоким давлением",
        category: "Технологические системы",
        client: "Региональный молочный завод",
        excerpt: "Гомогенизатор высокого давления и трубопровод, оборудованные антивибрационными системами для расщепления молочного жира.",
        technical: { capacity: "10 000 литров / час", material: "Дуплексная нержавеющая сталь", standards: "ISO 9001 / 3-A", features: "Керамические поршни, пневматическая регулировка" }
      },
      ar: {
        title: "خط تجانس الحليب عالي الضغط",
        category: "أنظمة العمليات",
        client: "منشأة إقليمية لمعالجة الحليب",
        excerpt: "مجانس عالي الضغط ومشروع أنابيب متكامل مجهز بأنظمة مضادة للاهتزاز، مما يضمن التوحيد القياسي عن طريق تكسير دهون الحليب.",
        technical: { capacity: "10,000 لتر / ساعة", material: "فولاذ مقاوم للصدأ Duplex", standards: "ISO 9001 / 3-A", features: "مكابس سيراميك، تعديل الضغط الهوائي" }
      }
    }
  },
  {
    slug: "mobil-proses-ve-karistirma-unitesi",
    year: "2023",
    image: "/assets/images/proses-sistemleri/kategori-mobil.webp",
    translations: {
      tr: {
        title: "Kozmetik İçin Mobil Karıştırma Ünitesi",
        category: "Proses Sistemleri",
        client: "Dermokozmetik Ar-Ge Laboratuvarı",
        excerpt: "Farklı üretim hatlarına kolayca taşınabilen, kendi üzerinde kumanda panosu ve ısıtma sistemi bulunan kompakt mobil proses tankı.",
        technical: { capacity: "500 Litre", material: "AISI 316L (Ra < 0.4 µm)", standards: "GMP / cGMP", features: "Frekans İnvertörlü Hız Kontrolü, Entegre Rezistans" }
      },
      en: {
        title: "Mobile Mixing Unit for Cosmetics",
        category: "Process Systems",
        client: "Dermocosmetic R&D Laboratory",
        excerpt: "Compact mobile process tank with its own control panel and heating system, easily transportable to different production lines.",
        technical: { capacity: "500 Liters", material: "AISI 316L (Ra < 0.4 µm)", standards: "GMP / cGMP", features: "Frequency Inverter Speed Control, Integrated Heater" }
      },
      de: {
        title: "Mobile Mischeinheit für Kosmetika",
        category: "Prozesssysteme",
        client: "Dermokosmetik-F&E-Labor",
        excerpt: "Kompakter mobiler Prozesstank mit eigenem Bedienfeld und Heizsystem, der leicht zu verschiedenen Produktionslinien transportiert werden kann.",
        technical: { capacity: "500 Liter", material: "AISI 316L (Ra < 0.4 µm)", standards: "GMP / cGMP", features: "Drehzahlregelung mit Frequenzumrichter, Integrierte Heizung" }
      },
      fr: {
        title: "Unité de Mélange Mobile pour Cosmétiques",
        category: "Systèmes de Processus",
        client: "Laboratoire R&D Dermocosmétique",
        excerpt: "Cuve de processus mobile compacte avec panneau de commande et système de chauffage, facilement transportable vers différentes lignes.",
        technical: { capacity: "500 Litres", material: "AISI 316L (Ra < 0,4 µm)", standards: "GMP / cGMP", features: "Contrôle de Vitesse par Variateur, Chauffage Intégré" }
      },
      es: {
        title: "Unidad Móvil de Mezcla para Cosméticos",
        category: "Sistemas de Procesos",
        client: "Laboratorio I+D Dermocosmético",
        excerpt: "Tanque de proceso móvil compacto con panel de control y sistema de calentamiento, transportable a diferentes líneas de producción.",
        technical: { capacity: "500 Litros", material: "AISI 316L (Ra < 0.4 µm)", standards: "GMP / cGMP", features: "Control de Velocidad por Inversor, Calentador Integrado" }
      },
      pt: {
        title: "Unidade Móvel de Mistura para Cosméticos",
        category: "Sistemas de Processos",
        client: "Laboratório P&D Dermocosmético",
        excerpt: "Tanque de processo móvel compacto com painel de controle e sistema de aquecimento, transportável para diferentes linhas de produção.",
        technical: { capacity: "500 Litros", material: "AISI 316L (Ra < 0.4 µm)", standards: "GMP / cGMP", features: "Controle de Velocidade por Inversor, Aquecedor Integrado" }
      },
      it: {
        title: "Unità Mobile di Miscelazione per Cosmetici",
        category: "Sistemi di Processo",
        client: "Laboratorio R&S Dermocosmetica",
        excerpt: "Serbatoio di processo mobile compatto con pannello di controllo e sistema di riscaldamento, trasportabile su diverse linee.",
        technical: { capacity: "500 Litri", material: "AISI 316L (Ra < 0.4 µm)", standards: "GMP / cGMP", features: "Controllo Velocità con Inverter, Riscaldatore Integrato" }
      },
      ru: {
        title: "Мобильная смесительная установка для косметики",
        category: "Технологические системы",
        client: "Дермокосметическая лаборатория",
        excerpt: "Компактный мобильный технологический резервуар с панелью управления и системой нагрева, легко перемещаемый на различные линии.",
        technical: { capacity: "500 литров", material: "AISI 316L (Ra < 0,4 мкм)", standards: "GMP / cGMP", features: "Контроль скорости, встроенный нагреватель" }
      },
      ar: {
        title: "وحدة خلط متنقلة لمستحضرات التجميل",
        category: "أنظمة العمليات",
        client: "مختبر بحث وتطوير مستحضرات التجميل",
        excerpt: "خزان معالجة متنقل مدمج مزود بلوحة تحكم خاصة ونظام تسخين، يسهل نقله إلى خطوط الإنتاج المختلفة.",
        technical: { capacity: "500 لتر", material: "AISI 316L (Ra < 0.4 µm)", standards: "GMP / cGMP", features: "تحكم في السرعة بعاكس التردد، سخان مدمج" }
      }
    }
  },
  {
    slug: "cift-vidali-loblu-pompa-istasyonu",
    year: "2023",
    image: "/assets/images/pompalar/loblu-pompa-kategori.webp",
    translations: {
      tr: {
        title: "Yüksek Viskozite Transfer İstasyonu",
        category: "Hijyenik Pompalar",
        client: "Çikolata ve Şekerleme Fabrikası",
        excerpt: "Karamel ve sıvı çikolata transferi için ısıtma ceketli olarak tasarlanmış, ürünü ezmeden aktaran loblu pompa ve bypass sistemi.",
        technical: { capacity: "15 m³/Saat - 10 Bar", material: "AISI 316L (Gıdaya Uygun)", standards: "EHEDG Onaylı", features: "Isıtma Ceketi, Emniyet Valfli Bypass" }
      },
      en: {
        title: "High Viscosity Transfer Station",
        category: "Hygienic Pumps",
        client: "Chocolate and Confectionery Factory",
        excerpt: "Lobe pump and bypass system designed with a heating jacket for caramel and liquid chocolate transfer, transferring the product without crushing.",
        technical: { capacity: "15 m³/Hour - 10 Bar", material: "AISI 316L (Food Grade)", standards: "EHEDG Approved", features: "Heating Jacket, Bypass with Safety Valve" }
      },
      de: {
        title: "Hochviskose Transferstation",
        category: "Hygienische Pumpen",
        client: "Schokoladen- und Süßwarenfabrik",
        excerpt: "Drehkolbenpumpe und Bypass-System mit Heizmantel für den Transfer von Karamell und flüssiger Schokolade, zum produktschonenden Transport.",
        technical: { capacity: "15 m³/Stunde - 10 Bar", material: "AISI 316L (Lebensmittelecht)", standards: "EHEDG-Zertifiziert", features: "Heizmantel, Bypass mit Sicherheitsventil" }
      },
      fr: {
        title: "Station de Transfert à Haute Viscosité",
        category: "Pompes Hygiéniques",
        client: "Usine de Chocolat et Confiserie",
        excerpt: "Pompe à lobes et système de contournement avec chemise de chauffage pour le transfert de caramel et de chocolat sans écrasement.",
        technical: { capacity: "15 m³/Heure - 10 Bar", material: "AISI 316L (Alimentaire)", standards: "Approuvé EHEDG", features: "Chemise de Chauffage, Bypass avec Soupape" }
      },
      es: {
        title: "Estación de Transferencia de Alta Viscosidad",
        category: "Bombas Higiénicas",
        client: "Fábrica de Chocolates y Confitería",
        excerpt: "Bomba lobular y sistema de derivación con camisa de calentamiento para transferir caramelo y chocolate líquido sin aplastar el producto.",
        technical: { capacity: "15 m³/Hora - 10 Bar", material: "AISI 316L (Alimentario)", standards: "Aprobado por EHEDG", features: "Camisa de Calentamiento, Bypass con Válvula" }
      },
      pt: {
        title: "Estação de Transferência de Alta Viscosidade",
        category: "Bombas Higiênicas",
        client: "Fábrica de Chocolates e Confeitaria",
        excerpt: "Bomba de lóbulo e sistema de bypass com camisa de aquecimento para transferir caramelo e chocolate líquido sem esmagar o produto.",
        technical: { capacity: "15 m³/Hora - 10 Bar", material: "AISI 316L (Alimentício)", standards: "Aprovado pela EHEDG", features: "Camisa de Aquecimento, Bypass com Válvula" }
      },
      it: {
        title: "Stazione di Trasferimento ad Alta Viscosità",
        category: "Pompe Igieniche",
        client: "Fabbrica di Cioccolato e Dolciumi",
        excerpt: "Pompa a lobi e sistema di bypass con camicia di riscaldamento per trasferire caramello e cioccolato liquido senza schiacciarlo.",
        technical: { capacity: "15 m³/Ora - 10 Bar", material: "AISI 316L (Per Alimenti)", standards: "Approvato EHEDG", features: "Camicia di Riscaldamento, Bypass con Valvola" }
      },
      ru: {
        title: "Станция перекачки высоковязких продуктов",
        category: "Гигиенические насосы",
        client: "Шоколадно-кондитерская фабрика",
        excerpt: "Лопастной насос и байпасная система с рубашкой нагрева для перекачки карамели и жидкого шоколада без разрушения структуры.",
        technical: { capacity: "15 м³/час - 10 бар", material: "AISI 316L (Пищевая)", standards: "Одобрено EHEDG", features: "Рубашка нагрева, байпас с клапаном" }
      },
      ar: {
        title: "محطة نقل عالية اللزوجة",
        category: "مضخات صحية",
        client: "مصنع الشوكولاتة والحلويات",
        excerpt: "مضخة فصية ونظام تحويل مصمم بغلاف تسخين لنقل الكراميل والشوكولاتة السائلة، ونقل المنتج دون سحقه.",
        technical: { capacity: "15 م³/ساعة - 10 بار", material: "AISI 316L (درجة طعام)", standards: "معتمد من EHEDG", features: "غلاف تسخين، تحويل مع صمام أمان" }
      }
    }
  },
  {
    slug: "santrifuj-pompa-sut-transfer-hatti",
    year: "2024",
    image: "/assets/images/pompalar/santrifuj-pompa-kategori.webp",
    translations: {
      tr: {
        title: "Hijyenik Santrifüj Pompa Süt Aktarım Hattı",
        category: "Hijyenik Pompalar",
        client: "Süt Sağım ve Toplama Merkezi",
        excerpt: "Kamyonlardan silolara hızlı süt transferi için tasarlanmış, tamamen paslanmaz çelik döküm gövdeli yüksek verimli santrifüj pompa grubu.",
        technical: { capacity: "40 m³/Saat - 3 Bar", material: "AISI 304 Döküm Paslanmaz", standards: "3-A Hijyen Standardı", features: "Açık Fan (Impeller) Tasarımı, CIP Uyumlu" }
      },
      en: {
        title: "Hygienic Centrifugal Pump Milk Transfer Line",
        category: "Hygienic Pumps",
        client: "Milk Milking and Collection Center",
        excerpt: "High-efficiency centrifugal pump group with completely stainless steel cast body designed for fast milk transfer from trucks to silos.",
        technical: { capacity: "40 m³/Hour - 3 Bar", material: "AISI 304 Cast Stainless", standards: "3-A Sanitary Standard", features: "Open Impeller Design, CIP Compatible" }
      },
      de: {
        title: "Hygienische Kreiselpumpen-Milchtransferlinie",
        category: "Hygienische Pumpen",
        client: "Melk- und Sammelzentrum",
        excerpt: "Hocheffiziente Kreiselpumpengruppe mit komplettem Edelstahl-Gussgehäuse für den schnellen Milchtransfer von LKWs zu Silos.",
        technical: { capacity: "40 m³/Stunde - 3 Bar", material: "AISI 304 Gussedelstahl", standards: "3-A Hygienestandard", features: "Offenes Laufrad (Impeller), CIP-Kompatibel" }
      },
      fr: {
        title: "Ligne de Transfert de Lait à Pompe Centrifuge",
        category: "Pompes Hygiéniques",
        client: "Centre de Traite et de Collecte",
        excerpt: "Groupe de pompes centrifuges à haute efficacité avec corps en acier inoxydable coulé, conçu pour un transfert rapide du lait.",
        technical: { capacity: "40 m³/Heure - 3 Bar", material: "Acier Inoxydable Coulé AISI 304", standards: "Norme Sanitaire 3-A", features: "Roue Ouverte, Compatible CIP" }
      },
      es: {
        title: "Línea de Transferencia de Leche con Bomba Centrífuga",
        category: "Bombas Higiénicas",
        client: "Centro de Ordeño y Recolección",
        excerpt: "Grupo de bombas centrífugas de alta eficiencia con cuerpo de fundición de acero inoxidable para transferencia rápida de leche.",
        technical: { capacity: "40 m³/Hora - 3 Bar", material: "Acero Inoxidable Fundido AISI 304", standards: "Norma Sanitaria 3-A", features: "Impulsor Abierto, Compatible con CIP" }
      },
      pt: {
        title: "Linha de Transferência de Leite com Bomba Centrífuga",
        category: "Bombas Higiênicas",
        client: "Centro de Ordenha e Coleta",
        excerpt: "Grupo de bombas centrífugas de alta eficiência com corpo de aço fundido inoxidável para transferência rápida de leite.",
        technical: { capacity: "40 m³/Hora - 3 Bar", material: "Aço Inoxidável Fundido AISI 304", standards: "Padrão Sanitário 3-A", features: "Impulsor Aberto, Compatível com CIP" }
      },
      it: {
        title: "Linea Trasferimento Latte con Pompa Centrifuga",
        category: "Pompe Igieniche",
        client: "Centro di Mungitura e Raccolta",
        excerpt: "Gruppo pompe centrifughe ad alta efficienza con corpo in acciaio inossidabile fuso per il trasferimento rapido del latte.",
        technical: { capacity: "40 m³/Ora - 3 Bar", material: "Acciaio Inossidabile Fuso AISI 304", standards: "Standard Sanitario 3-A", features: "Girante Aperta, Compatibile con CIP" }
      },
      ru: {
        title: "Линия перекачки молока центробежным насосом",
        category: "Гигиенические насосы",
        client: "Центр доения и сбора молока",
        excerpt: "Группа центробежных насосов с полностью литым корпусом из нержавеющей стали для быстрой перекачки молока.",
        technical: { capacity: "40 м³/час - 3 бар", material: "Литая нержавеющая сталь AISI 304", standards: "Санитарный стандарт 3-A", features: "Открытое рабочее колесо, совместимость с CIP" }
      },
      ar: {
        title: "خط نقل الحليب بمضخة طرد مركزي صحية",
        category: "مضخات صحية",
        client: "مركز حلب وجمع الحليب",
        excerpt: "مجموعة مضخات طرد مركزي عالية الكفاءة بهيكل مصبوب بالكامل من الفولاذ المقاوم للصدأ مصممة لنقل الحليب السريع.",
        technical: { capacity: "40 م³/ساعة - 3 بار", material: "فولاذ مصبوب AISI 304", standards: "المعيار الصحي 3-A", features: "تصميم دافع مفتوح، متوافق مع CIP" }
      }
    }
  },
  {
    slug: "havali-diyafram-pompa-kimyasal-dozaj",
    year: "2022",
    image: "/assets/images/pompalar/havali-diyafram-kategori.webp",
    translations: {
      tr: {
        title: "Ex-Proof Havalı Diyafram Pompa Sistemi",
        category: "Hijyenik Pompalar",
        client: "Boya ve Çözücü Üretim Tesisi",
        excerpt: "Yanıcı ve parlayıcı kimyasalların güvenle transfer edilmesi için ATEX sertifikalı, elektriksiz çalışan pnömatik diyaframlı pompa sistemi.",
        technical: { capacity: "200 Litre/Dakika", material: "Alüminyum / PTFE Diyafram", standards: "ATEX Zone 1", features: "Kuru Çalışabilme, Ayarlanabilir Debi" }
      },
      en: {
        title: "Ex-Proof Air Operated Diaphragm Pump System",
        category: "Hygienic Pumps",
        client: "Paint and Solvent Production Facility",
        excerpt: "ATEX certified, non-electric pneumatic diaphragm pump system for safe transfer of flammable and combustible chemicals.",
        technical: { capacity: "200 Liters/Minute", material: "Aluminum / PTFE Diaphragm", standards: "ATEX Zone 1", features: "Dry Running Capability, Adjustable Flow" }
      },
      de: {
        title: "Ex-geschütztes Membranpumpensystem",
        category: "Hygienische Pumpen",
        client: "Farben- und Lösungsmittelproduktionsanlage",
        excerpt: "ATEX-zertifiziertes, stromloses pneumatisches Membranpumpensystem für den sicheren Transfer von brennbaren Chemikalien.",
        technical: { capacity: "200 Liter/Minute", material: "Aluminium / PTFE Membran", standards: "ATEX Zone 1", features: "Trockenlauffähigkeit, Einstellbarer Durchfluss" }
      },
      fr: {
        title: "Système de Pompe Pneumatique à Membrane Ex-Proof",
        category: "Pompes Hygiéniques",
        client: "Usine de Peintures et Solvants",
        excerpt: "Système de pompe pneumatique non électrique certifié ATEX pour le transfert sécurisé de produits chimiques inflammables.",
        technical: { capacity: "200 Litres/Minute", material: "Aluminium / Membrane PTFE", standards: "ATEX Zone 1", features: "Fonctionnement à Sec, Débit Réglable" }
      },
      es: {
        title: "Sistema de Bomba Neumática de Diafragma Ex-Proof",
        category: "Bombas Higiénicas",
        client: "Instalación de Pinturas y Disolventes",
        excerpt: "Sistema de bomba neumática no eléctrica con certificación ATEX para la transferencia segura de productos inflamables.",
        technical: { capacity: "200 Litros/Minuto", material: "Aluminio / Diafragma PTFE", standards: "ATEX Zona 1", features: "Funcionamiento en Seco, Flujo Ajustable" }
      },
      pt: {
        title: "Sistema de Bomba Pneumática de Diafragma Ex-Proof",
        category: "Bombas Higiênicas",
        client: "Instalação de Tintas e Solventes",
        excerpt: "Sistema de bomba pneumática não elétrica com certificação ATEX para transferência segura de produtos químicos inflamáveis.",
        technical: { capacity: "200 Litros/Minuto", material: "Alumínio / Diafragma PTFE", standards: "ATEX Zona 1", features: "Funcionamento a Seco, Fluxo Ajustável" }
      },
      it: {
        title: "Sistema Pompa Pneumatica a Membrana Ex-Proof",
        category: "Pompe Igieniche",
        client: "Impianto Produzione Vernici e Solventi",
        excerpt: "Sistema di pompa pneumatica non elettrica certificato ATEX per il trasferimento sicuro di sostanze chimiche infiammabili.",
        technical: { capacity: "200 Litri/Minuto", material: "Alluminio / Membrana PTFE", standards: "ATEX Zona 1", features: "Funzionamento a Secco, Flusso Regolabile" }
      },
      ru: {
        title: "Взрывозащищенная пневматическая мембранная система",
        category: "Гигиенические насосы",
        client: "Завод красок и растворителей",
        excerpt: "Пневматическая мембранная насосная система, сертифицированная по ATEX, для перекачки легковоспламеняющихся химикатов.",
        technical: { capacity: "200 литров/минута", material: "Алюминий / Мембрана PTFE", standards: "ATEX Зона 1", features: "Работа всухую, регулируемый расход" }
      },
      ar: {
        title: "نظام مضخة غشاء هوائية مقاومة للانفجار",
        category: "مضخات صحية",
        client: "منشأة إنتاج الدهانات والمذيبات",
        excerpt: "نظام مضخة غشاء هوائية غير كهربائية معتمدة من ATEX للنقل الآمن للمواد الكيميائية القابلة للاشتعال.",
        technical: { capacity: "200 لتر/دقيقة", material: "ألومنيوم / غشاء PTFE", standards: "ATEX Zone 1", features: "تشغيل جاف، تدفق قابل للتعديل" }
      }
    }
  },
  {
    slug: "monopomp-aritma-camur-transferi",
    year: "2023",
    image: "/assets/images/pompalar/monopomp_pompalar-kategori.webp",
    translations: {
      tr: {
        title: "Endüstriyel Monopomp Çamur Transfer Hattı",
        category: "Hijyenik Pompalar",
        client: "Belediye Atıksu Arıtma Tesisi",
        excerpt: "Katı partikül içeren yoğun arıtma çamurlarının basınçlı transferini sağlayan, ağır hizmet tipi eksantrik vidalı monopomp sistemi.",
        technical: { capacity: "25 m³/Saat - 12 Bar", material: "Karbon Çelik / NBR Stator", standards: "ISO 9001", features: "Redüktörlü Tahrik, Kuru Çalışma Koruması" }
      },
      en: {
        title: "Industrial Monopump Sludge Transfer Line",
        category: "Hygienic Pumps",
        client: "Municipal Wastewater Treatment Plant",
        excerpt: "Heavy-duty eccentric screw monopump system providing pressurized transfer of dense treatment sludge containing solid particles.",
        technical: { capacity: "25 m³/Hour - 12 Bar", material: "Carbon Steel / NBR Stator", standards: "ISO 9001", features: "Geared Drive, Dry Run Protection" }
      },
      de: {
        title: "Industrielle Exzenterschnecken-Schlammtransferlinie",
        category: "Hygienische Pumpen",
        client: "Kommunale Kläranlage",
        excerpt: "Schwerlast-Exzenterschneckenpumpensystem für den Drucktransfer von dichten Klärschlämmen mit Feststoffpartikeln.",
        technical: { capacity: "25 m³/Stunde - 12 Bar", material: "Kohlenstoffstahl / NBR Stator", standards: "ISO 9001", features: "Getriebeantrieb, Trockenlaufschutz" }
      },
      fr: {
        title: "Ligne de Transfert de Boues par Monopompe Industrielle",
        category: "Pompes Hygiéniques",
        client: "Station d'Épuration Municipale",
        excerpt: "Système de monopompe robuste assurant le transfert sous pression de boues d'épuration denses contenant des particules solides.",
        technical: { capacity: "25 m³/Heure - 12 Bar", material: "Acier au Carbone / Stator NBR", standards: "ISO 9001", features: "Entraînement par Engrenages, Protection à Sec" }
      },
      es: {
        title: "Línea de Transferencia de Lodos con Monobomba",
        category: "Bombas Higiénicas",
        client: "Planta de Tratamiento de Aguas Residuales",
        excerpt: "Sistema de monobomba de tornillo excéntrico de alta resistencia que proporciona transferencia de lodos densos con partículas.",
        technical: { capacity: "25 m³/Hora - 12 Bar", material: "Acero al Carbono / Estator NBR", standards: "ISO 9001", features: "Accionamiento por Engranajes, Protección en Seco" }
      },
      pt: {
        title: "Linha de Transferência de Lodo por Monobomba",
        category: "Bombas Higiênicas",
        client: "Estação de Tratamento de Esgoto Municipal",
        excerpt: "Sistema de monobomba de parafuso excêntrico de serviço pesado que fornece transferência de lodo denso com partículas.",
        technical: { capacity: "25 m³/Hora - 12 Bar", material: "Aço Carbono / Estator NBR", standards: "ISO 9001", features: "Acionamento por Engrenagem, Proteção a Seco" }
      },
      it: {
        title: "Linea Trasferimento Fanghi con Monopompa",
        category: "Pompe Igieniche",
        client: "Impianto di Depurazione Comunale",
        excerpt: "Sistema di monopompa a vite eccentrica per impieghi gravosi che garantisce il trasferimento pressurizzato di densi fanghi.",
        technical: { capacity: "25 m³/Ora - 12 Bar", material: "Acciaio al Carbonio / Statore NBR", standards: "ISO 9001", features: "Trasmissione a Ingranaggi, Protezione a Secco" }
      },
      ru: {
        title: "Линия перекачки осадка винтовым насосом",
        category: "Гигиенические насосы",
        client: "Муниципальные очистные сооружения",
        excerpt: "Сверхмощная система винтового насоса для перекачки под давлением плотного осадка сточных вод с твердыми частицами.",
        technical: { capacity: "25 м³/час - 12 бар", material: "Углеродистая сталь / Статор NBR", standards: "ISO 9001", features: "Шестеренчатый привод, защита от сухого хода" }
      },
      ar: {
        title: "خط نقل الحمأة بمضخة أحادية صناعية",
        category: "مضخات صحية",
        client: "محطة معالجة مياه الصرف الصحي",
        excerpt: "نظام مضخة أحادية لولبية لامركزية توفر نقلاً مضغوطًا لحمأة المعالجة الكثيفة التي تحتوي على جزيئات صلبة.",
        technical: { capacity: "25 م³/ساعة - 12 بار", material: "صلب كربوني / الجزء الثابت NBR", standards: "ISO 9001", features: "محرك تروس، حماية من التشغيل الجاف" }
      }
    }
  }
];