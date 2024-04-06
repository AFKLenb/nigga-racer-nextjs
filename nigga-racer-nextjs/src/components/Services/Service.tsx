'use client';
import useServices from '@/hooks/useServices'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service = ({ getServices }) => { 


  return (
    <section className="w-full py-10">
        <div className="container mx-auto">
            <div className="w-full flex flex-col gap-10">
                <h2 className=" text-black h2 text-center">Наши услуги</h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {getServices.length > 0 ? getServices.map((item, index) => {
                        return (
                            <div key={index} className = "w-full rounded-xl p-3  shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]" >
                                <div className="w-full h-[50px] rounded-xl">
                                    <div className="flex items-center gap-[6px]   ">
                                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-[40px] h-[40px] object-cover object-top' />
                                        <h3 className="text-black text-xl group-hover:text-accent transition-colors font-semibold">{item.attributes?.name}</h3>
                                    </div>
                                </div>
                                <p className=" text-zinc-900">{item.attributes?.text}</p>
                                <div className="flex w-full justify-end">
                                    <Link href={'/services/' + item.attributes?.slug} className='group w-[40px] h-[40px]'>
                                        <Image src={'/assets/image/icons/arrow.svg'} width={40} height={20} alt='кнопка перехода' className='group-hover:scale-[1.1] transition-all duration-200' />
                                    </Link>
                                </div>
                            </div>
                        ) 
                    })
                    :
                    [1,2,3,4].map((item, index) => {
                        return (
                            <div key={index}  className="block w-[340px] h-[160px] rounded-xl  bg-zinc-800 animate-pulse"></div>
                        );
                    })}
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service
