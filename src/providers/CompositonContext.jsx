import { createContext, useContext } from "react";
import { COMPOSITIONS } from "../compositions";

export const CompositionContext = createContext({compositions: [], current: null})

export function useCompositons() {
  return useContext(CompositionContext)
}

export const DEFAULT_COMPOSITIONS = {
  compositions: COMPOSITIONS,
  current: COMPOSITIONS[0]
}