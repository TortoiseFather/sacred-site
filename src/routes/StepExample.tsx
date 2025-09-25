// src/routes/StepExample.tsx
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import StepNav from '../components/StepNav'
import { getStepBySlug } from '../data/steps'
import { examplesByStep } from '../data/examples'
import SubDiagram from '../components/SubDiagram'
import RefPanelSlot from '../components/RefPanelSlot'
import { marked } from 'marked'

export default function StepExample() {
  const { stepSlug, exampleId } = useParams()
  const step = getStepBySlug(stepSlug!)
  const ex = step ? examplesByStep[step.slug]?.[exampleId!] : undefined

  if (!step || !ex) {
    return (
      <Layout title="Not found">
        <p>That example doesn’t exist. <Link to="/">Go home</Link>.</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="shell">
        <aside className="sidebar"><StepNav /></aside>

        <section className="content">
          {/* Keep the step diagram on top and show deliverable/artefact refs under it */}
          <SubDiagram
            src={step.subDiagramSrc ?? `diagrams/step-${step.number}.svg`}
            hotspots={step.subHotspots ?? []}
          />
          <RefPanelSlot />

          <h1>{ex.title}</h1>

          {ex.image && (
            <img
              src={ex.image}
              alt={ex.title}
              style={{ maxWidth: '100%', borderRadius: 8, border: '1px solid #e5e7eb', marginBottom: 12 }}
            />
          )}

          {/* Parse markdown here */}
          <div dangerouslySetInnerHTML={{ __html: marked.parse(ex.body) }} />

          <p style={{ marginTop: 24 }}>
            <Link to={`/steps/${step.slug}`}>← Back to Step {step.number}: {step.title}</Link>
          </p>
        </section>
      </div>
    </Layout>
  )
}
