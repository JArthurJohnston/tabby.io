import '../App.css'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { InstrumentContext } from '../providers/InstrumentContext'
import { NAFlute } from '../instruments'
import {  CompositionsProvider } from '../providers/CompositonContext'

export const Route = createRootRoute({
  component: () => (
    <div className='flex col' style={{ width: '60%' }}>
      <InstrumentContext value={NAFlute}>
        <CompositionsProvider>
          <div className='flex bordered jsb mb'>
            <Link to='/'>Home</Link>
            <Link to='/abc_composer'>ABC</Link>
            <Link to='/compositions'>Compositions</Link>
          </div>
          <Outlet />
        </CompositionsProvider>
      </InstrumentContext>
    </div>
  ),
})
