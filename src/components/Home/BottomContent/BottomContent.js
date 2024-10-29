import React from 'react';
import Achievement from './Achievement';
import Work from './Work';

const BottomContent = () => {
    return (
        <div className="bottom-content w-full lg:flex lg:justify-between">
            <div>
                <Achievement />
                <Achievement />
            </div>
            <div>
                <Work />
            </div>
        </div>
    )
}

export default BottomContent