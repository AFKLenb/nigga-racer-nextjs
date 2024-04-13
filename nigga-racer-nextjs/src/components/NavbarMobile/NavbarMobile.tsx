import useNavbars from '@/hooks/useNavbars'
import Link from 'next/link'
import React from 'react'

// menuData
const menuLinks = [
    { label: 'Главная', url: '/' },
    { label: 'О нас', url: '#about' },
    { label: 'Проекты', url: '#projects' },
    { label: 'Услуги', url: '#services' },
    { label: 'Контакты', url: '#contacts' },
]

const NavbarMobile = ( { containerStyle} : { containerStyle : string}) => {

    const getNavbars = useNavbars();

  return (
    <nav className={`${containerStyle}`}>
       <menu className='w-full flex flex-col gap-4 z-10 rela'>
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

export default NavbarMobile