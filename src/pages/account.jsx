import React from 'react'
import Footer from '../components/footer';
import NavBar from '../components/header';

const Account = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <NavBar />

      <Footer />
    </div>
  )
}

export default Account;