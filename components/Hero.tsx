'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Simulate loading delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const taglineVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const buttonsVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  const scrollIndicatorVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  return (
    <section id="home" className="relative overflow-hidden h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/1020.mp4" type="video/mp4" />
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
      <div className="relative h-full flex flex-col items-center justify-center z-20 px-4 sm:px-6 md:px-8">
        <motion.div 
          className="text-center max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          
          {/* Secondary Subtitle */}
          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 font-light tracking-[0.15em] uppercase"
            variants={subtitleVariants}
          >
            Premium Quality Solutions
          </motion.p>
          
          {/* Main Title */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white leading-tight sm:leading-tight md:leading-none tracking-wide md:tracking-[0.05em] lg:tracking-[0.08em]"
            variants={titleVariants}
          >
            <span className="font-light block sm:inline">EFSTATHIOU</span>
            <span className="font-bold block sm:inline"> CONSTRUCTIONS</span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-2"
            variants={taglineVariants}
          >
            Where architectural vision meets construction excellence.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16"
            variants={buttonsVariants}
          >
            <motion.button 
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-500 w-full max-w-[240px] sm:max-w-[280px] md:min-w-[200px] md:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">VIEW OUR WORK</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.button>
            
            <motion.button 
              className="text-white text-xs sm:text-sm md:text-sm font-medium tracking-wider border-b border-white/50 pb-1 hover:border-white transition-colors duration-300 hover:text-white/80"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              VIEW SERVICES
            </motion.button>
          </motion.div>
          
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="flex flex-col items-center text-white/70 group cursor-pointer">
          <motion.span 
            className="text-xs font-light tracking-wider mb-2 group-hover:text-white transition-colors duration-300"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCROLL
          </motion.span>
          <motion.div 
            className="w-px h-6 sm:h-8 md:h-10 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

    </section>
  )
}
