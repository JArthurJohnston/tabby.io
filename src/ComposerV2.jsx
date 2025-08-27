import { useEffect, useState } from 'react'
import { useInstrument } from './providers/InstrumentContext'
import { NoteFingerChart } from './NoteFingerChart'

export function Composer() {
  const instrument = useInstrument()
  const [composition, setComposition] = useState('')
  const octaves = [5,6]

  const noteMap = {A: [], B: [], C: [], D: [], E: [], F: [], G: []}
  instrument.notes.forEach((e) => {
    const {note} = e
    noteMap[note.toUpperCase()].push(e)
  })

  useEffect(() => {
    const keyDownHandler = (e) => {
      const { code, shiftKey, crtlKey } = e
      console.log(code, e)
    }
    window.addEventListener('keydown', keyDownHandler)
    return () => window.removeEventListener('keydown', keyDownHandler)
  }, [])

  return (
    <>
      <div className='flex col bordered'>
        <div className='flex row full-width' style={{ height: '65vh' }}>
          <textarea className='margins' style={{ height: '95%' }} />
          <div className='full-width margins'></div>
        </div>
      </div>
      <div className='flex row full-width jsb'>
        <div className='flex col'>
          <button>#(Shift)</button>
          <button>flat(Tab)</button>
        </div>
        <button className='full-height bordered'>D</button>
        <button className='full-height bordered'>E</button>
        <button className='full-height bordered'>F</button>
        <button className='full-height bordered'>G</button>
        <button className='full-height bordered'>A</button>
        <button className='full-height bordered'>B</button>
        <button className='full-height bordered'>C</button>
        <div className='flex col'>
          <button>Delete</button>
          <button>^ (+)</button>
          <div className='bordered full-width flex centered'>{octaves[0]}</div>
          <button>v (-)</button>
        </div>
      </div>
    </>
  )
}
