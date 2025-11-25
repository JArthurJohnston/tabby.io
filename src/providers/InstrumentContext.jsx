import { createContext, useContext, useState } from "react";
import { INSTRUMENTS, NAFlute_D } from "../instruments";

export const InstrumentContext = createContext(NAFlute_D)

export function useInstrument() {
  return useContext(InstrumentContext)
}

export function InstrumentProvider({ children }) {
  const [current, setCurrent] = useState(INSTRUMENTS[0])

  const changeInstrument = (id) => {
    const found = INSTRUMENTS.find((inst) => inst.id === id)
    if (found) {
      setCurrent(found)
    }
  }

  return (
    <InstrumentContext value={{ current, changeInstrument, instruments: INSTRUMENTS }}>
      {children}
    </InstrumentContext>
  )
}
