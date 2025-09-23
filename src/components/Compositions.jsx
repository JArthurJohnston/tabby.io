import { useCompositons } from '../providers/CompositonContext'
import { useInstrument } from '../providers/InstrumentContext'
import { processLines } from '../tab-parsers'
import { TabSheet } from './TabSheet'

export function Compositions() {
  const { compositions, current, setCurrent } = useCompositons()
  const instrument = useInstrument()
  return (
    <div className='flex row full-height'>
      <div className='flex col bordered'>
        {compositions.map((e) => (
          <button
            key={`${e.title}-${e.id}`}
            onClick={() => setCurrent(e)}
            className={`${current === e ? 'highlighted' : ''} full-width`}
          >
            {e.title}
          </button>
        ))}
      </div>
      <TabSheet
        lines={processLines(current.arrangement, instrument)}
        arrangement={current.arrangement}
        instrument={instrument}
      />
    </div>
  )
}
