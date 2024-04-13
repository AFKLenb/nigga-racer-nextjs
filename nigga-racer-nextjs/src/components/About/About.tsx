"use client";
import useAbout from '@/hooks/useAbouts';
import useSetting from '@/hooks/useSetting';
import useInfo from '@/hooks/useSetting';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const About = () => {

  const detailAbout = useAbout();
  const detailSetting = useSetting();

  return (
    <section id='about' className='w-full py-16'>
      <div className="container mx-auto">
                  <div className="w-full flex flex-col gap-10">
                    {detailSetting?.attributes?.Info?.nameAbout ? 
                        <h2 className="  text-black text-4xl md:text-5xl text-center">{detailSetting.attributes?.Info?.nameAbout}</h2>
                    :
                    <div className='w-full flex flex-col gap-4 z-30'>
                        <div className=" z-30 w-full h-10 rounded-lg bg-zinc-800 animate-pulse"></div>
                    </div>
                    }
                    <div className="flex-col flex md:flex-row items-center gap-10">
                      <div className="w-full md:w-[700px] flex flex-col justify-between">
                        <div className="w-full rounded-xl ">
                          <ul className='w-full h-full flex flex-col gap-2'>
                            {detailAbout?.attributes?.title ? 
                              <li className='w-full'>
                                <p className=' text-base md:text-xl font-semibold text-justify'>{detailAbout?.attributes?.title }</p>
                              </li>
                              :
                              <div className='w-full flex flex-col gap-4 z-30'>
                                  <div className=" z-30 w-full h-[100px] rounded-lg bg-zinc-800 animate-pulse"></div>
                              </div>
                            }
                            {detailAbout?.attributes?.description ? 
                              <li className='w-full'>
                                <p className='text-sm md:text-base font-medium text-justify'>{detailAbout?.attributes?.description }</p>
                              </li>
                              :
                              <div className='w-full flex flex-col gap-4 z-30'>
                                  <div className=" z-30 w-full h-[300px] rounded-lg bg-zinc-800 animate-pulse"></div>
                              </div>
                            }
                          </ul>
                        </div>
                      </div>
                      <div className="bg-white w-full md:w-[700px] h-[250px] md:h-[400px] p-1 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]">
                        {detailAbout?.attributes?.url ? 
                            <iframe src={detailAbout?.attributes?.url } title="YouTube video player" width="500" height="500" className='w-full h-full rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        :
                        <div className='w-full flex flex-col gap-4 z-30'>
                            <div className=" z-30 w-full h-[400px] rounded-lg bg-zinc-800 animate-pulse"></div>
                        </div>
                        }
                      </div>
                  </div>
                </div>     
      </div>
  </section>
  )
}


export default About
