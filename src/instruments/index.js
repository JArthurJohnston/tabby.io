import naFluteD from './na-flute.json'
import pennyWhistleD from './penny-whistle-d.json'

export const INSTRUMENTS = [naFluteD, pennyWhistleD]

export const NAFlute_D = naFluteD
export const PennyWhistle_D = pennyWhistleD

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