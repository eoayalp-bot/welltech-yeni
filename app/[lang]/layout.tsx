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

export const metadata: Metadata = {
  title: {
    template: '%s | Welltech®',
    default: 'Welltech® | Global Proses ve Paslanmaz Tank Sistemleri',
  },
  description: 'Uluslararası standartlarda paslanmaz çelik endüstriyel tanklar, hijyenik pompalar ve proses ekipmanları üreticisi. Gıda, ilaç ve kimya endüstrileri için sıfır hata prensibiyle çalışan global mühendislik çözümleri.',
  keywords: ['paslanmaz tank', 'proses sistemleri', 'hijyenik pompalar', 'endüstriyel tanklar', 'welltech', 'reaktör', 'anahtar teslim fabrika'],
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
};

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
        <div id="welltech-ai-chatbot-root" data-langs="tr,en,ar,ru,de,es,pt,fr,ur" aria-hidden="true"></div>
        <CookieBanner lang={lang} />
      </body>
    </html>
  );
}