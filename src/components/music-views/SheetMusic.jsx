import { useAbc } from '../../hooks/useAbc'

export function SheetMusic({ sheetId, contents = '' }) {
  const id = `music-sheet-${sheetId ? sheetId : 'default'}`
  const { visualObj } = useAbc(id, contents)
  return (
    <div style={{width: '50%', overflow: 'auto'}}>
      <div id={id} style={{ flex: 1, minWidth: '25rem', height: '90%' }} />
    </div>
  )
}
