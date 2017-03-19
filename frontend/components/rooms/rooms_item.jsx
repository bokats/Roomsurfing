import React from 'react';

class RoomItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
    <div className='room-item-container'>

      <div className='room-item-content'>
        <div className='room-item-image'>
          Image
        </div>
        <div className='room-item-info'>
          <div className='room-title'>
            {this.props.room.title}
          </div>s
          <p className="room-host-name">
            Hosted by:
            {this.props.room.host_first_name} {this.props.room.host_last_name}
          </p>

          <ul className="room-dates-travellers-ul">
            <li className="room-dates">
              {this.props.room.avail_start} to {this.props.room.avail_end}
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
        <p className='room-item-description'>
          {this.props.room.description}
          Description
        </p>
      </div>
    </div>);
  }
}

export default RoomItem;
