import { useState, useEffect } from 'react'
import { ABC_SONGS } from '../arrangements'
import { useAbc } from '../hooks/useAbc'
import { useInstrument } from '../providers/InstrumentContext'
import { ABC_Tabsheet } from './ABC_Tabsheet'
import { getRouteApi } from '@tanstack/react-router'

export function Compositions() {
  const { compId } = getRouteApi().useParams()

  const { name, contents, filePath } = ABC_SONGS.find((s) => s.name === compId)

  const { lines } = useAbc('music-sheet', contents, {
    title: name || 'Unknown',
  })

  const instrument = useInstrument()
  return (
    <div className='flex row full-height'>
      <div className='flex row full-width'>
        <div id='music-sheet' />
        <ABC_Tabsheet lines={lines} instrument={instrument} />
      </div>
    </div>
  )
}
