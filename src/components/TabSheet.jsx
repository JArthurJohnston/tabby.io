import { EMPTY_NOTE } from '../instruments'
import { NoteFingerChart } from '../NoteFingerChart'
import { processLines } from '../tab-parsers'

export function TabSheet({ composition, instrument, index }) {
  const { arrangement } = composition
  const lines = processLines(arrangement, instrument)

  return (
    <div
      style={{ height: '93%', overflowX: 'scroll', width: '50vw' }}
      className='flex col ml'
    >
      {lines.map((eachLine) => (
        <div className='flex row mb'>
          {eachLine.map((eachNote, index) => (
            <NoteMapper key={`${eachNote?.note}-${index}`} note={eachNote} />
          ))}
        </div>
      ))}
    </div>
  )
}

function NoteMapper({ note }) {
  if (note === EMPTY_NOTE) {
    return <EmptyNote />
  }
  return <NoteFingerChart note={note} scale={0.25} />
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

