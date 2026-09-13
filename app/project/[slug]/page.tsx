import type { Metadata } from 'next'

import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PageShell } from '@/components/page-shell'
import { TagChip } from '@/components/section-parts'
import { PROJECT_CONTENT } from '@/lib/content-registry'
import { PROJECTS } from '@/lib/project-data'

export const revalidate = 300

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((entry) => entry.slug === slug)
  if (!project) return { title: 'Project not found - masb0ymas' }
  return { title: `${project.title} - masb0ymas`, description: project.description }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = PROJECTS.find((entry) => entry.slug === slug)
  const Content = PROJECT_CONTENT[slug]
  if (!project || !Content) notFound()

  const liveUrl = `https://masb0ymas.com/project/${project.slug}`

  return (
    <PageShell>
      <article className="mx-auto w-full max-w-3xl pt-8 sm:pt-12">
        <div>
          <Link
            href="/project"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground transition-colors hover:text-accent-strong"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to projects
          </Link>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagChip key={tag}>{tag}</TagChip>
            ))}
          </div>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-card border border-border">
            <Image
              src={project.cover}
              alt={project.coverAlt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mdx-content mt-10">
          <Content />
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-accent-strong transition-colors hover:text-accent"
          >
            View on masb0ymas.com
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </article>
    </PageShell>
  )
}
