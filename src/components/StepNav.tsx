import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { steps as rawSteps } from '../data/steps'
import { examplesByStep } from '../data/examples'
import { useRefPanel } from '../context/ref-context'
import { getRefTitleAny } from '../data/refs'

/** ---- Types ---- */
type RefId = string

type HotspotKind = 'link' | 'info'
interface SubHotspot {
  id: string
  label: string
  kind: HotspotKind
  navigateTo?: string
  x: number
  y: number
  w: number
  h: number
  isDictionary?: boolean
}

interface Step {
  number: number
  title: string
  slug: string
  subHotspots?: SubHotspot[]
}

const steps = rawSteps as Step[]
const GROUPS: Record<
  string,
  {
    artefacts: RefId[]
    deliverables: RefId[]
  }
> = {
  '0-preliminary': {
    artefacts: ['0a', '0b'],
    deliverables: ['d0'],
  },
  '1-concept-assurance': {
    artefacts: ['a', 'b', 'c', 'd'],
    deliverables: ['d1', 'd2'],
  },
  '2-hazard-identification': {
    artefacts: ['b','c','e'],
    deliverables: ['d3', 'd4', 'd5', 'd6', 'd7'],
  },
  '3-requirements':{
    artefacts:['d5','d7','f','g'],
    deliverables:['d8','d9','d10']
  },
  '4-metrics':{
    artefacts:['d6','d8','d10'],
    deliverables:['d11','d12','d13','d14','d15']
  },
  '5-safety-actualisation':{
    artefacts:['d7','d10','d15'],
    deliverables:['d16']
  },
  '6-design-assurance':{
    artefacts:['a','d9','d10','d16'],
    deliverables:['d17','d18','d19']
  },
  '7-soc':{
    artefacts:['n/a.'],
    deliverables:['n/a']
  }
}

/** Helpers */
function refTitle(stepSlug: string, id: string): string {
  return (
    examplesByStep[stepSlug as keyof typeof examplesByStep]?.[id as keyof (typeof examplesByStep)[string]]?.title ??
    getRefTitleAny(id) ??
    id.toUpperCase()
  )
}

type DictItem = {
  stepSlug: string
  stepNumber: number
  id: string
  title: string
  to: string
}

/** Type guard for a dictionary hotspot */
const isDictionaryId = (id: string) => /^\d+(?:\.\d+)*-e$/.test(id)

export default function StepNav() {
  const { pathname, hash } = useLocation()
  const { openRef } = useRefPanel()
  const [openStep, setOpenStep] = useState<string | null>(null)
  const [openGroup, setOpenGroup] = useState<Record<string, 'artefacts' | 'deliverables' | null>>({})
  const [openDictionary, setOpenDictionary] = useState(false)

  // pick the active step based on the current route/hash
  const activeSlug = useMemo(() => {
    // /#/steps/<slug> or /#/steps/<slug>/examples/<id>
    const m = (hash || pathname).match(/\/steps\/([^/]+)/)
    return m?.[1] ?? steps[0]?.slug ?? ''
  }, [pathname, hash])

  const toggleStep = (slug: string) => {
    setOpenStep(prev => (prev === slug ? null : slug))
    setOpenGroup(g => ({ ...g, [slug]: null }))
  }

  const toggleGroup = (slug: string, group: 'artefacts' | 'deliverables') => {
    setOpenGroup(g => ({ ...g, [slug]: g[slug] === group ? null : group }))
  }

  // Collect dictionary pages once
  const dictionaryItems = useMemo<DictItem[]>(() => {
    const items: DictItem[] = []
    for (const step of steps) {
      const subs = step.subHotspots ?? []
      for (const h of subs) {
        if (h?.id && (h.isDictionary || isDictionaryId(h.id))) {
          const id = h.id
          const stepSlug = step.slug
          items.push({
            stepSlug,
            stepNumber: step.number,
            id,
            title: refTitle(stepSlug, id),
            to: `/steps/${stepSlug}/examples/${id}`,
          })
        }
      }
    }
    items.sort((a, b) => (a.stepNumber - b.stepNumber) || a.id.localeCompare(b.id))
    return items
  }, [])

  return (
    <nav aria-label="SACRED steps" className="step-nav">
      <div className="nav-header">Steps</div>

      {/* Dictionary */}
      {dictionaryItems.length > 0 && (
        <div className="nav-item">
          <button
            type="button"
            className="nav-step"
            onClick={() => setOpenDictionary(v => !v)}
            aria-expanded={openDictionary}
          >
            <div className="nav-step-title">Dictionary</div>
            <span className="chev">{openDictionary ? '▾' : '▸'}</span>
          </button>

          {openDictionary && (
            <ul className="group-list" style={{ marginTop: 6 }}>
              {dictionaryItems.map((item) => (
                <li key={`${item.stepSlug}:${item.id}`}>
                  <Link
                    className="ref-link"
                    to={item.to}
                    title={item.title}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Steps tree */}
      {steps.map(step => {
        const isActive = step.slug === activeSlug
        const isOpen = openStep === step.slug
        const groups = GROUPS[step.slug] ?? { artefacts: [] as RefId[], deliverables: [] as RefId[] }

        return (
          <div key={step.slug} className={`nav-item ${isActive ? 'active' : ''}`}>
            <button
              type="button"
              className="nav-step"
              onClick={() => toggleStep(step.slug)}
              aria-expanded={isOpen}
            >
              <div className="nav-step-title">Step {step.number}: {step.title}</div>
              <span className="chev">{isOpen ? '▾' : '▸'}</span>
            </button>

            {isOpen && (
              <div className="nav-open-link">
                <Link to={`/steps/${step.slug}`}>Open step</Link>
              </div>
            )}

            {isOpen && (
              <div className="nav-groups">
                {/* Artefacts */}
                {groups.artefacts.length > 0 && (
                  <div className="nav-group">
                    <button
                      type="button"
                      className="group-toggle"
                      onClick={() => toggleGroup(step.slug, 'artefacts')}
                      aria-expanded={openGroup[step.slug] === 'artefacts'}
                    >
                      Artefacts
                      <span className="chev">{openGroup[step.slug] === 'artefacts' ? '▾' : '▸'}</span>
                    </button>

                    {openGroup[step.slug] === 'artefacts' && (
                      <ul className="group-list">
                        {groups.artefacts.map((id: RefId) => (
                          <li key={id}>
                            <button
                              type="button"
                              className="ref-link"
                              onClick={() => openRef(id)}
                              title={refTitle(step.slug, id)}
                            >
                              {refTitle(step.slug, id)}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Deliverables */}
                {groups.deliverables.length > 0 && (
                  <div className="nav-group">
                    <button
                      type="button"
                      className="group-toggle"
                      onClick={() => toggleGroup(step.slug, 'deliverables')}
                      aria-expanded={openGroup[step.slug] === 'deliverables'}
                    >
                      Deliverables
                      <span className="chev">{openGroup[step.slug] === 'deliverables' ? '▾' : '▸'}</span>
                    </button>

                    {openGroup[step.slug] === 'deliverables' && (
                      <ul className="group-list">
                        {groups.deliverables.map((id: RefId) => (
                          <li key={id}>
                            <button
                              type="button"
                              className="ref-link"
                              onClick={() => openRef(id)}
                              title={refTitle(step.slug, id)}
                            >
                              {refTitle(step.slug, id)}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
