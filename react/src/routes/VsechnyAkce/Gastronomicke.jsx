import React , {useState} from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'

export default function Gastronomicke() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div class="container">
      <h1>
        Co se děje v Brně? Všechny gastronomicke akce pohodlně, levněji na jednom místě.
      </h1> 
        <SearchBar onSearch={handleSearch}></SearchBar>
            <div className="events">
                  <Event filter={"Gastronomické"} searchQuery={searchQuery}></Event>
            </div>
    </div>
    
  )
}
