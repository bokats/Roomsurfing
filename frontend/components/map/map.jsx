import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    debugger;
    this.MarkerManager.updateMarkers(this.props.rooms);
  }

  render() {
    return (
      <div className='map-search' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default Map;
