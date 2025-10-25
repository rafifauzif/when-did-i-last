import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-primary flex items-center justify-between px-10 py-5 sticky-top'>
            <h1 className='text-3xl text-white font-bold '>
                When did i last?
            </h1>
            <button className='text-white text-3xl bg-secondary px-2 rounded-sm'>+</button>
        </div>
    )
}
export default Navbar
