import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentWillReceiveProps(newProps) {
    debugger;
    this.MarkerManager.updateMarkers(newProps.rooms);
  }

  render() {
    return (
      <div className='map-search' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default Map;
