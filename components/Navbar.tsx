"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { routeDictionary } from '../dictionaries/routes';
import { ChevronDown } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '600', '700', '900'] });

const allLanguages = [
  { code: 'tr', label: 'TR', name: 'Türkçe' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'ar', label: 'AR', name: 'العربية' },
];

export default function Navbar({ lang, dict }: { lang: string; dict: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const currentLang = allLanguages.find((l) => l.code === lang) || allLanguages[0];

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
        <Link href={getLink('paslanmaz-tanklar')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict?.nav?.tanks || 'Paslanmaz Tanklar'}</Link>
        <Link href={getLink('proses-sistemleri')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict?.nav?.machines || 'Proses Sistemleri'}</Link>
        <Link href={getLink('pompalar')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict?.nav?.pumps || 'Hijyenik Pompalar'}</Link>
        <Link href={getLink('hakkimizda')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict?.nav?.about || 'Kurumsal'}</Link>
        <Link href={getLink('blog')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict?.nav?.blog || 'Blog'}</Link>
        <Link href={getLink('dokumanlar')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict?.nav?.docs || 'Dokümanlar'}</Link>
        <Link href={getLink('iletisim')} className="text-[14px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] transition-colors">{dict?.nav?.contact || 'İletişim'}</Link>
      </div>

      <div className="flex items-center gap-4 lg:gap-3">
        <div ref={langRef} className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100 text-[11px] font-bold text-gray-600 hover:text-[#E35205] transition-colors"
          >
            {currentLang.label}
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
          </button>

          {langOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden z-[200] min-w-[140px]">
              {allLanguages.map((l) => (
                <Link
                  key={l.code}
                  href={switchLanguage(l.code)}
                  onClick={() => setLangOpen(false)}
                  className={`flex items-center justify-between gap-3 px-4 py-2.5 text-[12px] font-bold transition-colors hover:bg-gray-50 hover:text-[#E35205] ${lang === l.code ? 'text-[#E35205] bg-orange-50 pointer-events-none' : 'text-gray-600'}`}
                >
                  <span>{l.name}</span>
                  <span className="text-[10px] text-gray-400 font-black tracking-wider">{l.label}</span>
                </Link>
              ))}
            </div>
          )}
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
          <Link onClick={() => setIsOpen(false)} href={getLink('paslanmaz-tanklar')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict?.nav?.tanks || 'Paslanmaz Tanklar'}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('proses-sistemleri')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict?.nav?.machines || 'Proses Sistemleri'}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('pompalar')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict?.nav?.pumps || 'Hijyenik Pompalar'}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('hakkimizda')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict?.nav?.about || 'Kurumsal'}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('blog')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict?.nav?.blog || 'Blog'}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('dokumanlar')} className="block text-[15px] font-semibold tracking-wide text-gray-700 hover:text-[#E35205] py-4 border-b border-gray-50">{dict?.nav?.docs || 'Dokümanlar'}</Link>
          <Link onClick={() => setIsOpen(false)} href={getLink('iletisim')} className="block text-[15px] font-semibold tracking-wide text-[#E35205] py-4 border-b border-gray-50">{dict?.nav?.contact || 'İletişim'}</Link>

          <div className="pt-4 grid grid-cols-3 gap-2">
            {allLanguages.map((l) => (
              <Link
                key={l.code}
                href={switchLanguage(l.code)}
                onClick={() => setIsOpen(false)}
                className={`text-center py-2 px-3 rounded-lg text-[11px] font-bold transition-colors border ${lang === l.code ? 'bg-[#E35205] text-white border-[#E35205] pointer-events-none' : 'bg-gray-50 text-gray-500 border-gray-100 hover:text-[#E35205] hover:border-[#E35205]'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}