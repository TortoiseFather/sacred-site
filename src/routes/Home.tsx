import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SvgHotspots from '../components/SvgHotspots'
import StepNav from '../components/StepNav'
import CitationProvider from '../components/CitationProvider'
import { renderBlock } from '../lib/md'
import type { Secondary } from '../components/SvgHotspots'

export default function Home() {
  const [secondary, setSecondary] = useState<Secondary | null>(null)
  const [homeMd, setHomeMd] = useState<string>('')

  useEffect(() => {
    fetch('/content/Home.md')
      .then(res => res.text())
      .then(setHomeMd)
  }, [])

  return (
    <Layout>
      <CitationProvider>
        <div className="shell">
          <aside className="sidebar">
            <StepNav />
          </aside>

          <section className="content">
            <div style={{ padding: '5px' }}>
              <SvgHotspots onSecondarySelect={setSecondary} />
            </div>

            {secondary && (
              <div className="info-panel card" role="region">
                <div className="badge">Detail</div>
                <h3>{secondary.label}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>
                  {secondary.content}
                </p>
              </div>
            )}

            <article className="bio">
              <div
                dangerouslySetInnerHTML={{
                  __html: renderBlock(homeMd)
                }}
              />
            </article>
          </section>
        </div>
      </CitationProvider>
    </Layout>
  )
}
