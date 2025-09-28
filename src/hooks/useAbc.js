import { useEffect, useState } from 'react'
import abcjs from 'abcjs'

export function useAbc(elmId = '*', abcContent = '', options = {}) {
  const [tune, setTune] = useState(null)

  const abcOpts = { ...DEFAULT_OPTIONS, ...options }

  useEffect(() => {
    const afterParsing = (parsedTune) => {
      console.log('parsedTune', parsedTune.lines);
      
      setTune(parsedTune)
    }
    abcjs.renderAbc(elmId, abcContent, {...abcOpts, afterParsing})
  }, [abcContent])

  return tune || { lines: []}
}

const DEFAULT_OPTIONS = {
  meter: '4/4',
  length: '1/8',
  key: 'D',
  title: 'Untitled',
  responsive: 'resize'
}
