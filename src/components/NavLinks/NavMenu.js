import React, { useEffect, useRef } from 'react';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const NavMenu = ({ openMenu, setOpenMenu }) => {

    const modalRef = useRef(null);
    const animationModal = useRef(null);

    const closeModal = () => {
        setOpenMenu(false)
    }

    useEffect(() => {
        if (openMenu) {
            modalRef.current.className = 'block fixed top-0 left-0 w-full h-screen md:hidden backdrop-blur-sm z-10';

            animationModal.current.className = 'animate-modalAni w-11/12 mx-auto dark:text-gray-300 bg-white dark:bg-[#18181B] mt-8 py-5 px-8 rounded-2xl border-[1px] border-gray-800';
        } else {
            setTimeout(() => {
                modalRef.current.className = 'hidden fixed top-0 left-0 w-full h-screen md:hidden backdrop-blur-sm z-10';
            }, 260);

            animationModal.current.className = 'animate-closeModalAni w-11/12 mx-auto dark:text-gray-300 bg-white dark:bg-[#18181B] mt-8 py-5 px-8 rounded-2xl border-[1px] border-gray-800'
        }
    }, [openMenu])

    return (
        <div ref={modalRef} className='hidden'>
            <ul ref={animationModal}>
                <div className="nav-menu-header flex justify-between py-3">
                    <h3 className='dark:text-gray-400'>Navigation</h3>
                    <IoMdClose
                        className='text-xl opacity-85 hover:opacity-50 hover:transition-all cursor-pointer'
                        onClick={closeModal}
                    />
                </div>
                <Link to="/" onClick={closeModal}>
                    <li className='border-b-2  border-[#80808035] py-3 hover:text-[#2CBFAD] transition-all cursor-pointer'>Home</li>
                </Link>
                <Link to="/About" onClick={closeModal}>
                    <li className='border-b-2  border-[#80808035] py-3 hover:text-[#939c9b] transition-all cursor-pointer'>About</li>
                </Link>
                <Link to="/About" onClick={closeModal}>
                    <li className='border-b-2  border-[#80808035] py-3 hover:text-[#2CBFAD] transition-all cursor-pointer'>Articels</li>
                </Link>
                <Link to="/About" onClick={closeModal}>
                    <li className='border-b-2  border-[#80808035] py-3 hover:text-[#2CBFAD] transition-all cursor-pointer'>Projects</li>
                </Link>
                <Link to="/About" onClick={closeModal}>
                    <li className='py-2 hover:text-[#2CBFAD] transition-all cursor-pointer'>Speaking</li></Link>
            </ul>
        </div>
    )
}

export default NavMenu  