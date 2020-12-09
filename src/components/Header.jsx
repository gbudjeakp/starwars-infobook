import React from 'react'
import logo from '../img/logo.png'

function Header () {
  return (
    <div>
      <nav>
        <img src={logo} alt='logo' width='100' className='logo' />
      </nav>

      <div className='search'>
        <input placeholder='search' type='text' />
      </div>
    </div>
  )
}

export default Header
