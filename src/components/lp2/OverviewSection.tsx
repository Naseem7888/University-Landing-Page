// LP2 OverviewSection - Horizontal card layout variant
'use client'
import { useUniversityInfo } from '@/hooks/useUniversityInfo'

export default function OverviewSection() {
  const { universityInfo, loading } = useUniversityInfo()
  if (loading || !universityInfo) return null

  return (
    <section id="overview" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold gradient-text text-center mb-12">About WHY Q</h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8">{universityInfo.overview.mission}</p>
        <div className="flex justify-center gap-8 flex-wrap">
          {universityInfo.accreditation.map((acc) => (
            <div key={acc} className="px-6 py-3 glassmorphism text-cyber-blue font-semibold">{acc}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
