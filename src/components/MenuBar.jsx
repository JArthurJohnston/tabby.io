import { Link } from "@tanstack/react-router";

export function MenuBar({ instrument }) {
  return (
    <div className='flex bordered jsb mb'>
      <p style={{ marginLeft: '1rem' }}>{instrument.name}</p>
      <Link to='/'>Overview</Link>
      <Link to='/composer'>Composer</Link>
    </div>
  )
}
