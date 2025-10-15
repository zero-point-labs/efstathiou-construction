'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 100 
        ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' 
        : shouldUseDarkTheme 
          ? 'bg-transparent py-6' 
          : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={shouldUseDarkTheme && scrollY < 100 ? "/For-Black-Tshirt.png" : "/For-White-Tshirt(Dark-Blue).png"}
            alt="Nicolas Efstathiou Constructions Ltd"
            width={200}
            height={80}
            className="h-12 md:h-16 w-auto"
            priority
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-12 text-base font-medium ${
          shouldUseDarkTheme && scrollY < 100 ? 'text-white' : 'text-gray-900'
        }`}>
          <a href="#home" className={`relative hover:opacity-70 transition-all tracking-wide pb-1 ${
            shouldUseDarkTheme && scrollY < 100 
              ? 'border-b-2 border-white' 
              : 'border-b-2 border-gray-900'
          }`}>
            HOME
          </a>
          <a href="#about" className="relative hover:opacity-70 transition-all tracking-wide pb-1 hover:border-b-2 hover:border-current">
            ABOUT
          </a>
          <a href="#properties" className="relative hover:opacity-70 transition-all tracking-wide pb-1 hover:border-b-2 hover:border-current">
            PROPERTIES
          </a>
          <a href="#services" className="relative hover:opacity-70 transition-all tracking-wide pb-1 hover:border-b-2 hover:border-current">
            SERVICES
          </a>
          <a href="#gallery" className="relative hover:opacity-70 transition-all tracking-wide pb-1 hover:border-b-2 hover:border-current">
            GALLERY
          </a>
        </div>
        
        {/* Desktop Contact Button */}
        <button className={`hidden md:block text-sm font-medium tracking-wider border px-4 py-2 transition-all duration-300 ${
          shouldUseDarkTheme && scrollY < 100
            ? 'text-white border-white/40 hover:bg-white hover:text-black'
            : 'text-gray-900 border-gray-900/40 hover:bg-gray-900 hover:text-white'
        }`}>
          CONTACT
        </button>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 ${
            shouldUseDarkTheme && scrollY < 100 ? 'text-white' : 'text-gray-900'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="flex flex-col space-y-1 p-4">
            <a 
              href="#home" 
              className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="#about" 
              className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#properties" 
              className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              PROPERTIES
            </a>
            <a 
              href="#services" 
              className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              SERVICES
            </a>
            <a 
              href="#gallery" 
              className="text-gray-900 font-medium tracking-wide py-3 px-2 border-b border-gray-100 hover:opacity-70 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              GALLERY
            </a>
            <button 
              className="text-gray-900 text-sm font-medium tracking-wider border border-gray-900/40 px-4 py-3 mt-4 hover:bg-gray-900 hover:text-white transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
