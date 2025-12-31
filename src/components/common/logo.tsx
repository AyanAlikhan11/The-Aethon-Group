// components/common/Logo.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ 
  variant = 'dark', 
  size = 'md',
  showText = true 
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' },
  }

  const colors = {
    light: {
      primary: '#ffffff',
      secondary: '#d4af37',
      text: 'text-white',
    },
    dark: {
      primary: '#1a1a2e',
      secondary: '#d4af37',
      text: 'text-primary-900',
    },
  }

  return (
    <Link href="/" className="flex items-center gap-3">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ width: sizes[size].icon, height: sizes[size].icon }}
      >
        <svg
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Shield Shape */}
          <path
            d="M25 2L45 12V28C45 38 36 46 25 48C14 46 5 38 5 28V12L25 2Z"
            fill={colors[variant].primary}
            stroke={colors[variant].secondary}
            strokeWidth="2"
          />
          {/* Letter A */}
          <path
            d="M25 12L33 36H29L27 30H23L21 36H17L25 12Z"
            fill={colors[variant].secondary}
          />
          <path
            d="M24 22L26 22L27 26H23L24 22Z"
            fill={colors[variant].primary}
          />
          {/* Decorative Lines */}
          <path
            d="M15 18L20 20"
            stroke={colors[variant].secondary}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M35 18L30 20"
            stroke={colors[variant].secondary}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {showText && (
        <div className={`font-heading font-bold ${sizes[size].text} ${colors[variant].text}`}>
          <span>The</span>
          <span className="text-accent-gold ml-1">Aethon</span>
          <span className="ml-1">Group</span>
        </div>
      )}
    </Link>
  )
}