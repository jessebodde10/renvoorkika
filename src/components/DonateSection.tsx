import { ExternalLink, ArrowRight } from 'lucide-react'
import { DONATE_URL, KIKA_URL } from '@/config/site'

export default function DonateSection() {
  return (
    <section id="doneer" className="bg-kika-navy py-24 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Persoonlijke aanspreking */}
        <div className="text-center mb-12">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Loop met me mee
          </p>
          <h2 className="font-display uppercase text-4xl md:text-5xl leading-[0.95] tracking-tight">
            Mijn stappen,{' '}
            <span className="text-kika-orange">jouw steun</span>
          </h2>
        </div>

        {/* Tekst */}
        <div className="space-y-5 text-white/75 text-lg leading-relaxed mb-12">
          <p>
            Op 11 oktober 2026 sta ik aan de start in Chicago. Mijn doel: €7.500
            ophalen voor kinderkankeronderzoek. Elke euro die jij geeft gaat
            rechtstreeks naar KiKa.
          </p>
          <p>
            Doneren kost je een minuut. Voor een kind met kanker betekent het
            onderzoek, betere behandelingen en een grotere kans om te genezen.
            Daar loop ik 42 kilometer voor. Doe jij die minuut?
          </p>
        </div>

        {/* Zachte scheidingslijn */}
        <div className="border-t border-white/10 mb-10" />

        {/* Knoppen */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={DONATE_URL}
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
            href={KIKA_URL}
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
          Donaties aan KiKa zijn mogelijk fiscaal aftrekbaar, afhankelijk van je situatie.
        </p>
      </div>
    </section>
  )
}
