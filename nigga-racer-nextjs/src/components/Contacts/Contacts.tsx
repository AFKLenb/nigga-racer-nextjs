'use client';
import useContacts from '@/hooks/useContacts'
import useSetting from '@/hooks/useSetting';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Contacts = () => {

  const getContacts = useContacts();
  const detailSetting = useSetting();

  return (
    <section id='contacts' className='w-full py-16'>
      <div className="container mx-auto">
            <div className="w-full flex flex-col gap-10">
                {detailSetting?.attributes?.Info?.nameContact ?
                    <h2 className=" text-black text-4xl md:text-5xl text-center">{detailSetting.attributes?.Info?.nameContact}</h2>
                    :
                    <div className='w-full flex flex-col gap-4 z-30'>
                        <div className=" z-30 w-full h-10 rounded-lg bg-zinc-800 animate-pulse"></div>
                    </div>
                } 
                <div className="sm:flex-col flex md:flex-row items-center justify-between gap-5">
                  {getContacts.length > 0 ? getContacts.map((item, index) => {
                    return (
                      <div key={index} className="flex-col w-full flex md:flex-row items-center justify-between gap-5">
                        <div className="w-full md:w-[550px] bg-white h-[500px] rounded-xl p-3 shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]">
                          <div className="w-full h-full flex flex-col items-center justify-around gap-5 p-5">
                            <h3 className=" text-black text-2xl md:text-5xl text-center">{item.attributes?.nameForm}</h3>
                            <form action="info" className="w-full flex flex-col items-center justify-between h-full  text-black">
                              <label className='w-full flex flex-col gap-3' htmlFor="">{item.attributes?.labelOne}
                                <input required className='w-full text-black border border-zinc-900 rounded-full p-2' placeholder='+79954287654' type="nubmer" title={item.attributes?.inputOne} />
                              </label>
                              <label className='w-full flex flex-col gap-3' htmlFor="">{item.attributes?.labelTwo}
                                <input required className='w-full text-black border border-zinc-900 rounded-full p-2' placeholder='sigma@gmail.com' type="email" title={item.attributes?.inputTwo} />
                              </label>
                              <label className='w-full flex flex-col gap-3' htmlFor="">{item.attributes?.labelThree}
                                <input required className='w-full text-black border border-zinc-900 rounded-full p-2' placeholder='Иванов Иван Иванович' type="text" title={item.attributes?.inputThree} />
                              </label>
                              <button className="w-1/2 mt-5 text-white uppercase text-xl md:text-2xl bg-accent rounded-xl p-2 hover:scale-[1.04] transition-all duration-200 items-center justify-center text-center">{item.attributes?.formButton}</button>
                            </form>
                          </div>
                        </div>
                        <div className="w-full md:w-[800px] h-[500px] bg-white rounded-xl p-1 shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]">
                          <iframe src={item.attributes?.urlMap} width="800" height="500" className='w-full h-full rounded-xl' frameBorder="0"></iframe>
                        </div>
                      </div>
                      ) 
                    })
                    :
                    [1,2].map((item, index) => {
                      return (
                        <div key={index}  className="block w-full h-[500px] rounded-xl  bg-zinc-800 animate-pulse"></div>
                      );
                  })}
                </div>
                      <div className=" bg-white flex gap-5 rounded-xl p-5 shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]">
                        <ul className="flex-col md:flex-row w-full flex items-center justify-between gap-5">
                          {detailSetting?.attributes?.Contact?.namePhone ?
                            <li className="w-full flex items-center justify-start md:justify-center">
                              <Link href={'tel:'+detailSetting.attributes?.Contact?.namePhone} className='flex items-center gap-2 hover:scale-[1.1] text-black text-2xl hover:text-accent transition-all duration-300'><Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + detailSetting.attributes?.Contact?.iconPhone?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-[40px] h-[40px] object-cover object-top' />+{detailSetting.attributes?.Contact?.namePhone}</Link>
                            </li>
                            :
                            <div className='w-full flex flex-col gap-4 z-30'>
                              <div className=" z-30 w-full h-10 rounded-lg bg-zinc-800 animate-pulse"></div>
                            </div>
                          } 
                          {detailSetting?.attributes?.Contact?.nameEmail ?
                            <li className="w-full flex items-center justify-start md:justify-center">
                              <Link href={'mailto:'+detailSetting.attributes?.Contact?.nameEmail} className='flex items-center gap-2 text-black text-2xl hover:scale-[1.1] hover:text-accent transition-all duration-300'><Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + detailSetting.attributes?.Contact?.iconEmail?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-[40px] h-[40px] object-cover object-top' />{detailSetting.attributes?.Contact?.nameEmail}</Link>
                            </li>
                            :
                            <div className='w-full flex flex-col gap-4 z-30'>
                              <div className=" z-30 w-full h-10 rounded-lg bg-zinc-800 animate-pulse"></div>
                            </div>
                          } 
                          {detailSetting?.attributes?.Contact?.nameWork ?
                            <li className="w-full flex items-center justify-start md:justify-center gap-2">
                              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + detailSetting.attributes?.Contact?.iconWork?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-[40px] h-[40px] object-cover object-top' />
                              <p className='text-black text-2xl'>{detailSetting?.attributes?.Contact?.nameWork}</p>
                            </li>
                            :
                            <div className='w-full flex flex-col gap-4 z-30'>
                              <div className=" z-30 w-full h-10 rounded-lg bg-zinc-800 animate-pulse"></div>
                            </div>
                          } 


                        </ul>
                      </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts
