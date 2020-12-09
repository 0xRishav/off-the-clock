import React, { useState } from "react";
import "./styles.css";

var travelObject = {
  "Weekend Break": [
    { place: "Gokarna, Karnataka", rating: "4.2/5" },
    { place: "Orchha, Madhya Pradesh", rating: "4.3/5" },
    { place: "Murudeshwar, Karnataka", rating: "4.0/5" },
    { place: "Dhanachuli, Uttarakhand ", rating: "4.1/5" }
  ],
  "Group Tour": [
    { place: "Kashmir, Jammu and Kashmir", rating: "4.8/5" },
    { place: "Manali, Himachal Pradesh", rating: "4.9/5" },
    { place: "Dharamshala, Himachal Pradesh", rating: "4.5/5" }
  ],
  "Road Trips": [
    { place: "Delhi to Leh Via Manali", rating: "4.5/5" },
    { place: "Delhi to Spiti Valley", rating: "4.3/5" },
    { place: "Jammu to Srinagar", rating: "4.4/5" },
    { place: "Jammu to Srinagar", rating: "4.4/5" }
  ]
};

var travelKeys = Object.keys(travelObject);

export default function App() {
  const [travelType, setTravelType] = useState("Weekend Break");

  function clickHandler(newTravelType) {
    setTravelType(newTravelType);
  }

  return (
    <div className="App">
      <h1>Off The Clock✈️</h1>
      <p style={{ marginBottom: "30px" }}>Travel Recommendation App</p>
      <div className="travel-types-wrapper">
        {travelKeys.map(function (place) {
          return (
            <span
              key={place}
              onClick={() => clickHandler(place)}
              style={{
                // margin: "30px 20px",
                backgroundColor: "#E5E7EB",
                padding: "0.5rem 0.8rem",
                borderRadius: "0.2rem",
                outline: "none",
                cursor: "pointer",
                margin: "5px"
              }}
            >
              {place}
            </span>
          );
        })}
      </div>
      <div className="flex-div-cover">
        {travelObject[travelType].map(function (type, index) {
          return (
            <div className="flex-div" key={index}>
              <h4>{type.place}</h4>
              <p>{type.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
