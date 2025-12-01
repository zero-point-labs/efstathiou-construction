'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface LanguageSwitcherProps {
  isDark?: boolean;
}

export default function LanguageSwitcher({ isDark = false }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Extract current locale from pathname
  const currentLocale = pathname.startsWith('/el') ? 'el' : 'en';

  const changeLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    let pathWithoutLocale = pathname;
    
    // Handle different path patterns
    if (pathname.startsWith('/el/')) {
      pathWithoutLocale = pathname.replace('/el', '');
    } else if (pathname.startsWith('/en/')) {
      pathWithoutLocale = pathname.replace('/en', '');
    } else if (pathname === '/el') {
      pathWithoutLocale = '/';
    } else if (pathname === '/en') {
      pathWithoutLocale = '/';
    }
    
    // Ensure we have a leading slash for non-root paths
    if (pathWithoutLocale !== '/' && !pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale;
    }
    
    // Navigate to new locale
    const newPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`text-sm font-medium tracking-wide transition-colors pb-1 ${
          currentLocale === 'en' 
            ? isDark 
              ? 'text-white border-b-2 border-white' 
              : 'text-gray-900 border-b-2 border-gray-900'
            : isDark
              ? 'text-white/70 hover:text-white hover:border-b-2 hover:border-white/50'
              : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-600'
        }`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        EN
      </motion.button>
      <span className={isDark ? 'text-white/50' : 'text-gray-400'}>|</span>
      <motion.button
        onClick={() => changeLanguage('el')}
        className={`text-sm font-medium tracking-wide transition-colors pb-1 ${
          currentLocale === 'el' 
            ? isDark 
              ? 'text-white border-b-2 border-white' 
              : 'text-gray-900 border-b-2 border-gray-900'
            : isDark
              ? 'text-white/70 hover:text-white hover:border-b-2 hover:border-white/50'
              : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-600'
        }`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        ΕΛ
      </motion.button>
    </div>
  );
}
