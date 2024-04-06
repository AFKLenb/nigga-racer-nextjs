'use client';
import useContacts from '@/hooks/useContacts'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Contacts = () => {

  const getContacts = useContacts();

  return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
            <div className="w-full flex flex-col gap-10">
                <h2 className=" text-black h2 text-center">Контакты</h2>
                <div className="flex items-center justify-between gap-5">
                  <div className="w-[550px] bg-white h-[500px] rounded-xl p-3 shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]">
                    <div className="w-full h-full flex flex-col items-center justify-around gap-5 p-5">
                    {getContacts.length > 0 ? getContacts.map((item, index) => {
                        return (
                          <ul key={index} className="w-full h-full flex flex-col items-center justify-around gap-5">
                            <li className="w-full flex items-center justify-start gap-5 text-center">
                            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.phoneIcon?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-[40px] h-[40px] object-cover object-top' />
                              <Link href='tel:1234567890' className='text-black text-2xl hover:text-accent transition-all duration-300'>{item.attributes?.number}</Link>
                            </li>
                            <li className="w-full flex items-center justify-start gap-5 text-center">
                            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.emailIcon?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-[40px] h-[40px] object-cover object-top' />
                              <Link href='mailto:sigma@gmail.com' className='text-black text-2xl hover:text-accent transition-all duration-300'>{item.attributes?.email}</Link>
                            </li>
                            <li className="w-full flex items-center justify-start gap-5 text-center">
                            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.workIcon?.data.attributes?.url} alt={'Картинка записи'} width={40} height={40} className='w-[40px] h-[40px] object-cover object-top' />
                              <p className='text-black text-2xl'>{item.attributes?.Work}</p>
                            </li>
                          </ul>
                        ) 
                    })
                    :
                    [1,2,3].map((item, index) => {
                        return (
                            <div key={index}  className="block w-[450px] h-[50px] rounded-xl  bg-zinc-800 animate-pulse"></div>
                        );
                    })}
                    </div>
                  </div>
                  <div className="">
                  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad370c9d81556f82b689ecae1dea7f38d5810ada3d77b9101c0388513f23c92de&amp;source=constructor" width="800" height="500" className=' rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]' frameborder="0"></iframe>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts
