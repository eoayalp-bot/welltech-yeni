import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Welltech®",
    default: "Welltech® | Global Proses ve Paslanmaz Tank Sistemleri",
  },
  description: "Dünya standartlarında paslanmaz tank ve proses sistemleri üreticisi. Gıda, ilaç ve kimya endüstrileri için sıfır hata prensibiyle çalışan global mühendislik çözümleri.",
  keywords: ["paslanmaz tank", "proses sistemleri", "hijyenik pompalar", "endüstriyel tanklar", "welltech", "reaktör", "anahtar teslim fabrika"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: any;
}>) {
  const lang = params?.lang || "tr";

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-[#E35205] selection:text-white">
        {children}
      </body>
    </html>
  );
}