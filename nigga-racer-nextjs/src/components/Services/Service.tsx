'use client';
import useInfo from '@/hooks/useSetting';
import useServices from '@/hooks/useServices'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSetting from '@/hooks/useSetting';

const Service = ({ getServices }) => { 

    const detailSetting = useSetting();

  return (
    <section id='services' className="w-full py-10">
        <div className="container mx-auto">
            <div className="w-full flex flex-col gap-10">
                {detailSetting?.attributes?.Info?.nameService ? 
                    <h2 className="  text-black text-4xl md:text-5xl text-center">{detailSetting.attributes?.Info?.nameService}</h2>
                    :
                    <div className='w-full flex flex-col gap-4 z-30'>
                        <div className=" z-30 w-full h-10 rounded-lg bg-zinc-800 animate-pulse"></div>
                    </div>
                }
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {getServices.length > 0 ? getServices.map((item, index) => {
                        return (
                            <div key={index} className = "w-full rounded-xl p-3 bg-white  shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]" >
                                <div className="w-full h-[60px] rounded-xl">
                                    <div className="flex items-center gap-[6px]   ">
                                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-[40px] h-[40px] object-cover object-top' />
                                        <h3 className="text-black text-base md:text-xl group-hover:text-accent transition-colors font-semibold">{item.attributes?.name}</h3>
                                    </div>
                                </div>
                                <p className=" text-sm md:text-lg text-zinc-900">{item.attributes?.text}</p>
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
