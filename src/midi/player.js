let audioContext
let oscillator

export async function init() {
  return navigator.requestMIDIAccess().then(canPlay, cannotPlay)
}

function buildAudioContext() {
  return new (window.AudioContext || window.webkitAudioContext)()
}

function canPlay(midiAccess) {
  const inputs = midiAccess.inputs
  audioContext = buildAudioContext()
  oscillator = audioContext.createOscillator()
  oscillator.connect(audioContext.destination)

  inputs.forEach((input) => (input.onmidimessage = handleMIDIMessage))
}

function cannotPlay() {
  console.log('Could not access MIDI devices.')
}

function handleMIDIMessage(message) {
  // Handle incoming MIDI messages
  const [type, note, velocity] = message.data

  // gonna have to look up midi command numbers
  if (type === 144) {
    // Note on
    console.log(`Note on: ${note} (velocity: ${velocity})`)
    if (velocity > 0) {
      oscillator.frequency.setValueAtTime(
        midiNoteToFrequency(note),
        audioContext.currentTime,
      )
    }
  } else if (type === 128) {
    // Note off
    console.log(`Note off: ${note} (velocity: ${velocity})`)
    oscillator?.stop()
  }
}

function midiNoteToFrequency(note) {
  return 440 * Math.pow(2, (note - 69) / 12)
}

