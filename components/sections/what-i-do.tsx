'use client'

import type { ComponentType } from 'react'

import { CodeXml, Layers, PlugZap, Rocket, ServerCog, Users } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { Section, SectionHeading, cardClass } from '@/components/section-parts'
import { SERVICES } from '@/lib/site-data'

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

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => {
          const Icon = SERVICE_ICONS[service.icon]
          return (
            <Reveal key={service.title} delay={index * 60} className="h-full">
              <div className={`${cardClass} group h-full p-6`}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-info/15 text-info-soft transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
