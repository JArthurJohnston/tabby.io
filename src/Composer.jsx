import { useRef, useState } from 'react'
import { NoteFingerChart } from './NoteFingerChart'
import { useInstrument } from './providers/InstrumentContext'
import { EMPTY_NOTE } from './instruments'
import { TabSheet } from './components/TabSheet'
import { useCompositons } from './providers/CompositonContext'

export function Composer() {
  const { current } = useCompositons()
  const instrument = useInstrument()
  const [val, setVal] = useState(current?.arrangement || '')
  const [name, setName] = useState(current?.tilte || '')
  const [index, setIndex] = useState(0)
  const editorRef = useRef()

  const editableComposition = { arrangement: val, title: name }

  const handleUpdate = (e) => {
    const { value, selectionStart } = e.target
    if (NOTES_REGEX.test(value)) {
      setVal(value)
    }
    console.log(selectionStart)
  }

  const handleCursorMoved = (e) => {
    const { selectionStart } = e.target
    console.log(selectionStart)
  }

  return (
    <div className='flex col full-width bordered align-start'>
      <input
        className='ml mt'
        type='text'
        style={{ width: '50%' }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className='flex row full-width full-height'>
        <textarea
          ref={editorRef}
          className='margins'
          style={{ height: '60%', width: '45%', borderRadius: '0.5rem' }}
          value={val}
          onChange={handleUpdate}
        />
        <TabSheet
          onClick={handleCursorMoved}
          composition={editableComposition}
          instrument={instrument}
          index={editorRef.current?.selectionStart}
        />
      </div>
    </div>
  )
}

const NOTES_REGEX = /^[a-gA-G0-9\#\s]*$/
