import { createContext, useContext, useState } from 'react'
import { COMPOSITIONS } from '../arrangements'

const CompositionContext = createContext({
  compositions: [],
  current: null,
})

export function CompositionsProvider({ children }) {
  const { compositions } = DEFAULT_COMPOSITIONS
  const [current, setCurrent] = useState(compositions[0])

  const [title, updateTitle] = useState(current.title || '')
  const [arrangement, updateArrangement] = useState(current.arrangement || '')

  const updateCurrent = (selectedComposition) => {
    setCurrent(selectedComposition)
    updateTitle(selectedComposition.title)
    updateArrangement(selectedComposition.arrangement)
  }

  return (
    <CompositionContext
      value={{
        all: compositions,
        compositions,
        current,
        setCurrent: updateCurrent,
        updateTitle,
        updateArrangement,
        title,
        arrangement,
      }}
    >
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
