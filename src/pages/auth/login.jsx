import React from 'react'
// import Logo from '../../assets/paypal.svg'
import Logo from '../../assets/logo.png'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useDisplay } from '../../hooks/useDisplay'
const Login = () => {
  const [show, setShow] = useDisplay()
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
  } 
  const handleClick = () => navigate('/')
  return (
    <div className='flex items-center justify-center max-w-md mx-auto'>
        <div className='w-full border p-10 mt-20 rounded-md shadow-sm'>
          <img src={Logo} alt="img" className='w-[50px] mx-auto' />

          <form action="" className='flex flex-col gap-4 mt-10' onSubmit={handleSubmit}>
            <div className='border p-3 rounded-md flex flex-col  '>
              <input type="text" placeholder='Email address' className='outline-none'/>
            </div>
            <div className='border p-3 rounded-md flex items-center justify-between  '>
              <input type={!show ? "password" : 'text' }placeholder='Enter your password' className='outline-none'/>
              <span className='cursor-pointer text-sm font-bold text-link ' onClick={setShow}>{!show ? "Show" : "Hide"}</span>

            </div>
            <span className='text-link text-base font-semibold'>Forgot password?</span>
            <Button text={"Login"}  handleClick={handleClick} />
            <div className='flex items-center justify-center gap-4 my-8'>
              <div className='border border-gray-100 w-full'></div>
              <span>Or</span>
              <div className='border w-full border-gray-100 '></div>
            </div>
            <button disabled className={`bg-secondary text-primary w-full px-6 py-2 border-primary hover:border-[2px] border font-bold text-base rounded-[5pc]`}>Sign Up</button>
          </form>
        </div>
    </div>
  )
}

export default Login