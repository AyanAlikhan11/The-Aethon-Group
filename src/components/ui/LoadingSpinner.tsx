// components/ui/LoadingSpinner.tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'white' | 'accent'
  className?: string
}

export default function LoadingSpinner({
  size = 'md',
  variant = 'primary',
  className,
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  const colors = {
    primary: 'border-primary-600',
    white: 'border-white',
    accent: 'border-accent-gold',
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={cn(
        'rounded-full border-2 border-t-transparent',
        sizes[size],
        colors[variant],
        className
      )}
    />
  )
}

// Full Page Loading
export function PageLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="xl" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-neutral-500"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

// Skeleton Loading
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-neutral-200',
        className
      )}
      {...props}
    />
  )
}