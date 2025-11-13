// LP2 PlacementsSection - Tabbed interface variant
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePlacements } from '@/hooks/usePlacements'
import { formatCurrency } from '@/lib/utils'

export default function PlacementsSection() {
  const { placements } = usePlacements()
  if (!placements) return null

  return (
    <section id="placements" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold gradient-text text-center mb-12">Placements</h2>
        
        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="glassmorphism p-6 text-center">
            <div className="text-3xl font-bold text-cyber-blue mb-2">{placements.overview.placementRate}%</div>
            <div className="text-gray-400">Placement Rate</div>
          </div>
          <div className="glassmorphism p-6 text-center">
            <div className="text-3xl font-bold text-cyber-purple mb-2">{formatCurrency(placements.overview.averagePackage)}</div>
            <div className="text-gray-400">Average Package</div>
          </div>
          <div className="glassmorphism p-6 text-center">
            <div className="text-3xl font-bold text-cyber-green mb-2">{formatCurrency(placements.overview.highestPackage)}</div>
            <div className="text-gray-400">Highest Package</div>
          </div>
        </div>

        {/* Top Recruiters Carousel */}
        <h3 className="text-2xl font-bold text-white text-center mb-8">Trusted by Leading Companies</h3>
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-6 pb-4"
            initial={{ x: 0 }}
            animate={{ x: [0, -1000, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...placements.topRecruiters, ...placements.topRecruiters].slice(0, 16).map((recruiter, index) => (
              <motion.div
                key={`${recruiter.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 glassmorphism p-4 rounded-lg w-32 h-20 flex items-center justify-center"
              >
                <Image 
                  src={recruiter.logo} 
                  alt={`${recruiter.name} logo`} 
                  width={80} 
                  height={40}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-sm font-semibold text-white';
                      fallback.textContent = recruiter.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
