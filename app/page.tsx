import { PageShell } from '@/components/page-shell'
import { FeaturedPosts } from '@/components/sections/featured-posts'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { GithubActivity } from '@/components/sections/github-activity'
import { Hero } from '@/components/sections/hero'
import { HireCta } from '@/components/sections/hire-cta'
import { OpenSource } from '@/components/sections/open-source'
import { WhatIDo } from '@/components/sections/what-i-do'

export const revalidate = 300

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <WhatIDo />
      <FeaturedPosts />
      <FeaturedProjects />
      <OpenSource />
      <GithubActivity />
      <HireCta />
    </PageShell>
  )
}
