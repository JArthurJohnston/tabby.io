import { useEffect, useState } from 'react'
import abcjs from 'abcjs'

export function useAbc(elmId = '*', abcContent = '', options = DEFAULT_OPTIONS) {
  const [tune, setTune] = useState(null)

  useEffect(() => {
    const afterParsing = (parsedTune) => {
      setTune(parsedTune)
    }
    const abcMusic = `T:${options.title}
      K:${options.key}
      M:${options.meter}
      L:${options.length}
      ${abcContent}
      `
    abcjs.renderAbc(elmId, abcMusic, {...options, afterParsing})
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
