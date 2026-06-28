import Link from 'next/link';
import Image from 'next/image';
import { Activity, ShieldCheck, Mail, MapPin, Database } from 'lucide-react';
import { routeDictionary } from '../dictionaries/routes';

function getLink(physicalKey: string, lang: string): string {
  const translatedPath = routeDictionary[physicalKey]?.[lang] || physicalKey;
  return `/${lang}/${translatedPath}`;
}

export default function Footer({ lang, dict }: { lang: string; dict: any }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t-[6px] border-[#E35205]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        <div className="space-y-4">
          <Link href={`/${lang}`} className="block">
            <h3 className="text-2xl font-black text-white tracking-tighter">
              WELL<span className="text-[#E35205]">TECH</span>®
            </h3>
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed">
            {dict.description}
          </p>

          <div className="pt-5 mt-2 border-t border-gray-800/80">
            <span className="block text-[10px] text-gray-500 tracking-widest uppercase mb-2 font-bold">
              {dict.inokstek}
            </span>
            <a 
              href="https://www.inokstek.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              <Image 
                src="/assets/images/logo-inoktek.svg" 
                alt="İnokstek Corporate" 
                width={140} 
                height={40} 
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold tracking-widest text-sm mb-4">
            {dict.products}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={getLink('paslanmaz-tanklar', lang)} className="hover:text-[#E35205] transition-colors flex items-center gap-2">
                <Database className="w-4 h-4" /> {dict.tanks}
              </Link>
            </li>
            <li>
              <Link href={getLink('proses-sistemleri', lang)} className="hover:text-[#E35205] transition-colors flex items-center gap-2">
                <Activity className="w-4 h-4" /> {dict.machines}
              </Link>
            </li>
            <li>
              <Link href={getLink('pompalar', lang)} className="hover:text-[#E35205] transition-colors flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> {dict.pumps}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold tracking-widest text-sm mb-4">
            {dict.locations}
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E35205] shrink-0" />
              <div>
                <strong className="text-white block mb-1">{dict.hq_title}:</strong>
                <span>Organize Sanayi Bölgesi, Kemalpaşa OSB, 10. Sk. No:6, 35730<br />Kemalpaşa / İZMİR / TÜRKİYE</span>
              </div>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <Mail className="w-5 h-5 text-[#E35205] shrink-0" />
              <a href="mailto:info@welltech.com.tr" className="hover:text-white transition-colors">
                info@welltech.com.tr
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © {currentYear} Welltech® International. {dict.copyright}
        </p>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          Designed & Coded by
          <a href="https://wa.me/905322830628" target="_blank" rel="noopener noreferrer" className="text-[#E35205] font-black tracking-widest hover:text-white transition-colors ml-1">VOLKAN</a>
        </p>
      </div>
    </footer>
  );
}