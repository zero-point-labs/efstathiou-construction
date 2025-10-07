'use client'

import { useEffect, useState } from 'react'
import ScrollingServicesBar from './ScrollingServicesBar'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
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
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileMenuOpen])
  return (
    <section id="home" className={`relative overflow-hidden ${isMobile ? 'h-screen' : 'h-[200vh]'}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-800"
        style={{
          backgroundImage: "url('/backround.png')",
          backgroundSize: isMobile ? 'cover' : '100%',
          backgroundPosition: isMobile ? 'center 70%' : 'center -1%',
          filter: 'brightness(0.85) contrast(1.15) saturate(1.1)',
        }}
      />
      
      {/* Dark overlay for extra mood */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Sticky Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 600 ? 'bg-black/80 backdrop-blur-md py-4' : isMobile ? 'bg-transparent py-4' : 'bg-transparent py-6'}`}>
        <div className="flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L20 9V21H15V14H9V21H4V9L12 3M12 5.69L6 10.19V19H7V12H17V19H18V10.19L12 5.69Z"/>
            </svg>
            <div className="text-white font-light tracking-wider">
              <div className="text-xs md:text-sm">NICOLAS EFSTATHIOU</div>
              <div className="text-sm md:text-base font-medium">CONSTRUCTIONS LTD</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 text-base font-medium text-white">
            <a href="#home" className="relative hover:text-gray-300 transition-colors tracking-wide pb-1 border-b-2 border-white">
              HOME
            </a>
            <a href="#about" className="relative hover:text-gray-300 transition-colors tracking-wide pb-1 hover:border-b-2 hover:border-gray-300">
              ABOUT
            </a>
            <a href="#properties" className="relative hover:text-gray-300 transition-colors tracking-wide pb-1 hover:border-b-2 hover:border-gray-300">
              PROPERTIES
            </a>
            <a href="#services" className="relative hover:text-gray-300 transition-colors tracking-wide pb-1 hover:border-b-2 hover:border-gray-300">
              SERVICES
            </a>
            <a href="#gallery" className="relative hover:text-gray-300 transition-colors tracking-wide pb-1 hover:border-b-2 hover:border-gray-300">
              GALLERY
            </a>
          </div>
          
          {/* Desktop Contact Button */}
          <button className="hidden md:block text-white text-sm font-medium tracking-wider border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300">
            CONTACT
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/20">
            <div className="flex flex-col space-y-1 p-4">
              <a 
                href="#home" 
                className="text-white font-medium tracking-wide py-3 px-2 border-b border-white/10 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </a>
              <a 
                href="#about" 
                className="text-white font-medium tracking-wide py-3 px-2 border-b border-white/10 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
              <a 
                href="#properties" 
                className="text-white font-medium tracking-wide py-3 px-2 border-b border-white/10 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                PROPERTIES
              </a>
              <a 
                href="#services" 
                className="text-white font-medium tracking-wide py-3 px-2 border-b border-white/10 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </a>
              <a 
                href="#gallery" 
                className="text-white font-medium tracking-wide py-3 px-2 border-b border-white/10 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                GALLERY
              </a>
              <button 
                className="text-white text-sm font-medium tracking-wider border border-white/40 px-4 py-3 mt-4 hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Container */}
      <div className={`relative h-full flex items-center justify-center ${isMobile ? 'pt-20' : ''}`}>
        
        {/* Large EFSTATHIOU Text - With smaller gap and higher limit */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-10" 
          style={{ 
            transform: isMobile 
              ? `translateY(${Math.max(-27, -17 - scrollY * 0.02)}%) translateX(0%) scale(1.1)`
              : `translateY(${Math.max(-35, -20 - scrollY * 0.03)}%) translateX(0%) scale(1.4)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h1 className="text-[2.5rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-black text-white leading-none tracking-[0.08em] sm:tracking-[0.1em] md:tracking-[0.15em] select-none px-4 text-center">
            EFSTATHIOU
          </h1>
        </div>

        {/* House Image - Exactly matching background position and scale */}
        <div className="absolute inset-0 z-20" style={{ 
          transform: 'translateY(0%) translateX(0%)',
          backgroundImage: "url('/house.png')",
          backgroundSize: isMobile ? 'cover' : '100%',
          backgroundPosition: isMobile ? 'center 70%' : 'center -1%',
          backgroundRepeat: 'no-repeat'
        }}>
        </div>

        {/* CONSTRUCTIONS Text - Smaller 5% gap above EFSTATHIOU with higher limit */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-15" 
          style={{ 
            transform: isMobile 
              ? `translateY(${Math.max(-32, -22 - scrollY * 0.02)}%) translateX(0%) scale(1.05)`
              : `translateY(${Math.max(-40, -25 - scrollY * 0.03)}%) translateX(0%) scale(1.2)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-center px-4">
            CONSTRUCTIONS
          </h2>
        </div>


        {/* Scrolling Services Bar */}
        <ScrollingServicesBar />

      </div>

      {/* Fade Overlay - Gradient from transparent to white background */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent z-40 ${isMobile ? 'h-72' : 'h-[36rem]'}`}></div>
    </section>
  )
}
