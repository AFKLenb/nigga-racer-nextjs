import Link from 'next/link'
import React from 'react'

// menuData
const menuLinks = [
    { label: 'Главная', url: '/' },
    { label: 'Проекты', url: '/projects' },
    { label: 'Услуги', url: '/services' },
    { label: 'Контакты', url: '/contacts' },
]

const NavbarMobile = ( { containerStyle} : { containerStyle : string}) => {
  return (
    <nav className={`${containerStyle}`}>
       <menu className='w-full flex flex-col gap-4 z-10 rela'>
            {menuLinks.map(( item, index) =>{
                return(
                    <>
                        <li key={index}>
                            <Link className=' text-black uppercase hover:text-accent transition-all duration-300' href={item.url}>{item.label}</Link>
                        </li>
                    </>
                )
            })}
        </menu>
    </nav>
  )
}

export default NavbarMobile