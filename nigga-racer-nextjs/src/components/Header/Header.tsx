"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import Navbar from '../Navbar/Navbar';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import useSetting from '@/hooks/useSetting';

const Header = () => {

  const [openNav, setOpenNav] = useState(false);
  const detailSetting = useSetting();


  return (
    <header className=' w-full h-[80px] fixed md:absolute z-50 bg-white md:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]'>
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
          {detailSetting?.attributes?.Logo?.icon?.data.attributes?.url ? 
            <Link href="/" className=' w-[50px] h-[50px] group'>
              <Image className='w-full h-full rounded-md group-hover:scale-[1.1] transition-all duration-200' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + detailSetting.attributes?.Logo?.icon?.data.attributes?.url} width={50} height={50} alt='Логотип сайта'  />
            </Link>
              :
              <div className='w-full flex flex-col gap-4 z-30'>
                  <div className=" z-30 w-[50px] h-[50px] rounded-lg bg-zinc-800 animate-pulse"></div>
              </div>
            }
          <NavbarMobile containerStyle={` ${openNav ? 'max-h-max border-b border-t border-zinc-800 p-[15px]' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0'} fixed w-full left-0 right-0 top-[80px] transition-all duration-400 backdrop-blur-md bg-white md:hidden`}/>
          {/* start component navbar */}
          <Navbar containerStyle='hidden md:flex w-full' />
          {/* end component navbar */}
          <div className=''>
            {/* start menu bar */}
            <button onClick={() => setOpenNav(!openNav)} className='text-xl text-black w-[45px] h-[45px] flex items-center justify-center border border-zinc-800 rounded-md md:hidden'>
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
