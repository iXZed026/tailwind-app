import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>

            <nav className='shadow-md shadow-[#00000032] dark:bg-[#252529] rounded-3xl hidden md:block'>
                <ul className='flex px-4 dark:text-gray-300 text-sm font-bold'>
                    <Link to="/"><li className='py-3 px-2.5 hover:text-[#2CBFAD] transition-all cursor-pointer'>Home</li></Link>
                    <Link to="/About"><li className='py-3 px-2.5 hover:text-[#2CBFAD] transition-all cursor-pointer'>About</li></Link>
                    <li className='py-3 px-2.5 hover:text-[#2CBFAD] transition-all cursor-pointer'>Articels</li>
                    <li className='py-3 px-2.5 hover:text-[#2CBFAD] transition-all cursor-pointer'>Projects</li>
                    <li className='py-3 px-2.5 hover:text-[#2CBFAD] transition-all cursor-pointer'>Speaking</li>
                </ul>
            </nav>

            <nav className='shadow-md    shadow-[#00000032] dark:bg-[#252529] rounded-3xl w-24 h-12 flex justify-center items-center gap-2 font-semibold cursor-pointer hover:opacity-80 md:hidden' onClick={() => setOpenMenu(true)}>
                <span className='text-sm'>Menu</span>
                <IoIosArrowDown className='text-sm' />
            </nav>

            <NavMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />



        </>
    )
}

export default Nav

//{openMenu && (
//)}