import { useRef } from 'react'
import abcjs from 'abcjs'

export function useSynth(abcUI) {
  // Synth logic here
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const synth = useRef()
  const audioContext = useRef()

  const loadSynth = async () => {
    setIsLoading(true)
    try {
      audioContext.current = new AudioContext()
      synth.current = await abcjs.synth.CreateSynth()
    } catch (error) {
      setError(error)
    }
    setIsLoading(false)
  }

  const initSynth = async () => {
    setIsLoading(true)
    try {
      await synth.current?.init({
        audioContext: audioContext.current,
        visualObj: abcUI,
        millisecondsPerMeasure: abcUI?.millisecondsPerMeasure()
      })
    } catch (error) {
      setError(error)
    }
    setIsLoading(false)
  }

  return { synth: synth.current, isLoading, loadSynth, initSynth, error }
}
