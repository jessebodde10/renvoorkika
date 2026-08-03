'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { DONATE_URL, SECTIONS } from '@/config/site'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-kika-navy/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-center md:justify-between">
        <a href="#" className="font-extrabold tracking-tight text-base md:text-lg whitespace-nowrap">
          <span className="text-kika-orange">Jesse</span>
          <span className="text-white"> rent voor KiKa</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="hover:text-white transition-colors duration-150"
            >
              {section.short}
            </a>
          ))}
        </nav>

        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-kika-orange text-white font-bold
                     text-sm px-5 py-2.5 rounded-full hover:bg-orange-500
                     transition-colors duration-200"
        >
          Mijn sponsorpagina
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  )
}
