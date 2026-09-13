import type { Metadata, Viewport } from 'next'

import { Nunito_Sans } from 'next/font/google'

import './globals.css'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'masb0ymas - all about me and my journey including, personal, blog, projects, and more',
  description:
    'Explore my blog for in-depth articles, tutorials, and insights on technology, web development, AI, and Web3. Learn from my experiences as I share practical knowledge and solutions from my development journey.',
  authors: [{ name: 'masb0ymas', url: 'https://masb0ymas.com' }],
  keywords: ['Tech', 'Web', 'AI', 'Web3', 'masb0ymas'],
  openGraph: {
    title: 'masb0ymas - all about me and my journey including, personal, blog, projects, and more',
    description:
      'Explore my blog for in-depth articles, tutorials, and insights on technology, web development, AI, and Web3.',
    url: 'https://masb0ymas.com',
    siteName: 'masb0ymas',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'masb0ymas',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e0e0e',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`flex min-h-screen flex-col ${nunitoSans.className}`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
