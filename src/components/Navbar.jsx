import { useState } from 'react'

import { close, logo, menu } from '../assets'

import { navLinks } from '../constants'


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between
        items-center navbar">
            <img src={logo} alt="hoobank" title="hoobank"
                className='w-[124px] h-[32px]' />
            <ul className='list-none hidden sm:flex 
            justify-end items-center flex-1'>
                {navLinks.map((link, index) => (
                    <li
                        key={link.id}
                        className={`font-poppins font-normal 
                        cursor-pointer text-base text-white
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </li>))}
            </ul>
            <ul className='list-none flex sm:hidden 
            justify-end items-center flex-1'>
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient py-3
                    absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none
                        justify-end items-center flex-1'>
                        {navLinks.map((link, index) => (
                            <li
                                key={link.id}
                                className={`font-poppins font-normal px-6 py-1 rounded-xl 
                        cursor-pointer text-base text-white hover:bg-teal-300 hover:text-black
                        ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                                <a href={`#${link.id}`}>
                                    {link.title}
                                </a>
                            </li>))}
                    </ul>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar