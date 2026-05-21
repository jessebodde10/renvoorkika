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
            Ik ben Jesse Bodde, 27 jaar. Hardlopen is mijn passie, maar sinds
            2024 is het ook mijn manier om iets te betekenen. Ik ren niet voor
            PR's of podiumplekken — ik ren voor kinderen die dat zelf niet
            kunnen.
          </p>
          <p>
            In 2024 finishte ik de marathon van New York, in 2025 liep ik door
            de straten van Berlijn. Beide keren voor KiKa, want elk jaar krijgen
            bijna 600 kinderen in Nederland kanker en 1 op de 5 haalt het niet.
            Dat zijn geen statistieken. Dat zijn kinderen.
          </p>
          <p>
            Nu staat Chicago op het programma. Op 11 oktober 2026 loop ik mijn
            derde grote marathon, met een doel van €7.500 voor
            kinderkankeronderzoek. Elke euro die jij doneert gaat rechtstreeks
            naar KiKa — en brengt ons een stap dichter bij 100% genezing.
          </p>

          {/* Chicago-blok */}
          <div className="bg-kika-navy rounded-2xl p-6 border border-white/10">
            <p className="text-kika-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Volgende stop
            </p>
            <p className="text-white font-bold text-xl mb-2">
              Chicago Marathon · 11 oktober 2026
            </p>
            <p>
              De finish in Chicago wordt meer dan een persoonlijke mijlpaal.
              Het is een stap richting een wereld zonder kinderkanker.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
