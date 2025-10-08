// src/data/refs.ts
import { examplesByStep } from './examples'

type Example = { title: string; image?: string; body?: string }

// Build a global index so ids are resolvable from any step
const indexById: Record<string, { stepSlug: string; data: Example }> = {}

for (const [stepSlug, map] of Object.entries(examplesByStep)) {
  for (const [id, data] of Object.entries(map)) {
    // last-write-wins if duplicated ids; usually each id is unique
    indexById[id] = { stepSlug, data }
  }
}

/** Resolve an id to its canonical step + metadata (global). */
export function resolveRef(id: string, preferredStepSlug?: string) {
  // 1) Prefer the current step if it has this id
  if (preferredStepSlug && examplesByStep[preferredStepSlug]?.[id]) {
    const data = examplesByStep[preferredStepSlug][id]
    return { stepSlug: preferredStepSlug, title: data.title ?? id.toUpperCase(), image: data.image }
  }
  // 2) Fall back to global index
  const hit = indexById[id]
  if (!hit) return null
  return { stepSlug: hit.stepSlug, title: hit.data.title ?? id.toUpperCase(), image: hit.data.image }
}

/** Runtime fetch for Option 2 (content lives in /public). */
export async function fetchRefMd(stepSlug: string, id: string): Promise<string> {
  const url = `/content/${stepSlug}/${id}.md`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return await res.text()
}

/** Typed inline fallback body if a .md is missing or fetch fails. */
export function getRefFallbackBody(stepSlug: string, id: string): string {
  return examplesByStep[stepSlug]?.[id]?.body ?? ''
}

/** Get a title for nav/labels when you only have an id (global). */
export function getRefTitleAny(id: string): string | undefined {
  return indexById[id]?.data.title
}
