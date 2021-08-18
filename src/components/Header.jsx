import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const color = useContext(ThemeContext)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='flex justify-around w-screen mt-4'>
      <h1 style={{ color }}>ReactHooks + Rick and Morty</h1>
      <button
        className='bg-white text-black px-4 py-2 rounded border-black border-2 hover:shadow-2xl'
        type='button'
        onClick={handleClick}
      >
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default Header
