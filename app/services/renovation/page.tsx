'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RenovationPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            src="/zio_dudee_Dramatic_beforeafter_renovation_transformation_show_b8da3948-e3b2-44e8-9a9a-becce35a9d68_0.png"
            alt="Renovation Services - Efstathiou Constructions"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
              <span className="font-light block sm:inline">Renovation</span>
              <span className="font-bold block sm:inline"> Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              Transform Your Space - Breathe New Life Into Existing Properties
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
              className="text-sm font-light tracking-wider mb-2 group-hover:text-white transition-colors duration-300"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SCROLL
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6">
              Complete <span className="font-bold">Renovation</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Breathe new life into existing properties with our comprehensive renovation services
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
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-wide">
                  Transform Your Space
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                  Our renovation services transform outdated spaces into modern, functional environments while preserving the character and charm of your property. We specialize in complete makeovers that enhance both aesthetics and functionality.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Whether you&apos;re looking to modernize a kitchen, transform a bathroom, or completely renovate your entire home, our experienced team combines creative design solutions with expert craftsmanship to deliver exceptional results that exceed your expectations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Space Optimization</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Intelligent space planning to maximize functionality and create more usable living areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Design</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Contemporary design solutions that blend seamlessly with your existing architecture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Energy Efficiency</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Modern energy-efficient solutions to reduce costs and improve environmental sustainability.
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
                  src="/zio_dudee_Ultra-modern_luxury_house_at_dusk_with_selective_fl_d183ddd8-f296-430b-9dee-55fdd86d23e8_1.png"
                  alt="Renovation Services - Modern Home Transformation"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6">
              Renovation <span className="font-bold">Specialties</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive renovation solutions for every area of your property
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
                title: "Kitchen Renovations",
                description: "Complete kitchen makeovers with modern appliances, custom cabinetry, and contemporary finishes.",
                features: ["Custom Cabinetry", "Modern Appliances", "Premium Countertops"]
              },
              {
                title: "Bathroom Remodeling",
                description: "Luxurious bathroom transformations with spa-like features and modern fixtures.",
                features: ["Spa Features", "Modern Fixtures", "Waterproof Materials"]
              },
              {
                title: "Interior Design",
                description: "Comprehensive interior design services to create cohesive and beautiful living spaces.",
                features: ["Space Planning", "Color Schemes", "Furniture Selection"]
              },
              {
                title: "Structural Updates",
                description: "Structural modifications to improve layout, add space, or enhance functionality.",
                features: ["Load-Bearing Walls", "Room Additions", "Structural Integrity"]
              },
              {
                title: "Flooring & Finishes",
                description: "Premium flooring solutions and interior finishes to complete your renovation.",
                features: ["Hardwood Floors", "Tile Work", "Paint & Finishes"]
              },
              {
                title: "Smart Home Integration",
                description: "Modern smart home technology integration for enhanced convenience and efficiency.",
                features: ["Home Automation", "Energy Management", "Security Systems"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6">
              Renovation <span className="font-bold">Process</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to transforming your space
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
                step: "01",
                title: "Assessment & Planning",
                description: "Detailed assessment of existing conditions and comprehensive renovation planning."
              },
              {
                step: "02", 
                title: "Design & Permits",
                description: "Custom design development and handling all necessary permits and approvals."
              },
              {
                step: "03",
                title: "Demolition & Prep",
                description: "Careful demolition and site preparation for the renovation work."
              },
              {
                step: "04",
                title: "Construction & Finishing",
                description: "Renovation construction, installation, and final finishing touches."
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Let&apos;s discuss your renovation project and create your dream space
            </p>
            <motion.button
              className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Renovation</span>
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


