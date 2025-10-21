'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ApartmentComplexExpansionPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const project = {
    id: 'apartment-complex',
    title: 'Residential Complex Expansion',
    location: 'Paphos, Cyprus',
    year: '2023',
    type: 'Residential',
    category: 'Expansion',
    description: 'Modern residential apartment complex expansion combining comfort with contemporary design.',
    heroImage: '/zio_dudee_Modern_residential_apartment_complex_at_dusk_showca_88287896-e2f9-4479-88cf-c91cce2c6b86_3.png',
    gallery: [
      '/zio_dudee_Modern_residential_apartment_complex_at_dusk_showca_88287896-e2f9-4479-88cf-c91cce2c6b86_3.png',
      '/zio_dudee_Ultra-modern_luxury_house_at_dusk_with_selective_fl_d183ddd8-f296-430b-9dee-55fdd86d23e8_1.png',
      '/zio_dudee_Distinctive_ultra-modern_custom_home_at_dusk_featur_b3f74bd8-d1e1-417d-b64d-d29e71eed53b_2.png'
    ],
    specifications: {
      area: '3,200 sqm',
      duration: '22 months',
      budget: '€3.8M',
      architect: 'Nicolas Efstathiou'
    },
    features: [
      'Additional 24 luxury apartments with modern amenities',
      'Rooftop terrace with panoramic sea views',
      'Underground parking expansion for 60 vehicles',
      'Modern fitness center and wellness facilities',
      'Landscaped courtyard with Mediterranean gardens',
      'Energy-efficient building systems throughout',
      'Premium finishes and contemporary interior design',
      'Smart home technology integration in all units'
    ],
    challenges: [
      'Minimizing disruption to existing residents',
      'Complex structural integration with existing building',
      'Coordinating multiple trades during expansion',
      'Maintaining building services during construction'
    ],
    solutions: [
      'Phased construction with careful scheduling',
      'Advanced structural engineering for seamless integration',
      'Detailed project management and coordination',
      'Temporary service provisions to maintain operations'
    ],
    testimonial: {
      text: 'The expansion has transformed our complex into a premier residential destination. The new facilities and apartments are exceptional, and the construction process was managed professionally.',
      author: 'Maria Stavrou',
      role: 'Property Manager'
    }
  }

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
            src={project.heroImage}
            alt={`${project.title} - Project Detail`}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                {project.location} • {project.year}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
              <span className="font-light block sm:inline">{project.title}</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              {project.description}
            </p>

            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-white/60 text-sm font-medium tracking-wider uppercase mb-1">Type</div>
                <div className="text-white text-lg font-semibold">{project.type}</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-white/60 text-sm font-medium tracking-wider uppercase mb-1">Category</div>
                <div className="text-white text-lg font-semibold">{project.category}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.div 
          className="absolute top-8 left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link href="/work">
            <motion.button
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Portfolio</span>
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Project Overview Section */}
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
              Project <span className="font-bold">Overview</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detailed insights into this exceptional project showcasing our expertise and attention to detail
            </p>
          </motion.div>

          {/* Project Specifications */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {Object.entries(project.specifications).map(([key, value], index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {value}
                </div>
                <div className="text-base md:text-lg text-gray-600 font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Features */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Challenges & Solutions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h4>
                  <div className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Solutions</h4>
                  <div className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6">
              Project <span className="font-bold">Gallery</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A visual journey through the project development and final result
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                  <Image
                    src={image}
                    alt={`${project.title} - Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-gray-200 mb-8">&ldquo;</div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-light leading-relaxed mb-8">
              {project.testimonial.text}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {project.testimonial.author.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <div className="text-gray-900 font-semibold text-lg">
                  {project.testimonial.author}
                </div>
                <div className="text-gray-600 text-sm">
                  {project.testimonial.role}
                </div>
              </div>
            </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
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
              <Link href="/work">
                <motion.button
                  className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-transparent text-white text-sm md:text-base font-medium rounded-full hover:bg-white/10 transition-all duration-300 border border-white/30 hover:border-white/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View More Projects</span>
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
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


