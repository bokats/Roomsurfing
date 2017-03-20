import React from 'react';
import Map from '../map/map';
import RoomsContainer from '../rooms/rooms_container';

// const mapCenter = { lat: 37.7758, lng: -122.435 },
//    burritos = [
//      { lat: 37.775785, lng: -122.445979, name: "Papalote" },
//      { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
//      { lat: 37.781899, lng: -122.410426, name: "Cancun" }
//    ];

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-page-container">
        <div className="search-page-left">
          <RoomsContainer />
        </div>
        <div className="search-page-right">
          <Map />
        </div>
      </div>
    );
  }

}

export default Search;
