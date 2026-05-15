import { ExternalLink } from 'lucide-react'

type Sponsor = {
  name: string
  url?: string
  note?: string
}

const SPONSORS: Sponsor[] = [
  { name: 'AGS', url: 'https://www.ags.nl/' },
  { name: 'Centuristics', url: 'https://centuristics.com/' },
  { name: 'SL Freelance Solutions' },
  { name: 'E-Freight Forwarding', url: 'https://www.efreightforwarding.com/' },
  { name: 'Cargomate', url: 'https://www.cargomate.nl/' },
  { name: 'Boloo', url: 'https://boloo.co/' },
  { name: 'Sir Winston', url: 'https://www.sirwinston.nl/' },
  { name: 'Amaranthos Flowers Bleiswijk', url: 'https://amaranthosflowersbleiswijk.nl/' },
  {
    name: 'Screenhouse Textieldrukkers',
    url: 'https://screenhouse.nl/',
    note: 'shirt bedrukking',
  },
]

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-kika-navy py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Koptekst */}
        <div className="text-center mb-14">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Op mijn shirt
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Mijn sponsors
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Zij maken het mogelijk. Dankzij hun steun loop ik met trots hun naam op mijn shirt.
          </p>
        </div>

        {/* Sponsorraster */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              className="relative bg-kika-navy-light border border-white/10 rounded-2xl overflow-hidden
                         transition-all duration-200 hover:border-kika-orange/40 hover:bg-kika-navy-light/80"
            >
              <div className="h-0.5 bg-kika-orange/40" />
              <div className="p-5">
                <p className="font-bold text-base leading-tight mb-1">
                  {sponsor.name}
                </p>
                {sponsor.note && (
                  <p className="text-white/40 text-xs mb-2">{sponsor.note}</p>
                )}
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-kika-orange text-xs font-semibold
                               hover:text-orange-400 transition-colors duration-150"
                  >
                    Bezoek website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-white/30 text-xs">Geen website</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
