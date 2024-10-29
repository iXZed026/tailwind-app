import React from 'react';
import { IoMdClose } from "react-icons/io";

const NavMenu = ({ setOpenMenu }) => {
    return (
        <div className="nav-menu-background fixed top-0 left-0 w-full h-screen block md:hidden backdrop-blur-sm">
            <ul className='animate-modalAni w-11/12 mx-auto dark:text-gray-300 bg-white dark:bg-[#18181B] mt-8 py-5 px-8 rounded-2xl border-[1px] border-gray-800'>
                <div className="nav-menu-header flex justify-between py-3">
                    <h3 className='dark:text-gray-400'>Navigation</h3>
                    <IoMdClose
                        className='text-xl opacity-85 hover:opacity-50 hover:transition-all cursor-pointer'
                        onClick={() => setOpenMenu(false)}
                    />
                </div>
                <li className='border-b-2  border-[#80808035] py-3 hover:text-[#2CBFAD] transition-all cursor-pointer'>Home</li>
                <li className='border-b-2  border-[#80808035] py-3 hover:text-[#939c9b] transition-all cursor-pointer'>About</li>
                <li className='border-b-2  border-[#80808035] py-3 hover:text-[#2CBFAD] transition-all cursor-pointer'>Articels</li>
                <li className='border-b-2  border-[#80808035] py-3 hover:text-[#2CBFAD] transition-all cursor-pointer'>Projects</li>
                <li className='py-2 hover:text-[#2CBFAD] transition-all cursor-pointer'>Speaking</li>
            </ul>
        </div>
    )
}

export default NavMenu  