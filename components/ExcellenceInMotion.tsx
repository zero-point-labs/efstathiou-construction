'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface ProjectType {
  id: string
  title: string
  subtitle: string
  description: string
  stats: string
  image: string
}

const projectTypes: ProjectType[] = [
  {
    id: 'luxury-villas',
    title: 'LUXURY VILLAS',
    subtitle: 'Premium Residential Properties',
    description: 'Exceptional residential properties that redefine modern living with premium finishes, innovative design, and unparalleled attention to detail.',
    stats: '25+ Completed',
    image: '/zio_dudee_Ultra-modern_luxury_house_at_dusk_with_selective_fl_d183ddd8-f296-430b-9dee-55fdd86d23e8_1.png'
  },
  {
    id: 'commercial-spaces',
    title: 'COMMERCIAL SPACES',
    subtitle: 'Modern Business Architecture',
    description: 'Sophisticated office buildings and retail spaces designed to inspire productivity and create lasting impressions for businesses.',
    stats: '18+ Projects',
    image: '/zio_dudee_Ultra-modern_sleek_office_building_at_dusk_with_exp_33e79970-4bc7-4b97-970f-2229ec32ea35_3.png'
  },
  {
    id: 'renovations',
    title: 'RENOVATIONS',
    subtitle: 'Contemporary Transformations',
    description: 'Transforming existing properties into contemporary masterpieces while preserving their unique character and heritage.',
    stats: '40+ Renovations',
    image: '/zio_dudee_Dramatic_beforeafter_renovation_transformation_show_b8da3948-e3b2-44e8-9a9a-becce35a9d68_0.png'
  },
  {
    id: 'custom-homes',
    title: 'CUSTOM HOMES',
    subtitle: 'Bespoke Living Spaces',
    description: 'Bespoke residential designs tailored to each client\'s vision, lifestyle, and dreams, creating truly unique living spaces.',
    stats: '32+ Custom Homes',
    image: '/zio_dudee_Distinctive_ultra-modern_custom_home_at_dusk_featur_b3f74bd8-d1e1-417d-b64d-d29e71eed53b_2.png'
  },
  {
    id: 'developments',
    title: 'DEVELOPMENTS',
    subtitle: 'Vibrant Communities',
    description: 'Multi-unit residential and mixed-use developments that create vibrant communities while maintaining premium quality.',
    stats: '8+ Developments',
    image: '/zio_dudee_Modern_residential_apartment_complex_at_dusk_showca_88287896-e2f9-4479-88cf-c91cce2c6b86_3.png'
  },
  {
    id: 'restoration',
    title: 'RESTORATION',
    subtitle: 'Historic Preservation',
    description: 'Carefully preserving and revitalizing historic properties, bringing them into the modern era while honoring their legacy.',
    stats: '12+ Restorations',
    image: '/zio_dudee_Historic_building_restoration_at_dusk_showing_maste_0a1be179-2f12-454d-87c5-067ff6a8fa0c_1.png'
  }
]

export default function ExcellenceInMotion() {
  const [horizontalOffset, setHorizontalOffset] = useState(0)
  const [isInHorizontalZone, setIsInHorizontalZone] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleCardClick = () => {
    router.push('/services')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Define the horizontal scroll zone - when section header reaches top of screen
      const horizontalZoneStart = rect.top <= 0
      const horizontalZoneEnd = rect.bottom <= viewportHeight
      
      const inHorizontalZone = horizontalZoneStart && !horizontalZoneEnd
      setIsInHorizontalZone(inHorizontalZone)
      
      if (inHorizontalZone) {
        // Calculate progress through the horizontal zone (0 to 1)
        const sectionHeight = rect.height
        const scrolledIntoSection = Math.abs(rect.top)
        const availableScrollDistance = sectionHeight - viewportHeight
        const progress = Math.max(0, Math.min(1, scrolledIntoSection / availableScrollDistance))
        
        // Calculate horizontal movement
        const containerWidth = containerRef.current.scrollWidth
        const viewportWidth = window.innerWidth
        const maxOffset = containerWidth - viewportWidth + 100 // Padding
        const offset = -(progress * maxOffset)
        
        setHorizontalOffset(offset)
      } else if (!horizontalZoneStart) {
        // Before horizontal zone - reset to start
        setHorizontalOffset(0)
      }
      // After horizontal zone - keep at end position
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="bg-white relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 px-4 md:px-8">
          <div className="overflow-hidden mb-6 md:mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 tracking-wide animate-fade-in-up">
              <span className="inline-block animate-slide-up-delay-1">EXCELLENCE</span>
              <span className="inline-block mx-3 md:mx-6 animate-slide-up-delay-2">IN</span>
              <span className="inline-block animate-slide-up-delay-3">MOTION</span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light animate-fade-in-up-delay">
              Discover our diverse portfolio of exceptional projects, each representing our commitment to architectural excellence.
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="overflow-hidden px-4 md:px-8">
          <div 
            ref={containerRef}
            className="flex gap-8 md:gap-20 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${horizontalOffset}px)` }}
          >
            {projectTypes.map((project, index) => (
              <div key={project.id} className="flex-shrink-0 w-[280px] md:w-[480px]">
                
                {/* Project Card */}
                <div 
                  className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 cursor-pointer"
                  onClick={handleCardClick}
                >
                  
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating Number */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-gray-900 font-medium text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4 md:p-6">
                    
                    {/* Title and Subtitle */}
                    <div className="mb-3 md:mb-4">
                      <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-1 md:mb-2 tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 font-light">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    {/* Simple Button */}
                    <button className="w-full px-3 md:px-4 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-xs md:text-sm font-medium rounded-lg">
                      VIEW PROJECTS
                    </button>
                    
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Instruction */}
        <div className="text-center mt-12 md:mt-20 px-4 md:px-8">
          <p className="text-sm md:text-lg text-gray-500 font-light tracking-wide">
            {isInHorizontalZone ? 'CONTINUE SCROLLING TO EXPLORE' : 'SCROLL TO EXPLORE ALL PROJECTS'}
          </p>
        </div>

      </div>
    </section>
  )
}
