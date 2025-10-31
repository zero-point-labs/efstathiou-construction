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

  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const inactiveColor = isDark ? 'text-white/70' : 'text-gray-600';
  const borderColor = isDark ? 'border-white' : 'border-gray-900';
  const hoverBorderColor = isDark ? 'border-white/50' : 'border-gray-600';
  const separatorColor = isDark ? 'text-white/50' : 'text-gray-400';

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`text-sm font-medium tracking-wide transition-colors ${
          currentLocale === 'en' 
            ? `${textColor} border-b-2 ${borderColor}` 
            : `${inactiveColor} hover:${textColor} hover:border-b-2 hover:${hoverBorderColor}`
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
      <span className={separatorColor}>|</span>
      <motion.button
        onClick={() => changeLanguage('el')}
        className={`text-sm font-medium tracking-wide transition-colors ${
          currentLocale === 'el' 
            ? `${textColor} border-b-2 ${borderColor}` 
            : `${inactiveColor} hover:${textColor} hover:border-b-2 hover:${hoverBorderColor}`
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ΕΛ
      </motion.button>
    </div>
  );
}
