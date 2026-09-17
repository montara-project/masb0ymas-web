import type { ReactNode } from "react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

type SectionHeadingProps = {
  /** Rendered as gradient text, e.g. "Featured" in "Featured Posts". */
  accent: string;
  title: string;
  /** Small mono label above the heading; defaults to `title`. */
  eyebrow?: string;
  subtitle?: string;
};

export function SectionHeading({
  accent,
  title,
  eyebrow,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <span
        aria-hidden="true"
        className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-info-soft uppercase"
      >
        <span className="h-px w-8 bg-gradient-to-r from-info to-transparent" />
        {eyebrow ?? title}
      </span>
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        <span className="text-gradient">{accent}</span> {title}
      </h2>
      {subtitle ? (
        <p className="text-base text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function Section({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20"
    >
      {children}
    </section>
  );
}

export function SeeMoreLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-xl font-bold text-foreground transition-colors duration-300 hover:text-accent-strong md:text-2xl"
    >
      {children}
      <ArrowRight
        className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export function TagChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-info/25 bg-info/10 px-2.5 py-0.5 font-mono text-xs text-info-soft">
      {children}
    </span>
  );
}

/** Shared premium card surface: subtle lift + amber glow on hover. */
export const cardClass =
  "rounded-card border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-strong/40 hover:shadow-[0_16px_40px_-16px_rgba(255,183,3,0.18)]";
