import React from 'react'
import { ThemeToggle } from '../theme/theme-toggle'

function Navbar() {
  return (
    <header className='flex justify-between items-center container py-4 border-b border-b-gray-300'>
      <h1 className='font-bold text-2xl'>Where in the world?</h1>
      <ThemeToggle />
    </header>
  )
}

export default Navbar
