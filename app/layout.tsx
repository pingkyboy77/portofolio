import './global.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Krisna Yuda Nugraha - Portofolio',
    template: '%s | Krisna Yuda Nugraha',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | undefined | false)[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="text-neutral-900 bg-[#0d1117] dark:text-neutral-100 min-h-screen selection:bg-blue-600 selection:text-white"
    >
      <body className={cx(
        "antialiased min-h-screen flex flex-col justify-between max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 bg-[#0d1117]",
        poppins.className
      )}>
        <Navbar />
        <main className="flex-auto py-4 sm:py-6">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
