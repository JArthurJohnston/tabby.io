import React from 'react'
import { Link } from '@tanstack/react-router'
import { ABC_SONGS } from '../arrangements'

export function Sidebar() {
  return (
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
          <ul>
            {ABC_SONGS.map((song) => (
              <li
                style={{ overflowX: 'hidden' }}
                key={`${song.name}-sidebar-item`}
              >
                {song.name}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
