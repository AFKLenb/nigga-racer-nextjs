'use client';
import useNavbar from '@/hooks/useNavbars'
import Link from 'next/link'
import React from 'react'



const Navbar = ( { containerStyle} : {containerStyle: string} ) => {
    
    const getNavbars = useNavbar();

    return (
        <nav className={`${containerStyle}`}>
            <menu className='w-full flex items-center justify-center gap-10 z-10'>
                {getNavbars.length > 0 ? getNavbars.map((item, index) => {
                    return(
                        <>
                            <li key={index}>
                                <Link className=' text-xl font-bold text-black uppercase hover:text-accent transition-all duration-300' href={item.attributes?.link}>{item.attributes?.name}</Link>
                            </li> 
                        </>
                    )
                })
                :
                [1,2,3,4,5].map((item, index) => {
                    return (
                        <div key={index}  className="block w-[100px] h-[40px] rounded-xl bg-zinc-800 animate-pulse"></div>
                    );
                })}
            </menu>
        </nav>
    )
}

export default Navbar