// components/sections/CTABanner.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTABanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* WHITE + GOLD BACKGROUND */}
      <motion.div
        style={{ y }}
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white
          via-[#FFF6E5]
          to-[#C9A24D]/45
        "
      />

      {/* GOLD AMBIENT BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 -right-1/4 w-[900px] h-[900px] rounded-full bg-[#C9A24D]/40 blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-1/2 -left-1/4 w-[700px] h-[700px] rounded-full bg-[#E8C97A]/35 blur-[180px]"
        />
      </div>

      {/* SUBTLE GOLD PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A24D'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-display-sm lg:text-display-md text-neutral-900 mb-6"
          >
            Ready to Transform
            <br />
            <span className="text-[#C9A24D]">Your Business?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-700 mb-10 max-w-2xl mx-auto"
          >
            Let’s discuss how our strategic expertise can help you achieve
            your most ambitious goals. Schedule a consultation today.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<Phone className="w-5 h-5" />}
              className="border-[#C9A24D]/40 text-[#7A6224] hover:bg-[#FFF6E5]"
            >
              + (91) 7439315210
            </Button>
          </motion.div>

          {/* TRUST INDICATORS — PURE WHITE STARS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-12 border-t border-[#C9A24D]/20"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-neutral-700 text-sm">
              {[
                'Free Initial Consultation',
                'Response Within 24 Hours',
                '100% Confidential',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
