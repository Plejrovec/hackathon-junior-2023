import React from 'react';

import "../css/eventcard.css";
export default function EventCard(props) {
    console.log(props.event);
    return (
      <div className="event" key={props.event.ID}>
            <div className="items">
            <img src={props.event.image} alt="" />
            <div className="right">
              <div className="top">
                <p dangerouslySetInnerHTML={{ __html: props.event.name }}></p>
                <button className="btn">Vstupenky<img src={arrow} className="arrow"></img></button>
              </div>
              
              <div className="bottom">
                <div className="date">&#128197; {props.event.date_from + " " + props.event.date_to}</div>
                <div className="location">{" "}</div>
                <button className="btn"><p1 id='vstuptext'>Vstupenky &#10132;</p1></button>
              </div>
            </div>
            </div>
          </div>
    )
  }
  
