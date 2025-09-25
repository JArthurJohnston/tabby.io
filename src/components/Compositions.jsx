import React, { useState } from 'react'
import { ABC_SONGS } from '../arrangements'
import { useAbc } from '../hooks/useAbc'
import { useInstrument } from '../providers/InstrumentContext'
import { ABC_Tabsheet } from './ABC_Tabsheet'

export function Compositions() {
  const [current, setCurrent] = useState(ABC_SONGS[0])
  const {lines} = useAbc('music-sheet', current)
  const instrument = useInstrument()
  return (
    <div className='flex row full-height'>
      <ul>
        {ABC_SONGS.map((e) => (
          <li  key={`${e.name}`} className={`${current === e ? 'highlighted' : ''} full-width`}>
            <button onClick={() => setCurrent(e)}>
              {e.name}
            </button>
          </li>
        ))}
      </ul>
      <div className='flex row'>
        <div id='music-sheet' />
        <ABC_Tabsheet lines={lines} instrument={instrument} />
      </div>
    </div>
  )
}
