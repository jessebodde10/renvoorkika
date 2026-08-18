import Image from 'next/image'

export default function VerhaalSection() {
  return (
    <section id="verhaal" className="bg-kika-navy-light py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-kika-orange font-semibold uppercase tracking-widest text-sm mb-3">
            Mijn verhaal
          </p>
          <h2 className="font-display uppercase text-4xl md:text-5xl tracking-tight">
            Waarom ik ren
          </h2>
        </div>

        {/* Twee kolommen: tekst + foto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Tekst */}
          <div className="space-y-6 text-white/75 text-lg leading-relaxed">
            <p>
              Mijn naam is Jesse Bodde, 27 jaar, en hardlopen is mijn passie.
              Sinds 2024 is het voor mij echter meer dan dat: het is een
              manier geworden om iets te betekenen. Ik ren niet voor
              PR's of podiumplekken. Ik ren voor kinderen die dat zelf niet
              kunnen.
            </p>
            <p>
              In 2024 finishte ik in New York, in 2025 liep ik door de straten
              van Berlijn. Beide keren voor KiKa, want elk jaar krijgen bijna
              600 kinderen in Nederland kanker en 1 op de 5 haalt het niet.
              Dat is er één te veel.
            </p>
            <p>
              Nu staat Chicago op het programma. Op 11 oktober 2026 loop ik mijn
              derde grote marathon voor KiKa, met een doel van €7.500 voor
              kinderkankeronderzoek.
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

          {/* Foto — op mobiel bovenaan, op desktop rechts */}
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl order-first md:order-last">
            <Image
              src="/jesse-medaille.jpg"
              alt="Jesse Bodde met medaille na de finish"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 512px"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
