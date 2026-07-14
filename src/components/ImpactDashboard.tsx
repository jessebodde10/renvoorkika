import { Trophy, User, ArrowRight } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

type RaceEntry = {
  city: string
  year: string
  kikaTotal: number
  personal: number
}

const PAST_RACES: RaceEntry[] = [
  {
    city: 'New York',
    year: '2024',
    kikaTotal: 550576,
    personal: 7500,
  },
  {
    city: 'Berlijn',
    year: '2025',
    kikaTotal: 123639,
    personal: 4250,
  },
]

const CHICAGO_URL = 'https://supporta.com/19cn/ipgbtyhbi7'

export default function ImpactDashboard() {
  const personalTotal = PAST_RACES.reduce((sum, r) => sum + r.personal, 0)

  return (
    <section id="impact" className="bg-kika-navy py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Koptekst — zijlabel, links uitgelijnd (ritmebreuk, past bij de route) */}
        <div className="mb-14">
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-kika-orange font-semibold uppercase tracking-widest text-sm">
              De cijfers
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="font-display uppercase text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] mb-3">
            Kilometers, euro&apos;s, impact
          </h2>
          <p className="text-white/60 text-lg max-w-xl">
            Twee marathons gerend. Duizenden euro&apos;s opgehaald. Voor elk kind.
          </p>
        </div>

        {/* Chicago — volgende race */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 bg-kika-navy-light">
          <div className="h-1 bg-kika-orange" />
          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display uppercase text-3xl font-bold tracking-tight">Chicago</h3>
                <span className="text-kika-orange text-xs font-semibold border border-kika-orange/40 px-2.5 py-0.5 rounded-full">
                  Mijn volgende marathon
                </span>
              </div>
              <p className="text-white/50 text-sm">11 oktober 2026 · Inzameling loopt</p>
            </div>
            <a
              href={CHICAGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-kika-orange font-semibold
                         hover:text-orange-400 transition-colors duration-200 self-start md:self-auto text-sm"
            >
              Steun deze missie
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Totaalbanner eerdere races */}
        <div className="bg-kika-orange/10 border border-kika-orange/30 rounded-2xl p-6 text-center mb-10">
          <p className="text-kika-orange text-sm font-semibold uppercase tracking-widest mb-2">
            <span className="md:hidden">Opgehaald voor KiKa</span>
            <span className="hidden md:inline">Persoonlijk opgehaald voor KiKa</span>
          </p>
          <p className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            <AnimatedCounter target={personalTotal} prefix="€" duration={2500} />
          </p>
        </div>

        {/* Kaarten per afgeronde race */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAST_RACES.map((race) => (
            <div
              key={race.city}
              className="relative bg-kika-navy-light border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="h-1 bg-white/15" />

              <div className="p-8">
                <div className="flex items-baseline gap-3 mb-8">
                  <h3 className="font-display uppercase text-3xl font-bold tracking-tight">{race.city}</h3>
                  <p className="font-display text-white/40 text-lg">{race.year}</p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/60">
                      <Trophy className="w-4 h-4 text-kika-orange" />
                      <span className="text-sm font-medium">Team totaal voor KiKa</span>
                    </div>
                    <span className="font-display text-3xl font-bold text-kika-orange tracking-tight">
                      <AnimatedCounter
                        target={race.kikaTotal}
                        prefix="€"
                        duration={2000}
                      />
                    </span>
                  </div>

                  <div className="border-t border-white/10" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/60">
                      <User className="w-4 h-4 text-white/40" />
                      <span className="text-sm font-medium">
                        Mijn persoonlijke bijdrage
                      </span>
                    </div>
                    <span className="font-display text-2xl font-semibold tracking-tight">
                      <AnimatedCounter
                        target={race.personal}
                        prefix="€"
                        duration={1800}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
