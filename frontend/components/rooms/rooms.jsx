import React from 'react';
import { Link, hashHistory } from 'react-router';
import RoomItem from './rooms_item';

class Rooms extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterChange(filter) {
    return e => {
      e.preventDefault();
      this.props.updateFilter(filter, e.target.value)
      debugger;
      this.props.fetchRooms(this.props.filters)
    };
  }

  render() {
    let roomsContent = "";
    if (this.props.rooms.length > 0) {
      roomsContent = (
        <ul className="rooms-list">
          <div className="filter-dates-container">
            <label className='arrival-date-label'> Start Date
              <input className='booking-form-arrival-date'
                type="date"
                onChange={this.handleFilterChange('startDate')}
                value={this.props.filters.startDate}/>
            </label>
            <label className='departure-date-label'> End Date
              <input className='booking-form-departure-date'
                type="date"
                onChange={this.handleFilterChange('endDate')}
                value={this.props.filters.endDate}/>
            </label>
          </div>
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
          <p className="booking-header-text">Available Rooms</p>
        </section>
        {roomsContent}
      </section>
    );
  }
}

export default Rooms;
