'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import LeadForm from './LeadForm'

interface LeadFormModalProps {
  isOpen: boolean
  onClose: () => void
  triggerSource?: string
}

export default function LeadFormModal({ isOpen, onClose, triggerSource }: LeadFormModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => { if (!open) onClose() }}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />
            </Dialog.Overlay>

            {/* Modal Content */}
            <Dialog.Content asChild>
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                >
                <div className="glassmorphism-dark p-8 relative">
                  {/* Close Button */}
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </Dialog.Close>

                  {/* Title */}
                  <Dialog.Title className="text-3xl font-bold gradient-text mb-2">
                    Apply to WHY Q University
                  </Dialog.Title>
                  <p className="text-gray-300 mb-8">
                    Fill out the form below and our admissions team will contact you soon.
                  </p>

                  {/* Lead Form */}
                  <LeadForm onSuccess={onClose} triggerSource={triggerSource} />
                </div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
