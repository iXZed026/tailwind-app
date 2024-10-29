import React from 'react';

const Social = (props) => {

    const { logoItem ,link} = props

    return (
        <>
            <a href={link}>{logoItem}</a>
        </>
    )
}

export default Social