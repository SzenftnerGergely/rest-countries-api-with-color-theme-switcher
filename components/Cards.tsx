import React from 'react'
import Image from "next/image"
import { CountryProps } from '@/types/models'

const Cards = ({ country }: CountryProps) => { 
    const { flags, name, population, region, capital } = country

    return (
        <div className='bg-white shadow-md rounded-md flex flex-col'>

            <Image src={flags.svg} alt='flag' width={0} height={0} className='w-full h-56 object-cover rounded-t-md' priority={true} />

            <div className='py-10 px-6'>
                <h1 className='text-lg font-bold mb-4'>{name.common}</h1>
                <p className='font-semibold mb-1'>Population: <span className='font-medium'>{population}</span></p>
                <p className='font-semibold mb-1'>Region: <span className='font-medium'>{region}</span></p>
                <p className='font-semibold pb-2'>Capital: <span className='font-medium'>{capital}</span></p>
            </div>
        </div>
    )
}

export default Cards
