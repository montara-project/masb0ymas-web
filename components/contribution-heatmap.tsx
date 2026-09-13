'use client'

import { useEffect, useState } from 'react'

type Contribution = { date: string; count: number; level: number }
type ContributionsData = { total: { lastYear: number }; contributions: Contribution[] }

/** Fire ramp derived from the palette accent #F35B04. */
const LEVEL_COLORS = [
  '#1d1d1f',
  'rgba(243, 91, 4, 0.25)',
  'rgba(243, 91, 4, 0.45)',
  'rgba(243, 91, 4, 0.7)',
  '#f35b04',
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CELL = 10
const GAP = 3

export function ContributionHeatmap() {
  const [data, setData] = useState<ContributionsData | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let active = true
    fetch('https://github-contributions-api.jogruber.de/v4/masb0ymas?y=last')
      .then((response) =>
        response.ok ? response.json() : Promise.reject(new Error(String(response.status)))
      )
      .then((json) => {
        if (active) setData(json as ContributionsData)
      })
      .catch(() => {
        if (active) setFailed(true)
      })
    return () => {
      active = false
    }
  }, [])

  if (failed) return null

  if (!data) {
    return (
      <div aria-hidden="true" className="animate-pulse space-y-3">
        <div className="h-4 w-56 rounded bg-muted" />
        <div className="h-[104px] w-full rounded bg-muted" />
      </div>
    )
  }

  const contributions = data.contributions
  if (contributions.length === 0) return null

  // Columns are weeks (Sun–Sat rows); pad the first week so rows line up.
  const firstWeekday = new Date(`${contributions[0].date}T00:00:00Z`).getUTCDay()
  const cells: (Contribution | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...contributions,
  ]
  const weeks: (Contribution | null)[][] = []
  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7))
  }

  // Label a column when its month differs from the previous labeled one.
  const monthLabels: { column: number; label: string }[] = []
  let lastMonth = -1
  weeks.forEach((week, column) => {
    const first = week.find((cell) => cell !== null)
    if (!first) return
    const month = new Date(`${first.date}T00:00:00Z`).getUTCMonth()
    if (month !== lastMonth) {
      monthLabels.push({ column, label: MONTHS[month] })
      lastMonth = month
    }
  })

  return (
    <div>
      <p className="text-sm font-semibold text-muted-foreground">
        <span className="text-lg font-extrabold text-foreground">
          {data.total.lastYear.toLocaleString('en-US')}
        </span>{' '}
        contributions in the last year
      </p>

      <div className="mt-4 overflow-x-auto pb-1">
        <div className="flex min-w-max gap-[3px]">
          <div
            aria-hidden="true"
            className="flex flex-col gap-[3px] pr-1 font-mono text-[9px] leading-none text-muted-foreground"
          >
            {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((label, row) => (
              <span key={row} style={{ height: CELL, lineHeight: `${CELL}px` }} className="block">
                {label}
              </span>
            ))}
          </div>

          <div>
            <div aria-hidden="true" className="relative mb-1 h-3">
              {monthLabels.map(({ column, label }) => (
                <span
                  key={`${column}-${label}`}
                  style={{ left: column * (CELL + GAP) }}
                  className="absolute font-mono text-[9px] leading-none text-muted-foreground"
                >
                  {label}
                </span>
              ))}
            </div>

            <div
              role="img"
              aria-label={`Contribution heatmap: ${data.total.lastYear} contributions in the last year`}
              className="flex gap-[3px]"
            >
              {weeks.map((week, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }, (_, rowIndex) => {
                    const cell = week[rowIndex]
                    if (!cell) {
                      return <span key={rowIndex} style={{ width: CELL, height: CELL }} />
                    }
                    return (
                      <span
                        key={rowIndex}
                        title={`${cell.count} contribution${cell.count === 1 ? '' : 's'} on ${cell.date}`}
                        style={{
                          width: CELL,
                          height: CELL,
                          backgroundColor: LEVEL_COLORS[cell.level] ?? LEVEL_COLORS[0],
                        }}
                        className="rounded-[2px]"
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[9px] text-muted-foreground"
      >
        Less
        {LEVEL_COLORS.map((color) => (
          <span
            key={color}
            style={{ backgroundColor: color }}
            className="h-[10px] w-[10px] rounded-[2px]"
          />
        ))}
        More
      </div>
    </div>
  )
}
