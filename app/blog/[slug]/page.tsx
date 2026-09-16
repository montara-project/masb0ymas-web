import type { Metadata } from 'next'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PageShell } from '@/components/page-shell'
import { TagChip } from '@/components/section-parts'
import { BLOG_POSTS } from '@/lib/data/blog-data'
import { BLOG_CONTENT } from '@/lib/data/content-registry'

export const revalidate = 300

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((entry) => entry.slug === slug)
  if (!post) return { title: 'Post not found - masb0ymas' }
  return { title: `${post.title} - masb0ymas`, description: post.excerpt }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((entry) => entry.slug === slug)
  const Content = BLOG_CONTENT[slug]
  if (!post || !Content) notFound()

  const index = BLOG_POSTS.indexOf(post)
  const newer = index > 0 ? BLOG_POSTS[index - 1] : null
  const older = index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null

  return (
    <PageShell>
      <article className="mx-auto w-full max-w-3xl pt-8 sm:pt-12">
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground transition-colors hover:text-accent-strong"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to blog
          </Link>

          <time
            dateTime={post.iso}
            className="mt-6 block font-mono text-xs font-semibold tracking-wider text-info-soft"
          >
            {post.date}
          </time>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagChip key={tag}>{tag}</TagChip>
            ))}
          </div>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-card border border-border">
            <Image
              src={post.cover}
              alt={post.coverAlt}
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

        <nav
          aria-label="Post navigation"
          className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
        >
          {older ? (
            <Link
              href={`/blog/${older.slug}`}
              className="group rounded-card border border-border bg-card p-5 transition-colors hover:border-accent-strong/40"
            >
              <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Older post
              </span>
              <span className="mt-2 block font-bold leading-snug transition-colors group-hover:text-accent-strong">
                {older.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link
              href={`/blog/${newer.slug}`}
              className="group rounded-card border border-border bg-card p-5 text-right transition-colors hover:border-accent-strong/40 sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-1.5 font-mono text-xs text-muted-foreground">
                Newer post <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="mt-2 block font-bold leading-snug transition-colors group-hover:text-accent-strong">
                {newer.title}
              </span>
            </Link>
          ) : null}
        </nav>
      </article>
    </PageShell>
  )
}
