import Image from 'next/image'

import { Reveal } from '@/components/reveal'
import { SocialLinks } from '@/components/social-links'
import { SITE } from '@/lib/data/site-data'

const QUICK_FACTS = [
  { label: 'Based in', value: 'Semarang, Indonesia' },
  { label: 'Building for the web since', value: '2017' },
  { label: 'Daily stack', value: 'React · Node.js · Go' },
]

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-info/30 bg-info/10 px-3 py-1 font-mono text-xs font-semibold text-info-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-strong opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-strong" />
              </span>
              Available for new opportunities
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tighter sm:text-6xl">
              Hi, I&apos;m <span className="text-gradient">{SITE.author}</span>,<br /> a{' '}
              <span className="underline decoration-accent-strong/50 decoration-2 underline-offset-8">
                Software Engineer
              </span>
              .
            </h1>
            <div className="max-w-xl space-y-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              <p>
                I&apos;ve been building for the web since 2017 — shipping products across fintech,
                AI, and Web3, and growing from full-stack developer into technical lead along the
                way.
              </p>
              <p>
                Comfortable across the stack: React and Next.js on the frontend, Node.js and Go on
                the backend, with the DevOps glue in between — CI/CD pipelines, containers, and
                deploys.
              </p>
            </div>
            <dl className="mt-2 flex flex-col gap-2 border-t border-border pt-5 font-mono text-xs tracking-wide text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-8">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="flex gap-2">
                  <dt className="text-muted-foreground/70">{fact.label}</dt>
                  <dd className="font-semibold text-foreground tabular-nums">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col items-center gap-10">
            <div className="relative w-56 sm:w-64">
              <div
                aria-hidden="true"
                className="absolute inset-0 mx-auto -rotate-[5deg] scale-x-95 rounded-lg bg-gradient-to-br from-info/40 to-info/10"
              />
              <Image
                src="/images/profile.jpeg"
                alt={`Profile photo of ${SITE.author}`}
                width={512}
                height={512}
                priority
                className="relative mx-auto w-full rounded-lg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
              />
            </div>
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
