'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslations('contact')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

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
      y: 80,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
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

  const subtitleVariants = {
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

  const contactInfoVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
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

  const formVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const backgroundVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const projectTypes = [
    t('project_types.luxury_villa'),
    t('project_types.commercial_space'),
    t('project_types.renovation'),
    t('project_types.custom_home'),
    t('project_types.development'),
    t('project_types.restoration'),
    t('project_types.other')
  ]

  const budgetRanges = [
    t('budget_ranges.under_500k'),
    t('budget_ranges.500k_1m'),
    t('budget_ranges.1m_2m'),
    t('budget_ranges.2m_5m'),
    t('budget_ranges.above_5m'),
    t('budget_ranges.consultation')
  ]

  const timelines = [
    t('timelines.3_months'),
    t('timelines.3_6_months'),
    t('timelines.6_12_months'),
    t('timelines.1_2_years'),
    t('timelines.planning'),
    t('timelines.flexible')
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section ref={ref} id="contact" className="bg-gray-50 py-24 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <motion.div 
        className="absolute inset-0"
        variants={backgroundVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-gray-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="overflow-hidden mb-8">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 md:mb-6 greek-text"
              variants={titleVariants}
            >
              {t('title').replace(t('title_bold'), '')} <span className="font-bold">{t('title_bold')}</span>
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light greek-text"
              variants={subtitleVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-12"
            variants={contactInfoVariants}
          >
            
            {/* Company Info */}
            <motion.div 
              className="group"
              variants={itemVariants}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-[#00343d] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L20 9V21H15V14H9V21H4V9L12 3M12 5.69L6 10.19V19H7V12H17V19H18V10.19L12 5.69Z"/>
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 tracking-wide greek-text">{t('company_name_part1')}</h3>
                  <p className="text-lg text-gray-600 font-light greek-text">{t('company_name_part2')}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-light greek-text">
                {t('company_description')}
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-8">
              
              {/* Location */}
              <motion.div 
                className="flex items-start gap-4 group"
                variants={itemVariants}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600"
                  whileHover={{ 
                    backgroundColor: "#00343d",
                    color: "#ffffff",
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1 greek-text">{t('office_location')}</h4>
                  <p className="text-gray-600 font-light greek-text">{t('location')}</p>
                  <p className="text-gray-500 text-sm font-light greek-text">{t('location_note')}</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-start gap-4 group"
                variants={itemVariants}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600"
                  whileHover={{ 
                    backgroundColor: "#00343d",
                    color: "#ffffff",
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1 greek-text">{t('phone')}</h4>
                  <p className="text-gray-600 font-light greek-text">{t('phone_number')}</p>
                  <p className="text-gray-500 text-sm font-light greek-text">{t('phone_hours')}</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex items-start gap-4 group"
                variants={itemVariants}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600"
                  whileHover={{ 
                    backgroundColor: "#00343d",
                    color: "#ffffff",
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1 greek-text">{t('email')}</h4>
                  <p className="text-gray-600 font-light greek-text">{t('email_address')}</p>
                  <p className="text-gray-500 text-sm font-light greek-text">{t('email_response')}</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100"
            variants={formVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide greek-text">{t('form_title')}</h3>
              <p className="text-gray-600 font-light greek-text">{t('form_subtitle')}</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <motion.div 
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 greek-text">{t('full_name')} *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white text-gray-900 border rounded-lg transition-all duration-200 ${
                    focusedField === 'name' 
                      ? 'border-[#00343d] ring-2 ring-[#00343d]/10' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder={t('placeholders.full_name')}
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div 
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 greek-text">{t('email_address_field')} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white text-gray-900 border rounded-lg transition-all duration-200 ${
                    focusedField === 'email' 
                      ? 'border-[#00343d] ring-2 ring-[#00343d]/10' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder={t('placeholders.email')}
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div 
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 greek-text">{t('project_details')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className={`w-full px-4 py-3 bg-white text-gray-900 border rounded-lg transition-all duration-200 resize-none ${
                    focusedField === 'message' 
                      ? 'border-[#00343d] ring-2 ring-[#00343d]/10' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder={t('placeholders.message')}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-[#00343d] text-white py-4 rounded-lg font-medium tracking-wider hover:bg-[#004d5a] transition-all duration-300 shadow-lg hover:shadow-xl greek-text"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('send_message')}
              </motion.button>

            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}