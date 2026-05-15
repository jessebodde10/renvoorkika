import Image from 'next/image'

type Photo = {
  src: string
  alt: string
  city: 'New York' | 'Berlijn' | 'Chicago'
}

const PHOTOS: Photo[] = [
  {
    src: '/berlijn-finish.jpg',
    alt: 'Finishen in Berlijn',
    city: 'Berlijn',
  },
  {
    src: '/berlijn-groep.jpg',
    alt: 'Het KiKa-team in Berlijn',
    city: 'Berlijn',
  },
  {
    src: '/newyork-brug.jpg',
    alt: 'Op de brug in New York',
    city: 'New York',
  },
  {
    src: '/newyork-finish.jpg',
    alt: 'Finishen in New York',
    city: 'New York',
  },
  {
    src: '/newyork-groep.jpg',
    alt: 'Het KiKa-team in New York',
    city: 'New York',
  },
  {
    src: '/newyork-park.jpg',
    alt: 'Door Central Park, New York',
    city: 'New York',
  },
]

export default function PhotoGallery() {
  return (
    <section id="galerij" className="bg-kika-navy-light py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Koptekst */}
        <div className="text-center mb-12">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Herinneringen
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Galerij
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Momenten die je nooit vergeet. Op de weg en in je hart.
          </p>
        </div>

        {/* Fotoraster */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Altijd zichtbare stadsbadge */}
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-kika-navy/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {photo.city}
                </span>
              </div>

              {/* Hover-overlay */}
              <div className="absolute inset-0 bg-kika-navy/0 group-hover:bg-kika-navy/30 transition-colors duration-500" />

              {/* Bijschrift bij hover */}
              <div
                className="absolute bottom-0 left-0 right-0 p-3
                           translate-y-full group-hover:translate-y-0
                           transition-transform duration-300
                           bg-gradient-to-t from-kika-navy/90 to-transparent"
              >
                <p className="text-white text-sm font-semibold leading-tight">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
