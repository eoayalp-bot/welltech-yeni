import { getDictionary } from '../../../dictionaries/getDictionary';
import ContactClient from './ContactClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang, 'contact');

  return {
    title: `${dict.contactPage.breadcrumb.current} | Welltech®`,
    description: dict.contactPage.hero.desc,
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  const dict = await getDictionary(lang, 'contact');

  return <ContactClient lang={lang} dict={dict} />;
}