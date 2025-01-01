import React, { useState } from 'react'
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-white sticky top-0 z-50 shadow-lg text-black h-20 flex justify-between items-center '  >
      
      <div className='mt-2 pl-5 font-semibold font-serif text-2xl' onClick={()=>setIsOpen(false)}>
        BYTEBEAT
      </div>
      <div className='hidden lg:block text-lg cursor-pointer' >
        <ul className='flex gap-5  pr-10 pt-2'>
          <div className='flex gap-2 p-2 px-4 justify-between items-center hover:bg-gray-50'>
            <TiHome className='w-6 h-6' />
            <li className=''>Home</li></div>
          <div className='flex gap-2 p-2 px-4  justify-between items-center hover:bg-gray-50'>
          <IoMdContact className='w-6 h-6' />
            <li className='hover-underline'>Contact us</li></div>
            <div className='flex gap-2 p-2 px-4 justify-between items-center hover:bg-gray-50'>
            <FaHeart className='w-6 h-6'/>
              <li>Favourites</li></div>
          <div className='flex gap-2 p-2 px-4 justify-between items-center hover:bg-gray-50'>
          <FaShoppingCart  className='w-6 h-6'/>
           <li className='hover-underline'>Cart</li></div>

        </ul>
      </div>
      <div className={isOpen? 'hidden': 'lg:hidden'}>
      <FaBars onClick={()=> setIsOpen(!isOpen)}  />
      </div>

     { isOpen? 
      <div className=' flex flex-col justify-between items-center mt-10'>

      <ul className=' gap-4 pr-10 pt-2'>
          <div className='flex gap-1'>
            <TiHome className='mt-1' />
            <li className='hover-underline'>Home</li></div>
          <div className='flex gap-1'>
          <IoMdContact className='mt-1' />
            <li className='hover-underline'>Contact us</li></div>
            <div className='flex gap-1'>
            <FaHeart className='mt-1'/>
              <li>Favourites</li></div>
          <div className='flex gap-1'>
          <FaShoppingCart  className='mt-1'/>
           <li className='hover-underline'>Cart</li></div>

        </ul>
      </div>:
      <></>
     }
    
    </div> 
    
  )
}

export default Header;
