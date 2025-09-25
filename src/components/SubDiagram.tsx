import { useEffect, useState } from 'react'

type VB = { minX: number; minY: number; width: number; height: number }

export type SubHotspot = {
  id: string
  x: number; y: number; w: number; h: number
  rx?: number
  label?: string
  kind?: 'info' | 'link'   // <-- add
  content?: string         // used when kind:'info'
  navigateTo?: string      // used when kind:'link'
}

async function readViewBox(src: string): Promise<VB | null> {
  const txt = await fetch(src).then(r => r.text())
  const m = txt.match(/viewBox\s*=\s*"([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)"/i)
  if (!m) return null
  const [, minX, minY, width, height] = m
  return { minX: +minX, minY: +minY, width: +width, height: +height }
}

export default function SubDiagram({
  src,
  hotspots,
  onSelect,
}: {
  src: string
  hotspots: SubHotspot[]
  onSelect: (h: SubHotspot | null) => void
}) {
  const [vb, setVb] = useState<VB | null>(null)

  useEffect(() => { readViewBox(src).then(setVb).catch(() => setVb(null)) }, [src])

  if (!vb) return <div className="diagram-wrap"><img src={src} alt="Step sub-diagram" /></div>

  return (
    <div className="diagram-wrap">
      <svg
        viewBox={`${vb.minX} ${vb.minY} ${vb.width} ${vb.height}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Step sub-diagram"
        style={{ display: 'block', width: '100%', height: 'auto' }}
      >
        <image
          href={src}
          x={vb.minX} y={vb.minY}
          width={vb.width} height={vb.height}
          preserveAspectRatio="xMidYMid meet"
          style={{ pointerEvents: 'none' }}
        />
        {hotspots.map(h => {
          const rectEl = (
            <rect
              key={h.id}
              className="hotspot"
              x={h.x} y={h.y} width={h.w} height={h.h}
              rx={h.rx ?? 0}
              fill="transparent" stroke="transparent" strokeWidth={2}
              vectorEffect="non-scaling-stroke"
              // keep onClick only for info hotspots
              onClick={h.kind === 'info' ? () => onSelect(h) : undefined}
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && h.kind === 'info' ? onSelect(h) : undefined}
              aria-label={h.label ?? 'Show details'}
              style={{ cursor: 'pointer' }}
            />
          )

          if (h.kind === 'link' && h.navigateTo) {
            // IMPORTANT: HashRouter wants a hash link; ensure we get "#/steps/…"
            const clean = h.navigateTo.replace(/^#?\/?/, '')      // strip leading # or /
            const href = `#/${clean}`                             // make "#/steps/…"
            return (
              <a key={h.id} href={href}>
                {rectEl}
              </a>
            )
          }

          return rectEl
        })}
      </svg>
    </div>
  )
}

export type { VB }
