import React from 'react'

const Badge = ({icon, title, description}) => {
  return (
    <div className='flex'>
        <div className='w-2/12'>{icon}</div>
        <div className='w-10/12'>
            <p className='font1 text-left'>{title}</p>
            <p className='font2 text-left'>{description}</p>
        </div>
    </div>
  )
}

export default Badge