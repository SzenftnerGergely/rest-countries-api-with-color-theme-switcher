"use client"

import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CheckIcon } from '@heroicons/react/20/solid'
import { BsChevronDown } from 'react-icons/bs';
import { updateSearchParams } from '@/utils/api';
import { useRouter } from 'next/navigation';

type OptionProps = {
    id: number 
    name: string
    title: string
}

type CustomFilterProps = {
    title: string;
    options: OptionProps[];
}

const CustomFilter = ({ title, options }: CustomFilterProps) => {
    const [selectedCountry, setSelectedCountry] = useState(options[0])
    const router = useRouter()

    const handleUpdateParams = (e: { title: string, name: string }) => {
        const newPathName = updateSearchParams(title, e.name.toLocaleLowerCase())

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
                        <Transition
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Listbox.Options className="custom-filter__options">
                                {options.map((option) => (
                                    <Listbox.Option
                                        key={option.id}
                                        value={option}
                                        className={({ active }) => `relative cursor-default select-none 
                                        p-2 ${active ? 'bg-blue-500 text-white' :
                                                'text-gray-900'}`}
                                    >
                                        {({ selected }) => (
                                            <span
                                                className={`flex truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                            >
                                                {option.name}
                                                {selected && <CheckIcon className='w-4 h-4' />}
                                            </span>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>

        </div>
    )
}

export default CustomFilter
