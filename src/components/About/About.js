import React from 'react'

const About = () => {
    return (
        <div className="about lg:w-[85%] md:w-4/5 w-[95%] mx-auto py-24 lg:flex lg:flex-row-reverse">
            <div className="w-full lg:w-1/2 mb-16 select-none">
                <img className='w-72 lg:w-4/5 rotate-2 lg:ml-auto rounded-2xl' src="../../images/portrait.webp" alt="image not found!" />
            </div>
            <div className='w-full lg:w-[530px]'>
                <h1 className='text-[47px] font-bold leading-[55px] mb-8'>I’m Spencer Sharp. I live in New York City, where I design the future.</h1>
                <div className=" text-gray-700 dark:text-gray-400 font-semibold">
                    <p className='mb-9'>I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p>
                    <p className='mb-9'>The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.</p>
                    <p className="mb-9">I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.</p>
                    <p className="mb-9">Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.</p>
                </div>
            </div>
        </div>
    )
}

export default About