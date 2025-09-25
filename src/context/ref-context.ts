import { createContext, useContext } from 'react'

export type RefEntry = { title: string; body: string; image?: string }

export type RefPanelCtx = {
  openRef: (id: string) => void
  closeRef: () => void
  entry: { id: string; data: RefEntry } | null
}

export const RefCtx = createContext<RefPanelCtx>({
  openRef: () => {},
  closeRef: () => {},
  entry: null,
})

export const useRefPanel = () => useContext(RefCtx)