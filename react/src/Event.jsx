import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Event = () => {
  const [eventData, setEventData] = useState({
    ID: '',
    name: '',
    text: '',
    tickets: '',
    tickets_info: '',
    images: '',
    url: '',
    categories: '',
    parent_festivals: '',
    organizer_email: '',
    tickets_url: '',
    name_en: '',
    text_en: '',
    url_en: '',
    tickets_url_en: '',
    latitude: '',
    longitude: '',
    date_from: '',
    date_to: '',
    first_image: '',
    ObjectId: '',
    GlobalID: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/events'); // Replace '/api/data' with your Laravel API endpoint
        setEventData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Render your component using the fetched eventData */}
    </>
  );
};

export default Event;
