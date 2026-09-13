'use client'

import { SITE } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          Copyright © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <nav aria-label="Legal" className="flex items-center gap-6">
          <a
            href="https://masb0ymas.com/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a href="https://masb0ymas.com/terms" className="transition-colors hover:text-foreground">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  )
}
