import React from 'react'
import { NETFLIX_LOGO } from './constants'

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black  z-10'>
        <img className=' w-56' src={NETFLIX_LOGO} alt="app-logo" />
    </div>
  )
}

export default Header