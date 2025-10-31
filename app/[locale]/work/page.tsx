'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { featuredProjects } from '@/lib/data'

export default function OurWorkPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const pathname = usePathname()
  const t = useTranslations('work')
  
  // Extract locale from pathname
  const locale = pathname.startsWith('/el') ? 'el' : 'en'

  // Map projects with translations (matching homepage structure exactly)
  const translatedProjects = featuredProjects.map(project => {
    // Map project IDs to translation keys (same as homepage)
    if (project.id === 'luxury-villa-1') {
      const descriptionArray = t.raw('luxury_villa.description') as string[]
      return {
        ...project,
        title: t('luxury_villa.title'),
        subtitle: t('luxury_villa.subtitle'),
        description: descriptionArray?.[0] || '',
        features: t.raw('luxury_villa.features') as string[],
        location: t('luxury_villa.location'),
        type: t('luxury_villa.type')
      }
    } else if (project.id === 'commercial-office') {
      return {
        ...project,
        title: t('commercial_complex.title'),
        subtitle: t('commercial_complex.subtitle'),
        description: t('commercial_complex.description'),
        features: t.raw('commercial_complex.features') as string[],
        location: t('commercial_complex.location'),
        type: t('commercial_complex.type')
      }
    }
    return project
  })

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
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-[#00343d] via-[#004d5a] to-[#001a1f]">
        {/* Subtle animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight ${locale === 'el' ? 'greek-text' : ''}`}>
              <span className="font-light block sm:inline">{t('title')}</span>
              <span className="font-bold block sm:inline"> {t('title_bold')}</span>
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto ${locale === 'el' ? 'greek-text' : ''}`}>
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6 ${locale === 'el' ? 'greek-text' : ''}`}>
              {t('our_portfolio')} <span className="font-bold">{t('our_portfolio_bold')}</span>
            </h2>
            <p className={`text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${locale === 'el' ? 'greek-text' : ''}`}>
              {t('portfolio_subtitle')}
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {translatedProjects.map((project, projectIndex) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
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
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Project year badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                      <span className="text-gray-900 font-semibold text-sm">{project.year}</span>
                    </div>
                    
                    {/* Project type badge */}
                    <div className="absolute top-4 left-4 bg-[#00343d]/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <span className={`text-white font-medium text-xs ${locale === 'el' ? 'greek-text' : ''}`}>{project.type}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-[#00343d] rounded-full"></div>
                      <span className={`text-sm font-medium text-gray-500 tracking-wider uppercase ${locale === 'el' ? 'greek-text' : ''}`}>
                        {project.location}
                      </span>
                    </div>
                    
                    <h4 className={`text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 ${locale === 'el' ? 'greek-text' : ''}`}>
                      {project.title}
                    </h4>
                    
                    <p className={`text-gray-600 text-sm md:text-base leading-relaxed mb-6 ${locale === 'el' ? 'greek-text' : ''}`}>
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className={`px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-100 ${locale === 'el' ? 'greek-text' : ''}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <Link href={`/${locale}/work/${project.id}`}>
                      <div className={`flex items-center text-gray-900 text-sm md:text-base font-medium group-hover:text-gray-700 transition-colors duration-300 cursor-pointer ${locale === 'el' ? 'greek-text' : ''}`}>
                        <span>{t('view_project')}</span>
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6 ${locale === 'el' ? 'greek-text' : ''}`}>
              {t('achievements')} <span className="font-bold">{t('achievements_bold')}</span>
            </h2>
            <p className={`text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${locale === 'el' ? 'greek-text' : ''}`}>
              {t('achievements_subtitle')}
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
              { 
                number: "150+", 
                label: t('projects_completed'), 
                description: locale === 'el' ? "Ολοκληρωμένα έργα σε όλη την Κύπρο" : "Successfully delivered projects across Cyprus"
              },
              { 
                number: "20+", 
                label: t('years_experience'), 
                description: locale === 'el' ? "Δύο δεκαετίες κατασκευαστικής αριστείας" : "Two decades of construction excellence"
              },
              { 
                number: "100%", 
                label: t('client_satisfaction'), 
                description: locale === 'el' ? "Κάθε πελάτης ικανοποιημένος με την εργασία μας" : "Every client satisfied with our work"
              },
              { 
                number: "50+", 
                label: t('team_members'), 
                description: locale === 'el' ? "Έμπειροι ειδικοί στην ομάδα μας" : "Skilled professionals in our team"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className={`text-base md:text-lg text-gray-600 font-medium mb-2 ${locale === 'el' ? 'greek-text' : ''}`}>
                  {stat.label}
                </div>
                <div className={`text-sm text-gray-500 ${locale === 'el' ? 'greek-text' : ''}`}>
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 ${locale === 'el' ? 'greek-text' : ''}`}>
              {t('ready_to_start')}
            </h2>
            <p className={`text-lg md:text-xl text-white/80 mb-8 leading-relaxed ${locale === 'el' ? 'greek-text' : ''}`}>
              {t('ready_subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <motion.button
                className={`inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-[#00343d] text-white text-sm md:text-base font-medium rounded-full hover:bg-[#004d5a] transition-all duration-300 shadow-lg hover:shadow-xl ${locale === 'el' ? 'greek-text' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('start_project')}</span>
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
