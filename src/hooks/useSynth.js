import { useRef, useState } from 'react'
import abcjs from 'abcjs'

export function useSynth(abcUI) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const synth = useRef()
  const audioContext = useRef()

  const loadSynth = () => {
    setIsLoading(true)
    try {
      audioContext.current = new AudioContext()
      synth.current = abcjs.synth.CreateSynth()
    } catch (error) {
      console.error('Error creating synth:', error)
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
      console.error('Error initializing synth:', error)
      setError(error)
    }
    setIsLoading(false)
  }

  return { synth: synth.current, isLoading, loadSynth, initSynth, error }
}
