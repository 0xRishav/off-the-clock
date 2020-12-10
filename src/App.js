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
  const [isActive, setActive] = useState({ active: "Weekend Break" });
  const [bg, setBg] = useState("");

  function clickHandler(newTravelType) {
    setTravelType(newTravelType);
    setActive({ active: newTravelType });
  }
  function getBg(index) {
    if (index % 2 === 0) {
      return {
        bg:
          "radial-gradient(33.05% 1230.22% at 50% 50%, rgba(112, 234, 154, 0.4) 0%, rgba(255, 255, 255, 0) 100%), #242625",

        bgclr: "#70EA9A"
      };
    } else {
      return {
        bg:
          "radial-gradient(33.05% 1230.22% at 50% 50%, rgba(174, 128, 34, 0.4) 0%, rgba(255, 255, 255, 0) 100%), #242625",
        bgclr: "#DFB15B"
      };
    }
  }

  return (
    <div className="App">
      <p>👋 Welcome to Off the Clock</p>
      <h1>Off The Clock</h1>
      <p style={{ marginBottom: "30px", fontSize: "14px", fontWeight: "bold" }}>
        Off the Clock is a Travel recommendation app which gives you travel
        recommendation of diffrent types.
      </p>
      <div className="travel-types-wrapper">
        {travelKeys.map(function (place) {
          return (
            <span
              onClick={() => clickHandler(place)}
              className={isActive.active === place ? "active" : ""}
              key={place}
              style={{
                // margin: "30px 20px",
                // backgroundColor: "#E5E7EB",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
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
            <div
              className="flex-div"
              key={index}
              style={{ background: getBg(index).bg }}
            >
              <h4
                style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
              >
                {type.place}
              </h4>
              <p
                style={{
                  color: getBg(index).bgclr,
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              >
                {type.rating}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
