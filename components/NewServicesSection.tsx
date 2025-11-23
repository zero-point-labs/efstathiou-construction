'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/data'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function NewServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslations('services')
  const tServices = useTranslations('services')
  const tServicesPage = useTranslations('servicesPage')
  const pathname = usePathname()
  
  // Extract locale from pathname
  const locale = pathname.startsWith('/el') ? 'el' : 'en'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6 greek-text">
            {t('title').replace(t('title_bold'), '')} <span className="font-bold">{t('title_bold')}</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed greek-text">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="space-y-20 lg:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            // Get translated service data
            const serviceKey = service.id as 'construction' | 'renovation' | 'expansion' | 'restoration'
            const serviceData = tServices.raw(serviceKey) || service
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group cursor-pointer ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex gap-8 lg:gap-12 xl:gap-16 items-center`}
              >
                
                {/* Image Container */}
                <motion.div 
                  className="flex-1 relative w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Link href={`/${locale}/services/${service.id}`}>
                    <div className="relative w-full h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={serviceData.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Service icon badge */}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Content Container */}
                <div className="flex-1 space-y-6 lg:space-y-8 w-full">
                  
                  {/* Service Info */}
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-3 tracking-wide greek-text">
                      {serviceData.title}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-gray-600 mb-4 font-light greek-text">
                      {serviceData.subtitle}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg greek-text">
                      {serviceData.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceData.features.map((feature: string, featureIndex: number) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-100"
                      >
                        <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-700 font-medium greek-text">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link href={`/${locale}/services/${service.id}`}>
                      <motion.button
                        className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-medium rounded-full transition-colors duration-300 border border-gray-200 hover:border-gray-300 greek-text"
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>{tServicesPage('learn_more')}</span>
                        <motion.svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
