'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getProjectById } from '@/lib/data'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function LuxuryVillaProjectPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslations('work.luxury_villa')
  const tCommon = useTranslations('work')
  const pathname = usePathname()
  
  // Extract locale from pathname
  const locale = pathname.startsWith('/el') ? 'el' : 'en'

  const baseProject = getProjectById('luxury-villa-1')
  
  const descriptionArray = t.raw('description') as string[]
  const project = {
    ...baseProject,
    title: t('title'),
    subtitle: t('subtitle'),
    category: tCommon('category_maintenance'),
    heroVideo: '/Our-Work-Content/Resitental-Prop-Renew-Hero.mp4',
    heroImage: baseProject?.image || '/DJI_20251010165919_0078_D.JPG',
    gallery: [
      '/Our-Work-Content/Resitental-Prop-Renew-img1.JPG',
      '/Our-Work-Content/Resitental-Prop-Renew-img2.JPG',
      '/Our-Work-Content/Resitental-Prop-Renew-img3.JPG'
    ],
    specifications: {
      area: t('specifications.area'),
      duration: t('specifications.duration'),
      budget: t('specifications.budget')
    },
    features: t.raw('features') as string[],
    description: Array.isArray(descriptionArray) ? descriptionArray.join(' ') : descriptionArray,
    location: t('location'),
    challenges: tCommon.raw('luxury_villa_challenges') as string[],
    solutions: tCommon.raw('luxury_villa_solutions') as string[],
    testimonial: {
      text: tCommon('testimonial_luxury_villa'),
      author: 'Maria & Andreas Christou',
      role: tCommon('property_owners')
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
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={project.heroImage}
          >
            <source src={project.heroVideo} type="video/mp4" />
          </video>
          {/* Fallback image if video fails to load */}
          <div className="absolute inset-0 z-[-1]">
            <Image
              src={project.heroImage}
              alt={`${project.title} - Project Detail`}
              fill
              className="object-cover"
              priority
            />
          </div>
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
              <span className={`text-white/80 text-sm font-medium tracking-wider uppercase ${locale === 'el' ? 'greek-text' : ''}`}>
                {project.location} • {project.year}
              </span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight ${locale === 'el' ? 'greek-text' : ''}`}>
              <span className="font-light block sm:inline">{project.title}</span>
            </h1>
            
            <p className={`text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto ${locale === 'el' ? 'greek-text' : ''}`}>
              {project.subtitle}
            </p>

            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="text-center">
                <div className={`text-white/60 text-sm font-medium tracking-wider uppercase mb-1 ${locale === 'el' ? 'greek-text' : ''}`}>{tCommon('type_label')}</div>
                <div className={`text-white text-lg font-semibold ${locale === 'el' ? 'greek-text' : ''}`}>{project.type}</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className={`text-white/60 text-sm font-medium tracking-wider uppercase mb-1 ${locale === 'el' ? 'greek-text' : ''}`}>{tCommon('category_label')}</div>
                <div className={`text-white text-lg font-semibold ${locale === 'el' ? 'greek-text' : ''}`}>{project.category}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.div 
          className="absolute top-20 left-4 sm:top-24 sm:left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link href={`/${locale}/work`}>
            <motion.button
              className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className={`font-medium hidden sm:inline ${locale === 'el' ? 'greek-text' : ''}`}>{tCommon('back_to_portfolio')}</span>
              <span className={`font-medium sm:hidden ${locale === 'el' ? 'greek-text' : ''}`}>Back</span>
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
              {tCommon('project_overview')}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {tCommon('project_overview_description')}
            </p>
          </motion.div>

          {/* Project Specifications */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-20"
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
                <div className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 ${locale === 'el' ? 'greek-text' : ''}`}>
                  {value}
                </div>
                <div className={`text-base md:text-lg text-gray-600 font-medium capitalize ${locale === 'el' ? 'greek-text' : ''}`}>
                  {tCommon(key)}
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
              <h3 className={`text-2xl md:text-3xl font-semibold text-gray-900 mb-6 ${locale === 'el' ? 'greek-text' : ''}`}>{tCommon('key_features')}</h3>
              <div className="space-y-4">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className={`text-gray-600 leading-relaxed ${locale === 'el' ? 'greek-text' : ''}`}>{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className={`text-2xl md:text-3xl font-semibold text-gray-900 mb-6 ${locale === 'el' ? 'greek-text' : ''}`}>{tCommon('challenges_and_solutions')}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold text-gray-900 mb-3 ${locale === 'el' ? 'greek-text' : ''}`}>{tCommon('challenges')}</h4>
                  <div className="space-y-2">
                    {project.challenges.map((challenge: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-gray-600 text-sm leading-relaxed ${locale === 'el' ? 'greek-text' : ''}`}>{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold text-gray-900 mb-3 ${locale === 'el' ? 'greek-text' : ''}`}>{tCommon('solutions')}</h4>
                  <div className="space-y-2">
                    {project.solutions.map((solution: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-gray-600 text-sm leading-relaxed ${locale === 'el' ? 'greek-text' : ''}`}>{solution}</p>
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 ${locale === 'el' ? 'greek-text' : ''}`}>
              {tCommon('project_gallery')}
            </h2>
            <p className={`text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed ${locale === 'el' ? 'greek-text' : ''}`}>
              {tCommon('gallery_subtitle')}
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
            <blockquote className={`text-xl md:text-2xl lg:text-3xl text-gray-900 font-light leading-relaxed mb-8 ${locale === 'el' ? 'greek-text' : ''}`}>
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
                <div className={`text-gray-600 text-sm ${locale === 'el' ? 'greek-text' : ''}`}>
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 ${locale === 'el' ? 'greek-text' : ''}`}>
              {tCommon('ready_to_start')}
            </h2>
            <p className={`text-lg md:text-xl text-white/80 mb-8 leading-relaxed ${locale === 'el' ? 'greek-text' : ''}`}>
              {tCommon('start_discussion')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={locale === 'el' ? 'greek-text' : ''}>{tCommon('start_project_button')}</span>
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
              <Link href={`/${locale}/work`}>
                <motion.button
                  className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-transparent text-white text-sm md:text-base font-medium rounded-full hover:bg-white/10 transition-all duration-300 border border-white/30 hover:border-white/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={locale === 'el' ? 'greek-text' : ''}>{tCommon('view_more_projects')}</span>
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


