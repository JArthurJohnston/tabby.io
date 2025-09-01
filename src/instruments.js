import { FINGERS } from './constants'

const {
  LEFT_INDEX,
  LEFT_MIDDLE,
  LEFT_RING,
  RIGHT_INDEX,
  RIGHT_MIDDLE,
  RIGHT_RING,
} = FINGERS

export const NAFlute = {
  id: 0,
  name: 'Native Flute in D',
  holes: 6,
  fingering: [
    LEFT_INDEX,
    LEFT_MIDDLE,
    LEFT_RING,
    RIGHT_INDEX,
    RIGHT_MIDDLE,
    RIGHT_RING,
  ],
  key: 'D',
  notes: [
    { note: 'D', octave: 5, fingering: '111111', sharp: false, flat: false },
    { note: 'E', octave: 5, fingering: '111112', sharp: false, flat: false },
    { note: 'F', octave: 5, fingering: '111110', sharp: false, flat: false },
    { note: 'F', octave: 5, fingering: '111101', sharp: true, flat: false },
    { note: 'g', octave: 5, fingering: '111100', sharp: false, flat: false },
    { note: 'g', octave: 5, fingering: '111010', sharp: true, flat: false },
    { note: 'a', octave: 5, fingering: '111000', sharp: false, flat: false },
    { note: 'a', octave: 5, fingering: '110100', sharp: true, flat: false },
    { note: 'b', octave: 5, fingering: '110000', sharp: false, flat: false },
    { note: 'c', octave: 5, fingering: '101000', sharp: false, flat: false },
    { note: 'c', octave: 5, fingering: '100000', sharp: true, flat: false },
    { note: 'd', octave: 6, fingering: '001000', sharp: false, flat: false },
    { note: 'd', octave: 6, fingering: '001111', sharp: true, flat: false },
    { note: 'c', octave: 6, fingering: '011000', sharp: true, flat: false },
    { note: 'c', octave: 6, fingering: '100001', sharp: false, flat: false },
    { note: 'f', octave: 6, fingering: '001110', sharp: false, flat: false },
  ],
}

export const EMPTY_NOTE = {
  note: 'EMPTY',
  octave: 0,
  fingering: '000000',
  sharp: false,
  flat: false,
}

export const NEWLINE_NOTE = {
  note: 'NEWLINE',
  octave: 0,
  fingering: '000000',
  sharp: false,
  flat: false,
}
