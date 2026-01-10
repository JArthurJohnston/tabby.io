import { useEffect, useState, useRef } from 'react'
import abcjs from 'abcjs'

export function useAbc(elmId = '*', abcContent = '', options = {}) {
  const [tune, setTune] = useState(null)
  const visualObj = useRef(null)

  const abcOpts = { ...DEFAULT_OPTIONS, ...options }

  useEffect(() => {
    const afterParsing = (parsedTune) => {
      setTune(parsedTune)
    }
    visualObj.current = abcjs.renderAbc(elmId, abcContent, {
      ...abcOpts,
      afterParsing,
    })
  }, [abcContent])

  return { tune: tune || { lines: [] }, visualObj: visualObj.current }
}

const DEFAULT_OPTIONS = {
  responsive: 'resize',
}
