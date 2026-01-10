import { useEffect, useRef } from 'react'
import { useAbc } from '../../hooks/useAbc'
import { useSynth } from '../../hooks/useSynth'
import ABCJS from 'abcjs'
import { CursorControl } from '../../hooks/cursor-control'
import 'abcjs/abcjs-audio.css';

export function SheetMusic({ sheetId, contents = '' }) {
  const id = `music-sheet-${sheetId ? sheetId : 'default'}`
  const { visualObj } = useAbc(id, contents)
  const { loadSynth, initSynth, isLoading } = useSynth(visualObj)
  const synthController = useRef()

  useEffect(() => {
    if (ABCJS.synth.supportsAudio()) {
      synthController.current = new ABCJS.synth.SynthController()
      synthController.current.load('#audio-controls', new CursorControl(), {
        displayPlay: true,
        displayProgress: true,
      })
    }
  }, [])

  const buttonText = isLoading ? 'Loading Audio...' : 'Enable Audio'

  return (
    <div style={{ width: '50%', overflow: 'auto' }}>
      <input
        type='button'
        value={buttonText}
        onClick={async () => {
          await loadSynth()
          initSynth()
        }}
      />
      <div id='audio-controls' />
      <div id={id} style={{ flex: 1, minWidth: '25rem', height: '90%' }} />
    </div>
  )
}
