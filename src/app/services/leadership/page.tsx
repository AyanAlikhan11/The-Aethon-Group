'use client'

import Link from 'next/link'

export default function LeadershipPage() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF6E5] to-[#C9A24D]/20" />

      <div className="relative container mx-auto px-4 lg:px-8 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900">
          Leadership Advisory
        </h1>

        <p className="mt-6 text-xl text-neutral-600 max-w-3xl">
          Strong leadership drives performance, culture, and long-term success.
        </p>

        <div className="mt-16 space-y-6 text-neutral-600 max-w-4xl">
          <p>• Executive coaching & mentorship</p>
          <p>• Leadership capability building</p>
          <p>• Team alignment & culture development</p>
          <p>• Decision-making frameworks</p>
        </div>

        <Link href="/contact" className="inline-block mt-16 btn-primary">
          Develop Stronger Leaders
        </Link>
      </div>
    </section>
  )
}
