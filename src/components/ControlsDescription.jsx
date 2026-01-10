export function ControlsDescription() {
  return (
    <div className='flex jse'>
      <div className='flex centered'>
        <p>Covered Hole = </p>
        <Circle scale={0.2} fill='white' />
      </div>
      <div className='flex centered'>
        <p>Open Hole = </p>
        <Circle scale={0.2} fill='black' />
      </div>
      <div className='flex centered'>
        <p>Half Covered Hole = </p>
        <Circle scale={0.2} fill='grey' />
      </div>
      <div className='flex centered'>
        <p>* = Overblow</p>
      </div>
    </div>
  )
}
