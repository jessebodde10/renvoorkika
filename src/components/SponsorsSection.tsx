import { ExternalLink } from 'lucide-react'

type Sponsor = {
  name: string
  url?: string
  note?: string
}

type SponsorGroup = {
  city: string
  year: string
  /** Optioneel label, bijv. bij een race die nog moet komen. */
  badge?: string
  sponsors: Sponsor[]
}

const SPONSOR_GROUPS: SponsorGroup[] = [
  {
    city: 'New York',
    year: '2024',
    sponsors: [
      { name: 'AGS',                  url: 'https://www.ags.nl/' },
      { name: 'Paroc GmbH',           url: 'https://www.paroc.com/en' },
      { name: 'E-Freight Forwarding', url: 'https://www.efreightforwarding.com/' },
      { name: 'Cargomate',            url: 'https://www.cargomate.nl/' },
      { name: 'Boloo',                url: 'https://boloo.co/' },
      { name: 'Sir Winston',          url: 'https://www.sirwinston.nl/' },
      { name: 'Amaranthos Flowers',   url: 'https://amaranthosflowersbleiswijk.nl/' },
      { name: 'Screenhouse',          url: 'https://screenhouse.nl/', note: 'shirt bedrukking' },
    ],
  },
  {
    city: 'Berlijn',
    year: '2025',
    sponsors: [
      { name: 'AGS',                  url: 'https://www.ags.nl/' },
      { name: 'Paroc GmbH',           url: 'https://www.paroc.com/en' },
      { name: 'Centuristics',         url: 'https://centuristics.com/' },
      { name: 'SL Freelance Solutions', url: 'https://www.sl-freelancesolution.nl/' },
      { name: 'Screenhouse',          url: 'https://screenhouse.nl/', note: 'shirt bedrukking' },
    ],
  },
  {
    city: 'Chicago',
    year: '2026',
    badge: 'Tot nu toe',
    sponsors: [
      { name: 'Paroc GmbH',   url: 'https://www.paroc.com/en' },
    ],
  },
]

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div
      className="bg-kika-navy border border-white/10 rounded-2xl overflow-hidden
                 transition-all duration-200 hover:border-kika-orange/40 group"
    >
      <div className="h-0.5 bg-kika-orange/30 group-hover:bg-kika-orange transition-colors duration-200" />
      <div className="p-5 flex flex-col items-center text-center">
        <p className="font-bold text-sm leading-tight mb-1">{sponsor.name}</p>
        {sponsor.note && (
          <p className="text-white/40 text-xs mb-2">{sponsor.note}</p>
        )}
        {sponsor.url ? (
          <a
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Bezoek ${sponsor.name}`}
            className="inline-flex items-center gap-1 text-kika-orange text-xs font-semibold
                       hover:text-orange-400 transition-colors duration-150
                       focus:outline-none focus:ring-2 focus:ring-kika-orange/50 rounded mt-1"
          >
            Bezoek {sponsor.name}
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-white/30 text-xs mt-1">Geen website</span>
        )}
      </div>
    </div>
  )
}

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-kika-navy-light py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Koptekst */}
        <div className="text-center mb-14">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Op mijn shirt
          </p>
          <h2 className="font-display uppercase text-4xl md:text-6xl tracking-tight mb-4">
            Mijn sponsors
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Zij maken het mogelijk. Dankzij hun steun draag ik met trots hun naam op mijn shirt.
          </p>
        </div>

        {/* Drie groepen */}
        <div className="space-y-12">
          {SPONSOR_GROUPS.map((group) => (
            <div key={group.city}>
              {/* Groepheader */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <p className="font-display uppercase text-white text-xl leading-tight tracking-tight">
                    Shirtsponsors {group.city}
                  </p>
                  <p className="text-white/40 text-sm">{group.year}</p>
                </div>
                {group.badge && (
                  <span className="text-kika-orange text-xs font-semibold border border-kika-orange/40
                                   px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {group.badge}
                  </span>
                )}
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Kaarten */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {group.sponsors.map((sponsor) => (
                  <SponsorCard key={`${group.city}-${sponsor.name}`} sponsor={sponsor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
