import React , {useState} from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'

export default function AKCE_TIC_Brno() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div class="container">
      <h1>
        Co se děje v JMK? Všechny akce turistického informačního centra v Brně pohodlně, levněji na jednom místě.
      </h1> 
          <SearchBar onSearch={handleSearch}></SearchBar>
            <div className="events">
                  <Event filter={"Akce TIC Brno"} searchQuery={searchQuery}></Event>
            </div>
    </div>
  )
}
