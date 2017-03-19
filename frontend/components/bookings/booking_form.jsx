import React from 'react';
import { hashHistory } from 'react-router';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
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

  handleCancelClick(e) {
    e.preventDefault();
    hashHistory.push('/');
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
      <div className="booking-form-container">
        <section className="booking-form-message-container">
          <p className="booking-form-message">EDIT MY BOOKING</p>
        </section>
        <form className="booking-form" onSubmit={this.handleSubmit}>
          <section className="booking-form-content">
            <section className="booking-form-date-section">
              <label className='arrival-date-label'> Arrival Date
                <input className='booking-form-arrival-date'
                  type="date" onChange={this.update('arrival_date')}
                  value={this.state.arrival_date}/>
              </label>
              <label className='departure-date-label'> Departure Date
                <input className='booking-form-departure-date'
                  type="date" onChange={this.update('depart_date')}
                  value={this.state.depart_date}/>
              </label>
            </section>
            <label className='travellers-label'> Number of Travellers
              <input className='booking-form-travellers'type="text" onChange={this.update('num_travellers')}
                value={this.state.num_travellers}
                placeholder="Number of travellers"/>
            </label>
          </section>
          <section className="booking-form-buttons">
            <input className='booking-form-submit-button'
              type="submit" value="Save"/>
            <button onClick={this.handleCancelClick}>
              Cancel
            </button>
          </section>
        </form>
      </div>
  );
  }
}

export default BookingForm;
