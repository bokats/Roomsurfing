import React from 'react';
import { hashHistory } from 'react-router';

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
      <div className="room-details-container">
        <div className="room-details-title">        
          {this.props.room_details.title}
        </div>
        Hosted by: {this.props.room_details.host_first_name} {this.props
          .room_details.host_last_name}
        <img src={this.props.room_details.image_url}></img>
        {this.props.room_details.address}
        {this.props.room_details.city}
        Available Dates: {this.props.room_details.avail_start} to {this.
          props.room_details.avail_end}
        {this.props.room_details.des}

      </div>
    );
  }

}

export default RoomDetails;
