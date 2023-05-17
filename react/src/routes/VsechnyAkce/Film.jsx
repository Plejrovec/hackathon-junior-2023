import React , {useState} from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'

export default function Film() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div class="container">
      <h1>
        Co se děje v Brně? Všechna filmová protání pohodlně, levněji na jednom místě.
      </h1> 
<SearchBar onSearch={handleSearch}></SearchBar>
            <div className="events">
                  <Event filter={"Film"} mode={"card"} searchQuery={searchQuery}></Event>
            </div>
    </div>
  )
}
