// LP2 HeroSection - Alternative split-screen design
'use client'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { scrollToSection } from '@/lib/utils'

interface HeroSectionProps {
  onApplyClick: () => void
}

export default function HeroSection({ onApplyClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Transform</span><br />
              <span className="gradient-text">Your Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience next-generation education at WHY Q University. Where innovation meets excellence.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="lg" onClick={onApplyClick}>Apply Now</Button>
              <Button variant="secondary" size="lg" onClick={() => scrollToSection('courses')}>Explore</Button>
            </div>
          </motion.div>
          
          {/* Right: Animated Element */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="w-full h-96 rounded-3xl bg-gradient-to-br from-cyber-purple/40 to-cyber-blue/40 backdrop-blur-xl flex items-center justify-center">
              <div className="text-6xl font-bold gradient-text">WHY Q</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
