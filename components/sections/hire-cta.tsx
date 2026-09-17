import { Sparkles } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section-parts";
import { SITE } from "@/lib/data/site-data";

export function HireCta() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-card border border-info/25 bg-card px-6 py-14 text-center sm:px-12">
          {/* Gradient hairline on top edge + dual glow */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-strong/70 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 left-1/4 h-48 w-72 rounded-full bg-info/15 blur-3xl"
          />
          <div className="relative">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-strong to-accent text-accent-foreground shadow-[0_8px_24px_rgba(243,91,4,0.4)]">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">
              Boost Your Team with Expert Developers
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              Do you need additional developers as full-time/part-time/freelance
              workers?
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`mailto:${SITE.email}`}
                className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-colors duration-300 hover:bg-accent/80"
              >
                Contact me
              </Link>
              <Link
                href={SITE.contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border-strong bg-background/40 px-6 py-3 text-sm font-bold text-foreground transition-colors duration-300 hover:bg-accent/50"
              >
                Other channels
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
