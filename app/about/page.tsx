import type { Metadata } from 'next'

import { PageHeader, PageShell } from '@/components/page-shell'
import { Reveal } from '@/components/reveal'
import { SectionHeading, cardClass } from '@/components/section-parts'
import { EDUCATION, EXPERIENCE } from '@/lib/data/about-data'
import { SITE } from '@/lib/data/site-data'

export const metadata: Metadata = {
  title: 'About - masb0ymas',
  description:
    'The professional journey of N. Fajri, a Software Engineer: work experience, achievements, and education.',
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/60 px-3 py-2">
      <p className="font-mono text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-bold text-foreground">{value}</p>
    </div>
  )
}

function BulletList({
  items,
  tone,
  label,
}: {
  items: readonly string[]
  tone: 'accent' | 'info'
  label: string
}) {
  return (
    <div>
      <p className="text-xs font-extrabold tracking-wider text-foreground uppercase">{label}</p>
      <ul
        className={`mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground marker:text-xs ${
          tone === 'accent' ? 'marker:text-accent' : 'marker:text-info'
        }`}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        subtitle="The journey, the work, and the learning behind the code."
      >
        Hi, I&apos;m <span className="text-gradient">{SITE.author}</span>, a Software Engineer.
      </PageHeader>

      <Reveal>
        <div className="-mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          <p>
            My software engineering journey, which began in 2017, has provided me with a strong
            understanding of software development lifecycle and principles. I&apos;ve actively
            pursued opportunities to expand my skill set, including developing junior-level
            expertise in web3.
          </p>
          <p>
            I excel at tackling complex problems, fostering collaborative team dynamics, and
            navigating project challenges with a solution-oriented mindset. My capacity to quickly
            adapt to new technologies and manage stressful situations has consistently proven
            valuable.
          </p>
        </div>
      </Reveal>

      <section id="experience" className="mt-20">
        <SectionHeading
          accent="Professional"
          title="Experience"
          eyebrow="Career"
          subtitle="Detailed career journey and achievements."
        />

        <ol className="mt-10 space-y-10 border-l border-border pl-8">
          {EXPERIENCE.map((job, index) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[37px] h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15"
              />
              <Reveal delay={Math.min(index, 4) * 50}>
                <div className={`${cardClass} p-6`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-extrabold tracking-tight">{job.company}</h3>
                    <span className="rounded-full border border-info/25 bg-info/10 px-2.5 py-0.5 font-mono text-xs text-info-soft">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-accent-strong">
                    {job.role}
                    <span className="font-semibold text-muted-foreground"> · {job.location}</span>
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{job.description}</p>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {job.stats.map((stat) => (
                      <Stat key={stat.label} label={stat.label} value={stat.value} />
                    ))}
                  </div>

                  <div className="mt-5 space-y-4 border-t border-border pt-5">
                    <BulletList items={job.contributions} tone="accent" label="Contributions" />
                    {job.achievements ? (
                      <BulletList items={job.achievements} tone="info" label="Achievements" />
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section id="education" className="mt-20">
        <SectionHeading
          accent="Education"
          title="& Learning"
          eyebrow="Study"
          subtitle="Formal and non-formal educational journey that shaped technical foundations and character."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {EDUCATION.map((entry, index) => (
            <Reveal key={entry.field} delay={index * 60} className="h-full">
              <div className={`${cardClass} flex h-full flex-col p-6`}>
                <h3 className="text-lg font-extrabold tracking-tight">{entry.field}</h3>
                <p className="mt-2 text-sm font-semibold text-accent-strong">{entry.program}</p>
                <p className="mt-auto pt-4 font-mono text-xs font-semibold tracking-wider text-muted-foreground">
                  {entry.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
