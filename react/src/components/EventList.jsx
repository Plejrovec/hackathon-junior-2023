import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";

export default function EventList(props) {
  const [eventData, setEventData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/events");
        const data = response.data.flat(Infinity).slice(1,200);
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

  useEffect(() => {
    const filteredEvents = props.searchQuery !== ""
      ? eventData.filter((event) =>
          event.name.toLowerCase().includes(props.searchQuery.toLowerCase())
        )
      : eventData;

    setFilteredData(filteredEvents);
  }, [props.searchQuery, eventData]);

  if (props.filter === "") {
    return (
      <>
        {filteredData.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </>
    );
  } else {
    const filteredByCategory = filteredData.filter(
      (event) => event.categories === props.filter
    );
    return (
      <>
        {filteredByCategory.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </>
    );
  }
}
