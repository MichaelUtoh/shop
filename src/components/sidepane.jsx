import React from 'react'
import { RiArrowDropRightLine, RiMenu3Fill } from "react-icons/ri";

const Sidepane = () => {

    let categories = [
        "supermarket",
        "health & beauty",
        "home & office",
        "phones & tablets",
        "computing",
        "Eletronics",
        "Fashion",
        "Baby Products",
        "Gaming",
        "Sporting Goods",
        "Automobile",
        "Other Categories",
    ]

  return (
    <div className='flex flex-col h-[450px] mr-4 w-[250px]'>
        <div className='bg-[#070707] flex font1 items-center justify-start p-2 rounded-sm text-sm text-white'>
            <RiMenu3Fill className='mr-4' />
            <p className='text-sm'>Browse Categories</p>
        </div>

        <div>
        {
            categories.map((catg, id) => (
                <span className='flex items-center justify-between mt-2' key={id}>
                    <a href='' className='font2'>{catg}</a>
                    <RiArrowDropRightLine />
                </span>
            ))
        }
        </div>
    </div>
  )
}

export default Sidepane