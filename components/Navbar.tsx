"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { routeDictionary } from '../dictionaries/routes';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '600', '700', '900'] });

export default function Navbar({ lang, dict }: { lang: string; dict: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLink = (physicalKey: string) => {
    const translatedPath = routeDictionary[physicalKey]?.[lang] || physicalKey;
    return `/${lang}/${translatedPath}`;
  };

  const switchLanguage = (newLang: string) => {
    if (!pathname || pathname === '/') return `/${newLang}`;
    
    const segments = pathname.split('/').filter(Boolean);
    const currentLang = segments[0];

    const translatedSegments = segments.map((segment, index) => {
      if (index === 0) return newLang;
      
      let physicalKey = segment;
      for (const [key, translations] of Object.entries(routeDictionary)) {
        if (translations[currentLang as keyof typeof translations] === segment) {
          physicalKey = key;
          break;
        }
      }
      
      return routeDictionary[physicalKey]?.[newLang] || physicalKey;
    });

    return `/${translatedSegments.join('/')}`;
  };

  return (
    <nav className={`flex items-center justify-between px-6 lg:px-8 py-5 bg-white sticky top-0 z-[100] border-b border-gray-50 shadow-sm ${montserrat.className}`}>
      
      <div className="flex items-center">
        <Link href={`/${lang}`} className="hover:opacity-80 transition-opacity">
          <Image 
            src="/assets/images/logo.svg" 
            alt="Welltech Logo" 
            width={180} 
            height={40} 
            priority
            className="w-auto h-7 lg:h-9" 
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-8">
        <Link href={getLink('paslanmaz-tanklar')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict.nav.tanks}</Link>
        <Link href={getLink('proses-sistemleri')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict.nav.machines}</Link>
        <Link href={getLink('pompalar')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict.nav.pumps}</Link>
        <Link href={getLink('hakkimizda')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict.nav.about}</Link>
        <Link href={getLink('blog')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict.nav.blog || 'Blog'}</Link>
        <Link href={getLink('dokumanlar')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict.nav.docs}</Link>
        <Link href={getLink('iletisim')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict.nav.contact}</Link>
      </div>

      <div className="flex items-center gap-4 lg:gap-3">
        <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
          <Link href={switchLanguage('tr')} className={`text-[11px] font-bold px-2 py-1 rounded transition-all ${lang === 'tr' ? 'bg-white text-[#E35205] shadow-sm pointer-events-none' : 'text-gray-400 hover:text-gray-600'}`}>TR</Link>
          <Link href={switchLanguage('en')} className={`text-[11px] font-bold px-2 py-1 rounded transition-all ${lang === 'en' ? 'bg-white text-[#E35205] shadow-sm pointer-events-none' : 'text-gray-400 hover:text-gray-600'}`}>EN</Link>
        </div>

        <button 
          className="lg:hidden p-2 text-[#005284] hover:text-[#E35205] transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl lg:hidden flex flex-col py-2 px-6 pb-6 z-[99] animate-in slide-in-from-top-2 duration-200">
          <Link onClick={() => setIsOpen(false)} href={getLink('paslanmaz-tanklar')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict.nav.tanks}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('proses-sistemleri')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict.nav.machines}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('pompalar')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict.nav.pumps}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('hakkimizda')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict.nav.about}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('blog')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict.nav.blog || 'Blog'}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('dokumanlar')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict.nav.docs}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('iletisim')} className="block text-[15px] font-semibold tracking-wide text-[#E35205] py-4">{dict.nav.contact}</Link>
        </div>
      )}
    </nav>
  );
}