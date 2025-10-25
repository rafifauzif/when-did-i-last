import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-sky-700 flex items-center justify-between px-10 py-5 sticky-top mb-4 rounded-b-xl'>
            <h1 className='text-3xl text-white font-bold '>
                When did i last?
            </h1>
            <button className='cursor-pointer hover:scale-105 active:opacity-80 transition-all duration-150 text-white text-3xl bg-blue-400 py-1 px-3 rounded-sm'>+</button>
        </div>
    )
}
export default Navbar
