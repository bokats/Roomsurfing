import React from 'react';
import { Link, hashHistory } from 'react-router';
import RoomItem from './rooms_item';

class Rooms extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    let roomsContent = "";
    if (this.props.rooms.length > 0) {
      roomsContent = (
        <ul className="rooms-list">
          {this.props.rooms.map(room =>
          <RoomItem key={room.id} room={room}/>)}
        </ul>);
    } else {
      roomsContent = (
        <div className="no-rooms">
          <p>There are no available rooms</p>
        </div>);
    }

    return (
      <section className="rooms-index">
        <section className="rooms-header">
          <p className="booking-header-text">Rooms</p>
        </section>
        {roomsContent}
      </section>
    );
  }
}

export default Rooms;
