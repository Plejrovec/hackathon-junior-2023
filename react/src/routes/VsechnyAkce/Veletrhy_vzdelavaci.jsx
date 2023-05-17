import React , {useState} from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'
export default function Veletrhy_vzdelavaci() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div class="container">
      <h1>
        Co se děje v Brně? Všechny vzdelávací akce a veletrhy pohodlně, levněji na jednom místě.
      </h1> 
      <SearchBar onSearch={handleSearch}></SearchBar>
            <div className="events">
                  <Event filter={"Veletrhy / vzdělávací"} searchQuery={searchQuery}></Event>
            </div>
    </div>
  )
}
