export default function KikaSection() {
  return (
    <section id="kika" className="bg-kika-navy py-24 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Koptekst */}
        <div className="text-center mb-14">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Het goede doel
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Stichting Kinderen Kankervrij
          </h2>
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
            Jaarlijks krijgen bijna 600 kinderen in Nederland kanker. Momenteel
            overleeft 81% van de kinderen. Dankzij het werk van KiKa steeg die
            overlevingskans van 72% naar 81%. 100% genezing van kinderkanker,
            dat is het doel.
          </p>
          <p>
            KiKa financiert wetenschappelijk onderzoek naar kinderkanker. Het
            onderzoek richt zich op betere genezing, betere behandeling en
            minder bijwerkingen. KiKa ondersteunt ook het Prinses Máxima
            Centrum voor kinderoncologie.
          </p>
        </div>

        {/* Link naar KiKa */}
        <div className="mt-10">
          <a
            href="https://www.kika.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kika-orange font-semibold hover:text-orange-400 transition-colors duration-150"
          >
            Meer lezen op kika.nl →
          </a>
        </div>

      </div>
    </section>
  )
}
