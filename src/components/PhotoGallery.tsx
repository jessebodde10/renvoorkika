'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Photo = {
  src: string
  alt: string
  city: 'New York' | 'Berlijn'
}

const PHOTOS: Photo[] = [
  { src: '/berlijn-finish.jpg',  alt: 'Finishen in Berlijn',           city: 'Berlijn'  },
  { src: '/berlijn-groep.jpg',   alt: 'Het KiKa-team in Berlijn',      city: 'Berlijn'  },
  { src: '/berlijn-groep2.jpg',  alt: 'Met het team na de finish',      city: 'Berlijn'  },
  { src: '/newyork-brug.jpg',    alt: 'Op de brug in New York',         city: 'New York' },
  { src: '/newyork-finish.jpg',  alt: 'Finishen in New York',           city: 'New York' },
  { src: '/newyork-groep.jpg',   alt: 'Het KiKa-team in New York',      city: 'New York' },
  { src: '/newyork-park.jpg',    alt: 'Door Central Park, New York',    city: 'New York' },
]

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open  = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)

  const prev = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length)
  }, [])

  const next = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i + 1) % PHOTOS.length)
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, prev, next])

  return (
    <section id="galerij" className="bg-kika-navy-light py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Koptekst */}
        <div className="text-center mb-12">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Herinneringen
          </p>
          <h2 className="font-display uppercase text-4xl md:text-6xl tracking-tight mb-4">
            Galerij
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Momenten die je nooit vergeet.
          </p>
        </div>

        {/* Fotoraster */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => open(i)}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer
                         focus:outline-none focus:ring-2 focus:ring-kika-orange/60"
              aria-label={`Bekijk foto: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Stadsbadge */}
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-kika-navy/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {photo.city}
                </span>
              </div>

              {/* Hover-overlay */}
              <div className="absolute inset-0 bg-kika-navy/0 group-hover:bg-kika-navy/30 transition-colors duration-500" />

              {/* Bijschrift */}
              <div className="absolute bottom-0 left-0 right-0 p-3
                              md:translate-y-full md:group-hover:translate-y-0
                              transition-transform duration-300
                              bg-gradient-to-t from-kika-navy/90 to-transparent">
                <p className="text-white text-sm font-semibold leading-tight">{photo.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Sluitknop */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors
                       focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
            aria-label="Sluiten"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Vorige */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white
                       transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
            aria-label="Vorige foto"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Afbeelding */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3]"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[lightboxIndex].src}
              alt={PHOTOS[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            {/* Bijschrift */}
            <div className="absolute bottom-0 left-0 right-0 text-center pb-3">
              <span className="bg-kika-navy/80 backdrop-blur-sm text-white text-sm font-semibold
                               px-4 py-1.5 rounded-full">
                {PHOTOS[lightboxIndex].alt}
              </span>
            </div>
          </div>

          {/* Volgende */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white
                       transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
            aria-label="Volgende foto"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Teller */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm">
            {lightboxIndex + 1} / {PHOTOS.length}
          </p>
        </div>
      )}
    </section>
  )
}
