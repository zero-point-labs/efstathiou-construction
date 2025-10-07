'use client'

import { useEffect, useState } from 'react'

interface Service {
  name: string
  icon: string
}

const services: Service[] = [
  { name: 'RESIDENTIAL', icon: '🏠' },
  { name: 'COMMERCIAL', icon: '🏢' },
  { name: 'RENOVATION', icon: '🔨' },
  { name: 'DESIGN', icon: '📐' },
  { name: 'PLANNING', icon: '📋' },
  { name: 'CONSULTING', icon: '💡' },
  { name: 'ARCHITECTURE', icon: '🏛️' },
  { name: 'ENGINEERING', icon: '⚙️' },
]

export default function ScrollingServicesBar() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
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
  }, [])

  // Calculate horizontal offset based on scroll position
  // Scroll down = move left (negative translateX)
  // Scroll up = move right (positive translateX)
  const horizontalOffset = -scrollY * 0.5

  return (
    <div className={`absolute left-0 right-0 z-30 ${isMobile ? 'bottom-56' : 'bottom-[32rem]'}`}>
      {/* Services Bar */}
      <div className="overflow-hidden">
        <div 
          className={`flex items-center whitespace-nowrap ${isMobile ? 'gap-6' : 'gap-12'}`}
          style={{
            transform: `translateX(${horizontalOffset}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Render services multiple times to create infinite scroll effect */}
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className={`flex items-center ${isMobile ? 'gap-6' : 'gap-12'}`}>
              {services.map((service, index) => (
                <div 
                  key={`${setIndex}-${index}`}
                  className={`flex items-center gap-2 md:gap-3 ${isMobile ? 'px-1 py-1' : 'px-4 py-2'} hover:opacity-80 transition-all duration-300 group`}
                >
                  <span className={`${isMobile ? 'text-sm' : 'text-2xl'} filter brightness-0 invert`}>{service.icon}</span>
                  <div className="flex flex-col">
                    <span className={`text-white font-medium tracking-wide ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      {service.name}
                    </span>
                    <div className="h-px bg-white/60 mt-0.5 group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
       {/* CTA Section */}
       <div className={`flex justify-center ${isMobile ? 'mt-6' : 'mt-12'}`}>
         <div className="text-center px-4">
           <p className={`text-white tracking-widest font-medium mb-2 md:mb-3 ${isMobile ? 'text-xs' : 'text-xs'}`}>
             DISCOVER YOUR NEXT PROJECT
           </p>
           <button className={`bg-white text-black tracking-wider hover:bg-gray-100 transition-all duration-300 font-medium ${isMobile ? 'px-3 py-1 text-xs' : 'px-6 py-2 text-xs'}`}>
             GET CONSULTATION
           </button>
         </div>
       </div>
    </div>
  )
}
