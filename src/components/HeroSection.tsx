import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const CHICAGO_URL = 'https://supporta.com/19cn/ipgbtyhbi7'

export default function HeroSection() {

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/berlijn-jesse.jpg"
        alt="Jesse Bodde rennend door de Brandenburger Tor, Berlijn"
        fill
        priority
        className="object-cover object-[50%_40%]"
        sizes="100vw"
      />

      {/* Donker verloopoverlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-kika-navy/70 via-kika-navy/50 to-kika-navy/85" />

      {/* Inhoud */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-up">
        <div className="mb-4">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-xs md:text-sm">
            KiKa Marathon
          </p>
          <p className="text-white/60 font-semibold uppercase tracking-widest text-xs md:text-sm mt-1">
            New York · Berlijn · Chicago
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="block">Mijn Marathon</span>
          <span className="block">tegen <span className="text-kika-orange">Kinderkanker</span></span>
        </h1>



        {/* Knoppen */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={CHICAGO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-kika-orange text-white font-bold text-lg px-10 py-4
                       rounded-full shadow-2xl hover:bg-orange-500 active:scale-95
                       transition-all duration-200 focus:outline-none focus:ring-4
                       focus:ring-kika-orange/50 w-full sm:w-auto justify-center"
            aria-label="Doneer voor KiKa via Supporta"
          >
            Doneer voor KiKa
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#verhaal"
            className="text-white/70 font-semibold text-base hover:text-white transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full px-4 py-2"
          >
            Lees mijn verhaal
          </a>
        </div>
      </div>

      {/* Scrolindicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-7 h-7 text-white/50" />
      </div>
    </section>
  )
}
