"use client"

import { TextReveal } from "@/components/ui/text-reveal"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ArchitectureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-right mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {isInView && (
            <TextReveal 
              delay={0.2} 
              stagger={0.15} 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-none"
            >
              Experience innovative architecture that transform your vision into reality
            </TextReveal>
          )}
        </div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
            <Image
              src="/zio_dudee_Distinctive_ultra-modern_custom_home_at_dusk_featur_b3f74bd8-d1e1-417d-b64d-d29e71eed53b_2.png"
              alt="Modern Architecture"
              fill
              className="object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-shadow duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
