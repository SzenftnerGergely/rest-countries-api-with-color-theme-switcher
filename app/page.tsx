import Cards from '@/components/Cards'
import Nav from '@/components/Nav'
import CustomFilter from '@/components/CustomFilter'
import { fetchCountries } from '@/utils/api'

export default async function Home({ searchParams }: any) {

  const countries = [
    { id: 1, name: 'Africa', unavailable: false },
    { id: 2, name: 'America', unavailable: false },
    { id: 3, name: 'Asia', unavailable: false },
    { id: 4, name: 'Europe', unavailable: true },
    { id: 5, name: 'Oceania', unavailable: false },
]

  const allCountries = await fetchCountries({
    region: searchParams.region || "asia"
  })

  return (
    <div className="flex flex-col items-center">
      <Nav />
      <CustomFilter region="region" countries={countries} />
      <div className='card-wrapper'>
        {allCountries.map((country: { flags: { svg: string; }; name: { common: string; }; population: number; region: string; capital: string; }, index: number) =>
          <Cards country={country} key={index} />
        )}
      </div>
    </div>
  )
}
