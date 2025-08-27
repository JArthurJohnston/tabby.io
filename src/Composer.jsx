import { useState } from 'react'
import { NoteFingerChart } from './NoteFingerChart'
import { useInstrument } from './providers/InstrumentContext'
import { EMPTY_NOTE } from './instruments'

export function Composer() {
  const instrument = useInstrument()
  const [val, setVal] = useState('')
  const [name, setName] = useState('')

  const handleUpdate = (e) => {
    const { value } = e.target
    if (NOTES_REGEX.test(value)) {
      setVal(value)
    }
  }

  const lines = processLines(val, instrument)
  // console.log(lines[0]);

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
          className='margins'
          style={{ height: '95%', width: '24%', borderRadius: '0.5rem' }}
          value={val}
          onChange={handleUpdate}
        />
        <div
          style={{ height: '98%', overflowX: 'scroll', width: '50vw' }}
          className='flex col ml'
        >
          {lines.map((el) => (
            <div className='flex row mb'>
              {el.map((en) => (
                <NoteMapper note={en} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NoteMapper({ note }) {
  if (note === EMPTY_NOTE) {
    return <EmptyNote />
  }
  return <NoteFingerChart note={note} scale={0.25} />
}

const NOTES_REGEX = /^[a-gA-G0-9\#\s]*$/

function processLines(val, instrument) {
  const lines = val.split('\n')
  return lines.map((eachLine) => processNotes(eachLine, instrument))
}

const processNotes = (line, instrument) => {
  return line.split(' ').map((e) => {
    let isSharp = false
    let octave = null
    let noteChar = null
    if(e === '') return EMPTY_NOTE
    e.split('').forEach((eachChar) => {
      const octaveVal = parseInt(eachChar)
      if (octaveVal) {
        octave = octaveVal
        return
      }
      if (eachChar === '#') {
        isSharp = true
        return
      }
      noteChar = eachChar
    })
    return findInstrumentNote(instrument, noteChar, octave, isSharp)
  })
}

function findInstrumentNote(instrument, noteCharacter, octave, isSharp) {
  if (!noteCharacter) return
  const uNote = noteCharacter.toUpperCase()

  let foundNotes = instrument.notes.filter(
    (e) => e.note.toUpperCase() === uNote,
  )

  if (octave && isSharp) {
    return foundNotes.find((e) => e.octave === octave && e.sharp)
  }
  if (octave && !isSharp) {
    return foundNotes.find((e) => e.octave === octave && !e.sharp)
  }
  if (isSharp) {
    return foundNotes.find((e) => e.sharp)
  }
  return foundNotes[0]

  let foundNote = instrument.notes.find((e) => e.note.toUpperCase() === uNote)

  if (octave) {
    foundNote = instrument.notes.find(
      (e) =>
        e.note.toUpperCase() === uNote &&
        e.octave === octave &&
        e.sharp === isSharp,
    )
  }
  return (
    foundNote ||
    instrument.notes.find(
      (e) => e.note.toUpperCase() === uNote && e.sharp === isSharp,
    )
  )
}

function EmptyNote() {
  return (
    <div className='mr' style={{ width: '1rem' }}>
      -
      <br />
      -
      <br />
      -
      <br />
      -
      <br />
      -
      <br />-
    </div>
  )
}
