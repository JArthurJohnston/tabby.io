import '../App.css'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { InstrumentContext } from '../providers/InstrumentContext'
import { NAFlute } from '../instruments'
import { CompositionContext, DEFAULT_COMPOSITIONS } from '../providers/CompositonContext'

export const Route = createRootRoute({
  component: () => (
    <div className='flex col' style={{ width: '60%' }}>
      <InstrumentContext value={NAFlute}>
        <CompositionContext value={DEFAULT_COMPOSITIONS}>
          <div className='flex bordered jsb mb'>
            <Link to='/'>Overview</Link>
            <Link to='/composer'>Composer</Link>
          </div>
          <Outlet />
        </CompositionContext>
      </InstrumentContext>
    </div>
  ),
})
