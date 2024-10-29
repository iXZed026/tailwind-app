import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import WorkItem from './WorkItem';

const Work = () => {

  const work = [
    { id: 1, name: "React js", at: "Frontend framework", logo: <FaReact className='text-2xl text-sky-500'/> },
    { id: 1, name: "Tailwind css", at: "UI framework", logo: <RiTailwindCssFill className='text-2xl text-blue-700'/> },
    { id: 1, name: "TypeScipt", at: "Javascript", logo: <SiTypescript className='text-2xl text-yellow-500'/> },
    { id: 1, name: "Node js", at: "Backend framework", logo: <FaNodeJs className='text-2xl text-green-600'/> },
  ]

  return (
    <div className="work w-full lg:w-[380px] shadow-md shadow-[#00000047] dark:border-[1px] p-4 border-gray-800 rounded-2xl">
      <h3 className='flex text-sm dark:text-gray-200 gap-3 font-bold mb-7'>
        <BsFillBagFill className='text-xl dark:text-gray-400' />
        Work
      </h3>
      {
        work.map((w, key) => <WorkItem {...w} key={key} />)
      }
    </div>
  )
}

export default Work