'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { NAV_LINKS, SITE } from '@/lib/data/site-data'

const CONTACT_LABEL = 'Contact'

/** Nav links excluding the contact entry — it renders as the CTA button instead. */
const NAV_ITEMS = NAV_LINKS.filter((link) => link.href !== SITE.contactUrl)

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const linkClass = (active: boolean) =>
    `relative rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
      active ? 'text-foreground' : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight transition-colors hover:text-accent-strong"
        >
          masb<span className="text-accent">0</span>ymas
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={linkClass(active)}
              >
                {link.label}
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-accent-strong"
                  />
                ) : null}
              </Link>
            )
          })}
          <a
            href={SITE.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 cursor-pointer rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-all duration-200 hover:bg-accent/80 active:scale-[0.98]"
          >
            {CONTACT_LABEL}
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
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_ITEMS.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-card hover:text-foreground ${
                    active ? 'text-accent-strong' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
