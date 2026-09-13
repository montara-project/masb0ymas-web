import type { Metadata } from 'next'

import Image from 'next/image'

import { PageHeader, PageShell } from '@/components/page-shell'
import { Reveal } from '@/components/reveal'
import { TagChip, cardClass } from '@/components/section-parts'
import { BLOG_POSTS, blogPostUrl } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog - masb0ymas',
  description: 'My thoughts and experiences on software development and web technologies.',
}

export const revalidate = 300

export default function BlogPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Blog"
        subtitle="My thoughts and experiences on software development and web technologies"
      >
        <span className="text-gradient">Tech, Web, AI &amp; Web3</span> — insights and tutorials
        from my development journey
      </PageHeader>

      <div className="space-y-4">
        {BLOG_POSTS.map((post, index) => (
          <Reveal key={post.slug} delay={Math.min(index, 4) * 40}>
            <article className={`${cardClass} flex flex-col overflow-hidden sm:flex-row`}>
              <a
                href={blogPostUrl(post.slug)}
                aria-label={post.title}
                className="relative block aspect-[16/9] overflow-hidden border-b border-border sm:aspect-auto sm:w-56 sm:shrink-0 sm:border-b-0 sm:border-r"
              >
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  sizes="(min-width: 640px) 224px, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <time
                  dateTime={post.iso}
                  className="font-mono text-xs font-semibold tracking-wider text-info-soft"
                >
                  {post.date}
                </time>
                <h2 className="mt-2 text-lg font-bold leading-snug">
                  <a
                    href={blogPostUrl(post.slug)}
                    className="transition-colors hover:text-accent-strong"
                  >
                    {post.title}
                  </a>
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {post.tags.map((tag) => (
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
