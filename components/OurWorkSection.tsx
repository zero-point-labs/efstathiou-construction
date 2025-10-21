'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const featuredProjects = [
  {
    id: 'luxury-villa-1',
    title: 'LUXURY VILLA',
    subtitle: 'Ultra-Modern Residential',
    description: 'A stunning contemporary villa featuring floor-to-ceiling windows, premium finishes, and innovative architectural design that seamlessly blends indoor and outdoor living.',
    image: '/DJI_20251010165919_0078_D.JPG',
    features: ['4 Bedrooms', 'Premium Materials', 'Smart Home Integration'],
    year: '2023',
    location: 'Limassol, Cyprus'
  },
  {
    id: 'commercial-office',
    title: 'COMMERCIAL COMPLEX',
    subtitle: 'Modern Business Architecture',
    description: 'A sophisticated office building designed for modern business needs, featuring sleek lines, efficient layouts, and professional aesthetics that inspire productivity.',
    image: '/DJI_20251002103154_0038_D.JPG',
    features: ['12 Floors', 'Corporate Design', 'Energy Efficient'],
    year: '2022',
    location: 'Nicosia, Cyprus'
  },
  {
    id: 'apartment-complex',
    title: 'APARTMENT COMPLEX',
    subtitle: 'Contemporary Living',
    description: 'A modern residential development that combines comfort with contemporary design, creating vibrant community spaces while maintaining premium quality standards.',
    image: '/image.png',
    features: ['24 Units', 'Community Spaces', 'Modern Amenities'],
    year: '2023',
    location: 'Paphos, Cyprus'
  }
]

export default function OurWorkSection() {
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
      rotateX: 15
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
      rotateY: 20,
      x: 50
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.5
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
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 md:mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Our <span className="font-bold">Work</span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            Explore our portfolio of exceptional projects that showcase our commitment to architectural excellence and construction innovation
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`group cursor-pointer ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* Image Container */}
              <motion.div 
                className="flex-1 relative w-full"
                variants={imageVariants}
              >
                <motion.div 
                  className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Project year badge */}
                  <motion.div 
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg"
                    variants={badgeVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-900 font-semibold text-xs sm:text-sm">{project.year}</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Content Container */}
              <motion.div 
                className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8 w-full"
                variants={contentVariants}
              >
                
                {/* Project Info */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <motion.div 
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    ></motion.div>
                    <span className="text-xs sm:text-sm font-medium text-gray-500 tracking-wider uppercase">
                      {project.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-2 sm:mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 font-light">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                    {project.description}
                  </p>
                </motion.div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.features.map((feature, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-50 text-gray-700 rounded-full text-xs sm:text-sm font-medium border border-gray-100"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.8 + (featureIndex * 0.1) + (index * 0.2)
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* CTA */}
                <Link href={`/work/${project.id}`}>
                  <motion.div 
                    className="flex items-center text-gray-900 text-sm sm:text-base md:text-lg font-medium group-hover:text-gray-700 transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>View Project Details</span>
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
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
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
            Want to see more of our exceptional work?
          </motion.p>
          <Link href="/work">
            <motion.button
              className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gray-900 text-white text-xs sm:text-sm md:text-base font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Full Portfolio</span>
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
