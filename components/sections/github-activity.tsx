import { ContributionHeatmap } from '@/components/contribution-heatmap'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading, cardClass } from '@/components/section-parts'
import { GITHUB_STATS_CARD_URL, GITHUB_STREAK_CARD_URL } from '@/lib/data/site-data'

export function GithubActivity() {
  return (
    <Section id="activity">
      <SectionHeading
        accent="Github"
        title="Activity"
        eyebrow="Consistency"
        subtitle="My contribution activity over the last year"
      />

      <div className="mt-10 space-y-4">
        <Reveal>
          <div className={`${cardClass} p-6`}>
            <ContributionHeatmap />
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className={`${cardClass} flex h-full items-center justify-center p-6`}>
              {/* Remote generated streak card, colors matched to the site palette */}
              <img
                src={GITHUB_STREAK_CARD_URL}
                alt="GitHub streak statistics for masb0ymas"
                width={400}
                height={195}
                loading="lazy"
                className="w-full max-w-md"
              />
            </div>
          </Reveal>
          <Reveal delay={60} className="h-full">
            <div className={`${cardClass} flex h-full items-center justify-center p-6`}>
              {/* Remote generated stats card from grs.masb0ymas.com, colors matched to the site palette */}
              <img
                src={GITHUB_STATS_CARD_URL}
                alt="GitHub statistics card for masb0ymas"
                width={495}
                height={195}
                loading="lazy"
                className="w-full max-w-md"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
