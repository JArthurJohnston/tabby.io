export function PrintButton({ elm }) {
  return (
    <input
      type='button'
      value='Print'
      style={{ marginLeft: '1rem' }}
      onClick={() => window.print()}
    />
  )
}
