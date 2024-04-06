"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variantsMotion';

// stile swiper
import {Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import useProjects from '@/hooks/useProjects';

const ProjectSlider = () => {

    const getProjects = useProjects();


  return (
    <Swiper pagination={{clickable: true,}} modules={[ Pagination]} slidesPerView={3} className=' w-full h-full'>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 w-full h-full">
        {getProjects.length > 0 ? getProjects.map((item, index) => {
                return (
                    <SwiperSlide key={index} className=' pb-[50px]'>
                    <div className="w-full py-6 pr-6 pl-6">
                        <div className='group'> 
                            <div className = "w-full bg-white  group-hover:scale-[1.1] transition-all duration-300 rounded-xl p-3 shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]" >
                                <div className="w-full h-[250px] overflow-hidden rounded-xl mb-4">
                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Картинка записи'} width={270} height={250} className='w-full h-full object-fit' />
                                </div>
                                <Link href={'/projects/' + item.attributes?.slug} className='group'>
                                    <h3 className="text-black text-2xl group-hover:text-accent transition-colors font-semibold">{item.attributes?.Name}</h3>
                                </Link>
                                <p className="mt-4 text-zinc-600">{item.attributes?.text}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ) 
              })
              :
              [1,2,3].map((item, index) => {
                return (
                    <div key={index}  className="block w-[430px] h-[330px] rounded-xl  bg-zinc-800 animate-pulse"></div>
                );
              })}
        </div>
             

    </Swiper>
  )
}


export default ProjectSlider