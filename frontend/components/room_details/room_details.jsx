import React from 'react';
import { hashHistory } from 'react-router';
import RoomDetailsInfo from './room_details_info';
import Map from '../map/map';

class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchRoomDetails(this.props.params.roomId);
    }
  }

  render() {
    return (
      <div className="room-details-main">
        <div className="room-details-container">
          <RoomDetailsInfo roomDetails={this.props.roomDetails}
            fetchRoomDetails={this.props.fetchRoomDetails}/>
        </div>
        <div className="map-container">
          Map
        </div>
      </div>
    );
  }

}

export default RoomDetails;
// <Map />
