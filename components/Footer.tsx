import Link from 'next/link';
import { Activity, ShieldCheck, Mail, MapPin, Database } from 'lucide-react';

export default function Footer({ lang, dict }: { lang: string; dict?: any }) {
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
            Uluslararası standartlarda paslanmaz çelik endüstriyel tanklar, hijyenik pompalar ve proses ekipmanları üreticisi.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold tracking-widest text-sm mb-4">Ürünler</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={`/${lang}/paslanmaz-tanklar`} className="hover:text-[#E35205] transition-colors flex items-center gap-2">
                <Database className="w-4 h-4" /> Paslanmaz Tanklar
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/proses-sistemleri`} className="hover:text-[#E35205] transition-colors flex items-center gap-2">
                <Activity className="w-4 h-4" /> Proses Sistemleri
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/pompalar`} className="hover:text-[#E35205] transition-colors flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Hijyenik Pompalar
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold tracking-widest text-sm mb-4">Lokasyonlar</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E35205] shrink-0" />
              <div>
                <strong className="text-white block mb-1">Genel Merkez:</strong>
                <span>Kemalpaşa OSB Mah. 509 Sok. No: 15<br/>Kemalpaşa / İZMİR / TÜRKİYE</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E35205] shrink-0" />
              <div>
                <strong className="text-white block mb-1">İmalathane:</strong>
                <span>Ulucak İstiklal, Gazi Blv. no:169,<br/>35735 Kemalpaşa/İzmir</span>
              </div>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <Mail className="w-5 h-5 text-[#E35205] shrink-0" />
              <a href="mailto:info@welltech.com.tr" className="hover:text-white transition-colors">info@welltech.com.tr</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © {currentYear} Welltech® International. Tüm Hakları Saklıdır.
        </p>
        
        <p className="text-xs text-gray-500 flex items-center gap-1">
          Designed & Coded by 
          <a 
            href="https://wa.me/905322830628" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E35205] font-black tracking-widest hover:text-white transition-colors ml-1"
          >
            VOLKAN
          </a>
        </p>
      </div>
    </footer>
  );
}