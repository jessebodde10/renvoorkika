'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { prefersReducedMotion } from '@/lib/motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        })
      }
      className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-40
                 bg-kika-navy-light border border-white/20 text-white/70
                 hover:text-white hover:border-kika-orange/50 hover:bg-kika-navy
                 w-10 h-10 rounded-full flex items-center justify-center
                 shadow-lg transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-kika-orange/50"
      aria-label="Scroll naar boven"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}
