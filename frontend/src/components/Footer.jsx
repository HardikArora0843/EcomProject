import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
            <div >
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi id perferendis provident placeat similique sed beatae deleniti officiis sint saepe rem incidunt optio asperiores eligendi, dolor nulla repellat dolorem. Ut.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>

                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-9943592311</li>
                    <li>contact@sanjaysales.com</li>
                </ul>
            </div>


        </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'> Copywright 2024 @SanjaySales.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
