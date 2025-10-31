import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'el'];

export default getRequestConfig(async ({locale}) => {
  // Use default locale if none provided
  const validLocale = locale && locales.includes(locale) ? locale : 'en';
  
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
