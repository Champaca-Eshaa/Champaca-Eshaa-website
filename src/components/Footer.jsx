import React from 'react'
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className='text-white'>
        <div className=' flex justify-around'>
      <div className='p-2 md:p-5 flex items-center'>
        <img className='h-12 w-12' src={logo} alt="logo" />
        <p className='font-bold text-xl'>Champaca Eshaa</p>
      </div>
      <div className='flex items-end max-md:items-center flex-wrap gap-3 md:gap-10 pb-5'>
          <a href="#hero">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#contactUs">Contact Us</a>
      </div>
    </div>
    <hr />
    <div className=' flex justify-center font-extralight text-sm p-5'>
    <p >© 2024 Champaca Eshaa</p>
    </div>
    </div>
  )
}

export default Footer
