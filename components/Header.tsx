'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Home, Info, Briefcase, Wrench, ChevronRight } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  isDark?: boolean
}

export default function Header({ isDark = false }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('navigation')
  
  // Extract locale from pathname
  const locale = pathname.startsWith('/el') ? 'el' : 'en'

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Determine if we should use dark theme based on scroll position and isDark prop
  const shouldUseDarkTheme = isDark || scrollY < 100

  // Function to check if a route is active
  const isActiveRoute = (route: string) => {
    if (route === '/' && pathname === '/') return true
    if (route !== '/' && pathname.startsWith(route)) return true
    return false
  }

  // Function removed - now using Link navigation

  return (
    <>
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 100 
          ? 'bg-white/95 backdrop-blur-md py-3 sm:py-4 shadow-sm' 
          : shouldUseDarkTheme 
            ? 'bg-transparent py-4 sm:py-6' 
            : 'bg-white/95 backdrop-blur-md py-3 sm:py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link href={`/${locale}`}>
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={shouldUseDarkTheme && scrollY < 100 ? "/For-Black-Tshirt.png" : "/For-White-Tshirt(Dark-Blue).png"}
              alt="Nicolas Efstathiou Constructions Ltd"
              width={200}
              height={80}
              className="h-10 sm:h-12 md:h-16 w-auto"
              priority
            />
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-8 lg:space-x-12 text-sm lg:text-base font-medium greek-text ${
          shouldUseDarkTheme && scrollY < 100 ? 'text-white' : 'text-gray-900'
        }`}>
          <Link href={`/${locale}`}>
            <motion.a 
              className={`relative hover:opacity-70 transition-all tracking-wide pb-1 cursor-pointer ${
                isActiveRoute('/') 
                  ? (shouldUseDarkTheme && scrollY < 100 
                      ? 'border-b-2 border-white' 
                      : 'border-b-2 border-gray-900')
                  : 'hover:border-b-2 hover:border-current'
              }`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {t('home')}
            </motion.a>
          </Link>
          <Link href={`/${locale}/about`}>
            <motion.a 
              className={`relative hover:opacity-70 transition-all tracking-wide pb-1 cursor-pointer ${
                isActiveRoute('/about') 
                  ? (shouldUseDarkTheme && scrollY < 100 
                      ? 'border-b-2 border-white' 
                      : 'border-b-2 border-gray-900')
                  : 'hover:border-b-2 hover:border-current'
              }`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {t('about')}
            </motion.a>
          </Link>
          <Link href={`/${locale}/work`}>
            <motion.a 
              className={`relative hover:opacity-70 transition-all tracking-wide pb-1 cursor-pointer ${
                isActiveRoute('/work') 
                  ? (shouldUseDarkTheme && scrollY < 100 
                      ? 'border-b-2 border-white' 
                      : 'border-b-2 border-gray-900')
                  : 'hover:border-b-2 hover:border-current'
              }`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {t('work')}
            </motion.a>
          </Link>
          <Link href={`/${locale}/services`}>
            <motion.a 
              className={`relative hover:opacity-70 transition-all tracking-wide pb-1 cursor-pointer ${
                isActiveRoute('/services') 
                  ? (shouldUseDarkTheme && scrollY < 100 
                      ? 'border-b-2 border-white' 
                      : 'border-b-2 border-gray-900')
                  : 'hover:border-b-2 hover:border-current'
              }`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {t('services')}
            </motion.a>
          </Link>
        </div>
        
        {/* Desktop Language Switcher */}
        <div className="hidden md:flex items-center">
          <LanguageSwitcher isDark={shouldUseDarkTheme && scrollY < 100} />
        </div>
        
        {/* Desktop Contact Button */}
        <Link href={`/${locale}/contact`}>
          <motion.button 
            className={`hidden md:block text-xs lg:text-sm font-medium tracking-wider border px-3 lg:px-4 py-2 transition-all duration-300 ${
              shouldUseDarkTheme && scrollY < 100
                ? 'text-white border-white/40 hover:bg-white hover:text-black'
                : 'text-gray-900 border-gray-900/40 hover:bg-gray-900 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t('contact')}
          </motion.button>
        </Link>

        {/* Mobile Menu Button */}
        <motion.button 
          className={`md:hidden relative z-50 p-2 ${
            shouldUseDarkTheme && scrollY < 100 ? 'text-white' : 'text-gray-900'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          <div className="relative w-6 h-5">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-full bg-current rounded-full"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 10 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <motion.span
              className="absolute left-0 top-1/2 h-0.5 w-full bg-current rounded-full -translate-y-1/2"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
                x: mobileMenuOpen ? -20 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 bottom-0 h-0.5 w-full bg-current rounded-full"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -10 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.button>
      </div>
    </motion.nav>

      {/* Mobile Menu Overlay - Outside nav for proper positioning */}
      <motion.div
        className="md:hidden fixed inset-0 z-[60]"
        initial={false}
        animate={{ 
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <motion.div
          className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl"
          initial={{ x: '100%' }}
          animate={{ x: mobileMenuOpen ? 0 : '100%' }}
          transition={{ 
            type: "spring",
            damping: 25,
            stiffness: 200
          }}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00343d] to-[#004d5a] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">NE</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Menu</p>
                  <p className="text-xs text-gray-500">Navigation</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <nav className="flex flex-col space-y-2">
                {[
                  { href: `/${locale}`, label: t('home'), icon: Home },
                  { href: `/${locale}/about`, label: t('about'), icon: Info },
                  { href: `/${locale}/work`, label: t('work'), icon: Briefcase },
                  { href: `/${locale}/services`, label: t('services'), icon: Wrench },
                ].map((item, index) => {
                  const IconComponent = item.icon
                  const isActive = isActiveRoute(item.href.replace(`/${locale}`, '') || '/')
                  return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      className={`group relative flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#00343d] to-[#004d5a] text-white shadow-lg'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ 
                        opacity: mobileMenuOpen ? 1 : 0,
                        x: mobileMenuOpen ? 0 : 20
                      }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.3
                      }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Icon */}
                      <div className={`transition-transform duration-300 ${
                        isActive ? 'text-white' : 'text-gray-600'
                      }`}>
                        <IconComponent 
                          size={22} 
                          className={isActive ? 'group-hover:scale-110' : 'group-hover:scale-110 group-hover:text-gray-900'} 
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                      </div>
                      
                      {/* Label */}
                      <span className={`flex-1 font-medium tracking-wide text-base ${
                        isActive ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.label}
                      </span>

                      {/* Arrow */}
                      <motion.div
                        className={`transition-colors duration-200 ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-400 group-hover:text-gray-600'
                        }`}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight size={20} />
                      </motion.div>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-1/2 h-1 w-1 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                )})}
              </nav>

              {/* Language Switcher */}
              <motion.div
                className="mt-6 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: mobileMenuOpen ? 1 : 0,
                  y: mobileMenuOpen ? 0 : 20
                }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">Language</p>
                  <LanguageSwitcher isDark={false} />
                </div>
              </motion.div>
            </div>

            {/* Menu Footer */}
            <motion.div
              className="p-6 border-t border-gray-200 bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: mobileMenuOpen ? 1 : 0,
                y: mobileMenuOpen ? 0 : 20
              }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Link href={`/${locale}/contact`}>
                <motion.button
                  className="w-full bg-gradient-to-r from-[#00343d] to-[#004d5a] text-white font-medium tracking-wide py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {t('contact')}
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
