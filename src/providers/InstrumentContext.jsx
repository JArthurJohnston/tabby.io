import { createContext, useContext } from "react";
import { NAFlute } from "../instruments";

export const InstrumentContext = createContext(NAFlute)

export function useInstrument() {
  return useContext(InstrumentContext)
}

