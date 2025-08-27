import './fingering-chart.css'
import { useInstrument } from './providers/InstrumentContext'

export function FingeringChart() {
  const instrument = useInstrument()

  return (
    <div className='bordered flex col mr'>
      {instrument.fingering
        .slice()
        .reverse()
        .map((e) => (
          <Hole scale={0.7}>{e}</Hole>
        ))}
      <WhistleHole />
    </div>
  )
}

function Hole({ children, background = 'white', color = 'black', scale = 1 }) {
  return (
    <svg
      height={100 * scale}
      width={100 * scale}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        r={45 * scale}
        cx={50 * scale}
        cy={50 * scale}
        fill={background}
      />
      <text
        x={50 * scale}
        y={60 * scale}
        font-size={30 * scale}
        text-anchor='middle'
        fill={color}
      >
        {children}
      </text>
    </svg>
  )
}

function WhistleHole({ stroke = 'white', fill = 'white', scale = 1 }) {
  return (
    <svg
      height={100 * scale}
      width={100 * scale}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x={35 * scale}
        y={30 * scale}
        height={30 * scale}
        width={30 * scale}
        stroke={stroke}
        fill={fill}
        stroke-width='5'
      />
    </svg>
  )
}
