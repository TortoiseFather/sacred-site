import { useState } from 'react'
import { __STEPS_MODULE_URL__ } from '../data/steps'
import { useParams, Link, useNavigate } from 'react-router-dom'  // <-- add useNavigate
import Layout from '../components/Layout'
import StepNav from '../components/StepNav'
import { steps, getStepBySlug } from '../data/steps'
import { marked } from 'marked'
import SubDiagram, { type SubHotspot } from '../components/SubDiagram'
export default function StepPage() {
  const { slug } = useParams()
  const nav = useNavigate()
  const step = getStepBySlug(slug!)
  console.log('StepPage: module url =', __STEPS_MODULE_URL__);
  console.log('StepPage: step.slug =', step?.slug, 'implementationMd =', step?.implementationMd);
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
        <aside className="sidebar"><StepNav /></aside>

        <section className="content">
          <SubDiagram
            src={step.subDiagramSrc ?? `diagrams/step-${step.number}.svg`}
            hotspots={step.subHotspots ?? []}
            onSelect={(h) => {
              if (!h) return
            if (h.kind === 'link' && h.navigateTo) {
              nav(h.navigateTo)
            } else {
             setActive(h)    // show info panel
           }   
          }}
        />

          {active && (
            <div className="info-panel card" role="region" aria-live="polite" style={{ marginTop: 12 }}>
              <div className="badge">Detail</div>
              <h3 style={{ marginTop: 8 }}>{active.label ?? 'Detail'}</h3>
              <div dangerouslySetInnerHTML={{ __html: marked.parse(active.content ?? '') }} />
            </div>
          )}

          <h1>Step {step.number}: {step.title}</h1>
          <p style={{color:'red'}}>DEBUG MARKER {new Date().toLocaleTimeString()}</p>
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
