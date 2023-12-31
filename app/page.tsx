import Cards from '@/components/Cards'
import Nav from '@/components/Nav'
import CustomFilter from '@/components/CustomFilter'
import { fetchCountries } from '@/utils/api'
import { options } from '@/constants'
import { HomeProps } from '@/types/models'


export default async function Home({ searchParams }: HomeProps) {

  const allCountries = await fetchCountries({
    region: searchParams.region || "africa"
  })

  return (
    <div className="flex flex-col items-center">
      <Nav />
      <CustomFilter title="region" options={options} />
      <div className='card-wrapper'>
        {allCountries.map((country: { flags: { svg: string; }; name: { common: string; }; population: number; region: string; capital: string; }, index: number) =>
          <Cards country={country} key={index} />
        )}
      </div>
    </div>
  )
}
