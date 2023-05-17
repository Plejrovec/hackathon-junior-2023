import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";

export default function Event(props){
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/events");
        const data = response.data.flat(Infinity).slice(0,50);  
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
  

useEffect(()=>{
  const filteredEvents = props.searchQuery!=""? eventData.filter((event) =>
  event.name.toLowerCase().includes(props.searchQuery.toLowerCase())
):[];
  console.log(filteredEvents);
  setEventData(filteredEvents);
},[props.searchQuery]);
console.log(props.searchQuery);
  if(props.filter=="") {

    return (
      <>
      {eventData.map(event =>(
        <EventCard event={event}></EventCard>
      ))}
        </>
    )
    }else{
  return (
    <>
      {eventData.filter((event) => event.categories === props.filter).map((event) => (
        
        <EventCard event={event}></EventCard> 
          
        
      ))}
    </>
  )};
};


