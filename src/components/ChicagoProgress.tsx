'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { CHICAGO_RAISED, CHICAGO_GOAL } from '@/config/chicago'

const CHICAGO_URL = 'https://supporta.com/19cn/ipgbtyhbi7'

function fmt(n: number) {
  return n.toLocaleString('nl-NL')
}

export default function ChicagoProgress() {
  const pct     = Math.min(100, Math.round((CHICAGO_RAISED / CHICAGO_GOAL) * 100))
  const barRef  = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={barRef} className="mt-6 space-y-3">

      {/* Bedragen */}
      <div className="flex items-end justify-between text-sm">
        <div>
          <span className="text-2xl font-extrabold text-kika-orange">
            €{fmt(CHICAGO_RAISED)}
          </span>
          <span className="text-white/40 ml-1">opgehaald</span>
        </div>
        <div className="text-right">
          <span className="text-white/60 font-semibold">€{fmt(CHICAGO_GOAL)}</span>
          <span className="text-white/30 ml-1 text-xs">doel</span>
        </div>
      </div>

      {/* Balk */}
      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
        {/* Gloed achtergrond */}
        <div
          className="absolute inset-y-0 left-0 bg-kika-orange/20 rounded-full
                     transition-all duration-1000 ease-out"
          style={{ width: animated ? `${pct}%` : '0%' }}
        />
        {/* Vulling */}
        <div
          className="absolute inset-y-0 left-0 rounded-full
                     bg-gradient-to-r from-kika-orange to-orange-400
                     transition-all duration-1000 ease-out"
          style={{ width: animated ? `${pct}%` : '0%' }}
        />
        {/* Lichtstreep */}
        {pct > 5 && (
          <div
            className="absolute inset-y-0 left-0 rounded-full overflow-hidden
                       transition-all duration-1000 ease-out"
            style={{ width: animated ? `${pct}%` : '0%' }}
          >
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 rounded-full" />
          </div>
        )}
      </div>

      {/* Percentage + CTA */}
      <div className="flex items-center justify-between">
        <p className="text-white/50 text-xs font-semibold">
          {pct > 0 ? `${pct}% van het doel bereikt` : 'Inzameling gestart, wees de eerste!'}
        </p>
        <a
          href={CHICAGO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-kika-orange text-xs font-semibold
                     hover:text-orange-400 transition-colors duration-150"
        >
          Doneer nu
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
