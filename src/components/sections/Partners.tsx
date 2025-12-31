// components/sections/Partners.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Microsoft', logo: '/images/partners/microsoft.svg' },
  { name: 'Google', logo: '/images/partners/google.svg' },
  { name: 'Amazon', logo: '/images/partners/amazon.svg' },
  { name: 'IBM', logo: '/images/partners/ibm.svg' },
  { name: 'Salesforce', logo: '/images/partners/salesforce.svg' },
  { name: 'Oracle', logo: '/images/partners/oracle.svg' },
  { name: 'SAP', logo: '/images/partners/sap.svg' },
  { name: 'Adobe', logo: '/images/partners/adobe.svg' },
]

export default function Partners() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-neutral-500 mb-10">
          Partnering with world-class organizations
        </p>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-50 to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-16 items-center"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}