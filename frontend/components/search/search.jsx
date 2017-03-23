import React from 'react';
import MapContainer from '../map/map_container';
import RoomsContainer from '../rooms/rooms_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRooms(this.props.filters);
  }

  render() {
    return (
      <div className="search-page-container">
        <div className="search-page-left">
          <RoomsContainer />
        </div>
        <div className="search-page-right">
          <MapContainer />
        </div>
      </div>
    );
  }

}

export default Search;
