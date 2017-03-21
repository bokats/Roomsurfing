import React from 'react';
import BookingItem from './booking_item';
import { Link, hashHistory } from 'react-router';

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
            deleteBooking={this.props.deleteBooking}
            updateRoom={this.props.updateRoom}/>)}
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
        <section className="booking-index-search">
          <p className="search-link"
            onClick={() => hashHistory.push("/search")}>
            Search for a Room <i className="fa fa-play"></i>
          </p>
        </section>

      </section>
  );
  }
}

export default Bookings;
