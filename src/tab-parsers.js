import { EMPTY_NOTE } from './instruments'

export function processLines(val, instrument) {
  const lines = val.split('\n')
  return lines.map((eachLine) => processNotes(eachLine, instrument))
}

export const processNotes = (line, instrument) => {
  return line.split(' ').map((e) => {
    let isSharp = false
    let octave = null
    let noteChar = null
    if (e === '') return EMPTY_NOTE
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

export function processInput(input, instrument, selStart, selEnd) {
  const lines = [[]]
  for (let i = 0; i < input.length; i++) {
    let isSharp = false
    let octave = null
    let noteChar = null
    const character = input[i]
    const octaveVal = parseInt(character)

    if (character === ' ' || i >= input.length - 1) {
      lines[lines.length - 1].push(
        findInstrumentNote(instrument, noteChar, octave, isSharp),
      )
      isSharp = false
      octave = null
      noteChar = null
      continue
    }

    if (character === '\n') {
      lines.push([])
      continue
    }
    if (octaveVal) {
      octave = octaveVal
      continue
    }
    if (character === '#') {
      isSharp = true
      continue
    }
    noteChar = character
  }
  return lines
}
