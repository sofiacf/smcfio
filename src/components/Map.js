import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Map.css';

class Map extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }
  componentDidMount() {
    this.loadMap();
  }
  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapOptions = {
        mapTypeControl: false,
        center: {lat: 39.397, lng: -97.644},
        zoom: 4
      };
      this.map = new maps.Map(node, mapOptions);
    }
  }
  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    );
  }
}

export default Map;
