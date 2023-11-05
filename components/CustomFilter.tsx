"use client"

import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CheckIcon } from '@heroicons/react/20/solid'
import { BsChevronDown } from 'react-icons/bs';
import { fetchCountries, updateSearchParams } from '@/utils/api';
import { useRouter } from 'next/navigation';

const SearchBar = ({region, countries}: any) => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    const router = useRouter()

    const handleUpdateParams = (e: {region: string, name: string}) => {
      const newPathName = updateSearchParams(region, e.name.toLocaleLowerCase())
    
      router.push(newPathName)
    }

    return (
        <div className='max-w-[1440px] w-10/12 flex justify-between my-10 items-center'>

                <div className='relative flex items-center'>
                    <div className='absolute left-4'>
                        <HiMagnifyingGlass />
                    </div>
                    <input type="text" placeholder='Search for a country...' className='min-w-[26rem] py-3 px-10 border-2 shadow-sm rounded-md' />
                </div>

                <div className='w-fit'>
                    <Listbox 
                        value={selectedCountry} 
                        onChange={(e) => {
                            setSelectedCountry(e)
                            handleUpdateParams(e)
                          }}
                    >
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
