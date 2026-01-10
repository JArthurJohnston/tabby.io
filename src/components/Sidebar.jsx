import { Link } from '@tanstack/react-router'
import { ABC_SONGS } from '../arrangements'
import { useState } from 'react'
import './sidebar.css'

export function Sidebar() {
  return (
    <nav
      className={`full-height sidebar `}
      id='sidebar'
    >
      <ul className='sidebar-list'>
        <li className='sidebar-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='sidebar-item' style={{ display: 'block' }}>
          <Link to='/abc_composer'>ABC</Link>
        </li>
        <CollapsableList title='Compositions'>
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
        </CollapsableList>
        <CollapsableList title='Instruments'>
        </CollapsableList>
        <CollapsableList title='Helpful Links'>
          <li className='sidebar-item'>
            <a target='_blank' href='https://tuner-online.com/'>Tuner</a>
          </li>
          <li className='sidebar-item'>
            <a target='_blank' href='https://abcnotation.com/'>ABC Documentation</a>
          </li>
        </CollapsableList>
      </ul>
    </nav>
  )
}

function CollapsableList({ title, children }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <li className=''>
      <button
        type='button'
        className='sidebar-toggle sidebar-item '
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls='compositions-list'
      >
        {title} <span className='chev'>{isOpen ? '▾' : '▸'}</span>
      </button>
      <ul
        id='compositions-list'
        className={`sidebar-list ${isOpen ? 'open' : 'collapsed'}`}
      >
        <ul
          id='compositions-list'
          className={`sidebar-list ${isOpen ? 'open' : 'collapsed'}`}
        >
          {children}
        </ul>
      </ul>
    </li>
  )
}
