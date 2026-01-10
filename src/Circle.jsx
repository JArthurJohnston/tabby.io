export function Circle({ scale = 1, fill = 'black' }) {
  const computedWidth = 100 * scale

  return (
    <svg
      height={100 * scale}
      width={computedWidth}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        // r='50%'
        r={45 * scale}
        // cx={computedWidth}
        cx={50 * scale}
        cy={50 * scale}
        stroke='white'
        fill={fill}
      />
    </svg>
  )
}