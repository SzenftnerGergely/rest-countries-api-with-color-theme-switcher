import React from 'react'
import { BsMoon } from "react-icons/bs";

const Nav = () => {
    return (
        <nav className='flex justify-between items-center px-10 py-6 border-b-2 shadow-sm'>
            <h1 className='text-xl font-bold'>Where in the world?</h1>
            <div className='flex justify-between items-center gap-3'>
                <BsMoon />
                <p className='font-semibold'>Dark Mode</p>
            </div>
        </nav>
    )
}

export default Nav
