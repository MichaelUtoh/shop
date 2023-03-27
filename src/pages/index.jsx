import React from 'react'
import Badge from '../components/badge'
import Carousel from '../components/carousel'
import Sidepane from '../components/sidepane'

import { FaMoneyBill, FaTruck } from 'react-icons/fa'
import NavBar from '../components/header'
import Footer from '../components/footer'
import { CategoryCard } from '../components/cards'
import Gadgets from '../assets/gadgets.jpg'

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className='flex flex-col mx-auto p-2 pt-4 w-11/12'>
        <div className='flex mt-2'>
          <Sidepane />
          <Carousel />
        </div>

        <div className='flex justify-center my-6'>
          <Badge icon={ <FaTruck size={20} /> } title='Door Delivery' description='Deliver to Anywhere, Everywhere' />
          <Badge icon={ <FaMoneyBill size={20} /> } title='Money Return' description='Refund in 7Days.' />
          <Badge icon={ <FaTruck size={20} /> } title='Return Policy' description='Free return of goods within 15 days' />
          <Badge icon={ <FaTruck size={20} /> } title='Online Support 24/7' description='Support services around the clock' />
        </div>

        <div className='bg-gray-50 my-8'>
          <CategoryCard />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home