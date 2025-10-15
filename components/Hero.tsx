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
      <div className="relative h-full flex flex-col items-center justify-center z-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Secondary Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 font-light tracking-wider mb-4 uppercase">
            Premium Quality Solutions
          </p>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-none tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.1em] mb-6 md:mb-8">
            <span className="font-light">EFSTATHIOU</span> <span className="font-bold">CONSTRUCTIONS</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            Where architectural vision meets construction excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-500 min-w-[200px]">
              <span className="relative z-10">VIEW OUR WORK</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            <button className="text-white text-sm font-medium tracking-wider border-b border-white/50 pb-1 hover:border-white transition-colors duration-300">
              VIEW SERVICES
            </button>
          </div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs font-light tracking-wider mb-2">SCROLL</span>
          <div className="w-px h-6 bg-white/30 animate-pulse"></div>
        </div>
      </div>

    </section>
  )
}
