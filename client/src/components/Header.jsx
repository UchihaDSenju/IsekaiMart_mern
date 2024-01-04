import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='flex justify-between items-center bg-orange-300 px-3'>
        <Link to={'/'}>
          <div className='flex'>
            <h1>Iseaki</h1>
            <h1>Mart</h1>
          </div>
        </Link>
        <form className='flex bg-orange-200 items-center p-2 m-1 rounded-lg sm:w-[500px] justify-between'>
          <input type='text' placeholder='Search...' className=' bg-transparent w-[97%] focus:outline-none'/>
          <FaSearch />
        </form>
        <div className='flex gap-2'>
          <Link to={'/'}><h1 className='hidden sm:inline hover:cursor-pointer hover:underline'>Home</h1></Link>
          <Link to={'/about'}><h1 className='hidden sm:inline hover:cursor-pointer hover:underline'>About</h1></Link>
          <Link to={'/sign-in'}><h1 className='hover:cursor-pointer hover:underline'>SignIn</h1></Link>
        </div>
    </header>
  )
}

export default Header