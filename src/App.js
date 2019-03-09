import React, { Component } from "react";
import vendors from "./vendors.js";
// import ReactHover from "react-hover";
import "./App.css";
import PanZoom from "@ajainarayanan/react-pan-zoom";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends Component {
  state = { zoom: 1 };
  handleZoomIn = () => {
    this.setState({ zoom: this.state.zoom + 0.3 });
  };
  handleZoomOut = () => {
    this.setState({ zoom: this.state.zoom - 0.3 });
  };
  render() {
    const { zoom } = this.state;
    // console.log(vendors);
    // console.log(zoom);

    const myLocation = {
      top: 100,
      left: 350
    };
    return (
      <div className="App">
        <PanZoom zoom={zoom}>
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
            <div
              style={{
                position: "absolute",
                zIndex: 2,
                top: myLocation.top,
                left: myLocation.left
              }}
            >
              {"❌"}
            </div>
            {vendors.map(vendor => {
              // const walkTime =
              const { top, left } = vendor.style;
              const myTop = myLocation.top;
              const myLeft = myLocation.left;

              const waitTime = getRandomInt(20);
              const time = Math.round(
                Math.sqrt((myTop - top) ** 2 + (myLeft - left) ** 2) / 20
              );
              const totalTime = time + waitTime;

              let bgColor;

              if (totalTime > 20) {
                bgColor = "red";
              } else if (totalTime > 10) {
                bgColor = "yellow";
              } else {
                bgColor = "green";
              }

              return (
                <div className="location">
                  <div
                    className="icon"
                    style={{ position: "absolute", ...vendor.style }}
                  >
                    {vendor.value}
                  </div>
                  <div
                    className="hover-info"
                    style={{
                      position: "absolute",
                      backgroundColor: bgColor,
                      ...vendor.style
                    }}
                  >
                    <div>{`Wait Time: ${waitTime}`}</div>
                    <div>{`Walk Time: ${time}`}</div>
                    <div>{`Total Time: ${totalTime}`}</div>
                  </div>
                </div>
              );
            })}
          </header>
        </PanZoom>
        <button
          onClick={this.handleZoomIn}
          style={{ position: "absolute", top: 20, left: 20 }}
        >
          +
        </button>
        <button
          onClick={this.handleZoomOut}
          style={{ position: "absolute", top: 50, left: 20 }}
        >
          -
        </button>
      </div>
    );
  }
}

export default App;
