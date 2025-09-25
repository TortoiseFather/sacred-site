import { marked } from 'marked'
import { useRefPanel } from '../context/ref-context'

export default function RefPanelSlot() {
  const { entry, closeRef } = useRefPanel()
  if (!entry) return null
  return (
    <div className="info-panel card" style={{ marginTop: 12 }}>
      <div className="badge">Reference</div>
      <h3 style={{ marginTop: 8 }}>{entry.data.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(entry.data.body) }} />
      <button className="small" onClick={closeRef} style={{ marginTop: 8 }}>Close</button>
    </div>
  )
}