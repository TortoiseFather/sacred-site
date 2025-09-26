import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RefCtx, type RefPanelCtx } from '../context/ref-context'
import { getRefById } from '../data/refs'

type Entry = { id: string; data: { title: string; body: string; image?: string } }

export default function RefProvider({ children }: { children: React.ReactNode }) {
  const [entry, setEntry] = useState<Entry | null>(null)
  const { pathname, hash, search } = useLocation()

  // Close on any navigation
  useEffect(() => { setEntry(null) }, [pathname, hash, search])

  // Derive current step slug from URL
  const m = (hash || pathname).match(/\/steps\/([^/]+)/)
  const currentStepSlug = m?.[1]

  // Intercept [text](ref:xyz) clicks anywhere
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (!href.startsWith('ref:')) return
      e.preventDefault()
      const id = href.slice(4).toLowerCase()
      const data = getRefById(id, currentStepSlug)
      if (data) setEntry({ id, data })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [currentStepSlug])

  const value: RefPanelCtx = {
    openRef: (id) => {
      const data = getRefById(id.toLowerCase(), currentStepSlug)
      console.log('[openRef]', { id, currentStepSlug, found: !!data })
      if (data) setEntry({ id: id.toLowerCase(), data })
    },
    closeRef: () => setEntry(null),
    entry,
  }

  return <RefCtx.Provider value={value}>{children}</RefCtx.Provider>
}
