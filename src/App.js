import React, { Component } from "react";
import vendors from "./vendors.json";
// import './App.css';
import PanZoom from "@ajainarayanan/react-pan-zoom";

const filters = ["🍺", "🍗", "👪", "🚹", "🚺"];

function filterVendors(filter) {
  return vendors.filter(vendor => {
    return filter.indexOf(vendor.value) !== -1;
  });
}

function isSelected(filter, emoji) {
  return filter.indexOf(emoji) !== -1;
}
class App extends Component {
  state = {
    zoom: 1,
    filter: [],
    vendors: []
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
  handleFilter = filterItem => () => {
    const { filter } = this.state;
    const arrayIdx = filter.indexOf(filterItem);

    if (arrayIdx !== -1) {
      filter.splice(arrayIdx, 1);
    } else {
      filter.push(filterItem);
    }

    const vendors = filterVendors(filter);

    this.setState({
      filter: filter,
      vendors: vendors
    });
  };
  render() {
    const { zoom } = this.state;
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
            {this.state.vendors.map(vendor => (
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
        <div
          className="filter"
          style={{
            position: "absolute",
            top: 20,
            left: 20
          }}
        >
          {filters.map(emoji => (
            <button
              style={{
                display: "block",
                marginBottom: 20,
                opacity: isSelected(this.state.filter, emoji) ? 1 : 0.4
              }}
              onClick={this.handleFilter(emoji)}
            >
              <span role="img" alt="beer mug">
                {emoji}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
