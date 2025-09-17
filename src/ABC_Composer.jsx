import { useEffect, useState } from 'react'
import abcjs from 'abcjs'
import { NAFlute } from './instruments'
import { NoteFingerChart } from './NoteFingerChart'

export function ABC_Composer() {
  const [title, setTitle] = useState('')
  const [music, setMusic] = useState('')
  const [musicLines, setMusicLines] = useState([])

  const instrument = NAFlute

  const handleUpdate = (e) => {
    const val = e.target.value
    setMusic(val)
  }

  useEffect(() => {
    const afterParsing = (tune) => {
      const { lines } = tune
      setMusicLines(lines || [])
    }
    const abcMusic = `T:${title}
    K:${instrument.key}
    M:4/4
    L:1/8
    ${music}
    `
    abcjs.renderAbc('sheet-music', abcMusic, {
      afterParsing,
      responsive: 'resize'
    })
  }, [music])

  return (
    <div className='flex col full-width full-height bordered align-start'>
      {/* <div className='flex row full-width'>
        <p>{title || 'Untiled'}</p>
      </div> */}
      <div className='flex row full-width full-height'>
        <div id='sheet-music' style={{overflow: 'scroll'}} />
        <TabSheet lines={musicLines} />
      </div>
      <div className='flex row full-width' style={{ height: '30%' }}>
        <textarea
          style={{ width: '40%' }}
          value={music}
          onChange={handleUpdate}
          onSelect={(e) => {
            // console.log('SELECTION', e.target.selectionStart)
          }}
        />
        <div className='flex row jsb'>
          {instrument.notes.map((e) => (
            <NoteFingerChart
              key={`${instrument.id}-${e.fingering}`}
              note={e}
              scale={0.25}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function TabSheet({ lines }) {
  return (
    <div
      style={{ height: '93%', overflowX: 'scroll', width: '50vw' }}
      className='flex col mt'
    >
      {lines.map(({ staff }, index) => (
        <div key={`line-${index}`} className='flex row mb'>
          {staff.map(({ voices }) =>
            voices.map((eachVoice) =>
              eachVoice.map((eev) => {
                const { el_type, pitches, duration } = eev
                if (el_type === 'note')
                  return pitches?.map((eachPitch) => {
                    const note = NAFlute.notes.find(
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
