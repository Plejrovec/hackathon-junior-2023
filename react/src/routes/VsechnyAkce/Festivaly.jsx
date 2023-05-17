import React , {useState} from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'

export default function Festivaly() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div class="container">
      <h1>
        Co se děje v JMK? Všechny festivaly pohodlně, levněji na jednom místě.
      </h1> 
        <SearchBar onSearch={handleSearch}></SearchBar>
            <div className="events">
                  <Event filter={"Festivaly"} searchQuery={searchQuery}></Event>
            </div>
    </div>
  )
}
