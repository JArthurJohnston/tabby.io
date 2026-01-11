import abcjs from 'abcjs'
import { useRef } from 'react'

export function useMidi(contents, midiOptions = {}) {
  const options = { ...DEFAULT_MIDI_OPTIONS, ...midiOptions }
  const midiBlob = abcjs.synth.getMidiFile(contents, options)
  const audioContext = useRef()
  const oscillator = useRef()

  function noteOn(note) {
    audioContext.current = buildAudioContext()
    oscillator.current = audioContext.current.createOscillator()
    oscillator.current.frequency.setValueAtTime(
      midiNoteToFrequency(note),
      audioContext.current.currentTime,
    )
    oscillator.current.connect(audioContext.current.destination)
    oscillator.current.start()
  }

  function noteOff() {
    if (oscillator.current) {
      oscillator.current.stop()
    }
  }

  return { midiBlob }
}

const DEFAULT_MIDI_OPTIONS = {
  midiOutputType: 'encoded',
  bpm: 120,
}

function buildAudioContext() {
  return new (window.AudioContext || window.webkitAudioContext)()
}

function midiNoteToFrequency(note) {
  return 440 * Math.pow(2, (note - 69) / 12)
}

export async function init() {
  return navigator.requestMIDIAccess().then(canPlay, cannotPlay);
}

function canPlay(midiAccess) {
  const inputs = midiAccess.inputs;
  inputs.forEach((input) => input.onmidimessage = handleMIDIMessage);
}

function cannotPlay() {
  console.log('Could not access MIDI devices.');
}
