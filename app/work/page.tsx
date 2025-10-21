'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const projectCategories = [
  {
    id: 'construction',
    title: 'Construction Projects',
    subtitle: 'From Foundation to Finish',
    description: 'Explore our comprehensive construction projects, from custom homes to commercial buildings.',
    projects: [
      {
        id: 'luxury-villa-1',
        title: 'Modern Luxury Villa',
        location: 'Limassol, Cyprus',
        year: '2023',
        type: 'Residential',
        image: '/zio_dudee_Ultra-modern_luxury_house_at_dusk_with_selective_fl_d183ddd8-f296-430b-9dee-55fdd86d23e8_1.png',
        description: 'A stunning contemporary villa featuring floor-to-ceiling windows, premium finishes, and innovative architectural design.'
      },
      {
        id: 'custom-home-1',
        title: 'Distinctive Custom Home',
        location: 'Paphos, Cyprus',
        year: '2023',
        type: 'Residential',
        image: '/zio_dudee_Distinctive_ultra-modern_custom_home_at_dusk_featur_b3f74bd8-d1e1-417d-b64d-d29e71eed53b_2.png',
        description: 'Distinctive ultra-modern custom home designed to reflect unique vision and lifestyle preferences.'
      },
      {
        id: 'commercial-office',
        title: 'Modern Office Complex',
        location: 'Nicosia, Cyprus',
        year: '2022',
        type: 'Commercial',
        image: '/zio_dudee_Ultra-modern_sleek_office_building_at_dusk_with_exp_33e79970-4bc7-4b97-970f-2229ec32ea35_3.png',
        description: 'Sleek office building designed for modern business needs with efficient layouts and professional aesthetics.'
      }
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation Projects',
    subtitle: 'Transform Your Space',
    description: 'Discover our renovation transformations that breathe new life into existing properties.',
    projects: [
      {
        id: 'renovation-1',
        title: 'Complete Home Renovation',
        location: 'Larnaca, Cyprus',
        year: '2023',
        type: 'Residential',
        image: '/zio_dudee_Dramatic_beforeafter_renovation_transformation_show_b8da3948-e3b2-44e8-9a9a-becce35a9d68_0.png',
        description: 'Dramatic before-and-after transformation that breathed new life into an existing family home.'
      },
      {
        id: 'renovation-2',
        title: 'Historic Building Renovation',
        location: 'Nicosia, Cyprus',
        year: '2022',
        type: 'Commercial',
        image: '/zio_dudee_Historic_building_restoration_at_dusk_showing_maste_0a1be179-2f12-454d-87c5-067ff6a8fa0c_1.png',
        description: 'Careful restoration of historic building preserving heritage while adding modern functionality.'
      }
    ]
  },
  {
    id: 'expansion',
    title: 'Expansion Projects',
    subtitle: 'Grow Your Property',
    description: 'See how we have expanded properties to maximize their potential and functionality.',
    projects: [
      {
        id: 'apartment-complex',
        title: 'Residential Complex Expansion',
        location: 'Paphos, Cyprus',
        year: '2023',
        type: 'Residential',
        image: '/zio_dudee_Modern_residential_apartment_complex_at_dusk_showca_88287896-e2f9-4479-88cf-c91cce2c6b86_3.png',
        description: 'Modern residential apartment complex expansion combining comfort with contemporary design.'
      }
    ]
  }
]

export default function OurWorkPage() {
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
            src="/zio_dudee_Distinctive_ultra-modern_custom_home_at_dusk_featur_b3f74bd8-d1e1-417d-b64d-d29e71eed53b_2.png"
            alt="Our Work - Efstathiou Constructions Portfolio"
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
              <span className="font-bold block sm:inline"> Work</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              Explore our portfolio of exceptional projects that showcase our commitment to architectural excellence
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

      {/* Portfolio Overview Section */}
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
              Our <span className="font-bold">Portfolio</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of our completed projects across Cyprus, demonstrating our expertise and commitment to excellence
            </p>
          </motion.div>

          {/* Project Categories */}
          <motion.div 
            className="space-y-20 lg:space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projectCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="space-y-12"
              >
                
                {/* Category Header */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 mb-2 font-light">
                    {category.subtitle}
                  </p>
                  <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {category.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.3) + (projectIndex * 0.1) }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                        
                        {/* Project Image */}
                        <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Project year badge */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                            <span className="text-gray-900 font-semibold text-sm">{project.year}</span>
                          </div>
                          
                          {/* Project type badge */}
                          <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                            <span className="text-white font-medium text-xs">{project.type}</span>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6 md:p-8">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                              {project.location}
                            </span>
                          </div>
                          
                          <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                            {project.title}
                          </h4>
                          
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                            {project.description}
                          </p>

                          {/* View Project Button */}
                          <Link href={`/work/${project.id}`}>
                            <div className="flex items-center text-gray-900 text-sm md:text-base font-medium group-hover:text-gray-700 transition-colors duration-300 cursor-pointer">
                              <span>View Project Details</span>
                              <motion.svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                initial={{ x: 0 }}
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </motion.svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our <span className="font-bold">Achievements</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Numbers that speak to our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { number: "150+", label: "Projects Completed", description: "Successfully delivered projects across Cyprus" },
              { number: "20+", label: "Years Experience", description: "Two decades of construction excellence" },
              { number: "100%", label: "Client Satisfaction", description: "Every client satisfied with our work" },
              { number: "50+", label: "Team Members", description: "Skilled professionals in our team" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg text-gray-600 font-medium mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
