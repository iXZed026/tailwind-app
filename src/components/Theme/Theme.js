import React, { useState, useEffect } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

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
        <div className="theme  text-[#2CBFAD] shadow-sm shadow-[#00000032] dark:bg-[#252529] size-14 flex justify-center items-center rounded-full cursor-pointer"
            onClick={() => setDarkMod(!darkMod)}
        >
            <CiDark className='text-xl' />
        </div>
    )
}

export default Theme