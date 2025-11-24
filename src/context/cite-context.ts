import { createContext, useContext } from 'react'
import type { CitationEntry } from '../data/citations'

export type CitePanelState = {
  entry: CitationEntry | null
  at: { x: number; y: number } | null   // ts does nothing
}

export type CiteCtxType = {
  openCite: (id: string, at: { x: number; y: number }) => void
  closeCite: () => void
  state: CitePanelState
}

export const CiteCtx = createContext<CiteCtxType>({
  openCite: () => {},
  closeCite: () => {},
  state: { entry: null, at: null },
})

export const useCite = () => useContext(CiteCtx)
