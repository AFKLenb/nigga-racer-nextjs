'use client';
import useSetting from '@/hooks/useSetting';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const detailSetting = useSetting();

  return (
    <footer className=' w-full h-[80px] bg-blend-multiply bg-white shadow-[0_0_10px_1px_rgba(0,0,0,0.3)]  '>
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
          <div className="block">
            <ul className="flex w-full gap-5">
              {detailSetting?.attributes?.Social?.urlVk ?
                <Link href={detailSetting?.attributes?.Social?.urlVk} target="_blank" className='group w-[50px] h-[50px] rounded-xl'>
                  <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + detailSetting?.attributes?.Social?.iconVk?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-full h-full object-cover p-1 group-hover:scale-[1.1] transition-all rounded-full duration-200' />
                </Link>
                :
                <div className="w-[40px] h-[40px] rounded-full bg-zinc-800 animate-pulse"></div>
              } 
              {detailSetting?.attributes?.Social?.urlYoutube ?
                <Link href={detailSetting?.attributes?.Social?.urlYoutube} target="_blank" className='group w-[50px] h-[50px] rounded-xl'>
                  <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + detailSetting?.attributes?.Social?.iconYoutube?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-full h-full object-cover p-1 group-hover:scale-[1.1] transition-all rounded-full duration-200' />
                </Link>
                :
                <div className="w-[40px] h-[40px] rounded-full bg-zinc-800 animate-pulse"></div>
              } 
              {detailSetting?.attributes?.Social?.urlTelegram ?
                <Link href={detailSetting?.attributes?.Social?.urlTelegram} target="_blank" className='group w-[50px] h-[50px] rounded-xl'>
                  <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + detailSetting?.attributes?.Social?.iconTelegram?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-full h-full object-cover p-1 group-hover:scale-[1.1] transition-all rounded-full duration-200' />
                </Link>
                :
                <div className="w-[40px] h-[40px] rounded-full bg-zinc-800 animate-pulse"></div>
              } 
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
