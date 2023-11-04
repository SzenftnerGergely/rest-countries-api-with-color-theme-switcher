import Nav from '@/components/Nav'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <SearchBar />
    </div>
  )
}
