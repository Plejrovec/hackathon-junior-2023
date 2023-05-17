import React from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'

export default function Vystava() {
  return (
    <div class="container">
      <h1>
        Co se děje v Brně? Všechny výstavy pohodlně, levněji na jednom místě.
      </h1> 
      <SearchBar></SearchBar>
            <div className="events">
                  <Event filter={"Výstava"}></Event>
            </div>
    </div>
  )
}
