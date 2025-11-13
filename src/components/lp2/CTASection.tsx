// LP2 CTASection - Card-based layout variant
'use client'
import Button from '@/components/shared/Button'
import { Download } from 'lucide-react'
import axios from 'axios'

interface CTASectionProps {
  onApplyClick: () => void
  onFeesClick: () => void
  onScheduleVisitClick: () => void
}

export default function CTASection({ onApplyClick, onFeesClick, onScheduleVisitClick }: CTASectionProps) {
  const handleDownloadClick = async () => {
    try {
      await axios.post('/api/track-download', {
        source: 'LP2_CTA',
        timestamp: new Date().toISOString(),
      })
    } catch (error) {
      console.error('Failed to track download:', error)
    }
  }
  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-12">
          Ready to <span className="gradient-text">Begin?</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="glassmorphism p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Apply Now</h3>
            <p className="text-gray-400 mb-6">Start your application journey</p>
            <Button variant="primary" onClick={onApplyClick} className="w-full">Apply</Button>
          </div>
          <div className="glassmorphism p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">View Fees</h3>
            <p className="text-gray-400 mb-6">Check course-wise fee structure</p>
            <Button variant="secondary" onClick={onFeesClick} className="w-full">View Fees</Button>
          </div>
          <div className="glassmorphism p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Download Brochure</h3>
            <p className="text-gray-400 mb-6">Get detailed information</p>
            <a 
              href="/brochure.pdf" 
              download="WHY-Q-University-Brochure.pdf"
              onClick={handleDownloadClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" className="w-full">
                <Download className="mr-2 w-4 h-4" />
                Download
              </Button>
            </a>
          </div>
          <div className="glassmorphism p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Campus Visit</h3>
            <p className="text-gray-400 mb-6">Schedule a campus tour</p>
            <Button variant="ghost" className="w-full" onClick={onScheduleVisitClick}>Schedule</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
