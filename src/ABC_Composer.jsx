import React, { useEffect, useState } from 'react'
import abcjs from 'abcjs'
import { NAFlute_D, PennyWhistle_D } from './instruments'
import { NoteFingerChart } from './NoteFingerChart'

export function ABC_Composer() {
  const [title, setTitle] = useState('')
  const [music, setMusic] = useState('')
  const [musicLines, setMusicLines] = useState([])

  const instrument = PennyWhistle_D

  const handleUpdate = (e) => {
    const val = e.target.value
    setMusic(val)
  }

  useEffect(() => {
    const afterParsing = (tune) => {
      const { lines } = tune
      setMusicLines(lines || [])
    }
    const abcMusic = `T:${title || 'Untiled'}
    K:${instrument.key}
    M:4/4
    L:1/8
    ${music}
    `
    abcjs.renderAbc('sheet-music', abcMusic, {
      afterParsing,
      responsive: 'resize',
    })
  }, [music])

  return (
    <div className='flex col full-width full-height align-start'>
      {/* <div className='flex row full-width'>
        <p>{title || 'Untiled'}</p>
      </div> */}
      <div className='flex row full-width full-height'>
        <div className='half-width'>
          <div id='sheet-music' />
        </div>
        <TabSheet lines={musicLines} className='half-width' instrument={instrument} />
      </div>
      <div className='flex row full-width' style={{ height: '30%' }}>
        <section className='full-width bt centered flex col'>
          <heading className='ml'>Editor</heading>
          <textarea
            style={{ width: '95%', height: '95%' }}
            value={music}
            onChange={handleUpdate}
            onSelect={(e) => {
              // console.log('SELECTION', e.target.selectionStart)
            }}
          />
        </section>
        <section className='flex col jsb bt bl'>
          <heading className='ml'>Instrument Tabs</heading>
          <div className='flex row jsb' style={{height: '89%'}}>
            {instrument.notes.map((e) => (
              <NoteFingerChart
                key={`${instrument.id}-${e.fingering}`}
                note={e}
                scale={0.25}
                labelKey='abc'
                showLabel
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export function TabSheet({ lines, className = '', instrument }) {
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
    </div>
  )
}
