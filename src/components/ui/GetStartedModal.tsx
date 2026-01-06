'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
}

const services = [
  'Strategic Planning',
  'Business Transformation',
  'Leadership Advisory',
  'Market Analysis',
  'Innovation Consulting',
  'Risk Management',
]

export default function GetStartedModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed z-50 inset-0 flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-800"
              >
                <X />
              </button>

              {!submitted ? (
                <>
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Let’s Get Started
                  </h2>
                  <p className="text-neutral-600 mt-2">
                    Tell us a bit about what you’re looking for.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                    className="mt-6 space-y-4"
                  >
                    <input
                      required
                      placeholder="Your Name"
                      className="w-full rounded-xl border px-4 py-3"
                    />

                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-xl border px-4 py-3"
                    />

                    <select
                      required
                      className="w-full rounded-xl border px-4 py-3"
                    >
                      <option value="">Select a Service</option>
                      {services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>

                    <textarea
                      placeholder="Briefly describe your needs (optional)"
                      rows={4}
                      className="w-full rounded-xl border px-4 py-3"
                    />

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#C9A24D] py-3 font-medium text-white hover:opacity-90 transition"
                    >
                      Request Consultation
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    Thank you!
                  </h3>
                  <p className="text-neutral-600 mt-3">
                    We’ve received your request and will reach out shortly.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 text-[#C9A24D] font-medium"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
