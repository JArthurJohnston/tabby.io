import { Link } from '@tanstack/react-router'
import { ABC_SONGS } from '../arrangements'
import { useState } from 'react'
import './sidebar.css'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <nav
      className={`full-height sidebar ${isOpen ? 'open' : 'collapsed'}`}
      id='sidebar'
    >
      <ul className='sidebar-list'>
        <li className='sidebar-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='sidebar-item' style={{ display: 'block' }}>
          <Link to='/abc_composer'>ABC</Link>
        </li>
        <li className=''>
          <button
            type='button'
            className='sidebar-toggle sidebar-item '
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls='compositions-list'
          >
            Compositions <span className='chev'>{isOpen ? '▾' : '▸'}</span>
          </button>
          <ul
            id='compositions-list'
            className={`sidebar-list ${isOpen ? 'open' : 'collapsed'}`}
          >
            {ABC_SONGS.map((song) => (
              <li
                className='sidebar-item'
                key={`${song.name}-sidebar-item`}
                data-label={song.name}
                tabIndex={0}
              >
                <Link to={`/compositions/${song.name}`}>{song.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
