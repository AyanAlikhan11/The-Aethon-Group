// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Aethon Group | Strategic Consulting Excellence',
    template: '%s | The Aethon Group'
  },
  description: 'Premier strategic consulting firm delivering transformative solutions for enterprise growth and operational excellence.',
  keywords: ['consulting', 'strategy', 'business transformation', 'enterprise solutions'],
  authors: [{ name: 'The Aethon Group' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.theaethongroup.com',
    siteName: 'The Aethon Group',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'The Aethon Group',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@theaethongroup',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased bg-neutral-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}