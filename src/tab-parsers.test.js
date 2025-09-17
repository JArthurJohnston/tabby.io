import { describe, expect, it } from 'vitest'
import { processInput } from './tab-parsers'
import { NAFlute } from './instruments'

describe('process input', () => {
  it('returns an empty line', () => {
    const lines = processInput('', NAFlute, 0, 0)

    expect(lines.length).toEqual(1)
    expect(lines[0].length).toEqual(0)
  })

  it('returns a line with a note', () => {
    const expectedNote = NAFlute.notes[6]

    const lines = processInput('a', NAFlute, 0, 0)

    expect(lines.length).toEqual(1)

    const firstLine = lines[0]
    expect(firstLine[0]).toBe(expectedNote)
  })

    it('returns a line with a sharp note', () => {
    const expectedNote = NAFlute.notes[7] //a#

    const lines = processInput('a#', NAFlute, 0, 0)

    expect(lines.length).toEqual(1)

    const firstLine = lines[0]
    expect(firstLine[0]).toBe(expectedNote)
  })

  it('returns a line with multiple notes', () => {
    const expectedANote = NAFlute.notes[6]
    const expectedBNote = NAFlute.notes[8]

    const lines = processInput('a b', NAFlute, 0, 0)    

    expect(lines.length).toEqual(1)

    const firstLine = lines[0]
    
    expect(firstLine.length).toEqual(2)
    expect(firstLine[0]).toBe(expectedANote)
    expect(firstLine[1]).toBe(expectedBNote)
  })

  it('parses multiple lines', () => {
    const expectedANote = NAFlute.notes[6]
    const expectedBNote = NAFlute.notes[8]

    const lines = processInput('a\nb', NAFlute, 0, 0)    

    expect(lines.length).toEqual(2)

    const line1 = lines[0]
    const line2 = lines[1]

    expect(line1[0]).toBe(expectedANote)
    expect(line2[0]).toBe(expectedBNote)
  })
})
