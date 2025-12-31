// components/common/SectionHeading.tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  tagline?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function SectionHeading({
  tagline,
  title,
  description,
  centered = false,
  light = false,
  className,
  size = 'md',
}: SectionHeadingProps) {
  const titleSizes = {
    sm: 'text-2xl lg:text-3xl',
    md: 'text-3xl lg:text-4xl',
    lg: 'text-4xl lg:text-5xl',
  }

  return (
    <div className={cn(
      centered && 'text-center mx-auto',
      centered && 'max-w-3xl',
      className
    )}>
      {tagline && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            'inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4',
            light 
              ? 'bg-white/10 text-accent-gold' 
              : 'bg-primary-100 text-primary-600'
          )}
        >
          {tagline}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          'font-heading font-bold',
          titleSizes[size],
          light ? 'text-white' : 'text-neutral-900'
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            'mt-4 text-lg lg:text-xl leading-relaxed',
            light ? 'text-white/70' : 'text-neutral-600'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}