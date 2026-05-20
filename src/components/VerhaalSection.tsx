export default function VerhaalSection() {
  return (
    <section id="verhaal" className="bg-kika-navy-light py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Mijn verhaal
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Waarom ik ren
          </h2>
        </div>

        <div className="space-y-6 text-white/75 text-lg leading-relaxed">
          <p>
            Ik ben Jesse Bodde (27) en mijn passie voor hardlopen zet ik het
            liefst in voor het goede doel. Na de onvergetelijke marathon van
            New York in 2024 en de indrukwekkende straten van Berlijn in 2025,
            staat mijn volgende grote uitdaging alweer gepland: de marathon van
            Chicago in 2026.
          </p>
          <p>
            Waarom? Omdat er geen grotere motivatie bestaat dan rennen voor
            wetenschappelijk onderzoek en betere behandelmethoden voor kinderen
            met kanker. Steun jij mij weer op weg naar de finish in Chicago?
          </p>

          {/* Chicago-blok */}
          <div className="bg-kika-navy rounded-2xl p-6 border border-white/10">
            <p className="text-kika-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Volgende stop
            </p>
            <p className="text-white font-bold text-xl mb-2">
              Chicago Marathon · 11 Oktober 2026
            </p>
            <p>
              Mijn doel is om €7.500 op te halen voor kinderkankeronderzoek.
              Voor elk kind dat kanker te vroeg leerde kennen.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
