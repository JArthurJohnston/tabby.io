import React from 'react'
import { NoteFingerChart } from '../NoteFingerChart'

export function ABC_Tabsheet({ lines, className = '', instrument }) {
  return (
    <div
      style={{ height: '93%', overflowX: 'scroll', width: '50vw' }}
      className={`flex col mt ${className}`}
    >
      {lines.map(({ staff }, index) => (
        <div key={`line-${index}`} className='flex row mb'>
          {staff.map(({ voices }) =>
            voices.map((eachVoice) =>
              eachVoice.map((eev) => {
                const { el_type, pitches, duration } = eev
                if (el_type === 'note')
                  return pitches?.map((eachPitch) => {
                    const note = instrument.notes.find(
                      (en) => en.abc === eachPitch.name,
                    )
                    return note ? (
                      <>
                        <NoteFingerChart note={note} scale={0.15} />
                        {duration > 0.125 && <EmptyNote />}
                      </>
                    ) : (
                      <p>?</p>
                    )
                  })
                if (el_type === 'bar') return <BarLine />
              }),
            ),
          )}
        </div>
      ))}
    </div>
  )
}

function BarLine() {
  return (
    <div className='mr' style={{ width: '1rem' }}>
      |
      <br />
      |
      <br />
      |
      <br />
      |
      <br />
      |
      <br />|
    </div>
  )
}

function EmptyNote() {
  return (
    <div className='mr' style={{ width: '1rem', textAlign: 'center' }}>
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
