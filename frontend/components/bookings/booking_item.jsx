import React from 'react';
import { hashHistory } from 'react-router';

class BookingItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick(id) {
    return e => {
      e.preventDefault();
      const url = `/editbooking/${id}`;
      hashHistory.push(url);
    };
  }

  render() {

    return (
      <div>
        <li className="booking-item">
          {this.props.booking.city}
          <br></br>
          {this.props.booking.title}
          <br></br>
          Dates: {this.props.booking.arrival_date} -
          {this.props.booking.depart_date}
          <br></br>
          {this.props.booking.num_travellers}
          <br></br>
          {this.props.booking.host_first_name}
          <br></br>
          {this.props.booking.host_last_name}
          <div className="booking-buttons">
            <button className="edit-booking-button"
              onClick={this.handleEditClick(this.props.booking.id)}>
              Edit Booking</button>
            <button className="delete-booking-button"
              onClick={() => this.props.deleteBooking(this.props.booking.id)}
              >Delete Booking</button>
          </div>
        </li>
      </div>

    );
  }
}

export default BookingItem;
