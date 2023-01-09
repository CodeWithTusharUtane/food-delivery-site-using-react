import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
const [nav, setNav] = useState(false)

const changeColor = () =>{

}

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Food</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]  hover:bg-orange-400 hover:text-black'>
          <p className='bg-black text-white rounded-full p-2 hover:bg-white hover:text-black'>Delivery</p>
          <p className='p-2'>Dine In</p>
        </div>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>
      {/* Cart button */}
      <button className='bg-black px-2 right-20 mr-9 absolute text-white hidden md:flex items-center py-2 rounded-full  hover:bg-orange-400 hover:text-black'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>

      {/* darkmode button */}
      <button np className="darkmode bg-black text-white p-2 rounded-full  hover:bg-orange-400 hover:text-black" onClick={changeColor}>
          Dark Mode
        </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer hover:text-orange-500'
        />
        <h2 className='text-2xl p-4 hover:text-orange-500'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4  hover:text-orange-500'><TbTruckDelivery size={25} className='mr-4 hover:text-orange-500' /> Orders</li>
                <li className='text-xl py-4  hover:text-orange-500'><MdFavorite size={25} className='mr-4 hover:text-orange-500' /> Favorites</li>
                <li className='text-xl py-4  hover:text-orange-500'><FaWallet size={25} className='mr-4 hover:text-orange-500' /> Wallet</li>
                <li className='text-xl py-4  hover:text-orange-500'><MdHelp size={25} className='mr-4 hover:text-orange-500'  /> Help</li>
                <li className='text-xl py-4  hover:text-orange-500'><AiFillTag size={25} className='mr-4 hover:text-orange-500' /> Promotions</li>
                <li className='text-xl py-4  hover:text-orange-500'><BsFillSaveFill size={25} className='mr-4 hover:text-orange-500' /> Best Dishes</li>
                <li className='text-xl py-4  hover:text-orange-500'><FaUserFriends size={25} className='mr-4 hover:text-orange-500' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;