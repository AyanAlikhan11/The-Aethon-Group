// components/sections/Stats.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successful engagements across industries',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Based on post-project surveys',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Years Experience',
    description: 'Decades of strategic expertise',
  },
  {
    value: 150,
    suffix: '+',
    label: 'Enterprise Clients',
    description: 'Fortune 500 & growing companies',
  },
]

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section ref={containerRef} className="py-20 bg-primary-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                {isInView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-accent-gold font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-white/50 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}