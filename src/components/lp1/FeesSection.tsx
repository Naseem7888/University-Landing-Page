'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'

interface FeesSectionProps {
  onFeesClick: () => void
}

export default function FeesSection({ onFeesClick }: FeesSectionProps) {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Affordable & Flexible Fee Structure
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Quality education with scholarship opportunities up to 100% and flexible payment plans
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div whileHover={{ scale: 1.05 }} className="glassmorphism p-8">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">Flexible Payment</h3>
            <p className="text-gray-400">Easy EMI options and semester-wise payment plans</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} className="glassmorphism p-8">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-white mb-2">Merit Scholarships</h3>
            <p className="text-gray-400">Up to 100% tuition fee waiver for top performers</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} className="glassmorphism p-8">
            <div className="text-5xl mb-4">🏦</div>
            <h3 className="text-xl font-bold text-white mb-2">Education Loans</h3>
            <p className="text-gray-400">Assistance with loans from major banks</p>
          </motion.div>
        </div>

        <Button variant="primary" size="lg" onClick={onFeesClick}>
          Check Course-wise Fees
        </Button>
      </div>
    </section>
  )
}
