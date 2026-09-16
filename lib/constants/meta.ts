import { Metadata } from 'next'

export const META_URL = 'https://masb0ymas.com'
export const META_TITLE = `masb0ymas - all about me and my journey including, personal, blog, projects, and more`
export const META_DESCRIPTION = `Explore my blog for in-depth articles, tutorials, and insights on technology, web development, AI, and Web3. Learn from my experiences as I share practical knowledge and solutions from my development journey.`
export const META_IMAGE = '/static/images/logo-fill.png'
export const META_KEYWORDS = `Tech, Web, AI, Web3, masb0ymas`

const SITE_NAME = 'masb0ymas'

export const META: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: META_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: META_IMAGE,
        width: 1200,
        height: 630,
        alt: META_TITLE,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: META_URL,
    creator: SITE_NAME,
    images: [META_IMAGE],
  },
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
    other: {
      rel: 'shortcut icon',
      url: '/favicon/favicon.ico',
    },
  },
} as const
