'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, Globe, Factory, Building2, MessageCircle, Loader2 } from 'lucide-react';
import { getLocalizedUrl } from '../../../dictionaries/routes';

export default function ContactClient({ lang, dict }: { lang: string; dict: any }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: dict.contactPage.form.status.errorFields });
      return;
    }

    setStatus({ type: 'loading', message: dict.contactPage.form.status.loading });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: dict.contactPage.form.status.success });
        setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus({ type: 'error', message: errorData.error || dict.contactPage.form.status.errorServer });
      }
    } catch (error) {
      setStatus({ type: 'error', message: dict.contactPage.form.status.errorConnection });
    }
  };

  return (
    <div className="bg-gray-50 pb-32 selection:bg-[#E35205] selection:text-white">
      
      <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/kurumsal/iletisim-banner.webp"
            alt={dict.contactPage.hero.title}
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] scale-105 hover:scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto w-full mt-16">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-blue-200 mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.contactPage.breadcrumb.home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E35205]">{dict.contactPage.breadcrumb.corporate}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{dict.contactPage.breadcrumb.current}</span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-[#E35205] p-3 rounded-xl shadow-lg">
              <Factory className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
              {dict.contactPage.hero.title}
            </h1>
          </div>

          <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-2xl">
            {dict.contactPage.hero.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-10 h-full">
              
              <div>
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl">
                     <MapPin className="w-6 h-6 text-[#E35205]" />
                   </div>
                   <h2 className="text-2xl font-black text-gray-900 tracking-tight">{dict.contactPage.sidebar.title}</h2>
                </div>
                
                <div className="flex flex-col gap-8">
                  
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100 group hover:border-[#005284] transition-colors">
                      <Building2 className="w-6 h-6 text-[#E35205] group-hover:text-[#005284] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">{dict.contactPage.sidebar.hq.title}</span>
                      <span className="text-sm text-gray-700 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: dict.contactPage.sidebar.hq.address }}></span>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100 group hover:border-[#005284] transition-colors">
                      <Factory className="w-6 h-6 text-[#E35205] group-hover:text-[#005284] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">{dict.contactPage.sidebar.factory.title}</span>
                      <span className="text-sm text-gray-700 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: dict.contactPage.sidebar.factory.address }}></span>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100 group hover:border-[#E35205] transition-colors">
                      <Phone className="w-6 h-6 text-[#005284] group-hover:text-[#E35205] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">{dict.contactPage.sidebar.phone.title}</span>
                      <a href="tel:+905324125152" className="text-sm text-gray-900 font-bold hover:text-[#E35205] transition-colors">
                        +90 (532) 412 51 52
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-[#25D366]/10 rounded-xl shrink-0 border border-[#25D366]/20 group hover:border-[#E35205] transition-colors">
                      <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-[#E35205] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">{dict.contactPage.sidebar.whatsapp.title}</span>
                      <a href="https://wa.me/905324125152" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-900 font-bold hover:text-[#E35205] transition-colors">
                        +90 (532) 412 51 52
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100 group hover:border-[#E35205] transition-colors">
                      <Mail className="w-6 h-6 text-[#005284] group-hover:text-[#E35205] transition-colors" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">{dict.contactPage.sidebar.email.title}</span>
                      <a href="mailto:info@welltech.com.tr" className="text-sm text-gray-900 font-bold hover:text-[#E35205] transition-colors">
                        info@welltech.com.tr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gray-50 rounded-xl shrink-0 border border-gray-100">
                      <Clock className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">{dict.contactPage.sidebar.hours.title}</span>
                      <span className="text-sm text-gray-700 font-medium leading-relaxed">
                        {dict.contactPage.sidebar.hours.desc1}<br/>
                        <span className="text-[11px] text-gray-400 font-normal tracking-wide">{dict.contactPage.sidebar.hours.desc2}</span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <span className="text-xs font-bold tracking-widest text-gray-400 mb-4 block">{dict.contactPage.sidebar.social.title}</span>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/inokstek/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:border-[#E35205] hover:bg-white transition-all group">
                    <Image src="/assets/images/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://www.instagram.com/inokstek_tr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:border-[#E35205] hover:bg-white transition-all group">
                    <Image src="/assets/images/icons/instagram.svg" alt="Instagram" width={20} height={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://www.facebook.com/inokstek/?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:border-[#E35205] hover:bg-white transition-all group">
                    <Image src="/assets/images/icons/facebook.svg" alt="Facebook" width={20} height={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCS2q0VBo8vSKv_HO04OghCg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:border-[#E35205] hover:bg-white transition-all group">
                    <Image src="/assets/images/icons/youtube.svg" alt="YouTube" width={20} height={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-gray-100 h-full">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">{dict.contactPage.form.title}</h2>
                <Globe className="w-10 h-10 text-gray-100" />
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold tracking-widest text-gray-500">{dict.contactPage.form.name}</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-bold tracking-widest text-gray-500">{dict.contactPage.form.company}</label>
                    <input type="text" id="company" value={formData.company} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold tracking-widest text-gray-500">{dict.contactPage.form.email}</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold tracking-widest text-gray-500">{dict.contactPage.form.phone}</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold tracking-widest text-gray-500">{dict.contactPage.form.subject.label}</label>
                  <select id="subject" value={formData.subject} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all cursor-pointer">
                    <option value="">{dict.contactPage.form.subject.placeholder}</option>
                    
                    <optgroup label={dict.contactPage.form.subject.groups.tanks}>
                      <option value="endustriyel-depolama">{dict.contactPage.form.subject.options.tanks_1}</option>
                      <option value="zeytinyagi-depolama">{dict.contactPage.form.subject.options.tanks_2}</option>
                      <option value="sut-gida-proses">{dict.contactPage.form.subject.options.tanks_3}</option>
                      <option value="kimyasal-asit-tank">{dict.contactPage.form.subject.options.tanks_4}</option>
                    </optgroup>

                    <optgroup label={dict.contactPage.form.subject.groups.process}>
                      <option value="karistiricili-proses">{dict.contactPage.form.subject.options.process_1}</option>
                      <option value="kimyasal-ilac-reaktor">{dict.contactPage.form.subject.options.process_2}</option>
                      <option value="high-shear-homojenizator">{dict.contactPage.form.subject.options.process_3}</option>
                      <option value="mobil-proses-skid">{dict.contactPage.form.subject.options.process_4}</option>
                      <option value="isitma-sogutma-ceketli">{dict.contactPage.form.subject.options.process_5}</option>
                      <option value="fermantasyon-biyoreaktor">{dict.contactPage.form.subject.options.process_6}</option>
                      <option value="otomatik-cip">{dict.contactPage.form.subject.options.process_7}</option>
                    </optgroup>

                    <optgroup label={dict.contactPage.form.subject.groups.hygienic}>
                      <option value="santrifuj-pompa">{dict.contactPage.form.subject.options.hygienic_1}</option>
                      <option value="pozitif-deplasmanli-pompa">{dict.contactPage.form.subject.options.hygienic_2}</option>
                      <option value="kendinden-emisli-pompa">{dict.contactPage.form.subject.options.hygienic_3}</option>
                      <option value="varil-pompasi">{dict.contactPage.form.subject.options.hygienic_4}</option>
                      <option value="havali-diyafram-pompa">{dict.contactPage.form.subject.options.hygienic_5}</option>
                      <option value="monopomp-pompa">{dict.contactPage.form.subject.options.hygienic_6}</option>
                    </optgroup>

                    <optgroup label={dict.contactPage.form.subject.groups.other}>
                      <option value="anahtar-teslim-tesis">{dict.contactPage.form.subject.options.other_1}</option>
                      <option value="ozel-talep">{dict.contactPage.form.subject.options.other_2}</option>
                    </optgroup>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold tracking-widest text-gray-500">{dict.contactPage.form.message.label}</label>
                  <textarea id="message" rows={5} value={formData.message} onChange={handleChange} required placeholder={dict.contactPage.form.message.placeholder} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#005284] focus:ring-1 focus:ring-[#005284] transition-all resize-none"></textarea>
                </div>

                {status.type !== 'idle' && (
                  <div className={`p-4 rounded-xl text-sm font-medium border ${
                    status.type === 'loading' ? 'bg-blue-50 border-blue-100 text-blue-700 flex items-center gap-2' :
                    status.type === 'success' ? 'bg-green-50 border-green-100 text-green-700' :
                    'bg-red-50 border-red-100 text-red-700'
                  }`}>
                    {status.type === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                    {status.message}
                  </div>
                )}

                <div className="flex flex-col gap-6 mt-4">
                  <button 
                    type="submit" 
                    disabled={status.type === 'loading'}
                    className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#E35205] text-white px-8 py-5 rounded-xl text-sm font-bold tracking-widest hover:bg-[#005284] transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {status.type === 'loading' ? dict.contactPage.form.submit.loading : dict.contactPage.form.submit.idle}
                    {status.type !== 'loading' && <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-[400px] relative group">
            <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-gray-100 pointer-events-none">
              <span className="text-xs font-black text-[#005284] tracking-widest uppercase">{dict.contactPage.sidebar.hq.title}</span>
            </div>
            <iframe 
              src="https://maps.google.com/maps?q=Inokstek,+Organize+Sanayi+B%C3%B6lgesi,+Kemalpa%C5%9Fa+OSB,+10.+Sk.+No:6,+35730+Kemalpa%C5%9Fa/%C4%B0zmir&t=m&z=15&output=embed&iwloc=near" 
              className="w-full h-full rounded-xl border-0 filter grayscale contrast-110 opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-700" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-[400px] relative group">
            <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-gray-100 pointer-events-none">
              <span className="text-xs font-black text-[#E35205] tracking-widest uppercase">{dict.contactPage.sidebar.factory.title}</span>
            </div>
            <iframe 
              src="https://maps.google.com/maps?q=Ulucak+%C4%B0stiklal,+Gazi+Blv.+No:169,+35735+Kemalpa%C5%9Fa/%C4%B0zmir&t=m&z=15&output=embed&iwloc=near" 
              className="w-full h-full rounded-xl border-0 filter grayscale contrast-110 opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-700" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </section>
    </div>
  );
}