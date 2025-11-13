'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useUniversityInfo } from '@/hooks/useUniversityInfo'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants'

export default function ContactSection() {
  const { universityInfo } = useUniversityInfo()

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: CONTACT_INFO.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`,
    },
  ]

  const socialIcons = [
    { Icon: Facebook, href: SOCIAL_LINKS.facebook, name: 'Facebook' },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, name: 'Twitter' },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, name: 'Instagram' },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, name: 'LinkedIn' },
    { Icon: Youtube, href: SOCIAL_LINKS.youtube, name: 'YouTube' },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300">
            Have questions? We&apos;re here to help you take the next step
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-6 rounded-xl border-2 border-cyber-blue/20 hover:border-cyber-blue/50 transition-all cursor-pointer"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 text-sm">{method.detail}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Media & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
            <p className="text-gray-300 mb-6">
              Stay connected and get the latest updates about admissions, events, and campus life
            </p>
            <div className="flex gap-4 flex-wrap">
              {socialIcons.map(({ Icon, href, name }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${name}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center hover:shadow-neon transition-all"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Campus Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Campus Location</h3>
            <p className="text-gray-300 mb-6">
              {universityInfo?.location.city}, {universityInfo?.location.state}
              <br />
              200 Acres of Modern Infrastructure
            </p>
            <Button
              variant="primary"
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`, '_blank')}
            >
              Get Directions
            </Button>
          </motion.div>
        </div>

        {/* Quick Inquiry CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 glassmorphism p-8 rounded-xl text-center border-2 border-cyber-purple/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-300 mb-6">
            Schedule a campus visit or speak with our admissions team today
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="primary"
              onClick={() => window.location.href = 'mailto:' + CONTACT_INFO.email}
            >
              Send Inquiry
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.location.href = 'tel:' + CONTACT_INFO.phone}
            >
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
