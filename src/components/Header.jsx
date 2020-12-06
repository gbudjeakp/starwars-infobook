import React from 'react'
import logo from '../img/logo.png'

function Header () {
  return (
    <div>
      <nav>
        <img src={logo} alt='logo' width='100' />
      </nav>
      <div className='search'>
        <input placeholder='search' />
      </div>
    </div>
  )
}

export default Header
