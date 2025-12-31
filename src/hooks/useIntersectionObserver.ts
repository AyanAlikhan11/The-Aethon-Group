// hooks/useIntersectionObserver.ts
'use client'

import { useEffect, useRef, useState, RefObject } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

interface IntersectionResult {
  isIntersecting: boolean
  entry: IntersectionObserverEntry | null
}

export function useIntersectionObserver<T extends Element>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T>, IntersectionResult] {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options

  const elementRef = useRef<T>(null)
  const [result, setResult] = useState<IntersectionResult>({
    isIntersecting: false,
    entry: null,
  })

  const frozen = result.isIntersecting && freezeOnceVisible

  useEffect(() => {
    const element = elementRef.current
    if (!element || frozen) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setResult({
          isIntersecting: entry.isIntersecting,
          entry,
        })
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, root, rootMargin, frozen])

  return [elementRef, result]
}