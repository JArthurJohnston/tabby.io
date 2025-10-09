import { useAbc } from '../../hooks/useAbc'
import { ABC_Tabsheet } from '../ABC_Tabsheet'

export function Tabsheet({ instrument, abcContents, title }) {
  const { lines } = useAbc('*', abcContents, {
    title: title || 'Unknown',
  })

  return (
    <ABC_Tabsheet lines={lines} instrument={instrument} style={{ flex: 1 }} />
  )
}
