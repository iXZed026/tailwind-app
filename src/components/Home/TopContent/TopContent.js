import React from 'react';
import Social from './Social';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


const TopContent = () => {

    const socialsLogo = [
        { id: 1, logoItem: <FaXTwitter title='Twiter' className='text-gray-500 text-2xl cursor-pointer' />, link: "#" },
        { id: 2, logoItem: <FaInstagram title='Instagram' className='text-gray-500 text-2xl cursor-pointer' />, link: "#" },
        { id: 3, logoItem: <FaGithub title='Github' className='text-gray-500 text-2xl cursor-pointer' />, link: "https://github.com/iXZed026" },
        { id: 4, logoItem: <FaTelegram title='Telegram' className='text-gray-500 text-2xl cursor-pointer' />, link: "#" },
    ]

    return (
        <div className="top-content py-12 mb-7">
            <img className='w-16 rounded-full mb-8' src="../../images/me.jpg" alt="image not found!" />
            <h1 className='w-full md:w-[626px] text-3xl sm:text-5xl mb-8 font-bold'>ront-end developer, React specialist, and technology enthusiast</h1>
            <p className='w-full md:w-[626px] mb-8 text-gray-500'>I’m Danial Lotfi, a front-end developer based in Karaj, Iran. Currently, I’m pursuing a degree in Computer Engineering, specializing in React.js. My work focuses on crafting interactive and user-friendly web applications that make digital experiences seamless and enjoyable.</p>
            <div className="flex gap-6">
                {socialsLogo.map((logo, key) => <Social {...logo} key={key} />)}
            </div>
        </div>
    )
}

export default TopContent