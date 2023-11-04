"use client"

import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CheckIcon } from '@heroicons/react/20/solid'
import { BsChevronDown } from 'react-icons/bs';

const countries = [
    { id: 1, name: 'Africa', unavailable: false },
    { id: 2, name: 'America', unavailable: false },
    { id: 3, name: 'Asia', unavailable: false },
    { id: 4, name: 'Europe', unavailable: true },
    { id: 5, name: 'Oceania', unavailable: false },
]

const SearchBar = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0])

    return (
        <div className='max-w-[1440px] w-10/12 flex justify-between my-10 items-center'>

                <div className='relative flex items-center'>
                    <div className='absolute left-4'>
                        <HiMagnifyingGlass />
                    </div>
                    <input type="text" placeholder='Search for a country...' className='min-w-[26rem] py-3 px-10 border-2 shadow-sm rounded-md' />
                </div>

                <div className='w-fit'>
                    <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                        <div className='relative w-fit z-10'>
                            <Listbox.Button className="flex items-center custom-filter__btn">
                                {selectedCountry.name}
                                <BsChevronDown className="ml-10" />
                            </Listbox.Button>
                            <Listbox.Options className="custom-filter__options">
                                {countries.map((country) => (
                                    <Listbox.Option key={country.id} value={country} as={Fragment} >
                                        {({ active, selected }) => (
                                            <li
                                                className={`
                                                    ${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}
                                                    ${selected ? 'flex items-center gap-2 font-semibold' : ""}
                                                    my-[0.35rem] 
                                                `}
                                            >
                                                {country.name}
                                                {selected && <CheckIcon className='w-4 h-4' />}
                                            </li>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </Listbox>
                </div>

        </div>
    )
}

export default SearchBar
