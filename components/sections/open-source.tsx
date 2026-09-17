'use client'

import Link from "next/link";

import { Reveal } from '@/components/reveal'
import { Section, SectionHeading, SeeMoreLink } from '@/components/section-parts'
import { OPEN_SOURCE_REPOS, repoCardImage, repoUrl } from '@/lib/data/site-data'

export function OpenSource() {
  return (
    <Section id="open-source">
      <SectionHeading
        accent="Github"
        title="Open Source"
        eyebrow="Contributions"
        subtitle="Some open source I've created"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {OPEN_SOURCE_REPOS.map((entry, index) => (
          <Reveal key={entry.repo} delay={index * 60}>
            <Link
              href={repoUrl(entry.repo)}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-card cursor-newtab transition-all duration-300 hover:-translate-y-1"
            >
              {/* Remote generated card from grs.masb0ymas.com, same as the production site */}
              <img
                src={repoCardImage(entry.repo)}
                alt={`GitHub repository card for masb0ymas/${entry.repo}`}
                width={400}
                height={200}
                loading="lazy"
                className="w-full rounded-card ring-1 ring-border transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(33,158,188,0.35)]"
              />
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <SeeMoreLink href="https://github.com/masb0ymas?tab=repositories">
          See more open source
        </SeeMoreLink>
      </div>
    </Section>
  )
}
