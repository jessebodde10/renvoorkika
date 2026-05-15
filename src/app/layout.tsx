import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Mijn Marathon tegen Kinderkanker | KiKa',
  description:
    'Ik ren marathons voor KiKa – New York, Berlijn en Chicago. Voor de kinderen die dat zelf niet kunnen.',
  openGraph: {
    title: 'Mijn Marathon tegen Kinderkanker',
    description: 'Steun KiKa via marathon sponsoring.',
    images: ['/berlijn-finish.jpg'],
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
