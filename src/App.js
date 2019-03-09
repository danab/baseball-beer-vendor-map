import React, { Component } from "react";
import vendors from "./vendors.json";
// import './App.css';
import PanZoom from "@ajainarayanan/react-pan-zoom";

class App extends Component {
  state = {
    zoom: 1,
    filter: []
  };
  handleZoomIn = () => {
    this.setState({
      zoom: this.state.zoom + 0.3
    });
  };
  handleZoomOut = () => {
    this.setState({
      zoom: this.state.zoom - 0.3
    });
  };
  handleBeer = () => {
    this.setState({
      filter: ["🍺"]
    });
  };
  handleFood = () => {
    this.setState({
      filter: ["🍗"]
    });
  };
  handleFamily = () => {
    this.setState({
      filter: ["👪"]
    });
  };
  handleMens = () => {
    this.setState({
      filter: ["🚹"]
    });
  };
  handleWomens = () => {
    this.setState({
      filter: ["🚺"]
    });
  };
  render() {
    const { zoom } = this.state;
    console.log(this.state.filter);
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
            />{" "}
            {vendors.map(vendor => (
              <div
                style={{
                  position: "absolute",
                  ...vendor.style
                }}
              >
                {" "}
                {vendor.value}{" "}
              </div>
            ))}{" "}
          </header>{" "}
        </PanZoom>{" "}
        <button
          onClick={this.handleZoomIn}
          style={{
            position: "absolute",
            top: 20,
            left: 80
          }}
        >
          +
        </button>{" "}
        <button
          onClick={this.handleZoomOut}
          style={{
            position: "absolute",
            top: 50,
            left: 80
          }}
        >
          -
        </button>{" "}
        <div className="filter">
          <button
            onClick={this.handleBeer}
            style={{
              position: "absolute",
              top: 20,
              left: 20
            }}
          >
            <span role="img" alt="beer mug">
              🍺
            </span>
          </button>
          <button
            onClick={this.handleFood}
            style={{
              position: "absolute",
              top: 50,
              left: 20
            }}
          >
            <span role="img" alt="food">
              🍗
            </span>
          </button>
          <button
            onClick={this.handleFamily}
            style={{
              position: "absolute",
              top: 80,
              left: 20
            }}
          >
            <span role="img" alt="family-bath">
              👪
            </span>
          </button>
          <button
            onClick={this.handleMens}
            style={{
              position: "absolute",
              top: 110,
              left: 20
            }}
          >
            <span role="img" alt="mens-room">
              🚹
            </span>
          </button>
          <button
            onClick={this.handleWomens}
            style={{
              position: "absolute",
              top: 140,
              left: 20
            }}
          >
            <span role="img" alt="womens-room">
              🚺
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
