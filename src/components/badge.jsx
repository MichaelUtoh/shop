import React from 'react'

const Badge = ({icon, title, description}) => {
  return (
    <div className='flex w-[300px] items-start mx-1 p-1 rounded-md shadow-lg'>
        <div className='flex h-full items-center justify-center w-2/12'>{icon}</div>
        <div className='p-1 w-10/12'>
            <p className='font1 text-left'>{title}</p>
            <p className='font2 mt-1 text-left text-sm text-gray-700'>{description}</p>
        </div>
    </div>
  )
}

export default Badge