'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useUniversityInfo } from '@/hooks/useUniversityInfo'
import { Users, GraduationCap, Building, MapPin } from 'lucide-react'

export default function OverviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { universityInfo, loading } = useUniversityInfo()

  if (loading || !universityInfo) return null

  const stats = [
    { icon: Users, value: `${universityInfo.stats.students.toLocaleString()}+`, label: 'Students' },
    { icon: GraduationCap, value: `${universityInfo.stats.faculty}+`, label: 'Faculty Members' },
    { icon: Building, value: `${universityInfo.stats.programs}+`, label: 'Programs' },
    { icon: MapPin, value: universityInfo.stats.campusArea, label: 'Campus Area' },
  ]

  return (
    <section id="overview" ref={ref} className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About WHY Q University
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {universityInfo.overview.vision}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism p-6 text-center neon-glow-hover"
            >
              <stat.icon className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Accreditation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {universityInfo.accreditation.map((acc) => (
              <div key={acc} className="px-6 py-3 glassmorphism text-cyber-blue font-semibold">
                {acc}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
