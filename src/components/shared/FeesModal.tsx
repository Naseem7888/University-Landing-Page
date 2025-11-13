'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFees } from '@/hooks/useFees'
import { formatCurrency } from '@/lib/utils'

interface FeesModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FeesModal({ isOpen, onClose }: FeesModalProps) {
  const { fees, loading, error } = useFees()

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
                  className="w-full max-w-6xl max-h-[90vh] overflow-y-auto"
                >
                <div className="glassmorphism-dark p-8 relative">
                  {/* Close Button */}
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-white transition z-10"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </Dialog.Close>

                  {/* Title */}
                  <Dialog.Title className="text-3xl font-bold gradient-text mb-2">
                    Course-wise Fee Structure
                  </Dialog.Title>
                  <p className="text-gray-300 mb-8">
                    Annual fees for all programs. Scholarships available based on merit.
                  </p>

                  {/* Loading State */}
                  {loading && (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-8 h-8 animate-spin text-cyber-blue" />
                    </div>
                  )}

                  {/* Error State */}
                  {error && (
                    <div className="text-center py-12">
                      <p className="text-cyber-pink">{error}</p>
                    </div>
                  )}

                  {/* Fees Grid */}
                  {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {fees.map((fee) => (
                        <motion.div
                          key={fee.courseId}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="glassmorphism p-6 hover:border-cyber-blue transition"
                        >
                          <h3 className="text-xl font-bold text-white mb-4">
                            {fee.courseName}
                          </h3>

                          <div className="space-y-3 mb-4">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Tuition Fees:</span>
                              <span className="text-white font-medium">
                                {formatCurrency(fee.fees.tuition)}
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Hostel Fees:</span>
                              <span className="text-white font-medium">
                                {formatCurrency(fee.fees.hostel)}
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Other Fees:</span>
                              <span className="text-white font-medium">
                                {formatCurrency(fee.fees.other)}
                              </span>
                            </div>
                            <div className="border-t border-white/20 pt-3 flex justify-between font-bold">
                              <span className="text-cyber-blue">Total Annual:</span>
                              <span className="text-cyber-blue">
                                {formatCurrency(fee.fees.total)}
                              </span>
                            </div>
                          </div>

                          {fee.scholarships.length > 0 && (
                            <div className="border-t border-white/10 pt-4">
                              <p className="text-sm text-gray-400 mb-2">Available Scholarships:</p>
                              {fee.scholarships.map((scholarship, idx) => (
                                <div key={idx} className="flex justify-between text-sm mb-1">
                                  <span className="text-cyber-green">{scholarship.name}</span>
                                  <span className="text-cyber-green">
                                    up to {formatCurrency(scholarship.amount)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <p className="text-center text-gray-400 text-sm mt-8">
                    * Fees are subject to change. Contact admissions for the latest information.
                  </p>
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
