import Image from 'next/image'

import { Reveal } from '@/components/reveal'
import {
  Section,
  SectionHeading,
  SeeMoreLink,
  TagChip,
  cardClass,
} from '@/components/section-parts'
import { FEATURED_POSTS } from '@/lib/site-data'

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
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={post.title}
                className="relative block aspect-video overflow-hidden border-b border-border"
              >
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  sizes="(min-width: 768px) 480px, 100vw"
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
                <h3 className="mt-3 text-lg font-bold leading-snug">
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent-strong"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
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

      <div className="mt-8">
        <SeeMoreLink href="https://masb0ymas.com/blog">See more posts</SeeMoreLink>
      </div>
    </Section>
  )
}
