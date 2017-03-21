import React from 'react';
import { hashHistory } from 'react-router';

class RoomDetailsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleBook = this.handleBook.bind(this);
  }

  handleBook(e) {
    e.preventDefault();
    hashHistory.push(`/rooms/${this.props.roomDetails.id}/book`);
  }

  render() {
    return (
      <div className="room-details">
        <div className="room-details-title-container">
          <p className="room-details-title">{this.props.roomDetails.title}</p>
          <p className="room-details-host">
            Hosted by: {this.props.roomDetails.host_first_name} {this.props
              .roomDetails.host_last_name}
          </p>
        </div>
        <div className="room-details-image">
          <img src={this.props.roomDetails.image_url} width="100%"></img>
        </div>
        <div className="room-details-content">
          <div className="room-details-info">

            <p className="room-details-address">
              {this.props.roomDetails.address}
            </p>
            <p className="room-details-city">
              {this.props.roomDetails.city}
            </p>
            <p className="room-details-dates">
              Available Dates: {this.props.roomDetails.avail_start} to {this.
                props.roomDetails.avail_end}
            </p>
          </div>
          <button className="book-room-button" onClick={this.handleBook}>
            Book Room
          </button>
        </div>
        <p className="room-details-description">
          {this.props.roomDetails.description}
        </p>
      </div>);
  }
}

export default RoomDetailsInfo;
