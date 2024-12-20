import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* Left Section */}

            <div>
                <img src={assets.logo} alt="" className='mb-4 w-40'/>
                <p className='w-full md:2/3 text-gray-600 leading-6'>Your health is our priority! With a network of over 100 trusted and experienced doctors, we are here to provide the care you deserve. Schedule your appointment today for personalized and professional medical assistance.</p>
            </div>

            {/* Center Section */}

            <div className=''>

                <p className='text-xl font-medium mb-4'>COMPANY</p>
                
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            {/* Right Section */}

            <div>

                <p className='text-xl font-medium mb-4'>Get In Touch</p>

                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-8435110529</li>
                    <li>mailto.priyanshu2000@gmail.com</li>
                </ul>

            </div>

        </div>

        {/* Copyright text */}

        <div >

            <hr />

            <p className='py-5 text-sm text-center'>Copyright 2024 @ priyanshu - All Right Reserved.</p>

        </div>

    </div>
  )
}

export default Footer