import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Nicolas Efstathiou Realty - Premium Real Estate Services',
  description: 'Discover your dream home with Nicolas Efstathiou Realty. Professional real estate services with personalized attention and expert market knowledge.',
  keywords: 'real estate, property, homes, houses, Nicolas Efstathiou, realty, buy, sell, rent',
  authors: [{ name: 'Nicolas Efstathiou Realty' }],
  openGraph: {
    title: 'Nicolas Efstathiou Realty - Premium Real Estate Services',
    description: 'Discover your dream home with Nicolas Efstathiou Realty.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
