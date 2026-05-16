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
            Ik ben Jesse. Geen topsporter, geen professionele atleet. Gewoon
            iemand die ergens voor wil staan. En dit is wat ik doe: ik ren
            marathons voor KiKa, zodat kinderen met kanker een betere kans
            krijgen.
          </p>
          <p>
            Elke keer als ik de startlijn overstap, denk ik aan de kinderen die
            in een ziekenhuisbed liggen terwijl leeftijdsgenoten buiten spelen.
            Aan de ouders die &apos;s nachts waken. Aan de artsen die vechten voor
            elke dag extra.
          </p>
          <p>
            Rennen is voor mij geen sport meer. Het is een manier om iets terug
            te geven. Als mijn benen protesteren en ik geen adem meer heb, denk
            ik aan hen. En dan ga ik door.
          </p>

          {/* Chicago-blok */}
          <div className="bg-kika-navy rounded-2xl p-6 border border-white/10">
            <p className="text-kika-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Volgende stop
            </p>
            <p className="text-white font-bold text-xl mb-2">
              Chicago Marathon · 12 Oktober 2026
            </p>
            <p>
              Na New York en Berlijn is Chicago mijn derde grote marathon voor
              KiKa. Mijn doel is om nog eens €7.500 op te halen voor
              kinderkankeronderzoek. Voor elk kind dat kanker te vroeg leerde
              kennen.
            </p>
          </div>
        </div>

        <div className="mt-12 border-l-4 border-kika-orange pl-6">
          <p className="text-white text-xl font-semibold leading-relaxed">
            &ldquo;Ik ren niet voor de finish. Ik ren voor de kinderen die er
            zelf nooit kunnen staan.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
