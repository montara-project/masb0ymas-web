import Image from 'next/image'

import { Reveal } from '@/components/reveal'
import { SocialLinks } from '@/components/social-links'
import { SITE } from '@/lib/site-data'

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-info/30 bg-info/10 px-3 py-1 font-mono text-xs font-semibold text-info-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-strong opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-strong" />
              </span>
              Available for new opportunities
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
              Hi, I&apos;m <span className="text-gradient">{SITE.author}</span>,<br /> a{' '}
              <span className="underline decoration-accent-strong/50 decoration-2 underline-offset-8">
                Software Engineer
              </span>
              .
            </h1>
            <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              <p>
                My software engineering journey, which began in 2017, has provided me with a strong
                understanding of software development lifecycle and principles. I&apos;ve actively
                pursued opportunities to expand my skill set, including developing junior-level
                expertise in web3.
              </p>
              <p>
                I excel at tackling complex problems, fostering collaborative team dynamics, and
                navigating project challenges with a solution-oriented mindset. My capacity to
                quickly adapt to new technologies and manage stressful situations has consistently
                proven valuable.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col items-center gap-10">
            <div className="group relative w-56 sm:w-64">
              <div
                aria-hidden="true"
                className="absolute inset-0 mx-auto -rotate-[5deg] scale-x-95 rounded-lg bg-gradient-to-br from-info/40 to-info/10 transition-transform duration-300 group-hover:rotate-[3deg]"
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
