import React from 'react'
import { Circle } from './Circle'

export function NoteFingerChart({
  note,
  scale = 1,
  onClick,
  showLabel = false,
  id,
}) {
  if (!note) {
    return
  }
  const { fingering, note: noteLabel, overblow } = note
  return (
    <div
      id={id}
      className='flex col'
      style={{ margin: '0.1rem', alignItems: 'center' }}
      onClick={onClick}
    >
      {Array.from(fingering)
        // .reverse()
        .map((e, index) => (
          <Circle
            scale={scale}
            fill={e === '1' ? 'white' : e === '2' ? 'grey' : 'black'}
            key={`${note}-${e}-${index}`}
          />
        ))}
      {/* <p>{note.abc}</p> */}
      {overblow && <p style={{ margin: 0 }}>*</p>}
      {showLabel && <p style={{ margin: 0 }}>{`${noteLabel}`}</p>}
    </div>
  )
}
