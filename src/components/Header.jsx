import React from 'react'
import logo from '../img/logo.png'

function Header () {
  return (
    <div>
      <nav>

        <div>
          <a href='#'>Starships</a>
          <a href='#'>Planets</a>
          <a href='#'>Species</a>
        </div>

        <img src={logo} alt='logo' width='100' className='logo' />
      </nav>

      <div className='search'>
        <input placeholder='search' />
      </div>
    </div>
  )
}

export default Header
