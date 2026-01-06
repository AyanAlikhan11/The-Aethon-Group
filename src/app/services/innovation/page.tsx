'use client'

import Link from 'next/link'

export default function InnovationPage() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF6E5] to-[#C9A24D]/20" />

      <div className="relative container mx-auto px-4 lg:px-8 py-24">
        <h1 className="text-4xl md:text-6xl font-bold">
          Innovation Consulting
        </h1>

        <p className="mt-6 text-xl text-neutral-600 max-w-3xl">
          Turn ideas into impactful, market-ready solutions.
        </p>

        <div className="mt-16 text-neutral-600 space-y-4">
          <p>• Innovation frameworks & strategy</p>
          <p>• Product & service design</p>
          <p>• Rapid prototyping & validation</p>
          <p>• Innovation culture enablement</p>
        </div>

        <Link href="/contact" className="inline-block mt-16 btn-primary">
          Innovate with Us
        </Link>
      </div>
    </section>
  )
}
