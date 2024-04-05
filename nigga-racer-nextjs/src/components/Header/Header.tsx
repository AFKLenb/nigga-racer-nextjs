"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import Navbar from '../Navbar/Navbar';
import NavbarMobile from '../NavbarMobile/NavbarMobile';

const Header = () => {

  const [openNav, setOpenNav] = useState(false);


  return (
    <header className=' w-full h-[80px] bg-white shadow-sm'>
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
          <Link href="/" className=' w-[50px] h-[50px] group'>
            <Image className='w-full h-full rounded-md group-hover:scale-[1.1] transition-all duration-200' src='/assets/image/logo.png' width={50} height={50} alt='Логотип сайта'  />
          </Link>
          <NavbarMobile containerStyle={` ${openNav ? 'max-h-max border-b border-t border-zinc-800 p-[15px]' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0'} fixed w-full left-0 right-0 top-[81px] transition-all duration-400 bg-zinc-200 md:hidden`}/>
          {/* start component navbar */}
          <Navbar containerStyle='hidden md:flex' />
          {/* end component navbar */}
          <div className=''>
            {/* start menu bar */}
            <button onClick={() => setOpenNav(!openNav)} className='text-xl text-black w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden'>
              <FaBars />
            </button>
            {/* end menu bar */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
