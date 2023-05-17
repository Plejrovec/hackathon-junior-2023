import React from 'react'
import Event from '../../components/EventList'
import SearchBar from '../../components/searchBar'

export default function AKCE_TIC_Brno() {
  return (
    <div class="container">
      <h1>
        Co se děje v Brně? Všechny akce turistického informačního centra v Brně pohodlně, levněji na jednom místě.
      </h1> 
          <SearchBar></SearchBar>
            <div className="events">
                  <Event filter={"Akce TIC Brno"}></Event>
            </div>
    </div>
  )
}
