import { Link } from 'react-router-dom'
import type { Step } from '../data/steps'


export default function StepCard({ step }: { step: Step }) {
return (
<Link to={`/steps/${step.slug}`} className="card" style={{ display: 'block' }}>
<div className="badge">Step {step.number}</div>
<h3 style={{ marginTop: 8 }}>{step.title}</h3>
<p>{step.summary}</p>
</Link>
)
}