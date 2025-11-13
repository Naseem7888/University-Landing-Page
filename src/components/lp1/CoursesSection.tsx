'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCourses } from '@/hooks/useCourses'
import { COURSE_CATEGORIES } from '@/lib/constants'
import Button from '@/components/shared/Button'
import { cn } from '@/lib/utils'

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { courses, loading } = useCourses()

  const filteredCourses = activeCategory === 'All'
    ? courses
    : courses.filter(course => course.department === activeCategory)

  return (
    <section id="courses" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-4">
          Our Programs
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          Choose from 50+ industry-aligned programs across multiple disciplines
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {COURSE_CATEGORIES.map((category) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-6 py-3 rounded-lg font-medium transition-all',
                activeCategory === category &&
                  'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white shadow-neon'
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="text-center text-gray-400">Loading courses...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glassmorphism p-6 neon-glow-hover"
              >
                <div className="text-cyber-blue font-bold mb-2">{course.degree}</div>
                <h3 className="text-xl font-bold text-white mb-3">{course.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                  <Button variant="ghost" size="sm">Learn More</Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
