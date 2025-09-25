// src/components/RefProvider.tsx
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'   // ⬅️ add
import { RefCtx, type RefPanelCtx } from '../context/ref-context'
import { getRefById } from '../data/refs'

type Entry = { id: string; data: { title: string; body: string; image?: string } }

export default function RefProvider({ children }: { children: React.ReactNode }) {
  const [entry, setEntry] = useState<Entry | null>(null)
  const location = useLocation()                 // ⬅️ add

  // Intercept ref: links
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (!href.startsWith('ref:')) return
      e.preventDefault()
      const id = href.slice(4)
      const data = getRefById(id)
      if (data) setEntry({ id, data })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  // 👇 Close the panel whenever the URL changes (page-to-page nav)
  useEffect(() => {
    setEntry(null)
  }, [location.pathname, location.hash, location.search])  // HashRouter-safe

  const value: RefPanelCtx = {
    openRef: (id) => {
      const data = getRefById(id)
      if (data) setEntry({ id, data })
    },
    closeRef: () => setEntry(null),
    entry,
  }

  return <RefCtx.Provider value={value}>{children}</RefCtx.Provider>
}
