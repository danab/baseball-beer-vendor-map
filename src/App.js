import React, { Component } from 'react';
import vendors from './vendors.json';
// import './App.css';
import PanZoom from '@ajainarayanan/react-pan-zoom';

function filterVendors(filter) {
  console.log(vendors, filter);
  return vendors.filter(vendor => {
    return filter[0] === vendor.value;
  });
}
class App extends Component {
  state = {
    vendors: filterVendors(['🚺']),
    recording: false,
    points: [],
    zoom: 1,
    filter: [],
  };
  points = {};
  handleZoomIn = () => {
    this.setState({ zoom: this.state.zoom + 0.3 });
  };
  handleZoomOut = () => {
    this.setState({ zoom: this.state.zoom - 0.3 });
  };

  handleClick = e => {
    if (!this.state.recording) {
      console.log('recording');
      this.setState({ recording: true, startTime: +new Date() });
    } else {
      this.setState({ recording: false });
      console.log(JSON.stringify(this.points));
      this.points = {};
    }
  };

  handleMouseMove = e => {
    var rect = e.target.getBoundingClientRect();
    var x = Math.floor((e.clientX - rect.left) / this.state.zoom); //x position within the element.
    var y = Math.floor((e.clientY - rect.top) / this.state.zoom); //y position within the element.

    if (this.state.recording) {
      this.points[+new Date() - this.state.startTime] = {
        x,
        y,
      };
    }
  };

  render() {
    const { zoom, recording } = this.state;
    console.log(this.state.vendors);

    return (
      <div
        className="App"
        tabIndex="0"
        onDoubleClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
      >
        <PanZoom zoom={zoom}>
          <header className="App-header">
            <img
              className="mapImg"
              src="https://bp-cms.mlb.com/ballpark-maps/stadium_maps/3_ballpark_1_1400.gif"
              alt="Stadium Map"
              id="mapImg"
              style={{
                position: 'absolute',
                height: '630px',
                width: '630px',
                top: '0px',
                left: '0px',
              }}
            />
            {this.state.vendors.map(vendor => (
              <div style={{ position: 'absolute', ...vendor.style }}>
                {vendor.value}
              </div>
            ))}
          </header>
        </PanZoom>
        <button
          onClick={this.handleZoomIn}
          style={{ position: 'absolute', top: 20, left: 20 }}
        >
          +
        </button>
        <button
          onClick={this.handleZoomOut}
          style={{ position: 'absolute', top: 50, left: 20 }}
        >
          -
        </button>
      </div>
    );
  }
}

export default App;
