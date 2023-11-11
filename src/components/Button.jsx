import React from 'react'

const Button = ({ text, handleClick}) => {
  return (
    <button className={`text-secondary bg-primary w-full px-6 py-2 border-primary rounded-[5pc]`} onClick={handleClick}>{text}</button>
  )
}

export default Button