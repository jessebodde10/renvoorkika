import { ExternalLink, ArrowRight } from 'lucide-react'

export default function SponsorSection() {
  return (
    <section id="sponsor" className="bg-kika-navy py-24 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Persoonlijke aanspreking */}
        <div className="text-center mb-12">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Loop met me mee
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Jij hoeft niet te rennen om{' '}
            <span className="text-kika-orange whitespace-nowrap">het verschil te maken</span>
          </h2>
        </div>

        {/* Persoonlijke brief-stijl tekst */}
        <div className="space-y-5 text-white/75 text-lg leading-relaxed mb-12">
          <p>
            Ik ben geen topsporter. Ik ben gewoon iemand die ergens voor wil
            staan, en rennen is de manier waarop ik dat doe.
          </p>
          <p>
            KiKa stopt elke euro in onderzoek naar kinderkanker. Niet in
            kantoren of campagnes, gewoon in wetenschap. Kinderen die vroeger
            geen kans hadden, overleven nu wel. Maar er is nog zoveel te doen.
          </p>
          <p>
            Als je me wilt steunen, hoeveel het ook is, betekent dat echt wat.
            Niet voor mij, maar voor een kind ergens in een ziekenhuis dat er
            waarschijnlijk nooit van weet. Dat is genoeg voor mij.
          </p>
        </div>

        {/* Zachte scheidingslijn */}
        <div className="border-t border-white/10 mb-10" />

        {/* Knoppen */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://supporta.com/19cn/ipgbtyhbi7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-kika-orange text-white font-bold
                       text-lg px-10 py-4 rounded-full shadow-2xl hover:bg-orange-500
                       active:scale-95 transition-all duration-200 focus:outline-none
                       focus:ring-4 focus:ring-kika-orange/50 w-full sm:w-auto justify-center"
          >
            Ik doe een donatie
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="https://www.kika.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80
                       font-medium text-base transition-colors duration-200
                       w-full sm:w-auto justify-center"
          >
            Meer over KiKa
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-8 text-white/25 text-xs">
          Je wordt doorgeleid naar mijn actiepagina op Supporta.
          Donaties aan KiKa zijn fiscaal aftrekbaar.
        </p>
      </div>
    </section>
  )
}
