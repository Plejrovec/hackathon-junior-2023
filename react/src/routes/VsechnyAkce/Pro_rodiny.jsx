import React from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'

export default function Pro_rodiny() {
  return (
    <div class="container">
      <h1>
        Co se děje v Brně? Všechny akce pro rodiny pohodlně, levněji na jednom místě.
      </h1> 
        <SearchBar></SearchBar>
            <div className="events">
                  <Event filter={"Pro rodiny"}></Event>
            </div>
    </div>
  )
}
