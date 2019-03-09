import React, { Component } from "react";
import vendors from "./vendors.json";
import "./App.css";

class App extends Component {
  render() {
    console.log(vendors);
    return (
      <div className="App">
        <header className="App-header">
          <img
            className="mapImg"
            src="https://bp-cms.mlb.com/ballpark-maps/stadium_maps/3_ballpark_1_1400.gif"
            alt="Stadium Map"
            id="mapImg"
            style={{
              position: "absolute",
              height: "630px",
              width: "630px",
              top: "0px",
              left: "0px"
            }}
          />
          {vendors.map(vendor => (
            <div style={{ position: "absolute", ...vendor.style }}>
              {vendor.value}
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
