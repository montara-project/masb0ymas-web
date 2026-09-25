import Link from 'next/link'

import { PageShell } from '@/components/page-shell'

export default function NotFound() {
  return (
    <PageShell>
      <div className="flex min-h-[60dvh] flex-col items-center justify-center py-20 text-center">
        <p
          aria-hidden="true"
          className="text-gradient font-mono text-7xl font-extrabold tracking-tighter sm:text-8xl"
        >
          404
        </p>
        <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
          This page took a wrong turn
        </h1>
        <p className="mt-3 max-w-md text-pretty text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or was moved. The blog and projects
          are still right where you left them.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-all duration-200 hover:bg-accent/80 active:scale-[0.98]"
          >
            Back to home
          </Link>
          <Link
            href="/blog"
            className="rounded-md border border-border-strong px-6 py-3 text-sm font-bold text-foreground transition-colors duration-200 hover:border-accent-strong/50 hover:text-accent-strong"
          >
            Read the blog
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
