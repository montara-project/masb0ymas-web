import type { Metadata } from 'next'

import { LegalContent } from '@/components/legal-content'
import { PageHeader, PageShell } from '@/components/page-shell'
import { TERMS_LAST_UPDATED, TERMS_SECTIONS } from '@/lib/data/legal'

export const metadata: Metadata = {
  title: 'Terms of Service - masb0ymas',
  description: 'Terms and conditions for using masb0ymas.com.',
}

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" subtitle={`Last updated: ${TERMS_LAST_UPDATED}`}>
        Terms of <span className="text-gradient">Service</span>
      </PageHeader>

      <LegalContent sections={TERMS_SECTIONS} />
    </PageShell>
  )
}
