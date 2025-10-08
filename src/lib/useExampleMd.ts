// src/lib/useExampleMd.ts
import { useEffect, useState } from 'react'

export function useExampleMd(stepSlug?: string, id?: string) {
  const [md, setMd] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!stepSlug || !id) return
    let cancelled = false
    const url = `/content/${stepSlug}/${id}.md`
    setLoading(true)
    fetch(url)
      .then(r => (r.ok ? r.text() : Promise.reject(new Error(`${r.status} ${r.statusText}`))))
      .then(txt => { if (!cancelled) setMd(txt) })
      .catch(e => { if (!cancelled) setError(e) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [stepSlug, id])

  return { md, loading, error }
}
