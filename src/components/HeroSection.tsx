import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/berlijn-groep2.jpg"
        alt="KiKa team Berlijn marathon"
        fill
        priority
        className="object-cover object-[50%_55%]"
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
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Ik ren voor de kinderen die dat zelf niet kunnen. Voor elk gezin dat
          te vroeg met kanker te maken kreeg.
        </p>
        <a
          href="#verhaal"
          className="inline-block bg-kika-orange text-white font-bold text-lg px-10 py-4
                     rounded-full shadow-2xl hover:bg-orange-500 active:scale-95
                     transition-all duration-200 focus:outline-none focus:ring-4
                     focus:ring-kika-orange/50"
        >
          Lees mijn verhaal
        </a>
      </div>

      {/* Scrolindicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-7 h-7 text-white/50" />
      </div>
    </section>
  )
}
