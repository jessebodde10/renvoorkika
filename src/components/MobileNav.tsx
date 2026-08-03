'use client'

import { Heart, BookOpen, BarChart2 } from 'lucide-react'
import { DONATE_URL } from '@/config/site'

export default function MobileNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-kika-navy/95 backdrop-blur-sm
                 border-t border-white/10 flex items-stretch"
      aria-label="Mobiele navigatie"
    >
      <a
        href="#verhaal"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3
                   text-white/60 hover:text-white transition-colors duration-150
                   focus:outline-none focus:bg-white/10"
      >
        <BookOpen className="w-5 h-5" />
        <span className="text-xs font-medium">Verhaal</span>
      </a>

      <a
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3
                   bg-kika-orange text-white hover:bg-orange-500 transition-colors duration-150
                   focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Doneer voor KiKa via Supporta"
      >
        <Heart className="w-5 h-5" />
        <span className="text-xs font-bold">Doneer</span>
      </a>

      <a
        href="#impact"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3
                   text-white/60 hover:text-white transition-colors duration-150
                   focus:outline-none focus:bg-white/10"
      >
        <BarChart2 className="w-5 h-5" />
        <span className="text-xs font-medium">Impact</span>
      </a>
    </nav>
  )
}
