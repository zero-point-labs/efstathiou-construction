"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  stagger?: number
}

export function TextReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  stagger = 0.1,
}: TextRevealProps) {
  // Split text into words for word-by-word animation
  const text = typeof children === 'string' ? children : ''
  const words = text.split(' ')

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay }}
        className="inline-block"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration / 2,
              delay: delay + (index * stagger),
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
