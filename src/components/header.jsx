import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";


const NavBar = () => {
  return (
    <nav className='flex items-center justify-between mx-auto p-2 w-10/12'>
      <p className='font1 font-bold text-2xl'>SHOP</p>

      <div className='border border-gray-400 flex items-center justify-end p-2 rounded-full w-4/12'>
        <input className='search-box w-11/12' />
        <CiSearch />
      </div>
  
      <ul className='flex font-thin'>
        <li className='font2 ml-3'>
          <Link to="/">Home</Link>
        </li>
        <li className='font2 ml-3'>
          <Link to="/account">Account</Link>
        </li>
        <li className='font2 ml-3'>
          <Link to="/help">Help</Link>
        </li>
        <li className='font2 ml-3'>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar