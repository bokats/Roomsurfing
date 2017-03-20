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
      const url = `/bookings/${id}/edit`;
      hashHistory.push(url);
    };
  }

  handleDeleteClick() {
    return e => {
      e.preventDefault();
      this.props.deleteBooking(this.props.booking.id);
    };
  }

  render() {
    let traveller = "traveler";
    if (this.props.booking.num_travellers > 1) {
      traveller = "travellers";
    }
    console.log("render");

    return (
      <section className="booking">
        <section className='booking-city'>
          <p>{this.props.booking.city}</p>
        </section>
        <section className="booking-content">
          <section className="booking-info">
            <p className="booking-title">{this.props.booking.title}</p>
            <p className="booking-host-name">Hosted by: {this.props.booking.host_first_name} {this.props.booking.host_last_name}</p>
            <ul className="dates-travellers-ul">
              <li className="booking-dates">
                {this.props.booking.arrival_date} to {this.props.booking.depart_date}
              </li>
              <li className="booking-num-travellers">
                {this.props.booking.num_travellers} {traveller}</li>
            </ul>
          </section>
          <section className="booking-buttons">
            <button className="edit-booking-button"
              onClick={this.handleEditClick(this.props.booking.id)}>
              Edit</button>
            <button className="delete-booking-button"
              onClick={this.handleDeleteClick()}
              >Cancel</button>
          </section>
        </section>
      </section>
    );
  }
}

export default BookingItem;
