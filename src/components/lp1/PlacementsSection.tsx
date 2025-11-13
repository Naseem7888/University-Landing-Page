'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePlacements } from '@/hooks/usePlacements'
import { formatCurrency } from '@/lib/utils'

export default function PlacementsSection() {
  const { placements, loading } = usePlacements()

  if (loading || !placements) return null

  return (
    <section id="placements" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-4">
          Outstanding Placements
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          {placements.overview.placementRate}% placement rate with top companies
        </p>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <motion.div whileHover={{ scale: 1.05 }} className="glassmorphism p-6 text-center">
            <div className="text-4xl font-bold text-cyber-blue mb-2">{placements.overview.placementRate}%</div>
            <div className="text-gray-400">Placement Rate</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="glassmorphism p-6 text-center">
            <div className="text-4xl font-bold text-cyber-purple mb-2">{formatCurrency(placements.overview.averagePackage)}</div>
            <div className="text-gray-400">Average Package</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="glassmorphism p-6 text-center">
            <div className="text-4xl font-bold text-cyber-green mb-2">{formatCurrency(placements.overview.highestPackage)}</div>
            <div className="text-gray-400">Highest Package</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="glassmorphism p-6 text-center">
            <div className="text-4xl font-bold text-cyber-blue mb-2">{placements.overview.totalCompanies}+</div>
            <div className="text-gray-400">Companies</div>
          </motion.div>
        </div>

        {/* Top Recruiters */}
        <h3 className="text-2xl font-bold text-white text-center mb-8">Top Recruiters</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {placements.topRecruiters.slice(0, 8).map((recruiter) => (
            <motion.div
              key={recruiter.name}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-6 rounded-xl flex flex-col items-center justify-center gap-3"
            >
              <div className="relative w-full h-12 flex items-center justify-center">
                <Image 
                  src={recruiter.logo} 
                  alt={`${recruiter.name} logo`} 
                  width={100} 
                  height={50}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const textFallback = e.currentTarget.nextSibling as HTMLElement;
                    if (textFallback) textFallback.style.display = 'block';
                  }}
                />
                <div className="text-lg font-bold text-white hidden">{recruiter.name}</div>
              </div>
              <div className="text-sm text-gray-400 text-center">
                {recruiter.roles && recruiter.roles.length > 0 && recruiter.roles[0]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
