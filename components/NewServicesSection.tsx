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
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const t = useTranslations('services')
  const pathname = usePathname()
  
  // Extract locale from pathname
  const locale = pathname.startsWith('/el') ? 'el' : 'en'

  // Get translated service data
  const getTranslatedService = (service: any) => {
    const serviceKey = service.id as keyof typeof t.raw
    return {
      ...service,
      title: t(`${service.id}.title`),
      subtitle: t(`${service.id}.subtitle`),
      description: t(`${service.id}.description`),
      features: t.raw(`${service.id}.features`)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.0,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const headerVariants = {
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const imageVariants = {
    hidden: { 
      scale: 1.2, 
      opacity: 0,
      rotateY: 15,
      x: 30
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: -40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.4
      }
    }
  }

  const ctaVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
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
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6 greek-text"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {t('title').replace(t('title_bold'), '')} <span className="font-bold">{t('title_bold')}</span>
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed greek-text"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Cool Vertical Stack Cards */}
        <motion.div 
          className="space-y-8 lg:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const translatedService = getTranslatedService(service)
            return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group cursor-pointer"
              whileHover={{ 
                y: -6,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link href={`/${locale}/services/${service.id}`}>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-gray-200 group-hover:scale-[1.01]">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col lg:flex-row">
                    {/* Image Container */}
                    <div className="relative h-80 md:h-96 lg:h-[500px] lg:w-1/2 overflow-hidden">
                      <motion.div
                        variants={imageVariants}
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Image
                          src={service.image}
                          alt={translatedService.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:brightness-110"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        
                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        
                        {/* Floating Service Badge */}
                        <motion.div 
                          className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-white/20"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="text-gray-900 font-bold text-lg">{index + 1}</span>
                        </motion.div>

                        {/* Hover Effect Lines */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-500" />
                          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-blue-500 to-purple-500 transform translate-x-1 group-hover:translate-x-0 transition-transform duration-500" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 lg:p-12 lg:w-1/2 flex flex-col justify-center relative">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <div className="w-full h-full" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                      </div>

                      <div className="relative z-10">
                        <motion.h3 
                          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300 greek-text"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {translatedService.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-gray-500 text-lg md:text-xl font-semibold mb-6 group-hover:text-gray-600 transition-colors duration-300 greek-text"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          {translatedService.subtitle}
                        </motion.p>
                        
                        <motion.p 
                          className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300 greek-text"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2, delay: 0.2 }}
                        >
                          {translatedService.description}
                        </motion.p>

                        {/* Animated Features */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {translatedService.features.map((feature: string, featureIndex: number) => (
                            <motion.span
                              key={featureIndex}
                              className="text-sm md:text-base px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md greek-text"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: (index * 0.1) + (featureIndex * 0.1), duration: 0.5 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>

                        {/* Cool CTA Button */}
                        <motion.div 
                          className="inline-flex items-center text-gray-900 text-lg font-semibold group-hover:text-gray-700 transition-colors duration-300 greek-text"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="relative">
                            {t('learn_more_about')} {translatedService.title}
                            <motion.div
                              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"
                              initial={{ width: 0 }}
                              whileHover={{ width: "100%" }}
                            />
                          </span>
                          <motion.svg
                            className="w-6 h-6 ml-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ x: 0 }}
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </div>
              </Link>
            </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 md:mt-20 lg:mt-24"
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg greek-text"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {t('cta_text')}
          </motion.p>
          <Link href={`/${locale}/services`}>
            <motion.button
              className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-[#00343d] text-white text-sm md:text-base font-medium rounded-full hover:bg-[#004d5a] transition-all duration-300 shadow-lg hover:shadow-xl greek-text"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('view_all_services')}</span>
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
