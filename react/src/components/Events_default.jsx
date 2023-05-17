import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/event.css"
import arrow from "../imgs/arrow.png"

export default function Event(props){
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/events");
        const data = response.data.flat(Infinity)
        setEventData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);




  const fetchLocation = async (latitude, longitude) => {
    try {
      const apiKey = "AIzaSyAK7PSYID6RF8xxyKp6n4PX80vuqArD_QA"; // Replace with your Google Maps Geocoding API key

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );

      const results = response.data.results;
      if (results.length > 0) {
        const address = results[0].formatted_address;
        return address;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const updateEventLocations = async () => {
      const updatedEventData = await Promise.all(
        eventData.map(async (event) => {
          const image = event.images.split(",")[0];
          const location = await fetchLocation(event.latitude, event.longitude);

          return {
            ...event,
            image,
            location,
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
              <div className="location">{event.location}</div>
            </div>
          </div>
          </div>
        </div>
      ))}
    </>
  );
};


