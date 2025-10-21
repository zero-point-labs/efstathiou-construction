'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const services = [
  {
    id: 'construction',
    title: 'Construction',
    subtitle: 'From Foundation to Finish',
    description: 'We specialize in comprehensive construction services, building exceptional properties from the ground up. Our team handles everything from initial planning and permits to final construction and quality assurance.',
    features: [
      'Custom Home Construction',
      'Commercial Buildings',
      'Project Management',
      'Quality Control',
      'Timeline Management',
      'Budget Optimization'
    ],
    image: '/zio_dudee_Ultra-modern_luxury_house_at_dusk_with_selective_fl_d183ddd8-f296-430b-9dee-55fdd86d23e8_1.png',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    id: 'renovation',
    title: 'Renovation',
    subtitle: 'Transform Your Space',
    description: 'Breathe new life into existing properties with our comprehensive renovation services. We transform outdated spaces into modern, functional environments while preserving the character and charm of your property.',
    features: [
      'Kitchen Renovations',
      'Bathroom Remodeling',
      'Interior Design',
      'Structural Updates',
      'Energy Efficiency',
      'Modern Amenities'
    ],
    image: '/zio_dudee_Dramatic_beforeafter_renovation_transformation_show_b8da3948-e3b2-44e8-9a9a-becce35a9d68_0.png',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    id: 'expansion',
    title: 'Expansion',
    subtitle: 'Grow Your Property',
    description: 'Expand your living or working space with our expert expansion services. Whether adding new rooms, extending existing areas, or creating additional floors, we help you maximize your property\'s potential.',
    features: [
      'Room Additions',
      'Floor Extensions',
      'Outdoor Living Spaces',
      'Commercial Expansions',
      'Structural Engineering',
      'Permit Management'
    ],
    image: '/zio_dudee_Modern_residential_apartment_complex_at_dusk_showca_88287896-e2f9-4479-88cf-c91cce2c6b86_3.png',
    icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
  },
  {
    id: 'restoration',
    title: 'Restoration',
    subtitle: 'Preserve Heritage',
    description: 'Restore historic properties to their former glory while integrating modern functionality. Our restoration experts combine traditional craftsmanship with contemporary techniques to preserve Cyprus\'s architectural heritage.',
    features: [
      'Historic Preservation',
      'Heritage Restoration',
      'Traditional Craftsmanship',
      'Modern Integration',
      'Cultural Compliance',
      'Authentic Materials'
    ],
    image: '/zio_dudee_Historic_building_restoration_at_dusk_showing_maste_0a1be179-2f12-454d-87c5-067ff6a8fa0c_1.png',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  }
]

export default function ServicesPage() {
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
            src="/zio_dudee_Ultra-modern_sleek_office_building_at_dusk_with_exp_33e79970-4bc7-4b97-970f-2229ec32ea35_3.png"
            alt="Efstathiou Constructions Services"
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
              <span className="font-light block sm:inline">Our</span>
              <span className="font-bold block sm:inline"> Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your vision and needs
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

      {/* Services Overview Section */}
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
              What We <span className="font-bold">Do</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we deliver exceptional construction services across Cyprus
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="space-y-20 lg:space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
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
                  <div className="relative w-full h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
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
                </motion.div>

                {/* Content Container */}
                <div className="flex-1 space-y-6 lg:space-y-8 w-full">
                  
                  {/* Service Info */}
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-3 tracking-wide">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-gray-600 mb-4 font-light">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-100"
                      >
                        <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={`/services/${service.id}`}>
                    <motion.div 
                      className="flex items-center text-gray-900 text-base md:text-lg font-medium group-hover:text-gray-700 transition-colors duration-300 cursor-pointer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Learn More About {service.title}</span>
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
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="font-bold">Process</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to delivering exceptional results
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
                title: "Consultation",
                description: "We begin with a detailed consultation to understand your vision, requirements, and budget."
              },
              {
                step: "02", 
                title: "Planning",
                description: "Our team creates comprehensive plans, designs, and timelines tailored to your project."
              },
              {
                step: "03",
                title: "Execution",
                description: "We execute the project with precision, maintaining quality standards and timelines."
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deliver your completed project with final inspections and quality assurance."
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Let&apos;s discuss your vision and create something extraordinary together
            </p>
            <motion.button
              className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
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