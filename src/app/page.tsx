'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/shared/Button'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6"
          >
            <Sparkles className="w-5 h-5 text-cyber-blue" />
            <span className="text-sm font-medium text-white">Welcome to the Future of Education</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">WHY Q</span>
            <br />
            <span className="text-white">University</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Shape your future with world-class education, cutting-edge research, and industry-ready skills.
            Choose your journey below.
          </p>
        </motion.div>

        {/* Landing Page Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* LP1 Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="glassmorphism p-8 hover:border-cyber-blue transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">Classic Experience</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Comprehensive overview with grid-based layouts, animated statistics, and detailed course information.
              Perfect for exploring all WHY Q has to offer.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-gray-400">
              <li>✓ Grid-based course cards</li>
              <li>✓ Animated statistics counters</li>
              <li>✓ Comprehensive facilities showcase</li>
              <li>✓ Department-wise placements</li>
            </ul>

            <Link href="/lp1">
              <Button variant="primary" className="w-full group-hover:shadow-lg group-hover:shadow-cyber-blue/50">
                Explore LP1 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* LP2 Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="glassmorphism p-8 hover:border-cyber-purple transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-purple to-cyber-pink flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">Modern Approach</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Alternative visual treatment with split-screen hero, accordion courses, and tabbed placements.
              A fresh perspective on WHY Q's excellence.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-gray-400">
              <li>✓ Split-screen hero design</li>
              <li>✓ Expandable course accordions</li>
              <li>✓ Masonry facility grid</li>
              <li>✓ Interactive tabbed placements</li>
            </ul>

            <Link href="/lp2">
              <Button variant="secondary" className="w-full group-hover:shadow-lg group-hover:shadow-cyber-purple/50">
                Explore LP2 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-400 text-sm mt-16"
        >
          Both landing pages feature lead capture, course-wise fees, and seamless Pipedream integration.
        </motion.p>
      </div>
    </main>
  )
}
