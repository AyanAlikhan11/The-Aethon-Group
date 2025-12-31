// components/common/OptimizedImage.tsx
'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  aspectRatio?: string
  overlay?: boolean
  overlayColor?: string
}

export default function OptimizedImage({
  src,
  alt,
  className,
  aspectRatio = '16/9',
  overlay = false,
  overlayColor = 'from-black/50 to-transparent',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div 
      className={cn('relative overflow-hidden bg-neutral-100', className)}
      style={{ aspectRatio }}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-neutral-200 animate-pulse z-10"
          />
        )}
      </AnimatePresence>

      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          'object-cover transition-all duration-500',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />

      {overlay && (
        <div className={cn('absolute inset-0 bg-gradient-to-t', overlayColor)} />
      )}
    </div>
  )
}