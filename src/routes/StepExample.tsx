// src/routes/StepExample.tsx
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import StepNav from '../components/StepNav'
import { examplesByStep } from '../data/examples'
import { steps, getStepBySlug } from '../data/steps'
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
  const examplesForStep = step ? examplesByStep[step.slug] ?? {} : {}

  const substepEntries = Object.entries(examplesForStep).filter(
    ([, example]) => example.type === 'substep'
  )

  const currentSubstepIndex = substepEntries.findIndex(([id]) => id === exampleId)

  const nextEntry =
    currentSubstepIndex >= 0
      ? substepEntries[currentSubstepIndex + 1]
      : undefined

  const nextExample = nextEntry
    ? {
        id: nextEntry[0],
        title: nextEntry[1].title,
        substepNumber: nextEntry[1].substepNumber,
      }
    : undefined
  // 404: neither step nor metadata exists
  if (!step || (!exFromMap && !md && !loading)) {
    return (
      <Layout title="Not found">
        <p>That example doesn’t exist. <Link to="/">Go home</Link>.</p>
      </Layout>
    )
  }

  // title/image come from examples.ts (frontmatter-less Option B)
  const idx = steps.findIndex(s => s.slug === step.slug)
  const title = exFromMap?.title ?? exampleId
  const image = exFromMap?.image
  const next = steps[idx + 1]

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

          <div
            style={{
              marginTop: 24,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <Link to={`/steps/${step.slug}`}>
              ← Back to Step {step.number}: {step.title}
            </Link>

            {nextExample && (
              <Link to={`/steps/${step.slug}/examples/${nextExample.id}`}>
                Continue to Step {nextExample.substepNumber} →
              </Link>
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}
