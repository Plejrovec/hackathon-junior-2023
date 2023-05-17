import React from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'

export default function Nocni_zivot() {
  return (
    <div class="container">
      <h1>
        Co se děje v Brně? Všechny akce v noci pohodlně, levněji na jednom místě.
      </h1> 
        <SearchBar></SearchBar>
            <div className="events">
                  <Event filter={"Noční život"}></Event>
            </div>
    </div>
  )
}
