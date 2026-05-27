import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routeDictionary } from './dictionaries/routes';

const locales = ['tr', 'en', 'de', 'es', 'ru', 'fr', 'ar', 'pt', 'it'];
const defaultLocale = 'tr';

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
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  let needsRewrite = false;
  const physicalSegments = pathnameSegments.map((segment, index) => {
    if (index === 0) return segment;

      for (const [physicalKey, translations] of Object.entries(routeDictionary)) {
      if (translations[pathnameLocale as keyof typeof translations] === segment) {
        if (physicalKey !== segment) needsRewrite = true;
        return physicalKey;
      }
    }
    return segment;
  });

  if (needsRewrite) {
    const rewriteUrl = `/${physicalSegments.join('/')}`;
    return NextResponse.rewrite(new URL(rewriteUrl, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};