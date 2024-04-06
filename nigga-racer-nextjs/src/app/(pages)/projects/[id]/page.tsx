"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import useSingleProject from '@/hooks/useSingleProject';
import Link from 'next/link';


export default function page({ params }) {

    const detailProject = useSingleProject(params.id);

  return (
    <section className='w-full py-16'>
      <div className="container mx-auto адуч"> 
        {/* Начало превью */}
        <div className="w-full h-[320px] md:h-[520px] overflow-hidden rounded-xl">
            {detailProject?.attributes?.image?.data.attributes?.url ? 
            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailProject?.attributes?.image?.data.attributes?.url ?? '')} alt='' width={1200} height={520} className='w-full h-full object-cover object-center' />
            :
              <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
            }
        </div>
        {/* Конец превью */}
        <div className="w-full flex items-center justify-between gap-5">
            <div className="w-full h-[160px] items-start flex justify-between bg-white mt-5 p-5 rounded-lg z-10">
                <div className="w-full">
                    {/* Начало названия */}
                    {detailProject?.attributes?.Name ? 
                        <h2 className="text-left text-black text-5xl uppercase">{detailProject?.attributes?.Name}</h2>
                    :
                    <div className='w-full flex flex-col gap-4 z-30'>
                        <div className="w-1/2 h-12 rounded-lg bg-zinc-800 animate-pulse"></div>
                    </div>
                    }
                    {/* Конец названия */}
                    {/* Начало описания */}
                    {detailProject?.attributes?.text ? 
                        <p className="text-zinc-700 text-base md:text-xl text-left mt-7">{detailProject?.attributes?.text}</p>
                    :
                    <div className='w-full flex flex-col gap-4 z-30'>
                        <div className=" z-30 w-full h-5 rounded-lg bg-zinc-800 animate-pulse mt-7"></div>
                    </div>
                    }
                    {/* Конец описания */}
                </div>
                <div className="w-1/2">
                    {detailProject?.attributes?.price ? 
                        <p className="text-zinc-700 text-base md:text-xl text-left mt-7">От {detailProject?.attributes?.price}₽</p>
                    :
                    <div className='w-full flex flex-col gap-4 z-30'>
                        <div className=" z-30 w-full h-5 rounded-lg bg-zinc-800 animate-pulse mt-7"></div>
                    </div>
                    }
                </div>
            </div>
            <div className="w-1/2 h-[160px]  bg-white mt-5  p-3 rounded-lg z-10">
                <div className="flex items-start gap-5">
                    <div className="w-[50px] h-full  overflow-hidden rounded-xl mb-4">
                        <Image src={'/assets/image/icons/email.png'} alt={'Изображение подрядчика'} width={50} height={50} className='w-full h-full object-fit' />
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">
                        <p className=" text-zinc-400 text-md font-normal ">Подрядчик</p>
                        <p className=" text-zinc-800 text-2xl uppercase font-medium">Подрядчик</p>
                    </div>
                </div>
                <div className="w-full mt-5 bg-accent rounded-xl p-2 hover:scale-[1.04] transition-all duration-200 items-center justify-center text-center">
                    <Link href={'tel:79954287654'} className=' w-full h-full text-white font-semibold text-2xl'>
                        <h3 className="text-white text-2xl   font-semibold">79954287654</h3>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}