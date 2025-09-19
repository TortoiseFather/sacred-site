import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import StepNav from '../components/StepNav'
import { steps, getStepBySlug } from '../data/steps'
import { marked } from 'marked'
import SubDiagram, { type SubHotspot } from '../components/SubDiagram'

export default function StepPage() {
  const { slug } = useParams()
  const step = getStepBySlug(slug!)
  const [active, setActive] = useState<SubHotspot | null>(null)

  if (!step) {
    return (
      <Layout title="Not found">
        <p>That step doesn’t exist. <Link to="/">Go home</Link>.</p>
      </Layout>
    )
  }

  const idx = steps.findIndex(s => s.slug === step.slug)
  const next = steps[idx + 1]

  return (
    <Layout>
      <div className="shell">
        <aside className="sidebar">
          <StepNav />
        </aside>

        <section className="content">
          {/* Sub-diagram at the top (click to reveal info) */}
          <SubDiagram
            src={step.subDiagramSrc ?? step.diagramSrc ?? `/diagrams/step-${step.number}.svg`}
            hotspots={step.subHotspots ?? []}
            onSelect={setActive}
          />

          {/* Info revealed from clicks on the sub-diagram */}
          {active && (
            <div className="info-panel card" role="region" aria-live="polite" style={{ marginTop: 12 }}>
              <div className="badge">Detail</div>
              <h3 style={{ marginTop: 8 }}>{active.label ?? 'Detail'}</h3>
              <p>{active.content}</p>
            </div>
          )}

          {/* Step description below the diagram */}
          <h1>Step {step.number}: {step.title}</h1>
          <p className="small">{step.summary}</p>

          <h2>How to implement</h2>
          <div dangerouslySetInnerHTML={{ __html: marked.parse(step.implementationMd) }} />

          {next && (
            <p style={{ marginTop: 24 }}>
              Next: <Link to={`/steps/${next.slug}`}>Step {next.number} – {next.title}</Link>
            </p>
          )}
        </section>
      </div>
    </Layout>
  )
}
