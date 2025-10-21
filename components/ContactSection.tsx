'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    location: '',
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
    'Luxury Villa',
    'Commercial Space',
    'Renovation',
    'Custom Home',
    'Development',
    'Restoration',
    'Other'
  ]

  const budgetRanges = [
    'Under €500K',
    '€500K - €1M',
    '€1M - €2M',
    '€2M - €5M',
    'Above €5M',
    'Consultation Required'
  ]

  const timelines = [
    'Within 3 months',
    '3-6 months',
    '6-12 months',
    '1-2 years',
    'Planning phase',
    'Flexible'
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
              className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 tracking-wide"
              variants={titleVariants}
            >
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                START
              </motion.span>
              <motion.span 
                className="inline-block mx-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                YOUR
              </motion.span>
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                PROJECT
              </motion.span>
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.p 
              className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              variants={subtitleVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Ready to bring your vision to life? Let&apos;s discuss your project and create something extraordinary together.
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
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L20 9V21H15V14H9V21H4V9L12 3M12 5.69L6 10.19V19H7V12H17V19H18V10.19L12 5.69Z"/>
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 tracking-wide">NICOLAS EFSTATHIOU</h3>
                  <p className="text-lg text-gray-600 font-light">CONSTRUCTIONS LTD</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                With over two decades of excellence in construction and architectural innovation, 
                we transform visions into remarkable realities across Cyprus.
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
                    backgroundColor: "#111827",
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
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Office Location</h4>
                  <p className="text-gray-600 font-light">Nicosia, Cyprus</p>
                  <p className="text-gray-500 text-sm font-light">Available for projects island-wide</p>
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
                    backgroundColor: "#111827",
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
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 font-light">+357 XX XXX XXX</p>
                  <p className="text-gray-500 text-sm font-light">Mon - Fri, 9:00 AM - 6:00 PM</p>
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
                    backgroundColor: "#111827",
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
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 font-light">info@efstathiou-constructions.com</p>
                  <p className="text-gray-500 text-sm font-light">We respond within 24 hours</p>
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
              <h3 className="text-3xl font-light text-gray-900 mb-3 tracking-wide">Get In Touch</h3>
              <p className="text-gray-600 font-light">Tell us about your project and we&apos;ll get back to you with a detailed proposal.</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      focusedField === 'name' 
                        ? 'border-gray-900 ring-2 ring-gray-900/10' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Your full name"
                    required
                  />
                </motion.div>
                <motion.div 
                  className="relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      focusedField === 'email' 
                        ? 'border-gray-900 ring-2 ring-gray-900/10' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>

              {/* Phone and Location Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      focusedField === 'phone' 
                        ? 'border-gray-900 ring-2 ring-gray-900/10' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="+357 XX XXX XXX"
                  />
                </motion.div>
                <motion.div 
                  className="relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('location')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                      focusedField === 'location' 
                        ? 'border-gray-900 ring-2 ring-gray-900/10' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="City, Cyprus"
                  />
                </motion.div>
              </div>

              {/* Project Type and Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('projectType')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 bg-white appearance-none cursor-pointer text-gray-900 ${
                      focusedField === 'projectType' 
                        ? 'border-gray-900 ring-2 ring-gray-900/10' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ color: '#111827' }}
                    required
                  >
                    <option value="" disabled style={{ color: '#9CA3AF' }}>Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} style={{ color: '#111827', backgroundColor: '#ffffff' }}>{type}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-8">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>
                <motion.div 
                  className="relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 bg-white appearance-none cursor-pointer text-gray-900 ${
                      focusedField === 'budget' 
                        ? 'border-gray-900 ring-2 ring-gray-900/10' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ color: '#111827' }}
                  >
                    <option value="" disabled style={{ color: '#9CA3AF' }}>Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} style={{ color: '#111827', backgroundColor: '#ffffff' }}>{range}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-8">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Timeline */}
              <motion.div 
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('timeline')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 bg-white appearance-none cursor-pointer text-gray-900 ${
                    focusedField === 'timeline' 
                      ? 'border-gray-900 ring-2 ring-gray-900/10' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ color: '#111827' }}
                >
                  <option value="" disabled style={{ color: '#9CA3AF' }}>Select timeline</option>
                  {timelines.map((time) => (
                    <option key={time} value={time} style={{ color: '#111827', backgroundColor: '#ffffff' }}>{time}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-8">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </motion.div>

              {/* Message */}
              <motion.div 
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-none ${
                    focusedField === 'message' 
                      ? 'border-gray-900 ring-2 ring-gray-900/10' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Tell us about your vision, specific requirements, or any questions you have..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>

            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}