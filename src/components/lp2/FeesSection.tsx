// LP2 FeesSection - Side-by-side layout
'use client'
import Button from '@/components/shared/Button'

interface FeesSectionProps {
  onFeesClick: () => void
}

export default function FeesSection({ onFeesClick }: FeesSectionProps) {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold gradient-text mb-4">Flexible Fee Structure</h2>
            <p className="text-gray-300 mb-6">Affordable education with multiple payment options and scholarships</p>
            <Button variant="primary" size="lg" onClick={onFeesClick}>View Detailed Fees</Button>
          </div>
          <div className="glassmorphism p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Financial Assistance</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Merit scholarships up to 100%</li>
              <li>✓ Easy EMI options available</li>
              <li>✓ Education loan support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
