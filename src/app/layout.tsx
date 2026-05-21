import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
  ),
  title: 'Jesse rent voor KiKa',
  description:
    'Jesse Bodde (27) rent marathons voor KiKa – New York 2024, Berlijn 2025, Chicago 2026. Steun zijn actie voor kinderkankeronderzoek.',
  openGraph: {
    title: 'Jesse rent voor KiKa',
    description:
      'Jesse Bodde (27) rent drie wereldmarathons voor kinderkankeronderzoek. Doneer en help hem zijn doel van €7.500 te bereiken.',
    images: [{ url: '/berlijn-jesse.jpg', width: 1200, height: 630, alt: 'Jesse Bodde in Berlijn' }],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesse rent voor KiKa',
    description: 'Jesse Bodde (27) rent drie wereldmarathons voor kinderkankeronderzoek. Doneer nu.',
    images: ['/berlijn-jesse.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={outfit.variable}>
      <body className="bg-kika-navy text-white antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
