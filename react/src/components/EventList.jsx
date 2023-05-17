import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/event.css";
import arrow from "../imgs/arrow.png";

export default function Event(props){
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(12);
        const response = await axios.get("http://localhost:8000/api/events");
        const data = response.data.flat(Infinity);  
        console.log("hey");
        setEventData(data);
        console.log(data);
      } catch (error) {
        console.log("ano");
        console.error(error);
      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    const updateEventLocations = async () => {
      const updatedEventData = await Promise.all(
        eventData.map(async (event) => {
          const image = event.images.split(",")[0];

          return {
            ...event,
            image,
          };
        })
      );

      setEventData(updatedEventData);
    };

    updateEventLocations();
  }, [eventData]);

  return (
    <>
      {eventData.filter((event) => event.categories === props.filter).map((event) => (
        <div className="event" key={event.ID}>
          <div className="items">
          <img src={event.image} alt="" />
          <div className="right">
            <div className="top">
              <p dangerouslySetInnerHTML={{ __html: event.name }}></p>
              <button className="btn">Vstupenky<img src={arrow} className="arrow"></img></button>
            </div>
            
            <div className="bottom">
              <div className="date">{event.date_from + " " + event.date_to}</div>
              <div className="location">{" "}</div>
            </div>
          </div>
          </div>
        </div>
      ))}
    </>
  );
};


