// LP2 FacilitiesSection - Masonry grid variant
'use client'
import { useUniversityInfo } from '@/hooks/useUniversityInfo'

export default function FacilitiesSection() {
  const { universityInfo } = useUniversityInfo()
  if (!universityInfo) return null

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold gradient-text text-center mb-12">Facilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {universityInfo.facilities.slice(0, 6).map((facility) => (
            <div key={facility.name} className="glassmorphism p-6">
              <h3 className="text-lg font-bold text-white mb-2">{facility.name}</h3>
              <p className="text-sm text-gray-400">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
