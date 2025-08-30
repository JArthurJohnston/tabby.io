import { useCompositons } from '../providers/CompositonContext'
import { useInstrument } from '../providers/InstrumentContext'
import { TabSheet } from './TabSheet'

export function Compositions() {
  const { compositions, current, setCurrent } = useCompositons()
  const instrument = useInstrument()
  return (
    <div className='flex row'>
      <div className='flex col bordered'>
        {compositions.map((e) => (
          <button
            key={e.title}
            onClick={() => setCurrent(e)}
            className={`${current === e ? 'highlighted' : ''} full-width`}
          >
            {e.title}
          </button>
        ))}
      </div>
      <TabSheet composition={current} instrument={instrument} />
    </div>
  )
}
