import { useAbc } from '../../hooks/useAbc'

export function SheetMusic({ sheetId, contents='' }) {
  const id = `music-sheet-${sheetId ? sheetId : 'default'}`
  useAbc(id, contents)
  return <div id={id} style={{ flex: 1, minWidth: '25rem' }} />
}
