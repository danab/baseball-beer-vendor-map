import React, { Component } from 'react';
import vendors from './vendors.json';
// import './App.css';
import PanZoom from '@ajainarayanan/react-pan-zoom';

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
                position: 'absolute',
                height: '630px',
                width: '630px',
                top: '0px',
                left: '0px',
              }}
            />
            {vendors.map(vendor => (
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
