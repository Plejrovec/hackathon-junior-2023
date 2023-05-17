import React from 'react';
import "../../css/form.css";
export default function Form() {
  return (
    <div className='form-container'>
        <h2>Akce</h2>
    <div className='form'>
        
        <input className='inpt' placeholder="text"></input>
        <input className='inpt' placeholder="Kategorie"></input>
        <input className='inpt' placeholder="Obrazek"></input>
        <input className='inpt' placeholder="Datum od"></input>
        <input className='inpt' placeholder="Datum do"></input>
        <input className='inpt' placeholder="Misto"></input>
        <a  className="sbt" href="/">Ulozit</a>

    </div>
    </div>
  )
}
