import type { Metadata, Viewport } from 'next'

import { Nunito_Sans } from 'next/font/google'

import './globals.css'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { META } from '@/lib/constants/meta'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export const metadata: Metadata = META

export const viewport: Viewport = {
  themeColor: '#0e0e0e',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://analytics.masb0ymas.com/script.js"
          data-website-id="75db1d28-d884-475c-9027-9b9d84b36ea6"
        ></script>
      </head>
      <body className={`flex min-h-screen flex-col ${nunitoSans.className}`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
