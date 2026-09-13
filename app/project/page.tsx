import type { Metadata } from 'next'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import { PageHeader, PageShell } from '@/components/page-shell'
import { Reveal } from '@/components/reveal'
import { TagChip, cardClass } from '@/components/section-parts'
import { PROJECTS, projectUrl } from '@/lib/project-data'

export const metadata: Metadata = {
  title: 'Projects - masb0ymas',
  description:
    'Project showcase: web, mobile and backend development from my professional journey, including company work and open source.',
}

export const revalidate = 300

export default function ProjectPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Project"
        subtitle="Web, mobile and backend development from my professional journey — including company work and open source."
      >
        <span className="text-gradient">Project Showcase</span>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.slug} delay={Math.min(index, 4) * 60} className="h-full">
            <article className={`${cardClass} flex h-full flex-col overflow-hidden`}>
              <a
                href={projectUrl(project.slug)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.title}
                className="relative block aspect-video overflow-hidden border-b border-border"
              >
                <Image
                  src={project.cover}
                  alt={project.coverAlt}
                  fill
                  sizes="(min-width: 640px) 480px, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-bold">
                  <a
                    href={projectUrl(project.slug)}
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
                </h2>
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <TagChip key={tag}>{tag}</TagChip>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </PageShell>
  )
}
