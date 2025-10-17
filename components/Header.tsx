'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeaderProps {
  isDark?: boolean
}

export default function Header({ isDark = false }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      // Close mobile menu when scrolling
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileMenuOpen])

  // Determine if we should use dark theme based on scroll position and isDark prop
  const shouldUseDarkTheme = isDark || scrollY < 100

  return (
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
        <motion.div 
          className="flex items-center"
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
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-8 lg:space-x-12 text-sm lg:text-base font-medium ${
          shouldUseDarkTheme && scrollY < 100 ? 'text-white' : 'text-gray-900'
        }`}>
          <motion.a 
            href="#home" 
            className={`relative hover:opacity-70 transition-all tracking-wide pb-1 ${
              shouldUseDarkTheme && scrollY < 100 
                ? 'border-b-2 border-white' 
                : 'border-b-2 border-gray-900'
            }`}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            HOME
          </motion.a>
          <motion.a 
            href="#about" 
            className="relative hover:opacity-70 transition-all tracking-wide pb-1 hover:border-b-2 hover:border-current"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            ABOUT
          </motion.a>
          <motion.a 
            href="#properties" 
            className="relative hover:opacity-70 transition-all tracking-wide pb-1 hover:border-b-2 hover:border-current"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            PROPERTIES
          </motion.a>
          <motion.a 
            href="#services" 
            className="relative hover:opacity-70 transition-all tracking-wide pb-1 hover:border-b-2 hover:border-current"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            SERVICES
          </motion.a>
          <motion.a 
            href="#gallery" 
            className="relative hover:opacity-70 transition-all tracking-wide pb-1 hover:border-b-2 hover:border-current"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            GALLERY
          </motion.a>
        </div>
        
        {/* Desktop Contact Button */}
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
          CONTACT
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button 
          className={`md:hidden p-2 ${
            shouldUseDarkTheme && scrollY < 100 ? 'text-white' : 'text-gray-900'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col space-y-1 p-4 overflow-hidden">
          <motion.a 
            href="#home" 
            className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all hover:bg-gray-50 rounded"
            onClick={() => setMobileMenuOpen(false)}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
          >
            HOME
          </motion.a>
          <motion.a 
            href="#about" 
            className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all hover:bg-gray-50 rounded"
            onClick={() => setMobileMenuOpen(false)}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
          >
            ABOUT
          </motion.a>
          <motion.a 
            href="#properties" 
            className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all hover:bg-gray-50 rounded"
            onClick={() => setMobileMenuOpen(false)}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
          >
            PROPERTIES
          </motion.a>
          <motion.a 
            href="#services" 
            className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all hover:bg-gray-50 rounded"
            onClick={() => setMobileMenuOpen(false)}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
          >
            SERVICES
          </motion.a>
          <motion.a 
            href="#gallery" 
            className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all hover:bg-gray-50 rounded"
            onClick={() => setMobileMenuOpen(false)}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
          >
            GALLERY
          </motion.a>
          <motion.button 
            className="text-gray-900 text-sm font-medium tracking-wider border border-gray-900/40 px-4 py-3 mt-4 hover:bg-gray-900 hover:text-white transition-all duration-300 rounded"
            onClick={() => setMobileMenuOpen(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            CONTACT
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
