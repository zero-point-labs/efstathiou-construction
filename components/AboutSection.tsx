'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
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

  const imageVariants = {
    hidden: { 
      scale: 1.1, 
      opacity: 0,
      x: 50,
      rotateY: 15
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const
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

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 1.0
      }
    }
  }

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20 lg:mb-24"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            About <span className="font-bold">EFSTATHIOU</span>
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            Two decades of architectural excellence and construction innovation across Cyprus
          </motion.p>
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
            variants={contentVariants}
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-wide">
                Crafting Excellence Since 2003
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                <span className="sm:hidden">
                  Founded by Nicolas Efstathiou, we specialize in transforming visions into remarkable realities through meticulous craftsmanship and cutting-edge design.
                </span>
                <span className="hidden sm:inline">
                  Founded by Nicolas Efstathiou, our construction company has been at the forefront of architectural innovation in Cyprus. We specialize in transforming visions into remarkable realities through meticulous craftsmanship and cutting-edge design.
                </span>
              </p>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                className="flex items-start gap-3 sm:gap-4"
                variants={featureVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Architectural Innovation</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    <span className="sm:hidden">
                      Contemporary design principles with traditional craftsmanship for stunning spaces.
                    </span>
                    <span className="hidden sm:inline">
                      We blend contemporary design principles with traditional craftsmanship to create spaces that are both functional and aesthetically stunning.
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 sm:gap-4"
                variants={featureVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Quality Assurance</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    <span className="sm:hidden">
                      Rigorous quality control ensuring perfection in every detail.
                    </span>
                    <span className="hidden sm:inline">
                      Every project undergoes rigorous quality control processes, ensuring that our clients receive nothing short of perfection in every detail.
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Third feature - hidden on mobile */}
              <motion.div 
                className="hidden sm:flex items-start gap-4"
                variants={featureVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Partnership</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in building lasting relationships with our clients, working closely with them throughout every phase of their project.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-200"
              variants={statsVariants}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  20+
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                >
                  150+
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Projects Completed</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <motion.div 
              className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/35d92813-bddf-4248-9c02-4deb34cd8ee0.JPG"
                alt="About Efstathiou Constructions - Construction Site"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              className="hidden sm:block absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              variants={badgeVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-gray-900 mb-1"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  100%
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24"
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <span className="sm:hidden">
              Ready to work with Cyprus&apos;s premier construction company?
            </span>
            <span className="hidden sm:inline">
              Ready to work with Cyprus&apos;s premier construction company?
            </span>
          </motion.p>
          <Link href="/about">
            <motion.button
              className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gray-900 text-white text-xs sm:text-sm md:text-base font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More About Us</span>
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
