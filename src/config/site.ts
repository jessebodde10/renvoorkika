/**
 * Eén bron van waarheid voor gegevens die op meerdere plekken op de site staan.
 */

/** Actiepagina op Supporta. Verandert dit, dan verandert het overal. */
export const DONATE_URL = 'https://supporta.com/19cn/ipgbtyhbi7'

/** Website van het goede doel. */
export const KIKA_URL = 'https://www.kika.nl'

/**
 * De secties op de pagina, in volgorde.
 * `short` gebruikt de navigatiebalk, `long` de footer.
 */
export type Section = {
  id: string
  short: string
  long: string
}

export const SECTIONS: Section[] = [
  { id: 'verhaal',  short: 'Verhaal',  long: 'Mijn verhaal' },
  { id: 'kika',     short: 'KiKa',     long: 'Over KiKa'    },
  { id: 'impact',   short: 'Impact',   long: 'De cijfers'   },
  { id: 'galerij',  short: 'Galerij',  long: 'Galerij'      },
  { id: 'sponsors', short: 'Sponsors', long: 'Sponsors'     },
]
