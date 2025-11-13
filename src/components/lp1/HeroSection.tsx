'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '@/components/shared/Button'
import { scrollToSection } from '@/lib/utils'

interface HeroSectionProps {
  onApplyClick: () => void
}

export default function HeroSection({ onApplyClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-20 w-20 h-20 border-2 border-cyber-blue/30"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-40 right-40 w-16 h-16 border-2 border-cyber-purple/30 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Shape Your</span>
            <br />
            <span className="text-white">Future Here</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Premier university offering world-class education in Engineering, Management, Design, and Sciences.
            Join 15,000+ students building extraordinary careers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onApplyClick}
              className="min-w-[200px]"
            >
              Apply Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('courses')}
              className="min-w-[200px]"
            >
              Explore Courses
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('overview')}
        >
          <ArrowDown className="w-8 h-8 text-cyber-blue" />
        </motion.div>
      </div>
    </section>
  )
}
