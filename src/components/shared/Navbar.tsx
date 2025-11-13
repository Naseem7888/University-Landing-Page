'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import axios from 'axios'
import Button from './Button'
import { scrollToSection } from '@/lib/utils'

interface NavbarProps {
  onApplyClick: () => void
}

export default function Navbar({ onApplyClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownloadClick = async () => {
    try {
      await axios.post('/api/track-download', {
        source: 'navbar',
        timestamp: new Date().toISOString()
      })
    } catch (err) {
      console.error('Download tracking failed:', err)
    }
  }

  const handleNavClick = (action?: () => void) => {
    if (action) action()
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', action: () => scrollToSection('courses') },
    { name: 'Placements', action: () => scrollToSection('placements') },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism-dark py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            WHY Q
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href ? (
                <Link key={link.name} href={link.href} className="text-white hover:text-cyber-blue transition" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ) : (
                <Button 
                  key={link.name} 
                  variant="ghost" 
                  size="sm"
                  type="button"
                  onClick={() => handleNavClick(link.action)} 
                  className="p-0 h-auto bg-transparent hover:bg-transparent border-none text-white hover:text-cyber-blue"
                >
                  {link.name}
                </Button>
              )
            ))}
            <a 
              href="/brochure.pdf" 
              download="WHY-Q-University-Brochure.pdf" 
              onClick={handleDownloadClick}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <Button variant="ghost" size="sm">
                Download Brochure
              </Button>
            </a>
            <Button variant="primary" onClick={onApplyClick}>
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glassmorphism p-4 rounded-lg"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href ? (
                  <Link key={link.name} href={link.href} className="text-white hover:text-cyber-blue transition" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                ) : (
                  <Button 
                    key={link.name} 
                    variant="ghost" 
                    size="sm"
                    type="button"
                    onClick={() => handleNavClick(link.action)} 
                    className="w-full justify-start bg-transparent hover:bg-white/10 border-none text-white hover:text-cyber-blue"
                  >
                    {link.name}
                  </Button>
                )
              ))}
              <a 
                href="/brochure.pdf" 
                download="WHY-Q-University-Brochure.pdf" 
                onClick={(e) => { handleDownloadClick(); setIsMobileMenuOpen(false); }}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="ghost" size="sm" className="w-full">
                  Download Brochure
                </Button>
              </a>
              <Button variant="primary" onClick={() => { onApplyClick(); setIsMobileMenuOpen(false); }} className="w-full">
                Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
