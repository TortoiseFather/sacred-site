// src/components/RefProvider.tsx
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RefCtx, type RefPanelCtx } from '../context/ref-context'
import { resolveRef, fetchRefMd, getRefFallbackBody } from '../data/refs'

type Entry = {
  id: string
  data: { title: string; body: string; image?: string }
  loading?: boolean
  error?: string
}

export default function RefProvider({ children }: { children: React.ReactNode }) {
  const [entry, setEntry] = useState<Entry | null>(null)
  const { pathname, hash, search } = useLocation()

  useEffect(() => { setEntry(null) }, [pathname, hash, search])

  const m = (hash || pathname).match(/\/steps\/([^/]+)/)
  const currentStepSlug = m?.[1] // may help resolution, but not required

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (!href.startsWith('ref:')) return
      e.preventDefault()
      openRef(href.slice(4).toLowerCase())
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [currentStepSlug])

  const openRef = (id: string) => {
    // Resolve globally; prefer current step if it owns the id
    const meta = resolveRef(id, currentStepSlug)
    if (!meta) return

    setEntry({ id, data: { title: meta.title, body: '', image: meta.image }, loading: true })

    fetchRefMd(meta.stepSlug, id)
      .then(md => {
        setEntry(prev => prev && prev.id === id
          ? { ...prev, data: { ...prev.data, body: md }, loading: false }
          : prev)
      })
      .catch(err => {
        const fallback = getRefFallbackBody(meta.stepSlug, id)
        setEntry(prev => prev && prev.id === id
          ? { ...prev, data: { ...prev.data, body: fallback }, loading: false, error: err.message }
          : prev)
      })
  }

  const value: RefPanelCtx = {
    openRef,
    closeRef: () => setEntry(null),
    entry,
  }

  return <RefCtx.Provider value={value}>{children}</RefCtx.Provider>
}
