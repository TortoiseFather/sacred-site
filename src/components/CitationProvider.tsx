import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { CiteCtx } from '../context/cite-context'
import { citations } from '../data/citations'
import React from 'react'

export default function CitationProvider({ children }: { children: React.ReactNode }) {
  const [entry, setEntry] = useState<null | (typeof citations[string])>(null)
  const [at, setAt] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (!href.startsWith('cite:')) return
      e.preventDefault()
      const id = href.slice(5)
      const c = citations[id]
      if (!c) return
      // place popover near pointer (viewport coords)
      setAt({ x: e.clientX, y: e.clientY })
      setEntry(c)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const value = {
    openCite: (id: string, pos: { x: number; y: number }) => {
      const c = citations[id]
      if (!c) return
      setAt(pos)
      setEntry(c)
    },
    closeCite: () => { setEntry(null); setAt(null) },
    state: { entry, at },
  }

  return (
    <CiteCtx.Provider value={value}>
      {children}
      <CitationPopover />
    </CiteCtx.Provider>
  )
}

function CitationPopover() {
  const root = typeof document !== 'undefined' ? document.body : null
  if (!root) return null

  return createPortal(<PopoverBody />, root)
}

function PopoverBody() {
  const { state: { entry, at }, closeCite } = React.useContext(CiteCtx)
  if (!entry || !at) return null

  // basic positioning (clamped)
  const padding = 12
  const maxW = 360
  const style: React.CSSProperties = {
    position: 'fixed',
    left: Math.min(Math.max(at.x, padding), window.innerWidth - maxW - padding),
    top: Math.min(Math.max(at.y + 12, padding), window.innerHeight - 160),
    width: maxW,
    zIndex: 9999,
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: 10,
    boxShadow: '0 8px 24px rgba(0,0,0,.12)',
    padding: 12,
  }

  return (
    <div role="dialog" aria-label={`Citation ${entry.id}`} style={style} onClick={e => e.stopPropagation()}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:8 }}>
        <strong>[{entry.id}]</strong>
        <button onClick={closeCite} aria-label="Close citation" style={{ border:'none', background:'transparent', cursor:'pointer', fontSize:18 }}>×</button>
      </div>
      <div style={{ marginTop:8, color:'#374151', lineHeight:1.45 }}>
        {entry.text}
      </div>
      {entry.url && (
        <div style={{ marginTop:8 }}>
          <a href={entry.url} target="_blank" rel="noreferrer">Open source</a>
        </div>
      )}
    </div>
  )
}
