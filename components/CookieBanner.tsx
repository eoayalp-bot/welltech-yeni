'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner({ lang }: { lang: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('welltech_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('welltech_cookie_consent', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-6 relative">
        
        <button 
          onClick={declineCookies}
          className="absolute top-4 right-4 lg:hidden text-gray-400 hover:text-white transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-4 flex-1 w-full lg:w-auto pr-8 lg:pr-0">
          <div className="p-2.5 bg-white/5 rounded-xl shrink-0 hidden sm:block border border-white/10">
            <ShieldCheck className="w-6 h-6 text-[#E35205]" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1 tracking-tight text-sm">KVKK & Çerez Tercihleri</h4>
            <p className="text-xs text-gray-400 leading-relaxed max-w-3xl">
              Size daha iyi bir deneyim sunabilmek ve site trafiğimizi analiz etmek için çerezleri (cookies) kullanıyoruz. 
              <Link href={`/${lang}/gizlilik-politikasi`} className="text-[#E35205] hover:text-white ml-1 transition-colors font-bold underline decoration-[#E35205]/30">
                Detaylı Bilgi
              </Link>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
          <button 
            onClick={declineCookies}
            className="flex-1 lg:flex-none bg-gray-800 text-gray-300 px-6 py-3 rounded-xl text-xs font-bold tracking-widest border border-gray-700 hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap"
          >
            Sadece Zorunlu
          </button>
          <button 
            onClick={acceptCookies}
            className="flex-1 lg:flex-none bg-[#E35205] text-white px-6 py-3 rounded-xl text-xs font-bold tracking-widest hover:bg-[#005284] transition-colors shadow-lg whitespace-nowrap"
          >
            Kabul Et
          </button>
          <button 
            onClick={declineCookies}
            className="hidden lg:flex text-gray-500 hover:text-white transition-colors ml-2 p-2 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}