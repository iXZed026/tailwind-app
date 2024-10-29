import React from 'react'
import TopContent from './TopContent/TopContent'
import ImageContent from './ImageContent/ImageContent'

const Home = () => {
    return (
        <div className="home h-[1000px] md:w-4/5 w-[95%] mx-auto">
            <TopContent />
            <ImageContent />
        </div>
    )
}

export default Home