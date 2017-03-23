import React from 'react';
import BookingItem from './booking_item';
import { Link, hashHistory } from 'react-router';
import { fetchMapCenter } from "../../util/map_api_util";

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  handleSearchButton(e) {
    e.preventDefault();
    hashHistory.push("/search");
    if (this.props.filters.city === "") {
      this.props.updateFilter('mapCenter', {
        center: { lat: 37.7758, lng: -122.435 },
        zoom: 2
      });
    } else {
      fetchMapCenter(this.props.filters.city).then(res =>
        this.props.updateFilter('mapCenter', {
          center: { lat: res.results[0].geometry.location.lat,
                    lng: res.results[0].geometry.location.lng},
          zoom: 12
        }));
    }

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
            onClick={this.handleSearchButton}>
            Search for a Room <i className="fa fa-play"></i>
          </p>
        </section>

      </section>
  );
  }
}

export default Bookings;
