import React from 'react';
import Map from '../map/map';
import RoomsContainer from '../rooms/rooms_container';

const mapCenter = { lat: 37.7758, lng: -122.435 };

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
          <Map center={mapCenter} rooms={this.props.rooms}/>
        </div>
      </div>
    );
  }

}

export default Search;
