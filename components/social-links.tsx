'use client'

import { FileText, Mail } from 'lucide-react'

import { BlueskyIcon, GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'
import { SOCIAL_LINKS, type SocialLink } from '@/lib/site-data'

function SocialIcon({ icon }: { icon: SocialLink['icon'] }) {
  switch (icon) {
    case 'x':
      return <XIcon className="h-6 w-6" />
    case 'bluesky':
      return <BlueskyIcon className="h-6 w-6" />
    case 'linkedin':
      return <LinkedInIcon className="h-6 w-6" />
    case 'github':
      return <GitHubIcon className="h-6 w-6" />
    case 'mail':
      return <Mail className="h-6 w-6" aria-hidden="true" />
    case 'cv':
      return <FileText className="h-6 w-6" aria-hidden="true" />
  }
}

export function SocialLinks() {
  return (
    <ul className="flex flex-row items-center gap-5">
      {SOCIAL_LINKS.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            aria-label={link.label}
            title={link.label}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="inline-flex cursor-pointer text-accent-strong/60 transition-colors hover:text-accent-strong"
          >
            <SocialIcon icon={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}
