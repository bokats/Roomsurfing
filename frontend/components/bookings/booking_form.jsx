import React from 'react';
import { hashHistory } from 'react-router';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchBooking(this.props.params.bookingId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.booking);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newBooking = {
      id: this.state.id,
      arrival_date: this.state.arrival_date,
      depart_date: this.state.depart_date,
      num_travellers: this.state.num_travellers
    };
    this.props.updateBooking(newBooking).then(hashHistory.push('/'));
  }

  render() {

    return (
      <div className="edit-booking-form-container">
        <form className="edit-booking-form" onSubmit={this.handleSubmit}>
          <label> Arrival Date
            <input type="date" onChange={this.update('arrival_date')}
              value={this.state.arrival_date}/>
          </label>
          <label> Departure Date
            <input type="date" onChange={this.update('depart_date')}
              value={this.state.depart_date}/>
          </label>
          <label>
            <input type="text" onChange={this.update('num_travellers')}
              value={this.state.num_travellers}/>
          </label>
          <input type="submit" value="Edit Booking"/>
        </form>
      </div>
  );
  }
}

export default BookingForm;
