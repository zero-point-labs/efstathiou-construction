'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="home" className="relative overflow-hidden h-[70vh] md:h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/1015.mp4" type="video/mp4" />
          {/* Fallback background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-800"
            style={{
              backgroundImage: "url('/backround.png')",
              filter: 'brightness(0.85) contrast(1.15) saturate(1.1)',
            }}
          />
        </video>
      </div>
      
      {/* Dark overlay for cinematic effect */}
      <div className="absolute inset-0 bg-black/55 z-10"></div>

      {/* Main Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center z-20 px-4 pt-20 md:pt-0">
        <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
          
          {/* Secondary Subtitle */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 font-light tracking-wider uppercase">
            Premium Quality Solutions
          </p>
          
          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight md:leading-none tracking-wide md:tracking-[0.05em] lg:tracking-[0.08em]">
            <span className="font-light block sm:inline">EFSTATHIOU</span>
            <span className="font-bold block sm:inline"> CONSTRUCTIONS</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-xl md:max-w-2xl mx-auto px-2">
            Where architectural vision meets construction excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center pt-4 md:pt-6 pb-16 md:pb-8">
            <button className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-500 w-full max-w-[250px] md:min-w-[200px] md:w-auto">
              <span className="relative z-10">VIEW OUR WORK</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            <button className="text-white text-xs md:text-sm font-medium tracking-wider border-b border-white/50 pb-1 hover:border-white transition-colors duration-300">
              VIEW SERVICES
            </button>
          </div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs font-light tracking-wider mb-2">SCROLL</span>
          <div className="w-px h-4 md:h-6 bg-white/30 animate-pulse"></div>
        </div>
      </div>

    </section>
  )
}
