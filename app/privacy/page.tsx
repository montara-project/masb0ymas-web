import type { Metadata } from 'next'

import { LegalContent } from '@/components/legal-content'
import { PageHeader, PageShell } from '@/components/page-shell'
import { PRIVACY_LAST_UPDATED, PRIVACY_SECTIONS } from '@/lib/data/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy - masb0ymas',
  description: 'How masb0ymas.com collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" subtitle={`Last updated: ${PRIVACY_LAST_UPDATED}`}>
        Privacy <span className="text-gradient">Policy</span>
      </PageHeader>

      <LegalContent sections={PRIVACY_SECTIONS} />
    </PageShell>
  )
}
