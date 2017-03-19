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
    let bookingsContent = "";
    if (this.props.bookings.length > 0) {
      bookingsContent = (
        <ul className="bookings-list">
          {this.props.bookings.map(booking =>
          <BookingItem key={booking.id} booking={booking}
            deleteBooking={this.props.deleteBooking}/>)}
        </ul>);
    } else {
      bookingsContent = (
        <section className="no-bookings">
          <p>You have no upcoming bookings</p>
        </section>);
    }

    return (
      <section className="bookings-index">
        <section className="bookings-header">
        <i className="fa fa-plane" aria-hidden="true"></i>
        <p className="booking-header-text">MY BOOKINGS</p>
        </section>
        {bookingsContent}
        <section>
          <p className="search-link">Search for a room</p>
        </section>

      </section>
  );
  }
}

export default Bookings;
