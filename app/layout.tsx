import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 — Airbnb',
  description:
    'Entire serviced apartment in Candolim, India. 3 guests · 1 bedroom · 1 bed · 1 bathroom. Rated 4.95 stars by 19 reviews. Private jacuzzi, pool, WiFi, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
