'use client'

import { useState } from 'react'
import HeroSection from '@/components/lp1/HeroSection'
import OverviewSection from '@/components/lp1/OverviewSection'
import CoursesSection from '@/components/lp1/CoursesSection'
import FeesSection from '@/components/lp1/FeesSection'
import PlacementsSection from '@/components/lp1/PlacementsSection'
import FacilitiesSection from '@/components/lp1/FacilitiesSection'
import ContactSection from '@/components/lp1/ContactSection'
import CTASection from '@/components/lp1/CTASection'
import LeadFormModal from '@/components/shared/LeadFormModal'
import FeesModal from '@/components/shared/FeesModal'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export default function LandingPage1() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false)
  const [isFeesModalOpen, setIsFeesModalOpen] = useState(false)
  const [triggerSource, setTriggerSource] = useState('')

  const handleApplyClick = (source: string) => {
    setTriggerSource(source)
    setIsLeadFormOpen(true)
  }

  const handleFeesClick = () => {
    setIsFeesModalOpen(true)
  }

  return (
    <>
      <Navbar onApplyClick={() => handleApplyClick('Navbar')} />
      
      <main className="bg-dark-900">
        <HeroSection onApplyClick={() => handleApplyClick('Hero')} />
        <OverviewSection />
        <CoursesSection />
        <FeesSection onFeesClick={handleFeesClick} />
        <PlacementsSection />
        <FacilitiesSection />
        <ContactSection />
        <CTASection 
          onApplyClick={() => handleApplyClick('CTA')}
          onFeesClick={handleFeesClick}
          onScheduleVisitClick={() => handleApplyClick('Schedule Visit')}
        />
      </main>

      <Footer />

      <LeadFormModal
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        triggerSource={triggerSource}
      />

      <FeesModal
        isOpen={isFeesModalOpen}
        onClose={() => setIsFeesModalOpen(false)}
      />
    </>
  )
}
