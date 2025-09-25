import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import StepNav from '../components/StepNav'
import { getStepBySlug } from '../data/steps'
import { examplesByStep } from '../data/examples'

// Markdown is optional; keep it simple with pre-line
export default function StepExample() {
  const { stepSlug, exampleId } = useParams() as { stepSlug: string; exampleId: string }
  const step = getStepBySlug(stepSlug)

  const ex = examplesByStep[stepSlug]?.[exampleId]
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
          <h1>{ex.title}</h1>
          {ex.image && (
            <img src={ex.image} alt={ex.title} style={{ maxWidth: '100%', borderRadius: 8, border: '1px solid #e5e7eb' }} />
          )}
          <p style={{ whiteSpace: 'pre-line' }}>{ex.body}</p>
          <p style={{ marginTop: 24 }}>
            <Link to={`/steps/${step.slug}`}>← Back to Step {step.number}: {step.title}</Link>
          </p>
        </section>
      </div>
    </Layout>
  )
}
