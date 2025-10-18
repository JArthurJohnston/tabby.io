import { createContext, useContext, useState } from "react";
import { INSTRUMENTS, NAFlute } from "../instruments";

export const InstrumentContext = createContext(NAFlute)

export function useInstrument() {
  return useContext(InstrumentContext)
}

export function InstrumentProvider({ children }) {
  const [current, setCurrent] = useState(INSTRUMENTS[0])

  return (
    <InstrumentContext value={{ current, setCurrent }}>
      {children}
    </InstrumentContext>
  )
}
