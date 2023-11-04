import Cards from '@/components/Cards'
import Nav from '@/components/Nav'
import SearchBar from '@/components/SearchBar'
import { fetchCountries } from '@/utils/api'


export default async function Home() {

  const allCountries = await fetchCountries()
  console.log(allCountries);


  return (
    <div className="flex flex-col items-center">
      <Nav />
      <SearchBar />
      <div>
        {allCountries?.map((country, index) =>
          <Cards country={country} key={index} />
        )}
      </div>
    </div>
  )
}
