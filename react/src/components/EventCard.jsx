import React from 'react';

import "../css/eventcard.css";
export default function EventCard(props) {
    return (
      <div className="event" key={props.event.ID}>
            <div className="items">
            <img src={props.event.image} alt="" />
            <div className="right">
              <div className="top">
                <p dangerouslySetInnerHTML={{ __html: props.event.name }}></p>
                <div className="date">{props.event.date_from}</div>
              </div>
              
              <div className="bottom">
                
                <button className='btn'>Informace</button>
                <button className="btn">Vstupenky</button>
              </div>
            </div>
            </div>
          </div>
    )
  }
  
