import React from 'react';
import "../../css/form.css";
export default function Form() {
  return (
    <div>
        <h2>Akce</h2>
    <div className='form'>
        
        <input placeholder="text"></input>
        <input placeholder="Kategorie"></input>
        <input placeholder="Obrazek"></input>
        <input placeholder="Datum od"></input>
        <input placeholder="Datum do"></input>
        <input placeholder="Misto"></input>
        <a  className="sbt" href="/">Ulozit</a>

    </div>
    </div>
  )
}
