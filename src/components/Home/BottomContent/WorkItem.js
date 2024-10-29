import React from 'react'

const WorkItem = (props) => {

    const { name, at, logo } = props;

    return (
        <div className="work-item flex gap-4 mb-3">
            <div className="border-[1px] border-gray-700 bg-[#222225] size-11 rounded-full flex justify-center items-center">
                {logo}
            </div>
            <div>
                <span className='font-bold text-sm'>{name}</span><br />
                <span className='text-xs text-gray-400'>{at}</span>
            </div>
        </div>
    )
}

export default WorkItem