import { useState } from 'react'
import { ABC_SONGS } from '../arrangements'
import { useInstrument } from '../providers/InstrumentContext'
import { getRouteApi } from '@tanstack/react-router'
import { SheetMusic } from './music-views/SheetMusic'
import { Tabsheet } from './music-views/TabSheet'
import { Select } from './Select'
import { NoteFingerChart } from '../NoteFingerChart'
import { ControlsDescription } from './ControlsDescription'

export function Compositions() {
  const { compId } = getRouteApi().useParams()
  const [view, setView] = useState('both') // 'sheet', 'tabsheet', or 'both'

  const { name, contents, filePath } = ABC_SONGS.find((s) => s.name === compId)

  const { current: instrument, instruments, changeInstrument } = useInstrument()
  const notes = [...instrument.notes]

  return (
    <div>
      <div
        id='compositiom-menu'
        style={{
          marginBottom: '1rem',
          borderBottom: '1px solid #ccc',
          padding: '0.5rem',
        }}
      >
        <Select
          id='view-select'
          value={view}
          onChange={(e) => setView(e.target.value)}
          options={[
            { value: 'sheet', label: 'Sheet Music' },
            { value: 'tabsheet', label: 'Tabsheet' },
            { value: 'both', label: 'Both' },
          ]}
          label='View'
        />
        <Select
          id='instrument-select'
          label='Instrument'
          onChange={(e) => changeInstrument(e.target.value)}
          options={instruments.map((e) => ({ value: e.id, label: e.name }))}/>
          <a
            href={filePath}
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginLeft: '1rem' }}
            download
          >
            Download
          </a>
      </div>
      <div className='flex column' style={{ minHeight: '65vh' }}>
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
      <section
        className='flex row full-width jsb'
        style={{
          height: '15%',
          borderTop: '1px solid #ccc',
          marginTop: '1rem',
          paddingTop: '1rem',
        }}
      >
        <textarea
          style={{ minWidth: '20rem', margin: '0.5rem', height: '100%' }}
          className='flex'
          value={contents}
        />
        <div className='flex col fg2'>
          <div className='flex row jse'>
            {notes.map((note, idx) => (
              <NoteFingerChart
                scale={0.15}
                key={`${idx}-${note.fingering}-chart`}
                note={note}
                showLabel
              />
            ))}
          </div>
            <ControlsDescription />
        </div>
      </section>
    </div>
  )
}
