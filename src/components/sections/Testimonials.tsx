// components/sections/Testimonials.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'

const testimonials = [
  {
    id: 1,
    quote:
      "The Aethon Group transformed our business strategy completely. Their insights were invaluable, and the results speak for themselves - 40% revenue growth in just 18 months.",
    author: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechVentures Inc.',
    image: '/images/testimonials/sarah.jpg',
    logo: '/images/logos/techventures.svg',
  },
  {
    id: 2,
    quote:
      "Working with The Aethon Group was a game-changer. Their strategic approach and deep industry knowledge helped us navigate a complex market transformation.",
    author: 'Michael Chen',
    role: 'Managing Director',
    company: 'Global Finance Corp',
    image: '/images/testimonials/michael.jpg',
    logo: '/images/logos/globalfinance.svg',
  },
  {
    id: 3,
    quote:
      "The team at Aethon brought clarity to our vision and helped us execute with precision. Their expertise in leadership development elevated our entire organization.",
    author: 'Emily Rodriguez',
    role: 'President',
    company: 'Innovation Labs',
    image: '/images/testimonials/emily.jpg',
    logo: '/images/logos/innovationlabs.svg',
  },
  {
    id: 4,
    quote:
      "Exceptional strategic partnership. The Aethon Group's methodical approach and commitment to our success made all the difference in our market expansion.",
    author: 'David Thompson',
    role: 'Chief Strategy Officer',
    company: 'Atlas Industries',
    image: '/images/testimonials/david.jpg',
    logo: '/images/logos/atlas.svg',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 280 : -280,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -280 : 280,
      opacity: 0,
    }),
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* White → Champagne Gold Ambient Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF6E5] to-[#C9A24D]/30 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C9A24D]/20 blur-[160px]" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#C9A24D]/15 blur-[180px]" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <SectionHeading
          tagline="Client Success"
          title="Trusted by Industry Leaders"
          description="Hear from the executives who've partnered with us to achieve extraordinary results."
          centered
        />

        {/* Carousel */}
        <div className="mt-20 relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#E8C97A] flex items-center justify-center shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Card */}
          <div className="relative bg-white rounded-3xl shadow-[0_40px_90px_-30px_rgba(201,162,77,0.35)] p-8 lg:p-12 pt-14 overflow-hidden">
            {/* Inner Gold Sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/5 via-transparent to-transparent pointer-events-none" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <blockquote className="text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-10 text-center">
                  “{testimonials[currentIndex].quote}”
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#C9A24D]/30">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-neutral-900">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block opacity-60">
                    <Image
                      src={testimonials[currentIndex].logo}
                      alt={testimonials[currentIndex].company}
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-neutral-100 relative z-10">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-[#C9A24D]'
                        : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                {[{ onClick: prev, icon: ChevronLeft }, { onClick: next, icon: ChevronRight }].map(
                  (btn, i) => (
                    <button
                      key={i}
                      onClick={btn.onClick}
                      className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-[#FFF6E5] hover:border-[#C9A24D]/40 transition-all"
                    >
                      <btn.icon className="w-5 h-5 text-neutral-700" />
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-24">
          <p className="text-center text-neutral-500 mb-10">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-8 w-24 bg-neutral-300 rounded" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
