import { useMemo, useState, useEffect } from 'react'
import { useRefPanel } from '../context/ref-context'
import { assetUrl } from '../lib/assetUrl'
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

export default function SubDiagram({ src, hotspots, onSelect }: {
  src: string
  hotspots: SubHotspot[]
  onSelect?: (h: SubHotspot | null) => void  // keep optional for future
}) {
  const { openRef } = useRefPanel() 
  const resolvedSrc = useMemo(() => assetUrl(src.replace(/^\/+/, '')), [src])
  const [vb, setVb] = useState<VB | null>(null)

 useEffect(() => {
    console.log('[SubDiagram] loading:', resolvedSrc)
    readViewBox(resolvedSrc).then(setVb).catch(err => {
      console.error('[SubDiagram] viewBox error:', err)
      setVb(null)
    })
  }, [resolvedSrc])

  if (!vb) return <div className="diagram-wrap"><img src={resolvedSrc} alt="Step sub-diagram" /></div>

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
          href={resolvedSrc}
          x={vb.minX} y={vb.minY}
          width={vb.width} height={vb.height}
          preserveAspectRatio="xMidYMid meet"
          style={{ pointerEvents: 'none' }}
        />

        {hotspots.map(h => {
          const rectProps = {
            className: 'hotspot',
            x: h.x, y: h.y, width: h.w, height: h.h, rx: h.rx ?? 0,
            fill: 'transparent', stroke: 'transparent', strokeWidth: 2,
            vectorEffect: 'non-scaling-stroke' as const,
            tabIndex: 0,
            style: { cursor: 'pointer' },
            'aria-label': h.label ?? 'Show details',
          }

          if (h.kind === 'link' && h.navigateTo) {
            const clean = h.navigateTo.replace(/^#?\/?/, '')
            const href = `#/${clean}`
            return (
              <a key={h.id} href={href}>
                <rect {...rectProps} />
              </a>
            )
          }

          // kind: 'info' -> open the global ref panel
          return (
            <rect
              key={h.id}
              {...rectProps}
              onClick={() => {
                openRef(h.id)
                onSelect?.(h) // harmless; do nothing else with this upstream
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openRef(h.id)
                  onSelect?.(h)
                }
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}
export type { VB }
