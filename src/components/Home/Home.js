import React from 'react'
import TopContent from './TopContent/TopContent'
import ImageContent from './ImageContent/ImageContent'
import BottomContent from './BottomContent/BottomContent'

const Home = () => {
    return (
        <div className="home lg:w-[92%] md:w-4/5 w-[95%] mx-auto h-[]">
            <TopContent />
            <ImageContent />
            <BottomContent />
        </div>
    )
}

export default Home