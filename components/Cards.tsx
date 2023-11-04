import React from 'react'
import Image from "next/image"

const Cards = ({country}: any) => {
    return (
        <div>
            <Image src={country.flags.svg} alt='flag' width={50} height={50} />
            <h1>{country.name.common}</h1>
            <p>{country.population}</p>
            <p>{country.region}</p>
            <p>{country.capital}</p>
        </div>
    )
}

export default Cards
