'use client'

import Link from 'next/link'

export default function RiskManagementPage() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF6E5] to-[#C9A24D]/20" />

      <div className="relative container mx-auto px-4 lg:px-8 py-24">
        <h1 className="text-4xl md:text-6xl font-bold">
          Risk Management
        </h1>

        <p className="mt-6 text-xl text-neutral-600 max-w-3xl">
          Protect enterprise value and strengthen organizational resilience.
        </p>

        <ul className="mt-16 space-y-4 text-neutral-600">
          <li>• Risk identification & assessment</li>
          <li>• Operational & financial risk mitigation</li>
          <li>• Compliance & governance</li>
          <li>• Crisis readiness planning</li>
        </ul>

        <Link href="/contact" className="inline-block mt-16 btn-primary">
          Manage Risk Proactively
        </Link>
      </div>
    </section>
  )
}
