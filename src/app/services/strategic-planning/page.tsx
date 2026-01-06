'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StrategicPlanningPage() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF6E5] to-[#C9A24D]/20" />

      <div className="relative container mx-auto px-4 lg:px-8 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 max-w-4xl"
        >
          Strategic Planning
        </motion.h1>

        <p className="mt-6 text-xl text-neutral-600 max-w-3xl">
          We help organizations define clear direction, align priorities, and
          execute strategies that deliver sustainable growth.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">What We Deliver</h3>
            <ul className="space-y-4 text-neutral-600">
              <li>• Vision & mission alignment</li>
              <li>• Competitive positioning</li>
              <li>• Long-term growth roadmaps</li>
              <li>• Execution-ready strategic plans</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Why It Matters</h3>
            <p className="text-neutral-600 leading-relaxed">
              Without a clear strategy, businesses drift. Our structured
              planning approach ensures focus, accountability, and measurable
              outcomes.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-block mt-16 rounded-xl bg-[#C9A24D] px-10 py-4 text-white font-medium hover:opacity-90 transition"
        >
          Talk to a Strategist
        </Link>
      </div>
    </section>
  )
}
