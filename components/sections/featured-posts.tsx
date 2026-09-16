import Image from 'next/image'

import { Reveal } from '@/components/reveal'
import {
  Section,
  SectionHeading,
  SeeMoreLink,
  TagChip,
  cardClass,
} from '@/components/section-parts'
import { FEATURED_POSTS } from '@/lib/data/site-data'

export function FeaturedPosts() {
  return (
    <Section id="posts">
      <SectionHeading
        accent="Featured"
        title="Posts"
        eyebrow="Blog"
        subtitle="Some articles I've written"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {FEATURED_POSTS.map((post, index) => (
          <Reveal key={post.title} delay={index * 60} className="h-full">
            <article className={`${cardClass} flex h-full flex-col overflow-hidden`}>
              <a href={post.href} className="group flex h-full flex-col">
                <span className="relative block aspect-video overflow-hidden border-b border-border">
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    fill
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <time
                    dateTime={post.iso}
                    className="font-mono text-xs font-semibold tracking-wider text-info-soft"
                  >
                    {post.date}
                  </time>
                  <h3 className="mt-3 text-lg font-bold leading-snug transition-colors group-hover:text-accent-strong">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto flex flex-wrap gap-2 pt-4">
                    {post.tags.map((tag) => (
                      <TagChip key={tag}>{tag}</TagChip>
                    ))}
                  </span>
                </span>
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <SeeMoreLink href="/blog">See more posts</SeeMoreLink>
      </div>
    </Section>
  )
}
