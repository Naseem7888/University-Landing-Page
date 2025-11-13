'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useUniversityInfo } from '@/hooks/useUniversityInfo'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants'

export default function ContactSection() {
  const { universityInfo } = useUniversityInfo()

  const socialIcons = [
    { Icon: Facebook, href: SOCIAL_LINKS.facebook, name: 'Facebook', color: 'from-blue-600 to-blue-400' },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, name: 'Twitter', color: 'from-sky-600 to-sky-400' },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, name: 'Instagram', color: 'from-pink-600 to-pink-400' },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, name: 'LinkedIn', color: 'from-blue-700 to-blue-500' },
    { Icon: Youtube, href: SOCIAL_LINKS.youtube, name: 'YouTube', color: 'from-red-600 to-red-400' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your journey to excellence starts with a conversation. Reach out to us today!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Contact Info Card */}
          <motion.div variants={itemVariants} className="glassmorphism p-8 rounded-2xl space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
            
            <motion.a
              href={`mailto:${CONTACT_INFO.email}`}
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyber-blue to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-neon">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-cyber-blue font-semibold mb-1">Email Address</h4>
                <p className="text-gray-300 text-sm">{CONTACT_INFO.email}</p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${CONTACT_INFO.phone}`}
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyber-purple to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-neon">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-cyber-purple font-semibold mb-1">Phone Number</h4>
                <p className="text-gray-300 text-sm">{CONTACT_INFO.phone}</p>
                <p className="text-gray-400 text-xs mt-1">Toll-free | Mon-Sat 9AM-6PM</p>
              </div>
            </motion.a>

            <motion.a
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-neon">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-1">Campus Address</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
            </motion.a>

            {/* Social Media */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                {socialIcons.map(({ Icon, href, name, color }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${name}`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center hover:shadow-lg transition-all`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Action Card */}
          <motion.div variants={itemVariants} className="glassmorphism p-8 rounded-2xl flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-4">Take Action</h3>
            <p className="text-gray-300 mb-6 flex-grow">
              Ready to begin your journey at {universityInfo?.name}? Choose how you&apos;d like to connect with us.
            </p>

            <div className="space-y-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="primary"
                  onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}?subject=Admissions Inquiry`}
                  className="w-full justify-center gap-2 py-4"
                >
                  <Send className="w-5 h-5" />
                  Send Email Inquiry
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="secondary"
                  onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}
                  className="w-full justify-center gap-2 py-4"
                >
                  <Phone className="w-5 h-5" />
                  Call Admissions Office
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="ghost"
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`, '_blank')}
                  className="w-full justify-center gap-2 py-4 border-2 border-cyber-blue/30 hover:border-cyber-blue"
                >
                  <MapPin className="w-5 h-5" />
                  Get Campus Directions
                </Button>
              </motion.div>
            </div>

            {/* Campus Info */}
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/20">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Campus Size:</strong> {universityInfo?.stats.campusArea} of world-class facilities
              </p>
              <p className="text-sm text-gray-300 mt-1">
                <strong className="text-white">Location:</strong> {universityInfo?.location.city}, {universityInfo?.location.state}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glassmorphism p-8 md:p-12 rounded-2xl text-center border-2 border-cyber-purple/40 bg-gradient-to-r from-cyber-blue/5 to-cyber-purple/5"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Schedule Your Campus Visit
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Experience our state-of-the-art facilities, meet faculty members, and explore student life firsthand. 
            Book a personalized campus tour today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}?subject=Campus Visit Request`}
            >
              Schedule Visit
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open('https://whyq.edu/virtual-tour', '_blank')}
            >
              Virtual Tour
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
