import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '../globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import { getDictionary } from '../../dictionaries/getDictionary';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const locales = ['tr', 'en', 'de', 'es', 'ru', 'fr', 'ar', 'pt', 'it'];
const baseUrl = 'https://www.welltech.com.tr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const commonDict = await getDictionary(lang, 'common');
  const seo = commonDict.seo;

  const alternates: Record<string, string> = {};
  locales.forEach((locale) => {
    alternates[locale] = `${baseUrl}/${locale}`;
  });
  alternates['x-default'] = `${baseUrl}/tr`;

  return {
    title: {
      template: '%s | Welltech®',
      default: seo.defaultTitle,
    },
    description: seo.description,
    keywords: seo.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: alternates,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  const navbarDict = await getDictionary(lang, 'navbar');
  const commonDict = await getDictionary(lang, 'common');
  const footerDict = await getDictionary(lang, 'footer');

  const corporateSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    "name": "Welltech® International Engineering",
    "legalName": "İnokstek Paslanmaz Teknolojileri",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/images/logo.svg`,
    "description": "Türkiye'nin lider endüstriyel paslanmaz tank, proses sistemleri ve hijyenik pompa üreticisi.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Organize Sanayi Bölgesi, Kemalpaşa OSB, 10. Sk. No:6",
      "addressLocality": "Kemalpaşa",
      "addressRegion": "İzmir",
      "postalCode": "35730",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-532-412-51-52",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["Turkish", "English", "German", "Russian", "French", "Spanish", "Arabic", "Portuguese", "Italian"]
    },
    "sameAs": [
      "https://www.linkedin.com/in/inokstek/",
      "https://www.youtube.com/channel/UCS2q0VBo8vSKv_HO04OghCg",
      "https://www.instagram.com/inokstek_tr/"
    ]
  };

  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased text-gray-900 bg-white flex flex-col min-h-screen selection:bg-[#E35205] selection:text-white`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
        />

        <Navbar lang={lang} dict={navbarDict} />
        
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        
        <Footer lang={lang} dict={footerDict} />
        
        <div id="welltech-ai-chatbot-root" data-langs={locales.join(',')} aria-hidden="true"></div>
        
        <CookieBanner lang={lang} dict={commonDict.cookieBanner} />
      </body>
    </html>
  );
}