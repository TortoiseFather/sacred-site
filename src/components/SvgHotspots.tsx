import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { steps } from '../data/steps'
import sacredUrl from '../assets/sacred.svg'   // normal import, no ?raw

type VB = { minX: number; minY: number; width: number; height: number }

const STEP_HOTSPOTS = [
  { slug: steps[0].slug, x: 0,   y: 210, w: 80, h: 40 },
  { slug: steps[1].slug, x: 105, y: 210, w: 80, h: 40 },
  { slug: steps[2].slug, x: 208, y: 210, w: 80, h: 40 },
  { slug: steps[3].slug, x: 307, y: 210, w: 80, h: 40 },
  { slug: steps[4].slug, x: 302, y: 70,  w: 90, h: 29 },
  { slug: steps[5].slug, x: 568, y: 210, w: 80, h: 40 },
  { slug: steps[6].slug, x: 668, y: 210, w: 80, h: 40 },
  { slug: steps[7].slug, x: 766, y: 210, w: 80, h: 40 },
] as const

export type Secondary = {
  id: string; label: string;
  x: number; y: number; w: number; h: number;
  content: string;
}

const SECONDARY: Secondary[] = [
  { id: 'initial-odm', label: 'Initial ODM', x: 60,  y: 128, w: 86, h: 43,
    content: 'The Operational Domain Model is a representation of a given environment as it is understood by any given system. In our context, it scopes the environment in which the railway system operates, ensuring the system only functions within conditions where safety can be assured. The development of the initial ODM is therefore a high-level look at the chosen environment describing infrastructure, environmental conditions, and operational assumptions.' },
  { id: 'scenario-definition', label: 'Scenario Definition', x: 150, y: 128, w: 86, h: 43,
    content: 'The Scenario Definition is the particular set of actions and events that the AS may undertake in order to achieveits objectives and the capabilities in which the system is able to undertake in an autonomous manner. Put simply, the Scenario Definition is the specific system and the boundaries in which the ODM exists.'},
  { id: 'ego-hazard', label: 'Ego Hazard Analysis', x: 163, y: 288, w: 86, h: 43,
    content: 'The ego-vehicle is the system under design or evaluation, in our case, the cab. It is the focal point of SACRED analysis because it is the only element we assume to be under our direct control. An ego-hazard is any unsafe condition that arises at the level of the vehicle itself which we are to assume responsibility for.' },
  { id: 'eco-hazard', label: 'ECO Hazard Analysis', x: 249, y: 288, w: 86, h: 43,
    content: 'The ecosystem is the complete operational environment surrounding the ego-vehicle. It encompasses fixed infrastructure (track, signals, bridges, tunnels, stations), supporting systems (signallers, control centres, maintenance regimes), and external actors (road users at level crossings, trespassers, weather conditions). Unlike the ego-vehicle, the ecosystem is not directly controllable; it is instead shaped through standards, operating procedures, inspection, and human decision-making. An eco-hazard is any unsafe condition that originates from the ecosystem.' },
  { id: 'incident-reports', label: 'Incident Reports', x: 267, y: 128, w: 86, h: 43,
    content: 'Evidence from past events/precursors to challenge assumptions and seed requirements. Within the UK, incident reports are typically produced by the RAIB and verified by the RSSB.' },
  { id: 'reaction-capturing', label: 'Reaction Capturing', x: 351, y: 128, w: 86, h: 43,
    content: 'Documenting observed responses (human/automated) to inform failure handling & SOC transitions.' },
  { id: 'criticality', label: 'Criticality Determination', x: 426, y: 30,  w: 88, h: 50,
    content: 'Re-rank hazards by their operational impact given validated requirements and context.' },
  { id: 'odm-verification', label: 'ODM Verification', x: 426, y: 80,  w: 88, h: 50,
    content: 'Check the ODM against evidence; if gaps remain, iterate prior steps before proceeding.' },
  {
  id: 'legend',
  label: 'Legend',
  x: 600, y: 10, w: 199, h: 60,
  content: `Welcome to the Safe Autonomy of Complex Railway Environments within a Digital space (SACRED).
This website is a walkthrough of the methodology. The graphic above shows the entire process.
Clicking a step takes you to its page; clicking key terms here reveals short definitions (use the step pages for longer definitions).

SACRED has seven steps grouped into three objectives. Items shown in red (Concept, ODM, Scenario Definition) are given inputs for the walkthrough.
Objective 1 (green) scopes the complex environment;
Objective 2 (teal) validates the ODM against historical evidence;
Objective 3 (yellow) verifies the ODM using state-of-the-art technology. We show Simulation Mapping as the simplest verification route, but any SoTA representation that supports a SOC is acceptable.

Shapes: squares = steps, circles = single documents, parallelograms = questions/decisions.`
},
{
  id: 'id-of-components',
  label: 'Component Identification',
  x: 188, y: 350, w: 116, h: 40,
  content: `A decision point: can we fully represent the concept, compartmentalise hazards, and understand the route? 
  If yes, proceed to Step 3. Otherwise the route is not fit for this scenario and the concept must be narrowed.`
},
  ]
async function getViewBox(): Promise<VB | null> {
  const res = await fetch(sacredUrl)
  if (!res.ok) {
    console.error('Failed to fetch sacred.svg:', res.status, res.statusText)
    return null
  }
  const txt = await res.text()
  const m = txt.match(/viewBox\s*=\s*"([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)"/i)
  if (!m) return null
  const [, minX, minY, width, height] = m
  return { minX: +minX, minY: +minY, width: +width, height: +height }
}

export default function SvgHotspots({
  onSecondarySelect,
}: {
  onSecondarySelect?: (s: Secondary | null) => void
}) {
  const nav = useNavigate()
  const [vb, setVb] = useState<VB | null>(null)

  useEffect(() => { getViewBox().then(setVb).catch(() => setVb(null)) }, [])

  if (!vb) {
    return (
      <div className="diagram-wrap">
        <img src={sacredUrl} alt="SACRED overview" />
      </div>
    )
  }

  return (
    <div className="diagram-wrap">
      <svg
        viewBox={`${vb.minX} ${vb.minY} ${vb.width} ${vb.height}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="SACRED overview with interactive hotspots"
        style={{ display: 'block', width: '100%', height: 'auto' }}
      >
        {/* base diagram */}
        <image
          href={sacredUrl}
          x={vb.minX}
          y={vb.minY}
          width={vb.width}
          height={vb.height}
          preserveAspectRatio="xMidYMid meet"
          style={{ pointerEvents: 'none' }}
        />

        {/* step hotspots */}
        {STEP_HOTSPOTS.map(r => (
          <rect
            key={r.slug}
            className="hotspot"
            x={r.x} y={r.y} width={r.w} height={r.h}
            fill="transparent" stroke="transparent" strokeWidth={2}
            vectorEffect="non-scaling-stroke"
            onClick={() => nav(`/steps/${r.slug}`)}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && nav(`/steps/${r.slug}`)}
            aria-label={`Open ${r.slug.replace(/^[0-9]-/,'').replace(/-/g,' ')}`}
          />
        ))}

        {/* secondary hotspots */}
        {SECONDARY.map(s => (
          <rect
            key={s.id}
            className="hotspot secondary"
            x={s.x} y={s.y} width={s.w} height={s.h}
            fill="transparent" stroke="transparent" strokeWidth={2}
            vectorEffect="non-scaling-stroke"
            onClick={() => onSecondarySelect?.(s)}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSecondarySelect?.(s)}
            aria-label={`${s.label}: show details`}
          />
        ))}
      </svg>
    </div>
  )
}