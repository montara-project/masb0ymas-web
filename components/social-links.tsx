"use client";

import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileSpark,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

import { SOCIAL_LINKS, type SocialLink } from "@/lib/data/site-data";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "x":
      return <IconBrandX className="h-6 w-6" />;
    case "bluesky":
      return <IconBrandBluesky className="h-6 w-6" />;
    case "linkedin":
      return <IconBrandLinkedin className="h-6 w-6" />;
    case "github":
      return <IconBrandGithub className="h-6 w-6" />;
    case "mail":
      return <IconMail className="h-6 w-6" aria-hidden="true" />;
    case "cv":
      return <IconFileSpark className="h-6 w-6" aria-hidden="true" />;
  }
}

export function SocialLinks() {
  return (
    <ul className="flex flex-row items-center gap-5">
      {SOCIAL_LINKS.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            aria-label={link.label}
            title={link.label}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="inline-flex cursor-newtab text-accent-strong/60 transition-colors hover:text-accent-strong"
          >
            <SocialIcon icon={link.icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
