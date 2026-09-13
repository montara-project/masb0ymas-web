'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { NAV_LINKS, SITE } from '@/lib/site-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="/"
          className="text-lg font-extrabold tracking-tight transition-colors hover:text-accent-strong"
        >
          masb<span className="text-accent">0</span>ymas
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.contactUrl}
            className="ml-2 cursor-pointer rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-[0_4px_16px_rgba(243,91,4,0.35)] transition-all hover:bg-accent-strong hover:shadow-[0_4px_20px_rgba(255,183,3,0.45)]"
          >
            Contact me
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close main menu' : 'Open main menu'}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-border-strong md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-border/60 bg-background md:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
