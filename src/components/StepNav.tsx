import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { steps } from '../data/steps'
import { examplesByStep } from '../data/examples'
import { useRefPanel } from '../context/ref-context'

/**
 * Configure which refs belong to which group per step.
 * Add more steps as you flesh them out.
 */
const GROUPS: Record<
  string, // step slug
  {
    artefacts: string[]
    deliverables: string[]
  }
> = {
  '0-preliminary':{
    artefacts:['0a','0b'],
    deliverables:['d0'],
  },
  '1-concept-assurance': {
    artefacts: ['a', 'b', 'c', 'd'], 
    deliverables: ['d1', 'd2'],   
  },
  '2-hazard-identification': {
    artefacts: ['e'], 
    deliverables: ['d3', 'd4', 'd5', 'd6', 'd7'],   
  },
  // '2-hazard-identification': { artefacts: [...], deliverables: [...] },
}

import { getRefTitleAny } from '../data/refs'

function refTitle(stepSlug: string, id: string): string {
  return (
    examplesByStep[stepSlug]?.[id]?.title ??
    getRefTitleAny(id) ??
    id.toUpperCase()
  )
}
export default function StepNav() {
  const { pathname, hash } = useLocation()
  const { openRef } = useRefPanel()
  const [openStep, setOpenStep] = useState<string | null>(null)
  const [openGroup, setOpenGroup] = useState<{ [slug: string]: 'artefacts' | 'deliverables' | null }>({})

  // pick the active step based on the current route/hash
  const activeSlug = useMemo(() => {
    // /#/steps/<slug> or /#/steps/<slug>/examples/<id>
    const m = (hash || pathname).match(/\/steps\/([^/]+)/)
    return m?.[1] ?? steps[0].slug
  }, [pathname, hash])

  const toggleStep = (slug: string) => {
    setOpenStep(prev => (prev === slug ? null : slug))
    // initialise group closed when opening a different step
    setOpenGroup(g => ({ ...g, [slug]: null }))
  }

  const toggleGroup = (slug: string, group: 'artefacts' | 'deliverables') => {
    setOpenGroup(g => ({ ...g, [slug]: g[slug] === group ? null : group }))
  }

  return (
    <nav aria-label="SACRED steps" className="step-nav">
      <div className="nav-header">Steps</div>

      {steps.map(step => {
        const isActive = step.slug === activeSlug
        const isOpen = openStep === step.slug
        const groups = GROUPS[step.slug] || { artefacts: [], deliverables: [] }

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

            {/* Small link to open the step page (optional) */}
            {isOpen && (
              <div className="nav-open-link">
                <Link to={`/steps/${step.slug}`}>Open step</Link>
              </div>
            )}

            {/* Second layer: Artefacts / Deliverables */}
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
                        {groups.artefacts.map(id => (
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
                        {groups.deliverables.map(id => (
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
