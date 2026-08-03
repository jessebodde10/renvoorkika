import { ArrowUpRight } from 'lucide-react'
import { DONATE_URL, KIKA_URL, SECTIONS } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-kika-navy-light border-t border-white/10 px-4 pt-16 pb-10">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 mb-12">

          {/* Merk + oproep */}
          <div>
            <p className="font-display uppercase text-2xl font-bold tracking-tight mb-3">
              <span className="text-kika-orange">Jesse</span> rent voor KiKa
            </p>
            <p className="text-white/50 leading-relaxed max-w-sm">
              Drie marathons, één missie: een wereld waarin 100% van de kinderen
              met kanker geneest. New York 2024 · Berlijn 2025 · Chicago 2026.
            </p>
          </div>

          {/* Navigatie */}
          <nav className="flex flex-col gap-2">
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-2">
              Op deze pagina
            </p>
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-white/60 hover:text-white transition-colors duration-150 w-fit"
              >
                {section.long}
              </a>
            ))}
          </nav>

          {/* Actie */}
          <div className="flex flex-col gap-3">
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-2">
              Steun de actie
            </p>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-kika-orange text-white font-bold
                         px-5 py-2.5 rounded-full hover:bg-orange-500 transition-colors duration-200 w-fit"
            >
              Doneer voor KiKa
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={KIKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white/50 hover:text-white/80
                         transition-colors duration-150 text-sm w-fit"
            >
              Meer over KiKa
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Fijne print */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Jesse Bodde. Persoonlijke actiepagina voor KiKa.
          </p>
          <p className="text-white/30 text-sm">
            Donaties verlopen veilig via Supporta.
          </p>
        </div>
      </div>
    </footer>
  )
}
