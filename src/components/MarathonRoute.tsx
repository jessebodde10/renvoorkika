'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Flag } from 'lucide-react'

type Leg = {
  n: string
  city: string
  date: string
  status: string
  done: boolean
}

const LEGS: Leg[] = [
  { n: '01', city: 'New York', date: 'nov 2024',    status: 'Gefinisht', done: true  },
  { n: '02', city: 'Berlijn',  date: 'sep 2025',    status: 'Gefinisht', done: true  },
  { n: '03', city: 'Chicago',  date: '11 okt 2026', status: 'Volgende',  done: false },
]

// Elke marathon is exact 42,195 km — terugkerend motief.
const DISTANCE = '42,195 KM'

function Marker({ leg }: { leg: Leg }) {
  if (leg.done) {
    return (
      <div className="w-12 h-12 rounded-full bg-kika-orange flex items-center justify-center
                      ring-4 ring-kika-orange/20 shrink-0">
        <Check className="w-6 h-6 text-white" strokeWidth={3} />
      </div>
    )
  }
  return (
    <div className="relative w-12 h-12 shrink-0">
      <span className="absolute inset-0 rounded-full bg-kika-orange/40 animate-ping" />
      <div className="relative w-12 h-12 rounded-full bg-kika-navy border-2 border-kika-orange
                      flex items-center justify-center">
        <Flag className="w-5 h-5 text-kika-orange" />
      </div>
    </div>
  )
}

function LegLabel({ leg, align }: { leg: Leg; align: 'center' | 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="text-white/30 text-xs font-bold tracking-[0.2em] mb-1">ETAPPE {leg.n}</p>
      <p className="font-display uppercase text-white font-bold text-2xl leading-none tracking-tight">{leg.city}</p>
      <p className="text-white/40 text-sm">{leg.date}</p>
      <p className={`text-xs font-semibold mt-1 ${leg.done ? 'text-white/50' : 'text-kika-orange'}`}>
        {leg.status} · {DISTANCE}
      </p>
    </div>
  )
}

export default function MarathonRoute() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.35 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="bg-kika-navy py-20 px-4 border-t border-white/5">
      <div ref={ref} className="max-w-4xl mx-auto">

        {/* Eyebrow als zijlabel — breekt bewust met het gecentreerde ritme */}
        <div className="flex items-baseline gap-3 mb-14">
          <span className="text-kika-orange font-semibold uppercase tracking-widest text-sm">
            De route
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-white/30 text-sm font-medium">Drie steden · één missie</span>
        </div>

        {/* Desktop: horizontale route */}
        <div className="hidden md:block relative">
          {/* Lijn */}
          <div className="absolute left-6 right-6 top-6 -translate-y-1/2">
            <div className="h-0.5 w-full border-t-2 border-dashed border-white/15" />
            <div
              className="absolute top-1/2 -translate-y-1/2 left-0 h-0.5 bg-kika-orange
                         transition-all duration-[1400ms] ease-out"
              style={{ width: inView ? '50%' : '0%' }}
            />
          </div>
          {/* Knopen */}
          <div className="relative flex justify-between">
            {LEGS.map((leg) => (
              <div key={leg.city} className="flex flex-col items-center gap-4 w-40">
                <Marker leg={leg} />
                <LegLabel leg={leg} align="center" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobiel: verticale route */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-6 bottom-6 -translate-x-1/2">
            <div className="w-0.5 h-full border-l-2 border-dashed border-white/15" />
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-kika-orange
                         transition-all duration-[1400ms] ease-out"
              style={{ height: inView ? '50%' : '0%' }}
            />
          </div>
          <div className="relative flex flex-col gap-10">
            {LEGS.map((leg) => (
              <div key={leg.city} className="flex items-center gap-5">
                <Marker leg={leg} />
                <LegLabel leg={leg} align="left" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
