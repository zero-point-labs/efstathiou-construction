import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'el'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Automatic locale detection
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(el|en)/:path*']
};
