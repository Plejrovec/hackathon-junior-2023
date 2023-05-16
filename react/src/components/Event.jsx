import React, { useState, useEffect } from "react";
import axios from "axios";

const Event = () => {
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/events"
                );
                const data = response.data.flat(Infinity).slice(0, 3);
                setEventData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const fetchLocation = async (latitude, longitude) => {
      try {
        const apiKey = 'AIzaSyAK7PSYID6RF8xxyKp6n4PX80vuqArD_QA'; // Replace with your Google Maps Geocoding API key
  
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
        );
  
        const results = response.data.results;
        if (results.length > 0) {
          const address = results[0].formatted_address;
          console.log(address);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <>
            {/* Render your component using the fetched eventData */}
            {eventData.map((event) => {
                const image = event.images.split(",")[0];

                return (
                    <div key={event.ID}>
                        <img src={image} alt="" />
                        <div className="right">
                            <div className="top">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: event.name,
                                    }}
                                ></p>
                                <button>Vstupenky</button>
                            </div>
                            <div className="bottom">
                                <div className="date">{event.date_from}</div>
                                <div className="location">{fetchLocation(event.latitude,event.longitude)}</div>
                            </div>
                        </div>

                                    
                    </div>
                );
            })}
        </>
    );
};

export default Event;
