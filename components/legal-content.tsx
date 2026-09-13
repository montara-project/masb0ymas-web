import type { LegalBlock } from '@/lib/legal'

import { SITE } from '@/lib/site-data'

function ContactLines() {
  return (
    <ul className="mt-3 space-y-1.5">
      <li>
        Email:{' '}
        <a
          href={`mailto:${SITE.email}`}
          className="font-semibold text-accent-strong transition-colors hover:text-accent"
        >
          {SITE.email}
        </a>
      </li>
      <li>
        Website:{' '}
        <a
          href={SITE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent-strong transition-colors hover:text-accent"
        >
          masb0ymas.com
        </a>
      </li>
    </ul>
  )
}

function BlockBody({ block }: { block: LegalBlock }) {
  return (
    <>
      {block.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-3 leading-7 text-muted-foreground">
          {paragraph}
        </p>
      ))}

      {block.bullets ? (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7 text-muted-foreground marker:text-accent">
          {block.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {block.contact ? <ContactLines /> : null}

      {block.trailing ? (
        <p className="mt-3 leading-7 text-muted-foreground">{block.trailing}</p>
      ) : null}
    </>
  )
}

/** Renders structured legal content (privacy policy / terms of service). */
export function LegalContent({ sections }: { sections: LegalBlock[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-xl font-extrabold tracking-tight text-foreground">
            {section.heading}
          </h2>
          <BlockBody block={section} />

          {section.subSections?.map((sub) => (
            <div key={sub.heading} className="mt-5">
              <h3 className="font-bold text-foreground">{sub.heading}</h3>
              <BlockBody block={sub} />
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
