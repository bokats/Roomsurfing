import React from 'react';
import { hashHistory } from 'react-router';

class RoomItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleBookButton = this.handleBookButton.bind(this);
  }

  handleBookButton() {
    hashHistory.push('/newbooking');
  }

  render() {

    return (
    <div className='room-item-container'>

      <div className='room-item-content'>
        <div className='room-item-image'>
          Image
        </div>
        <div className='room-item-info'>
          <p className="room-host-name">
            Hosted by: {this.props.room.host_first_name} {this.props.room.host_last_name}
          </p>
          <ul className="room-item-info-ul">
            <li className="room-item-address">
              Address: {this.props.room.address}
            </li>
            <li className="room-item-city">
              City: {this.props.room.city}
            </li>
            <li className="room-dates-travellers-ul">
              <div className="room-dates">
                Available: {this.props.room.avail_start} to {this.props.room.avail_end}
              </div>
            </li>
          </ul>

        </div>
        <div className="book-room-buttons">
          <button className="book-room-button" onClick={this.handleBookButton}>
            Book this room
          </button>
        </div>
      </div>
      <div className="room-item-description">
        {this.props.room.description}
      </div>
    </div>);
  }
}

export default RoomItem;
