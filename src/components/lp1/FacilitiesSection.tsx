'use client'

import { motion } from 'framer-motion'
import { useUniversityInfo } from '@/hooks/useUniversityInfo'
import { Library, FlaskConical, Trophy, Home, Coffee, Heart, Lightbulb, Users } from 'lucide-react'

const iconMap: Record<string, any> = {
  library: Library,
  lab: FlaskConical,
  sports: Trophy,
  hostel: Home,
  cafeteria: Coffee,
  medical: Heart,
  innovation: Lightbulb,
  auditorium: Users,
}

export default function FacilitiesSection() {
  const { universityInfo, loading } = useUniversityInfo()

  if (loading || !universityInfo) return null

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-4">
          World-Class Facilities
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          State-of-the-art infrastructure for holistic development
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {universityInfo.facilities.map((facility, index) => {
            const Icon = iconMap[facility.icon] || Lightbulb
            return (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glassmorphism p-6 text-center neon-glow-hover"
              >
                <Icon className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{facility.name}</h3>
                <p className="text-sm text-gray-400">{facility.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
