import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
    <div className='flex items-center space-x-10'>
    <div>
        <Link className='font-bold' href="/">Researcher’s Portal </Link>
    </div>
    <div className='hidden md:inline-flex items-center space-x-5'>
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Blog</h3>
    </div>
    </div>
    <div className='inline-flex items-center space-x-5'>
        <h3>Sing in</h3>
        <h3>Get start</h3>
    </div>
 </header>
  )
}

export default Navbar
