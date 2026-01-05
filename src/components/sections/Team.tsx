// components/sections/Team.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'

const team = [
  {
    name: 'Rezaul Haque',
    role: 'Chief Executive Officer',
    image: '/images/team/ceo.png',
    bio: 'Former McKinsey partner with 20+ years in strategic consulting.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'alexandra@aethongroup.com',
    },
  },
  {
    name: 'Ayan Ali Khan',
    role: 'Chief Strategy Officer',
    image: '/images/team/cso.jpeg',
    bio: 'Harvard MBA, specializing in digital transformation.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'marcus@aethongroup.com',
    },
  },
  {
    name: 'Sarah Williams',
    role: 'Managing Director',
    image: '/images/team/md.jpg',
    bio: 'Expert in operational excellence and change management.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@aethongroup.com',
    },
  },
  {
    name: 'David Park',
    role: 'Head of Innovation',
    image: '/images/team/innovation.jpg',
    bio: 'Serial entrepreneur turned innovation strategist.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'david@aethongroup.com',
    },
  },
]

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* White → Gold Ambient Background */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white
          via-[#FFF6E5]
          to-[#C9A24D]/35
          pointer-events-none
        "
      />

      {/* Subtle Gold Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <SectionHeading
          tagline="Our Leadership"
          title="Meet the Visionaries"
          description="Our leadership team brings decades of combined experience from the world's most respected consulting firms and Fortune 500 companies."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-[0_25px_70px_-20px_rgba(201,162,77,0.35)] transition-transform duration-500 group-hover:-translate-y-2">
                {/* Image */}
                <div className="aspect-[3/4] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gold Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C9A24D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Social Icons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[
                    { icon: Linkedin, href: member.social.linkedin },
                    { icon: Twitter, href: member.social.twitter },
                    { icon: Mail, href: `mailto:${member.social.email}` },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white text-neutral-700 shadow-md flex items-center justify-center hover:bg-accent-gold hover:text-white transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Text */}
              <h3 className="mt-6 text-xl font-heading font-semibold text-neutral-900">
                {member.name}
              </h3>
              <p className="text-accent-gold font-medium mt-1">
                {member.role}
              </p>
              <p className="text-neutral-600 text-sm mt-2">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
