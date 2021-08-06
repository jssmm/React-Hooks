import React, { useState } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='flex justify-around w-screen mt-4'>
      <h1>ReactHooks + Rick and Morty</h1>
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
