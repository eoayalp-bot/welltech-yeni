import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routeDictionary } from './dictionaries/routes';

const locales = ['tr', 'en', 'de', 'fr', 'es', 'pt', 'it', 'ru', 'ar']; 
const defaultLocale = 'tr';

function getBrowserLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  const detectedLocales = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim().split('-')[0].toLowerCase());

  const matchedLocale = detectedLocales.find((lang) => locales.includes(lang));

  if (matchedLocale) return matchedLocale;

  return 'en'; 
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameSegments = pathname.split('/').filter(Boolean);
  const pathnameLocale = locales.includes(pathnameSegments[0]) ? pathnameSegments[0] : null;

  if (!pathnameLocale) {
    const targetLocale = getBrowserLocale(request);
    
    request.nextUrl.pathname = `/${targetLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  let needsRewrite = false;
  const physicalSegments = pathnameSegments.map((segment, index) => {
    if (index === 0) return segment;

    for (const [physicalKey, translations] of Object.entries(routeDictionary)) {
      const trans = translations as Record<string, string>;
      
      if (trans[pathnameLocale] === segment) {
        if (physicalKey !== segment) needsRewrite = true;
        return physicalKey;
      }
    }
    return segment;
  });

  if (needsRewrite) {
    const physicalPath = `/${physicalSegments.join('/')}`;
    return NextResponse.rewrite(new URL(physicalPath, request.url));
  }

  return NextResponse.next();
}