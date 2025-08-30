import { EMPTY_NOTE } from "./instruments"

export function processLines(val, instrument) {
  const lines = val.split('\n')
  return lines.map((eachLine) => processNotes(eachLine, instrument))
}

export const processNotes = (line, instrument) => {
  return line.split(' ').map((e) => {
    let isSharp = false
    let octave = null
    let noteChar = null
    if(e === '') return EMPTY_NOTE
    e.split('').forEach((eachChar) => {
      const octaveVal = parseInt(eachChar)
      if (octaveVal) {
        octave = octaveVal
        return
      }
      if (eachChar === '#') {
        isSharp = true
        return
      }
      noteChar = eachChar
    })
    return findInstrumentNote(instrument, noteChar, octave, isSharp)
  })
}

export function findInstrumentNote(instrument, noteCharacter, octave, isSharp) {
  if (!noteCharacter) return
  const uNote = noteCharacter.toUpperCase()

  let foundNotes = instrument.notes.filter(
    (e) => e.note.toUpperCase() === uNote,
  )

  if (octave && isSharp) {
    return foundNotes.find((e) => e.octave === octave && e.sharp)
  }
  if (octave && !isSharp) {
    return foundNotes.find((e) => e.octave === octave && !e.sharp)
  }
  if (isSharp) {
    return foundNotes.find((e) => e.sharp)
  }
  return foundNotes[0]
}
