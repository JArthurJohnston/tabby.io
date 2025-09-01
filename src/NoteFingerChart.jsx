export function NoteFingerChart({ note, scale = 1, onClick, highlight }) {
  if (!note) {
    return
  }
  const { sharp, fingering, note: noteLabel, octave } = note
  const computedWidth = 100 * scale
  return (
    <div
      className='bordered flex col mr'
      style={{ height: '25vh', backgroundColor: `${highlight ? 'lightblue' : ''}` }}
      onClick={onClick}
    >
      {Array.from(fingering)
        .reverse()
        .map((e, index) => (
          <svg
            key={`${note}-${e}-${index}`}
            height={100 * scale}
            width={computedWidth}
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              key={`${noteLabel}-${octave}${sharp && '-sharp'}`}
              // r='50%'
              r={45 * scale}
              // cx={computedWidth}
              cx={50 * scale}
              cy={50 * scale}
              stroke='white'
              fill={e === '1' ? 'white' : e === '2' ? 'grey' : 'black'}
            />
          </svg>
        ))}
      <p>
        {noteLabel.toUpperCase()}
        {sharp && '#'}
        {octave}
      </p>
    </div>
  )
}
