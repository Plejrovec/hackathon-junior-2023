import React from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'
export default function Veletrhy_vzdelavaci() {
  return (
    <div class="container">
      <h1>
        Co se děje v Brně? Všechny vzdelávací akce a veletrhy pohodlně, levněji na jednom místě.
      </h1> 
      <SearchBar></SearchBar>
            <div className="events">
                  <Event filter={"Veletrhy / vzdělávací"}></Event>
            </div>
    </div>
  )
}
