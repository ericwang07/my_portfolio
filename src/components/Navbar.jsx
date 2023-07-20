import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci"
import { Link } from 'react-scroll'

const Navbar = () => {
    
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'HOME'
        },
        {
            id: 2,
            link: 'ABOUT'
        },
        {
            id: 3,
            link: 'PORTFOLIO'
        },
    ]

    return (
    <div className='flex justify-between align-center items-center w-full h-14 text-white bg-black fixed px-4'>
        <div>
            <div className='logo text-2xl ml-2'>ERIC WANG</div>
        </div>
        
        <ul className='hidden sm:flex'>        
        {links.map(({ id, link }) => (
            <li key={id}
                className='px-4 cursor-pointer text-xs text-white hover:scale-105 duration-200'
            >
                <Link to={link} smooth duration={500}>
                    {link}
                </Link>
            </li>
        ))}
        </ul>

        <div 
            onClick={() => setNav(!nav)}
            className='cursor-pointer mr-2 z-10 text-white sm:hidden font-thin'
        >
            {nav ? <div className='text-xs'>CLOSE</div> : <CiMenuBurger size={25} />}
        </div>                
        

        {nav && (
        <ul className = "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white">
            {links.map(({ id, link }) => (
                <li key={id} 
                    className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    {link}
                </li>
            ))}                            
        </ul>
        )}        

    </div>

  )
}

export default Navbar
