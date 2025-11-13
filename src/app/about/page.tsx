"use client"

import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import OverviewSection from '@/components/lp1/OverviewSection'

export default function AboutPage() {
  return (
    <>
      <Navbar onApplyClick={() => { /* About page has no hero; use navbar trigger on LP pages */ }} />
      <main className="bg-dark-900">
        <OverviewSection />
      </main>
      <Footer />
    </>
  )
}
