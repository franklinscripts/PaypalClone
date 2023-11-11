import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className=' '>
      <Navbar />
      <div className='w-full bg-[#FAF8F5] h-screen'>
        <div className='mt-[3rem] max-w-5xl mx-auto w-full p-5'>
        <Outlet />
        </div>
      </div>
            
    </div>
  )
}

export default Dashboard