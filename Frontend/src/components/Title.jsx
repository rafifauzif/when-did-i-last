import React from 'react'

const Title = ({title, desc}) => {
    return (
        <>
            <h2 className='text-2xl text-center font-medium'>{title}</h2>
            <p className='text-center mb-8'>{desc}</p>
        </>
    )
}
export default Title
