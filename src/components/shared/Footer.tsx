'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">WHY Q University</h3>
            <p className="text-gray-400 mb-4">
              Empowering students with world-class education and industry-ready skills since 2005.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-cyber-blue transition">Home</Link></li>
              <li><Link href="/lp1" className="text-gray-400 hover:text-cyber-blue transition">About Us</Link></li>
              <li><Link href="/lp1#courses" className="text-gray-400 hover:text-cyber-blue transition">Courses</Link></li>
              <li><Link href="/lp1" className="text-gray-400 hover:text-cyber-blue transition">Admissions</Link></li>
              <li><Link href="/lp1" className="text-gray-400 hover:text-cyber-blue transition">Placements</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Engineering</span></li>
              <li><span className="text-gray-400">Management</span></li>
              <li><span className="text-gray-400">Design</span></li>
              <li><span className="text-gray-400">Sciences</span></li>
              <li><span className="text-gray-400">Research</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyber-blue transition">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-cyber-blue transition">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} WHY Q University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
