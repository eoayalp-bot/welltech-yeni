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
  const dict = await getDictionary(lang);

  const alternates: Record<string, string> = {};
  locales.forEach((locale) => {
    alternates[locale] = `${baseUrl}/${locale}`;
  });
  alternates['x-default'] = `${baseUrl}/tr`;

  return {
    title: {
      template: '%s | Welltech®',
      default: dict.metadata.default_title,
    },
    description: dict.metadata.default_desc,
    keywords: dict.metadata.keywords,
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
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased text-gray-900 bg-white flex flex-col min-h-screen selection:bg-[#E35205] selection:text-white`}
        suppressHydrationWarning
      >
        <Navbar lang={lang} dict={dict} />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
        {/* Chatbot dilleri dinamik hale getirildi (ur çıkarıldı, it dahil edildi) */}
        <div id="welltech-ai-chatbot-root" data-langs={locales.join(',')} aria-hidden="true"></div>
        <CookieBanner lang={lang} />
      </body>
    </html>
  );
}