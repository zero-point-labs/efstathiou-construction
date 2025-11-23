'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getServiceById } from '@/lib/data'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function ConstructionPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslations('constructionPage')
  const tServices = useTranslations('services')
  const tNav = useTranslations('navigation')
  const pathname = usePathname()
  const locale = pathname.startsWith('/el') ? 'el' : 'en'

  const service = getServiceById('construction')
  const serviceData = tServices.raw('construction')

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
    <main className="min-h-screen">
      <Header isDark={false} />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service?.image || '/Construction.jpg'}
            alt={`${service?.title} Services - Efstathiou Constructions`}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight greek-text">
              <span className="font-light block sm:inline">{serviceData.title}</span>
              <span className="font-bold block sm:inline"> {tNav('services')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto greek-text">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-white/70 group cursor-pointer">
            <motion.span 
              className="text-sm font-light tracking-wider mb-2 group-hover:text-white transition-colors duration-300 greek-text"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t('hero.scroll')}
            </motion.span>
            <motion.div 
              className="w-px h-8 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Service Overview Section */}
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
              {t('overview.title')} <span className="font-bold">{t('overview.title_bold')}</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed greek-text">
              {t('overview.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            
            {/* Content */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-wide greek-text">
                  {t('building_excellence.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6 greek-text">
                  {t('building_excellence.description_1')}
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg greek-text">
                  {t('building_excellence.description_2')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 greek-text">{t('features.project_management.title')}</h4>
                    <p className="text-gray-600 leading-relaxed greek-text">
                      {t('features.project_management.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 greek-text">{t('features.quality_control.title')}</h4>
                    <p className="text-gray-600 leading-relaxed greek-text">
                      {t('features.quality_control.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 greek-text">{t('features.timeline_management.title')}</h4>
                    <p className="text-gray-600 leading-relaxed greek-text">
                      {t('features.timeline_management.description')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Our-Work-Content/Resitental-metal-const-img1.png"
                  alt="Construction Services - Custom Home Building"
                  fill
                  className="object-cover object-left transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: 'left center' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 md:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6 greek-text">
              {t('what_we_build.title')} <span className="font-bold">{t('what_we_build.title_bold')}</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed greek-text">
              {t('what_we_build.subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              {
                title: t('what_we_build.services.custom_homes.title'),
                description: t('what_we_build.services.custom_homes.description'),
                features: t.raw('what_we_build.services.custom_homes.features')
              },
              {
                title: t('what_we_build.services.luxury_residential.title'),
                description: t('what_we_build.services.luxury_residential.description'),
                features: t.raw('what_we_build.services.luxury_residential.features')
              },
              {
                title: t('what_we_build.services.commercial_buildings.title'),
                description: t('what_we_build.services.commercial_buildings.description'),
                features: t.raw('what_we_build.services.commercial_buildings.features')
              },
              {
                title: t('what_we_build.services.apartment_complexes.title'),
                description: t('what_we_build.services.apartment_complexes.description'),
                features: t.raw('what_we_build.services.apartment_complexes.features')
              },
              {
                title: t('what_we_build.services.industrial_facilities.title'),
                description: t('what_we_build.services.industrial_facilities.description'),
                features: t.raw('what_we_build.services.industrial_facilities.features')
              },
              {
                title: t('what_we_build.services.mixed_use.title'),
                description: t('what_we_build.services.mixed_use.description'),
                features: t.raw('what_we_build.services.mixed_use.features')
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 greek-text">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 greek-text">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-sm text-gray-700 greek-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 md:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6 greek-text">
              {t('process.title')} <span className="font-bold">{t('process.title_bold')}</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed greek-text">
              {t('process.subtitle')}
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              {
                step: t('process.steps.permits.step'), 
                title: t('process.steps.permits.title'),
                description: t('process.steps.permits.description')
              },
              {
                step: t('process.steps.planning.step'),
                title: t('process.steps.planning.title'),
                description: t('process.steps.planning.description')
              },
              {
                step: t('process.steps.foundation.step'),
                title: t('process.steps.foundation.title'),
                description: t('process.steps.foundation.description')
              },
              {
                step: t('process.steps.finishing.step'),
                title: t('process.steps.finishing.title'),
                description: t('process.steps.finishing.description')
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 greek-text">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed greek-text">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 greek-text">
              {t('cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed greek-text">
              {t('cta.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <motion.button
                className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl greek-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('cta.button')}</span>
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

      <Footer />
    </main>
  )
}


