'use client'

import Link from 'next/link'

import { SocialLinks } from '@/components/social-links'
import { NAV_LINKS, SITE } from '@/lib/data/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-base font-extrabold tracking-tight transition-colors hover:text-accent-strong"
            >
              masb<span className="text-accent">0</span>ymas
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Software engineer building for the web since 2017.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex items-center gap-5 text-sm text-muted-foreground"
          >
            {NAV_LINKS.map((link) =>
              link.href.startsWith('http') ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <SocialLinks />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-6">
            <a href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
