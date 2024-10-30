import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
const Theme = () => {

    const [darkMod, setDarkMod] = useState(false);

    useEffect(() => {
        const body = document.body;

        if (darkMod) {
            body.className = "dark";
        } else {
            body.className = "";
        }

    }, [darkMod])

    return (
        <div
            className="theme  text-[#2CBFAD] shadow-md shadow-[#0000002d] dark:bg-[#252529] size-14 flex justify-center items-center rounded-full cursor-pointer"
            onClick={() => setDarkMod(!darkMod)}
        >
            {!darkMod ? (
                <MdOutlineDarkMode className='text-xl' />
            ) : (
                <MdOutlineLightMode className='text-xl'/>
            )
            }
        </div>
    )
}

export default Theme