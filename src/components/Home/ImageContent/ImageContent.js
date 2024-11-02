import React from 'react'

const ImageContent = () => {
    return (
        <>
            <div className="image-content w-full  overflow-hidden rounded-xl border- absolute left-0 z-0">
                <div className="flex justify-between">
                    <img className='w-[19%] h-[280px] xl:rotate-[3deg] rounded-2xl object-cover' src="../../images/image-1.webp" alt="image not found!" />
                    <img className='w-[19%] h-[280px] xl:rotate-[-2deg] rounded-2xl object-cover' src="../../images/image-2.webp" alt="image not found!" />
                    <img className='w-[19%] h-[280px] rounded-2xl xl:rotate-[2deg] object-cover' src="../../images/image-3.webp" alt="image not found!" />
                    <img className='w-[19%] h-[280px] xl:rotate-[2deg] rounded-2xl object-cover' src="../../images/image-4.webp" alt="image not found!" />
                    <img className='w-[19%] h-[280px] xl:rotate-[-3deg] rounded-2xl object-cover' src="../../images/image-5.webp" alt="image not found!" />
                </div>
            </div>
            <div className="mb-[400px]"></div>
        </>
    )
}

export default ImageContent