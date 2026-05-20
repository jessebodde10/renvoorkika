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
  title: 'Marathon voor KiKa | Jesse Bodde',
  description:
    'Jesse Bodde rent marathons voor KiKa – New York, Berlijn en Chicago. Steun het onderzoek naar kinderkanker.',
  openGraph: {
    title: 'Marathon voor KiKa | Jesse Bodde',
    description:
      'Jesse rent drie wereldmarathons voor KiKa. Elk gedoneerd euro gaat naar onderzoek voor kinderen met kanker.',
    images: [{ url: '/berlijn-jesse.jpg', width: 1200, height: 630, alt: 'Jesse Bodde in Berlijn' }],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marathon voor KiKa | Jesse Bodde',
    description: 'Jesse rent drie wereldmarathons voor KiKa. Steun het onderzoek.',
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
