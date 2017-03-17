import React from 'react';
import BookingItem from './booking_item';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {  
    return (
      <ul className="bookings-index"> Bookings
        {this.props.bookings.map(booking =>
        <BookingItem key={booking.id} booking={booking} />)}
      </ul>
  );
  }
}

export default Bookings;
