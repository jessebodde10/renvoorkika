'use client'

import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '@/lib/motion'

interface AnimatedCounterProps {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  // Start met de echte waarde zodat SSR/no-JS altijd het juiste getal toont
  const [count, setCount] = useState(target)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    if (animated.current) return
    const el = ref.current
    if (!el) return

    // Bij "minder beweging" blijft het eindbedrag gewoon staan.
    if (prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        animated.current = true

        // Reset naar 0 en animeer omhoog
        setCount(0)
        let startTime: number | null = null

        const step = (now: number) => {
          if (!startTime) startTime = now
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString('nl-NL')}
      {suffix}
    </span>
  )
}
