import '../App.css'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { InstrumentProvider } from '../providers/InstrumentContext'
import { CompositionsProvider } from '../providers/CompositonContext'
import { Sidebar } from '../components/Sidebar'

export const Route = createRootRoute({
  component: () => (
    <InstrumentProvider>
      <CompositionsProvider>
        <div className='flex col full-width'>
          <header
            className='full-width'
            style={{ borderBottom: '1px solid white' }}
          >
            <h2 className='ml'>Tabby</h2>
          </header>
          <div className='flex row full-height full-width'>
            <Sidebar />
            <main className='flex col full-width'>
              <Outlet />
            </main>
          </div>
        </div>
      </CompositionsProvider>
    </InstrumentProvider>
  ),
})
