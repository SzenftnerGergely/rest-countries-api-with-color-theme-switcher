import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
    return (
        <div className='my-10'>

            <div className='relative flex items-center'>
                <div className='absolute left-8'>
                    <HiMagnifyingGlass />
                </div>
                <input type="text" placeholder='Search for a country...' className='mx-4 py-3 px-10 border-2 shadow-sm w-1/3 rounded-md' />
            </div>

            <div>

            </div>

        </div>
    )
}

export default SearchBar
