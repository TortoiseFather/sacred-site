import { examplesByStep } from './examples'

export type RefEntry = { title: string; body: string; image?: string }

// simple resolver: look in Step 1 registry by id (a,b,c,d,d0,d1,d2,e2)
export function getRefById(id: string): RefEntry | null {
  const table = examplesByStep['1-concept-assurance']
  const hit = table?.[id.toLowerCase()]
  return hit ?? null
}