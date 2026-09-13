import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow: string
  children: ReactNode
  subtitle?: string
}

/** Consistent page intro: mono eyebrow, large title, subtitle. */
export function PageHeader({ eyebrow, children, subtitle }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-3 pb-12 pt-16 sm:pb-16 sm:pt-24">
      <span
        aria-hidden="true"
        className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-info-soft uppercase"
      >
        <span className="h-px w-8 bg-gradient-to-r from-info to-transparent" />
        {eyebrow}
      </span>
      <h1 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl sm:leading-tight">
        {children}
      </h1>
      {subtitle ? (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      ) : null}
    </header>
  )
}

/** Wraps a page: ambient background (grid + glows) + centered container. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid-faint pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[6%] right-[6%] -z-10 h-80 w-80 rounded-full bg-info/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[40%] -left-16 -z-10 h-72 w-72 rounded-full bg-info/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[8%] -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6">{children}</div>
    </div>
  )
}
