export default function KikaSection() {
  return (
    <section id="kika" className="bg-kika-navy py-24 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Koptekst */}
        <div className="text-center mb-14">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Het goede doel
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Stichting Kinderen Kankervrij
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Elk jaar krijgen bijna 600 kinderen in Nederland kanker. KiKa strijdt voor 100% genezing.
          </p>
        </div>

        {/* Video placeholder — vervang VIDEO_ID door het echte YouTube-ID */}
        <div className="relative w-full mb-12 rounded-2xl overflow-hidden"
             style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/0FFUrKAXrUA"
            title="Stichting Kinderen Kankervrij"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Tekst */}
        <div className="space-y-5 text-white/75 text-lg leading-relaxed">
          <p>
            Jaarlijks krijgen bijna 600 kinderen in Nederland kanker. De
            overlevingskans steeg mede dankzij KiKa van 72% naar inmiddels
            circa 84%. Het doel blijft 100% genezing van kinderkanker.
          </p>
          <p>
            KiKa financiert wetenschappelijk onderzoek naar betere behandelingen
            en kwaliteit van zorg voor kinderen met kanker. KiKa ondersteunt
            ook het Prinses Máxima Centrum voor kinderoncologie.
          </p>
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://www.kika.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kika-orange font-semibold hover:text-orange-400 transition-colors duration-150
                       focus:outline-none focus:ring-2 focus:ring-kika-orange/50 rounded"
          >
            Meer lezen op kika.nl →
          </a>
          <a
            href="https://www.kika.nl/over-kika/missie-visie-strategie/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-sm hover:text-white/70 transition-colors duration-150
                       focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
            aria-label="Bron: KiKa missie, visie en strategie"
          >
            Bron: kika.nl/missie-visie-strategie
          </a>
        </div>

      </div>
    </section>
  )
}
