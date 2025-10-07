'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  image: string
  stats: string
}

const services: Service[] = [
  {
    id: 'luxury-residential',
    title: 'LUXURY RESIDENTIAL',
    subtitle: 'Bespoke Living Spaces',
    description: 'Creating extraordinary homes that reflect your unique vision and lifestyle. From contemporary masterpieces to timeless classics, we craft residences that stand as testaments to architectural excellence.',
    features: ['Custom Design', 'Premium Materials', 'Smart Home Integration', 'Sustainable Solutions'],
    image: '/zio_dudee_Ultra-modern_luxury_house_at_dusk_with_selective_fl_d183ddd8-f296-430b-9dee-55fdd86d23e8_1.png',
    stats: '25+ Luxury Homes'
  },
  {
    id: 'commercial-development',
    title: 'COMMERCIAL DEVELOPMENT',
    subtitle: 'Modern Business Architecture',
    description: 'Designing spaces that inspire productivity and innovation. Our commercial projects create environments where businesses thrive, combining aesthetic appeal with functional excellence.',
    features: ['Office Buildings', 'Retail Spaces', 'Mixed-Use Developments', 'Corporate Headquarters'],
    image: '/zio_dudee_Ultra-modern_sleek_office_building_at_dusk_with_exp_33e79970-4bc7-4b97-970f-2229ec32ea35_3.png',
    stats: '18+ Commercial Projects'
  },
  {
    id: 'renovations',
    title: 'RENOVATIONS',
    subtitle: 'Transformative Redesign',
    description: 'Breathing new life into existing structures while honoring their heritage. Our renovation expertise transforms outdated spaces into contemporary marvels that exceed modern expectations.',
    features: ['Historic Preservation', 'Modern Updates', 'Space Optimization', 'Energy Efficiency'],
    image: '/zio_dudee_Dramatic_beforeafter_renovation_transformation_show_b8da3948-e3b2-44e8-9a9a-becce35a9d68_0.png',
    stats: '40+ Renovations'
  },
  {
    id: 'custom-architecture',
    title: 'CUSTOM ARCHITECTURE',
    subtitle: 'Distinctive Design Solutions',
    description: 'Every project begins with understanding your unique needs and aspirations. We create architectural solutions that are as individual as you are, combining innovation with timeless design principles.',
    features: ['Architectural Design', 'Interior Planning', 'Landscape Integration', 'Permit Management'],
    image: '/zio_dudee_Distinctive_ultra-modern_custom_home_at_dusk_featur_b3f74bd8-d1e1-417d-b64d-d29e71eed53b_2.png',
    stats: '32+ Custom Designs'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'DISCOVERY',
    description: 'Understanding your vision, requirements, and aspirations through detailed consultation and site analysis.'
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Crafting architectural solutions that balance aesthetics, functionality, and sustainability.'
  },
  {
    number: '03',
    title: 'DEVELOPMENT',
    description: 'Bringing designs to life with meticulous attention to detail and quality craftsmanship.'
  },
  {
    number: '04',
    title: 'DELIVERY',
    description: 'Completing your project on time and within budget, exceeding your expectations.'
  }
]

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [horizontalOffset, setHorizontalOffset] = useState(0)
  const router = useRouter()
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Calculate horizontal scroll for services section
      if (servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect()
        const sectionTop = window.scrollY + rect.top
        const sectionHeight = rect.height
        
        // When we're in the services section
        if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          const progress = (window.scrollY - sectionTop) / (sectionHeight - window.innerHeight)
          const maxOffset = (services.length - 1) * (isMobile ? 320 : 600) // Adjusted for mobile
          setHorizontalOffset(-progress * maxOffset)
        }
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

  return (
    <div className="bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4">
        <div className="flex items-center justify-between px-4 md:px-8">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 md:gap-3 cursor-pointer"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L20 9V21H15V14H9V21H4V9L12 3M12 5.69L6 10.19V19H7V12H17V19H18V10.19L12 5.69Z"/>
            </svg>
            <div className="text-white font-light tracking-wider">
              <div className="text-xs md:text-sm">NICOLAS EFSTATHIOU</div>
              <div className="text-sm md:text-base font-medium">CONSTRUCTIONS LTD</div>
            </div>
          </button>
          
          <div className="hidden md:flex space-x-12 text-base font-medium text-white">
            <button onClick={() => router.push('/')} className="hover:text-gray-300 transition-colors tracking-wide">
              HOME
            </button>
            <button className="text-white border-b-2 border-white pb-1">
              SERVICES
            </button>
          </div>
          
          <button 
            onClick={() => router.push('/')}
            className="text-white text-sm font-medium tracking-wider border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* Hero Section - Cinematic */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/backround.png')",
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'brightness(0.7) contrast(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4 md:px-8">
          <div 
            className="max-w-6xl"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0, 1 - scrollY / 600)
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-light text-white mb-4 md:mb-8 tracking-[0.1em] md:tracking-[0.2em] leading-none">
              SERVICES
            </h1>
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
              Crafting architectural excellence through comprehensive design and construction services
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-widest mb-4">EXPLORE OUR SERVICES</span>
            <div className="w-px h-12 bg-white/40 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Journey - Horizontal Scroll */}
      <section ref={servicesRef} className="bg-white relative" style={{ height: '400vh' }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div 
            className="flex gap-16 md:gap-32 transition-transform duration-300 ease-out px-8 md:px-16"
            style={{
              transform: `translateX(${horizontalOffset}px)`,
            }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="flex-shrink-0 w-[95vw] md:w-[70vw] max-w-6xl">
                <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center h-screen py-8 md:py-16">
                  
                  {/* Content Side */}
                  <div className={`space-y-4 md:space-y-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div>
                      <div className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-100 mb-2 md:mb-4">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-2xl md:text-4xl lg:text-6xl font-light text-gray-900 mb-2 md:mb-4 tracking-wide leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-2 tracking-wide">
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-sm md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-xs md:text-sm tracking-widest text-gray-500 uppercase">Key Services</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="text-gray-700 text-xs md:text-sm tracking-wide">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 md:pt-4">
                      <div className="text-lg md:text-2xl lg:text-3xl font-light text-gray-900">
                        {service.stats}
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="aspect-[4/3] relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Vertical Storytelling */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-wide">
              OUR PROCESS
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              A refined approach to architectural excellence, refined through decades of experience
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-32">
            {processSteps.map((step, index) => (
              <div key={step.number} className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                
                {/* Number */}
                <div className="md:col-span-2">
                  <div className="text-8xl md:text-9xl font-light text-gray-200">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-6 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Visual Element */}
                <div className="md:col-span-4">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl"></div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Elegant Form */}
      <section className="bg-white py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          
          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-wide">
            START YOUR PROJECT
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed font-light">
            Ready to bring your architectural vision to life?
          </p>

          {/* Elegant Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-lg placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-lg placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                />
              </div>
              
              <input 
                type="text" 
                placeholder="Project Type"
                className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-lg placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
              />
              
              <textarea 
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent text-lg placeholder-gray-400 focus:border-gray-900 focus:outline-none resize-none transition-colors"
              ></textarea>
              
              <div className="pt-8">
                <button 
                  type="submit"
                  className="bg-gray-900 text-white px-12 py-4 text-sm tracking-widest hover:bg-gray-800 transition-colors duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  )
}
