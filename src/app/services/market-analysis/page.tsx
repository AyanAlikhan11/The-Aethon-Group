'use client'

import Link from 'next/link'

export default function MarketAnalysisPage() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF6E5] to-[#C9A24D]/20" />

      <div className="relative container mx-auto px-4 lg:px-8 py-24">
        <h1 className="text-4xl md:text-6xl font-bold">
          Market Analysis
        </h1>

        <p className="mt-6 text-xl text-neutral-600 max-w-3xl">
          Make confident decisions backed by deep market intelligence.
        </p>

        <ul className="mt-16 space-y-4 text-neutral-600">
          <li>• Market & customer research</li>
          <li>• Competitive benchmarking</li>
          <li>• Opportunity identification</li>
          <li>• Market entry strategy</li>
        </ul>

        <Link href="/contact" className="inline-block mt-16 btn-primary">
          Get Market Insights
        </Link>
      </div>
    </section>
  )
}
