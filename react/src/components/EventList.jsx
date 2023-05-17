import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/event.css";
import EvStrip from "./EvStrip";

export default function Event(props){
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(12);
        const response = await axios.get("http://localhost:8000/api/events");
        const data = response.data.flat(Infinity);  
        setEventData(data);
      } catch (error) {

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
        <EvStrip event={event} />
      ))}
    </>
  );
};


