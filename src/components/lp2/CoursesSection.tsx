// LP2 CoursesSection - Accordion/list variant
'use client'
import { useCourses } from '@/hooks/useCourses'

export default function CoursesSection() {
  const { courses, loading } = useCourses()
  
  return (
    <section id="courses" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold gradient-text text-center mb-12">Our Programs</h2>
        {loading ? <div className="text-center text-gray-400">Loading...</div> : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {courses.map((course) => (
              <div key={course.id} className="glassmorphism p-6">
                <h3 className="text-xl font-bold text-white mb-2">{course.name}</h3>
                <p className="text-gray-400">{course.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
