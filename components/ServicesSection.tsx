"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    id: 'custom-homes',
    title: 'Custom Home Design',
    subtitle: 'Tailored architectural solutions',
    description: 'We create unique residential spaces that reflect your vision and lifestyle. From concept to completion, every detail is carefully crafted.',
    features: [
      'Personalized architectural design',
      'Sustainable building practices',
      'Modern and traditional styles',
      'Complete project management'
    ],
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    subtitle: 'Modern business spaces',
    description: 'Professional commercial buildings designed for functionality, efficiency, and aesthetic appeal. Perfect for businesses of all sizes.',
    features: [
      'Office buildings and complexes',
      'Retail and hospitality spaces',
      'Industrial facilities',
      'Mixed-use developments'
    ],
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 'renovation',
    title: 'Renovation & Restoration',
    subtitle: 'Preserving heritage, embracing innovation',
    description: 'Transform existing spaces while respecting their history. We blend traditional craftsmanship with modern innovation.',
    features: [
      'Historic building restoration',
      'Modern renovation projects',
      'Heritage preservation',
      'Adaptive reuse design'
    ],
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 'project-management',
    title: 'Project Management',
    subtitle: 'From concept to completion',
    description: 'Comprehensive project oversight ensuring quality, timeline adherence, and budget management throughout the construction process.',
    features: [
      'End-to-end project oversight',
      'Timeline and budget management',
      'Quality control systems',
      'Stakeholder coordination'
    ],
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 'sustainable-design',
    title: 'Sustainable Design',
    subtitle: 'Eco-conscious construction',
    description: 'Environmentally responsible building solutions that reduce environmental impact while maintaining aesthetic and functional excellence.',
    features: [
      'Green building certifications',
      'Energy-efficient systems',
      'Sustainable materials',
      'Carbon footprint reduction'
    ],
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('custom-homes')
  const [mobileActiveTab, setMobileActiveTab] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleMobileTabClick = (serviceId: string) => {
    setMobileActiveTab(mobileActiveTab === serviceId ? '' : serviceId)
  }

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.3 }
    }
  }

  const activeService = services.find(service => service.id === activeTab)

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction and architectural solutions tailored to your needs
          </p>
        </motion.div>

        {/* Desktop Tab Navigation */}
        <motion.div 
          className="hidden sm:flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`relative text-sm sm:text-base md:text-lg font-medium transition-all duration-300 pb-2 ${
                activeTab === service.id
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            >
              {service.title}
              {/* Underline */}
              <motion.div
                className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 ${
                  activeTab === service.id ? 'w-full' : 'w-0'
                }`}
                initial={false}
                animate={{ width: activeTab === service.id ? '100%' : '0%' }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              {/* Hover underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gray-300 w-0"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Accordion */}
        <div className="sm:hidden mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            >
              <motion.button
                onClick={() => handleMobileTabClick(service.id)}
                className="w-full text-right p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-all duration-300"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-right">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.subtitle}
                    </p>
                  </div>
                  <motion.div
                    className="ml-4"
                    animate={{ rotate: mobileActiveTab === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>
              
              <AnimatePresence mode="wait">
                {mobileActiveTab === service.id && (
                  <motion.div
                    key={`mobile-${service.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 rounded-b-lg border-l border-r border-b border-gray-200">
                      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-start text-sm text-gray-700"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            >
                              <span className="text-gray-900 mr-2 mt-0.5">✓</span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <motion.button
                        className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Desktop Tab Content */}
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="hidden sm:block bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 md:p-10 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                {/* Content */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {activeService.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                      {activeService.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                      Key Features:
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {activeService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start text-xs sm:text-sm md:text-base text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <span className="text-gray-900 mr-2 sm:mr-3 mt-1">✓</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="mt-6 sm:mt-8 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Learn More About This Service
                  </motion.button>
                </div>

                {/* Visual Element */}
                <div className="flex justify-center lg:justify-end">
                  <motion.div
                    className="w-full max-w-sm lg:max-w-md h-64 sm:h-80 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-600 mb-4 mx-auto">
                        {activeService.icon}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Service Illustration
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
