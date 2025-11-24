// src/routes/StepPage.tsx
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import StepNav from '../components/StepNav'
import { steps, getStepBySlug } from '../data/steps'
import SubDiagram from '../components/SubDiagram'
import RefPanelSlot from '../components/RefPanelSlot'
import { renderBlock } from '../lib/md'   

export default function StepPage() {
  const { slug } = useParams()
  const step = getStepBySlug(slug!)

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
          {/* Sub-diagram and inline ref panel */}
          <SubDiagram
            src={step.subDiagramSrc ?? `diagrams/step-${step.number}.svg`}
            hotspots={step.subHotspots ?? []}
          />
          <RefPanelSlot />

          <h1>Step {step.number}: {step.title}</h1>

          {/* Render SUMMARY as Markdown (so cite:/ref:/step: links work) */}
          <div
            className="small"
            dangerouslySetInnerHTML={{ __html: renderBlock(step.summary) }}
          />

          <h2>How to implement</h2>
          {/* Render implementationMd via the same renderer for consistency */}
          <div
            dangerouslySetInnerHTML={{ __html: renderBlock(step.implementationMd) }}
          />

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
