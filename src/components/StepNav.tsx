// src/components/StepNav.tsx
import { Link, useLocation } from 'react-router-dom'
import { steps } from '../data/steps'

export default function StepNav() {
  const { pathname } = useLocation()
  return (
    <nav className="step-nav" aria-label="SACRED steps">
      <div className="step-nav-header">Steps</div>
      <ul className="step-list">
        <li>
          <Link to="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
            <span className="nav-title">Overview</span>
            <span className="nav-desc">Interactive overview and links to all steps.</span>
          </Link>
        </li>
        {steps.map(s => {
          const isActive = pathname.includes(`/steps/${s.slug}`)
          return (
            <li key={s.slug}>
              <Link to={`/steps/${s.slug}`} className={`nav-item ${isActive ? 'active' : ''}`}>
                <span className="nav-title">{s.title}</span>
                <span className="nav-desc">{s.summary}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
