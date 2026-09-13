import { FeaturedPosts } from '@/components/sections/featured-posts'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Hero } from '@/components/sections/hero'
import { HireCta } from '@/components/sections/hire-cta'
import { OpenSource } from '@/components/sections/open-source'
import { WhatIDo } from '@/components/sections/what-i-do'

export const revalidate = 300

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background spanning hero → CTA: blueprint grid + glows along the scroll.
          Ends before the footer, which lives outside this wrapper. */}
      <div
        aria-hidden="true"
        className="bg-grid-faint pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[6%] right-[6%] -z-10 h-80 w-80 rounded-full bg-info/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[30%] -left-16 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[55%] right-[4%] -z-10 h-72 w-72 rounded-full bg-info/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[6%] left-[8%] -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />

      <Hero />
      <WhatIDo />
      <FeaturedPosts />
      <FeaturedProjects />
      <OpenSource />
      <HireCta />
    </div>
  )
}
