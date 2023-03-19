import React from 'react'
import Badge from '../components/badge'
import Carousel from '../components/carousel'
import Sidepane from '../components/sidepane'

const Home = () => {
  return (
    <div className='flex flex-col mx-auto p-2 pt-4 w-11/12'>
      <div className='flex'>
        <Sidepane />
        <Carousel />
      </div>
      <div>
        <Badge />
      </div>
    </div>
  )
}

export default Home