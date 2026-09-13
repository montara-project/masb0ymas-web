'use client'

import { ArrowUpRight } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import {
  Section,
  SectionHeading,
  SeeMoreLink,
  TagChip,
  cardClass,
} from '@/components/section-parts'
import { FEATURED_PROJECTS } from '@/lib/site-data'

export function FeaturedProjects() {
  return (
    <Section id="projects">
      <SectionHeading
        accent="Featured"
        title="Projects"
        eyebrow="Portfolio"
        subtitle="Some projects I've created and open source projects"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {FEATURED_PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 60} className="h-full">
            <article className={`${cardClass} flex h-full flex-col p-6`}>
              <h3 className="text-lg font-bold">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent-strong"
                >
                  {project.title}
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                    aria-hidden="true"
                  />
                </a>
              </h3>
              <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag) => (
                  <TagChip key={tag}>{tag}</TagChip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <SeeMoreLink href="https://masb0ymas.com/project">See more projects</SeeMoreLink>
      </div>
    </Section>
  )
}
