import Cards from '@/components/Cards'
import Nav from '@/components/Nav'
import SearchBar from '@/components/SearchBar'
import { fetchCountries } from '@/utils/api'

type Country = {
  
}

export default async function Home() {

  const allCountries = await fetchCountries()

  return (
    <div className="flex flex-col items-center">
      <Nav />
      <SearchBar />
      <div className='card-wrapper'>
        {allCountries?.map((country: { flags: { svg: string; }; name: { common: string; }; population: number; region: string; capital: string; }, index: number) =>
          <Cards country={country} key={index} />
        )}
      </div>
    </div>
  )
}
