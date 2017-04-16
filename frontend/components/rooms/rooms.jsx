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
      this.props.updateFilter(filter, e.target.value);
    };
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
        <div className="no-rooms-container">
          <div className="no-rooms">
            <p>There are no available rooms for this city and/or dates</p>
          </div>
          <ul className="suggested-cities"> Suggested cities:
            <li>San Francisco</li>
            <li>Los Angeles</li>
            <li>New York</li>
            <li>Paris</li>
            <li>Rio de Janeiro</li>
            <li>Tokyo</li>
            <li>Johannesburg</li>
          </ul>
        </div>);
    }

    return (
      <section className="rooms-index">
        <section className="rooms-header">
          <p className="booking-header-text">Available Rooms</p>
        </section>
        <div className="filter-dates-container">
          <label className='start-date-label'> Start Date
            <input className='start-date'
              type="date"
              onChange={this.handleFilterChange('startDate')}
              value={this.props.filters.startDate}/>
          </label>
          <label className='end-date-label'> End Date
            <input className='end-date'
              type="date"
              onChange={this.handleFilterChange('endDate')}
              value={this.props.filters.endDate}/>
          </label>
        </div>
        {roomsContent}
      </section>
    );
  }
}

export default Rooms;
