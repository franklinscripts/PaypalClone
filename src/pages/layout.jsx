import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className=' '>
      <Navbar />
      <div className='w-full bg-[#FAF8F5] py-10'>
        <div className='mt-[3rem] max-w-5xl mx-auto w-full p-5'>
        <Outlet />
        </div>
      </div>
      <Footer />    

    </div>
  )
}

export default Dashboard