import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiFillTwitterSquare } from "react-icons/ai";


const redBox = [
    "Warranty",
    "Service Center",
    "How to Shop on ESHOP",
    "Return Policy",
    "Corporate & Bulk Purchase",
    "ESHOP Mobile Apps",
]

const greenBox = [
    "Careers",
    "About Us",
    "ESHOP Express",
    "Shipped From Overseas",
    "ESHOP Prime",
    "Terms & Conditions",
    "Privacy Policy",
    "Economy Postal Shipping",
]

const blueBox = [
    "Ghana",
    "Algeria",
    "Morocco",
    "South Africa",
    "Namibia",
]

const Footer = () => {
  return (
    <div className='bg-[#070707] p-4 text-white'>
        <div className='flex flex-col mx-auto w-11/12'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <ul className='font2 p-2 mr-4'>
                        <span className='font1 text-red-300 text-md uppercase'>Let us help you</span>
                        {
                            redBox.map((link, id) => (
                                <li key={id}><a href="">{link}</a></li>
                            ))
                        }
                    </ul>
                    <ul className='font2 p-2 ml-10'>
                        <span className='font1 text-green-400 text-md uppercase'>Get to know us</span>
                        {
                            greenBox.map((link, id) => (
                                <li key={id}><a href="">{link}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <ul className='font2 p-2 pr-4'>
                    <span className='font1 text-cyan-300 text-md uppercase'>ESHOP International</span>
                        {
                            blueBox.map((link, id) => (
                                <li key={id}><a href="">{link}</a></li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            <div className='mt-6 p-2'>
                <p className='font2 uppercase'>Join us on:</p>
                <div className='flex'>
                    <AiFillFacebook className='mr-2' size={24} />
                    <AiOutlineInstagram className='mr-2' size={24} />
                    <AiFillTwitterSquare className='mr-2' size={24} />
                </div>
            </div>
            <div className='mt-6 p-2'>
                <p className='font2 uppercase'>Payment Methods and Delivery Partners</p>
                <div className='flex'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer