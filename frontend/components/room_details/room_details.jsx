import React from 'react';
import { hashHistory } from 'react-router';
import RoomDetailsInfo from './room_details_info';
import MapContainer from '../map/map_container';

class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchRoomDetails(this.props.params.roomId);
    }
    this.props.fetchRooms();
  }

  render() {
    const mapCenter = { lat: 37.7758, lng: -122.435 };
    return (
      <div className="room-details-main">
        <div className="room-details-container">
          <RoomDetailsInfo roomDetails={this.props.roomDetails}
            fetchRoomDetails={this.props.fetchRoomDetails}/>
        </div>
        <div className="search-page-right">
          <MapContainer center={mapCenter}/>
        </div>
      </div>
    );
  }

}

export default RoomDetails;
