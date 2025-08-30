import { createContext, useContext, useState } from 'react'
import { COMPOSITIONS } from '../compositions'

const CompositionContext = createContext({
  compositions: [],
  current: null,
})

export function CompositionsProvider({ children }) {
  const { compositions } = DEFAULT_COMPOSITIONS
  const [current, setCurrent] = useState(compositions[0])

  return (
    <CompositionContext value={{ compositions, current, setCurrent }}>
      {children}
    </CompositionContext>
  )
}

export function useCompositons() {
  return useContext(CompositionContext)
}

export const DEFAULT_COMPOSITIONS = {
  compositions: COMPOSITIONS,
  current: COMPOSITIONS[0],
}
