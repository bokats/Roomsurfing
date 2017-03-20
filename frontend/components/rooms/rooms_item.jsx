import React from 'react';
import { hashHistory } from 'react-router';

class RoomItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    hashHistory.push(`/rooms/${this.props.room.id}`);
  }

  render() {

    return (
    <div className='room-item-container'
      onClick={this.handleClick}>
      <div className='room-item-content'>
        <div className='room-item-image'>
          <img src={this.props.room.image_url}  width="100%"></img>
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
      </div>
      <div className="room-item-description">
        {this.props.room.description}
      </div>
    </div>);
  }
}

export default RoomItem;
