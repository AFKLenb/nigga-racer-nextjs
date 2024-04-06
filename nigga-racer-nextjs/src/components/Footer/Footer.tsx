'use client';
import useSocials from '@/hooks/useSocials'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const socialsList = useSocials();

  return (
    <footer className=' w-full h-[80px] bg-white shadow-[1px_0_60px_0_rgba(0,0,0,0.05)]  '>
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
          <Link href="/" className=' w-[50px] h-[50px] group'>
            <Image className='w-full h-full rounded-md group-hover:scale-[1.1] transition-all duration-200' src='/assets/image/logo.png' width={50} height={50} alt='Логотип сайта'  />
          </Link>
          <div className="block">
            <ul className="inline-flex w-full gap-5">
              {socialsList.length > 0 ? socialsList.map((item, index) => {
                  return (
                        <Link key={index} href={item.attributes?.url} target="_blank" className='group w-[40px] h-[40px] rounded-xl'>
                          <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-full h-full bg-white object-cover p-1 group-hover:scale-[1.1] transition-all rounded-full duration-200' />
                        </Link>
                      ) 
                  })
                  :
                  [1,2,3,4].map((item, index) => {
                  return (
                      <div key={index} className="w-[40px] h-[40px] rounded-full bg-zinc-800 animate-pulse"></div>
                  );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
