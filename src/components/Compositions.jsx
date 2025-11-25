import { useState } from 'react'
import { ABC_SONGS } from '../arrangements'
import { useInstrument } from '../providers/InstrumentContext'
import { getRouteApi } from '@tanstack/react-router'
import { SheetMusic } from './music-views/SheetMusic'
import { Tabsheet } from './music-views/TabSheet'

export function Compositions() {
  const { compId } = getRouteApi().useParams()
  const [view, setView] = useState('both') // 'sheet', 'tabsheet', or 'both'

  const { name, contents, filePath } = ABC_SONGS.find((s) => s.name === compId)

  const { current: instrument, instruments, changeInstrument } = useInstrument()

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor='view-select'>View: </label>
        <select
          id='view-select'
          style={{ flex: 1 }}
          value={view}
          onChange={(e) => setView(e.target.value)}
        >
          <option value='sheet'>Sheet Music</option>
          <option value='tabsheet'>Tabsheet</option>
          <option value='both'>Both</option>
        </select>
        <label>Instrument: </label>
        <select
          id='instrument-select'
          style={{ flex: 1 }}
          value={view}
          onChange={(e) => changeInstrument(e.target.value)}
        >
          {instruments.map((inst) => (
            <option key={inst.id} value={inst.id}>
              {inst.name}
            </option>
          ))}
        </select>
      </div>
      <div className='flex column full-height'>
        <div className='flex row full-width'>
          {(view === 'sheet' || view === 'both') && (
            <SheetMusic contents={contents} title={name} />
          )}
          {(view === 'tabsheet' || view === 'both') && (
            <Tabsheet
              instrument={instrument}
              abcContents={contents}
              title={name}
            />
          )}
        </div>
      </div>
    </div>
  )
}
