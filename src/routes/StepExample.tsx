// src/routes/StepExample.tsx
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import StepNav from '../components/StepNav'
import { getStepBySlug } from '../data/steps'
import { examplesByStep } from '../data/examples'
import SubDiagram from '../components/SubDiagram'
import RefPanelSlot from '../components/RefPanelSlot'
import { marked } from 'marked'
import { useExampleMd } from '../lib/useExampleMd'

export default function StepExample() {
  const { stepSlug, exampleId } = useParams<{ stepSlug: string; exampleId: string }>()
  const step = getStepBySlug(stepSlug || '')
  const exFromMap = step ? examplesByStep[step.slug]?.[exampleId || ''] : undefined

  // runtime markdown (Option B)
  const { md, loading, error } = useExampleMd(step?.slug, exampleId)

  // 404: neither step nor metadata exists
  if (!step || (!exFromMap && !md && !loading)) {
    return (
      <Layout title="Not found">
        <p>That example doesn’t exist. <Link to="/">Go home</Link>.</p>
      </Layout>
    )
  }

  // title/image come from examples.ts (frontmatter-less Option B)
  const title = exFromMap?.title ?? exampleId
  const image = exFromMap?.image

  // body preference: fetched md > inline fallback > empty
  const body = md ?? exFromMap?.body ?? ''

  return (
    <Layout>
      <div className="shell">
        <aside className="sidebar"><StepNav /></aside>

        <section className="content">
          <SubDiagram
            src={step.subDiagramSrc ?? `diagrams/step-${step.number}.svg`}
            hotspots={step.subHotspots ?? []}
          />
          <RefPanelSlot />

          <h1>{title}</h1>

          {image && (
            <img
              src={image}
              alt={title || ''}
              style={{ maxWidth: '100%', borderRadius: 8, border: '1px solid #e5e7eb', marginBottom: 12 }}
            />
          )}

          {/* Loading / error states optional */}
          {loading && <p className="small">Loading content…</p>}
          {error && !md && <p className="small">Couldn’t load markdown; showing fallback.</p>}

          {/* Render markdown (or fallback) */}
          <div dangerouslySetInnerHTML={{ __html: marked.parse(body) }} />

          <p style={{ marginTop: 24 }}>
            <Link to={`/steps/${step.slug}`}>← Back to Step {step.number}: {step.title}</Link>
          </p>
        </section>
      </div>
    </Layout>
  )
}
