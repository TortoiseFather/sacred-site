import { examplesByStep } from './examples'

export type RefEntry = { title: string; body: string; image?: string }

export function getRefById(id: string, preferredStepSlug?: string): RefEntry | null {
  const key = id.toLowerCase()

  // try the preferred step first
  if (preferredStepSlug) {
    const hit = examplesByStep[preferredStepSlug]?.[key]
    if (hit) return hit
  }

  // then scan all steps
  for (const slug of Object.keys(examplesByStep)) {
    const hit = examplesByStep[slug]?.[key]
    if (hit) return hit
  }

  return null
}
