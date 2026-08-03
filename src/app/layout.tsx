import type { Metadata } from 'next'
import { Outfit, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/config/site'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

// Condensed, athletisch — voor koppen en race-cijfers (scorebord-gevoel).
// Bebas Neue heeft maar één gewicht en alleen kapitalen: gebruik geen
// font-bold/font-semibold ernaast, anders maakt de browser er nepvet van.
const bebas = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Jesse rent voor KiKa',
  description:
    'Jesse Bodde rent marathons voor KiKa: New York 2024, Berlijn 2025, Chicago 2026. Steun zijn actie voor kinderkankeronderzoek.',
  openGraph: {
    title: 'Jesse rent voor KiKa',
    description:
      'Jesse Bodde rent drie wereldmarathons voor kinderkankeronderzoek. Doneer en help hem zijn doel van €7.500 te bereiken.',
    images: [
      {
        // Echte liggende foto. berlijn-jesse.jpg is staand (2666x4000) en werd
        // in de 1.91:1 deelkaart tot een onherkenbare strook gesneden.
        url: '/berlijn-groep2.jpg',
        width: 1776,
        height: 1184,
        alt: 'Het KiKa-team juicht na de marathon van Berlijn',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesse rent voor KiKa',
    description: 'Jesse Bodde rent drie wereldmarathons voor kinderkankeronderzoek. Doneer nu.',
    images: ['/berlijn-groep2.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${outfit.variable} ${bebas.variable}`}>
      <body className="bg-kika-navy text-white antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
