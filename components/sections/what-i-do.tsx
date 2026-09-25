'use client'

import type { ComponentType } from 'react'

import { CodeXml, Layers, PlugZap, Rocket, ServerCog, Users } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/section-parts'
import { SERVICES } from '@/lib/data/site-data'

const SERVICE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  frontend: CodeXml,
  uiux: Layers,
  integration: PlugZap,
  backend: ServerCog,
  devops: Rocket,
  leadership: Users,
}

export function WhatIDo() {
  return (
    <Section id="what-i-do">
      <SectionHeading
        accent="What"
        title="I do"
        eyebrow="Services"
        subtitle="Delivering high-quality web solutions with modern technologies and best practices"
      />

      <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
        {SERVICES.map((service, index) => {
          const Icon = SERVICE_ICONS[service.icon]
          return (
            <Reveal key={service.title} delay={index * 50}>
              <div className="group flex gap-5 border-t border-border py-7 transition-colors duration-300 hover:border-accent-strong/50 sm:py-8">
                <span
                  aria-hidden="true"
                  className="font-mono text-sm font-semibold text-muted-foreground/60 tabular-nums transition-colors duration-300 group-hover:text-accent-strong"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
                    {service.title}
                    <Icon
                      className="h-4 w-4 text-muted-foreground/60 transition-colors duration-300 group-hover:text-accent-strong"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
