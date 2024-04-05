import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service = () => {
  return (
    <section className="w-full py-10">
        <div className="container mx-auto">
            <div className="w-full flex flex-col gap-10">
                <h2 className=" text-black h2 text-center">Наши услуги</h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    <div className = "w-full border border-zinc-800 rounded-xl p-3" >
                        <div className="w-full h-[50px] overflow-hidden rounded-xl">
                            <div className="flex items-center">
                                <Image src={'/assets/image/icons/ipoteka.svg'} alt={'Картинка записи'} width={40} height={40} className='w-[40px] h-[40px] object-cover object-top' />
                                <h3 className="text-black text-xl group-hover:text-accent transition-colors font-semibold">Ипотечное страхование</h3>
                            </div>
                        </div>
                        <p className=" text-zinc-900">Защитите себя, свой дом и семью от непредвиденных событий</p>
                        <div className="flex w-full justify-end">
                            <Link href={'/services/'} className='group w-[40px] h-[40px]'>
                                <Image src={'/assets/image/icons/arrow.svg'} width={40} height={20} alt='кнопка перехода' className='group-hover:scale-[1.1] transition-all duration-200' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service
