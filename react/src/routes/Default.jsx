import React, { useState } from "react";
import "../css/default.css";
import Event from "../components/EventList";

export default function Default() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setTimeout(() => {
      setSearchQuery(query);
    }, 300); // Delay of 300 milliseconds
  };

  return (
    <div className="container">
      <h1>Co se děje v JMK? Všechny akce pohodlně, levněji na jednom místě.</h1>
      <div>
        <a className="addbtn" href="/Form">
          Přidej akci&nbsp;&nbsp;&#10132;
        </a>
      </div>
      <div className="top-bar">
        <h3>Výhody</h3>
        <div className="search">
          <label htmlFor="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
            </svg>
          </label>
          <input
            id="search"
            type="search"
            name="search"
            placeholder="Vyhledej si akci"
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setSearchQuery("")}
          />
        </div>
      </div>
      <div className="top-text">
        <p>
          Levnější vstupy <br /> Všechny akce v JMK pohromadě <br />{" "}
          Žádné zdlouhavé fronty na papírové vstupenky
        </p>
      </div>

      <div className="events">
        <Event filter="" searchQuery={searchQuery} />
      </div>
    </div>
  );
}
