import { NoteFingerChart } from './NoteFingerChart'
import { useInstrument } from './providers/InstrumentContext'

export function NotesSheet() {
  const instrument = useInstrument()

  return (
    <div className='flex row full-width jsb'>
      {instrument.notes.map((e) => (
        <NoteFingerChart note={e} scale={0.25} />
      ))}
    </div>
  )
}
