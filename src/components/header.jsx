import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { TfiHelpAlt, TfiShoppingCart } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";


const NavBar = () => {
  return (
    <nav className='flex items-center justify-between mx-auto p-2 w-11/12'>
      <a className='font1 font-bold text-2xl'><Link to="/">Nazimo</Link></a>

      <div className='border border-gray-400 flex items-center justify-end p-2 rounded-full w-4/12'>
        <input className='search-box w-11/12' />
        <CiSearch />
      </div>
  
      <ul className='flex font-thin'>
        <li className='flex font2 items-center ml-5'>
          <VscAccount className='mr-1' />
          <Link to="/account">Account</Link>
        </li>
        <li className='flex font2 items-center ml-5'>
          <TfiHelpAlt className='mr-1' />
          <Link to="/help">Help</Link>
        </li>
        <li className='flex font2 items-center ml-5'>
          <TfiShoppingCart className='mr-1 text-24' size={18} />
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar