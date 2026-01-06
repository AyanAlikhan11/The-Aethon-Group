'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TransformationPage() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF6E5] to-[#C9A24D]/20" />

      <div className="relative container mx-auto px-4 lg:px-8 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-neutral-900"
        >
          Business Transformation
        </motion.h1>

        <p className="mt-6 text-xl text-neutral-600 max-w-3xl">
          Navigate change with confidence and transform your organization for
          the future.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <ul className="space-y-4 text-neutral-600">
            <li>• Digital & operational transformation</li>
            <li>• Process optimization</li>
            <li>• Change management</li>
            <li>• Technology enablement</li>
          </ul>

          <p className="text-neutral-600 leading-relaxed">
            We help organizations adapt to evolving markets while maintaining
            stability, performance, and culture.
          </p>
        </div>

        <Link href="/contact" className="inline-block mt-16 btn-primary">
          Start Your Transformation
        </Link>
      </div>
    </section>
  )
}
