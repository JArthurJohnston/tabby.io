import { useEffect, useRef } from 'react'
import { useInstrument } from './providers/InstrumentContext'
import { TabSheet } from './components/TabSheet'
import { useCompositons } from './providers/CompositonContext'
import { processLines } from './tab-parsers'

export function Composer() {
  const {
    title,
    arrangement,
    setCurrent,
    compositions,
    updateArrangement,
    updateTitle,
  } = useCompositons()
  const { current: instrument } = useInstrument()
  const editorRef = useRef()

  const handleUpdate = (e) => {
    const { value } = e.target
    if (NOTES_REGEX.test(value)) {
      updateArrangement(value)
    }
  }

  const handleCompositionSelect = (e) => {
    const selectedId = e.target.value
    const found = compositions.find((ec) => ec.id == selectedId)

    setCurrent(found)
  }

  return (
    <div className='flex col full-width bordered align-start'>
      <div className='flex row full-width jsb'>
        <input
          className='ml mt'
          type='text'
          style={{ width: '50%' }}
          value={title}
          onChange={(e) => updateTitle(e.target.value)}
        />
        <select
          className='mr'
          id='compositions-select'
          onChange={handleCompositionSelect}
        >
          {compositions.map((e) => (
            <option key={e.id} value={e.id}>
              {e.title}
            </option>
          ))}
        </select>
      </div>
      <div className='flex row full-width full-height'>
        <textarea
          ref={editorRef}
          className='margins'
          style={{ height: '60%', width: '45%', borderRadius: '0.5rem' }}
          value={arrangement}
          onChange={handleUpdate}
          onSelect={(e) => {
            console.log('SELECTION', e.target.selectionStart)
          }}
        />
        <TabSheet
          lines={processLines(arrangement, instrument)}
          instrument={instrument}
          arrangement={arrangement}
          index={editorRef.current?.selectionStart}
        />
      </div>
    </div>
  )
}

const NOTES_REGEX = /^[a-gA-G0-9\#\s]*$/
