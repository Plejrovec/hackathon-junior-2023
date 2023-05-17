import React from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'

export default function Film() {
  return (
    <div class="container">
      <h1>
        Co se děje v Brně? Všechna filmová protání pohodlně, levněji na jednom místě.
      </h1> 
<SearchBar></SearchBar>
            <div className="events">
                  <Event filter={"Film"} mode={"card"}></Event>
            </div>
    </div>
  )
}
