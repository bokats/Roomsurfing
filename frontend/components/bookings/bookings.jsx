import React from 'react';
import BookingItem from './booking_item';
import { Link } from 'react-router';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {

    return (
      <div className="bookings-index"> My Bookings
        <ul>
          {this.props.bookings.map(booking =>
          <BookingItem key={booking.id} booking={booking}
            deleteBooking={this.props.deleteBooking}/>)}
        </ul>
        <p>Link to Search</p>
      </div>


  );
  }
}

export default Bookings;
