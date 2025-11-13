'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { FileText, Calendar, Download } from 'lucide-react'
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
        source: 'LP1_CTA',
        timestamp: new Date().toISOString(),
      })
    } catch (error) {
      console.error('Failed to track download:', error)
    }
  }
  return (
    <section className="py-20 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-blue/40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-purple/40 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Start Your Journey at <span className="gradient-text">WHY Q</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of students shaping their future with world-class education. Your dream career starts here.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={onApplyClick}
            className="min-w-[250px]"
          >
            Apply Now
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={onFeesClick}
            className="min-w-[250px]"
          >
            <FileText className="mr-2 w-5 h-5" />
            View Fee Structure
          </Button>
          <a 
            href="/brochure.pdf" 
            download="WHY-Q-University-Brochure.pdf"
            onClick={handleDownloadClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="lg"
              className="min-w-[250px]"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Brochure
            </Button>
          </a>
          <Button
            variant="ghost"
            size="lg"
            onClick={onScheduleVisitClick}
            className="min-w-[250px]"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Schedule Campus Visit
          </Button>
        </div>
      </div>
    </section>
  )
}
