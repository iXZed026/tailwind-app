import React from 'react'

const ImageContent = () => {
    return (
        <>
        <div className="image-content w-[1600px] rounded-xl border- absolute left-[-40px]">
            <div className="flex justify-between">
                <img className='size-72  rotate-[3deg] rounded-lg object-cover' src="../../images/image-1.webp" alt="image not found!" />
                <img className='size-72  rotate-[-2deg] rounded-lg object-cover' src="../../images/image-2.webp" alt="image not found!" />
                <img className='size-72  rounded-lg rotate-[2deg] object-cover' src="../../images/image-3.webp" alt="image not found!" />
                <img className='size-72  rotate-[2deg] rounded-lg object-cover' src="../../images/image-4.webp" alt="image not found!" />
                <img className='size-72  rotate-[-3deg] rounded-lg object-cover' src="../../images/image-5.webp" alt="image not found!" />
            </div>
        </div>
        <div className="mb-[400px]"></div>
        </>
    )
}

export default ImageContent