// hooks/useScrollPosition.ts
'use client'

import { useState, useEffect } from 'react'

interface ScrollPosition {
  x: number
  y: number
  direction: 'up' | 'down' | null
  progress: number
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: null,
    progress: 0,
  })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = documentHeight > 0 ? currentScrollY / documentHeight : 0

      setScrollPosition({
        x: window.scrollX,
        y: currentScrollY,
        direction,
        progress,
      })

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}