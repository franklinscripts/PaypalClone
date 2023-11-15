import React from 'react'
import logo from '../assets/paypal-full.svg'

const Footer = () => {
  return (
    <div className=' max-w-6xl mx-auto flex flex-col gap-10 py-5 px-3'>
        <div className='flex md:flex-row flex-col  items-center gap-10 '>
          <img src={logo} className='w-[150px]' alt="" />
            <span>Help</span>
            <span>Contact Us</span>
            <span>Security</span>
        </div>
        <div className='border-t-4 py-10'>
        <div className='flex md:flex-row flex-col-reverse gap-10 text-sm text-slate-700 py-5'>
            <span>©1999-2023 PayPal, Inc. All rights reserved.</span>
            <span>Privacy</span>
            <span>Cookies</span>
            <span>Legal</span>
        </div>

        <div className='text-base text-slate-500'>
            <span>PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore as a Major Payment Institution under the Payment Services Act 2019.</span>
        </div>
        </div>
    </div>

  )
}

export default Footer