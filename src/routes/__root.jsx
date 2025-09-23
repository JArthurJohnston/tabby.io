import '../App.css'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { InstrumentContext } from '../providers/InstrumentContext'
import { NAFlute } from '../instruments'
import { CompositionsProvider } from '../providers/CompositonContext'

export const Route = createRootRoute({
  component: () => (
    <InstrumentContext value={NAFlute}>
      <CompositionsProvider>
        <div className='flex col full-width'>
          <header
            className='full-width'
            style={{ borderBottom: '1px solid white' }}
          >
            <h2 className='ml'>Tabby</h2>
          </header>
          <div className='flex row full-height full-width'>
            <nav
              className='full-height'
              style={{ borderRight: '1px solid white', width: '15rem' }}
              id='sidebar'
            >
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/abc_composer'>ABC</Link>
                </li>
                <li>
                  <Link to='/compositions'>Compositions</Link>
                </li>
              </ul>
            </nav>
            <main className='flex col full-width'>
              <Outlet />
            </main>
          </div>
        </div>
      </CompositionsProvider>
    </InstrumentContext>
  ),
})
