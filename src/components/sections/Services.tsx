// components/sections/Services.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  Shield,
  ArrowUpRight
} from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/common/SectionHeading'

const services = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Develop comprehensive strategies that align with your vision and drive sustainable growth.',
    href: '/services/strategic-planning',
  },
  {
    icon: TrendingUp,
    title: 'Business Transformation',
    description: 'Navigate complex transformations with confidence through our proven methodologies.',
    href: '/services/transformation',
  },
  {
    icon: Users,
    title: 'Leadership Advisory',
    description: 'Empower your leadership team with insights and frameworks for exceptional performance.',
    href: '/services/leadership',
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description: 'Gain competitive advantage through deep market insights and data-driven decisions.',
    href: '/services/market-analysis',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Consulting',
    description: 'Foster a culture of innovation and bring breakthrough ideas to market faster.',
    href: '/services/innovation',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate risks to protect and enhance enterprise value.',
    href: '/services/risk-management',
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* White → Gold Ambient Background (same as Hero) */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white
          via-[#FFF6E5]
          to-[#C9A24D]/30
          pointer-events-none
        "
      />

      <div className="relative container mx-auto px-4 lg:px-8">
        <SectionHeading
          tagline="What We Do"
          title="Comprehensive Solutions for Complex Challenges"
          description="We offer a full spectrum of strategic consulting services designed to address your most pressing business challenges."
          centered
          className="text-neutral-900"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
              <Link href={service.href}>
                <div
                  className="
                    group relative h-full rounded-2xl p-8
                    bg-white
                    border border-neutral-200
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-[#C9A24D]/50
                    hover:shadow-[0_30px_80px_-20px_rgba(201,162,77,0.25)]
                  "
                >
                  {/* Soft gold hover glow */}
                  <div
                    className="
                      absolute inset-0 rounded-2xl
                      bg-gradient-to-br
                      from-[#C9A24D]/10
                      via-transparent
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-500
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      relative z-10 w-14 h-14 rounded-xl
                      bg-gradient-to-br from-[#E6C36A] to-[#B8913D]
                      flex items-center justify-center mb-6
                      group-hover:scale-110
                      transition-transform duration-300
                    "
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 text-xl font-heading font-semibold text-neutral-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="relative z-10 text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="relative z-10 flex items-center text-[#C9A24D] font-medium">
                    <span className="mr-2">Learn More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
