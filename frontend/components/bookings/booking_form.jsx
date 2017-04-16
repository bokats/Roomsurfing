import React from 'react';
import { hashHistory } from 'react-router';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    debugger;
  }

  componentDidMount() {
    if (location.hash.includes("edit")) {
      this.props.fetchBooking(this.props.params.bookingId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.booking);
  }

  renderErrors() {
    let errors = this.props.errors;
    if (this.props.errors[0] && this.props.errors[0].includes(".")) {
      errors = this.props.errors[0].split(".");
    }

    return(
      <ul className="booking-form-errors">
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };

  }

  handleCancelClick(e) {
    e.preventDefault();
    this.props.removeBookingErrors();
    if (this.props.formType === "new") {
      hashHistory.push(`/rooms/${this.props.params.roomId}`);
    } else {
      hashHistory.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeBookingErrors();
    if (this.props.formType === "new") {
      let newBooking = {
      arrival_date: this.state.arrival_date,
      depart_date: this.state.depart_date,
      num_travellers: this.state.num_travellers,
      room_id: this.props.params.roomId
      };
      if (newBooking.num_travellers === "") {
        newBooking.num_travellers = 1;
      }
      const newRoom = {
        id: this.props.params.roomId,
        booked: true
        };
      this.props.action(newBooking).then(() => this.props.updateRoom(newRoom))
      .then(() => hashHistory.push('/'));
    } else {
      const editBooking = {
        id: this.state.id,
        arrival_date: this.state.arrival_date,
        depart_date: this.state.depart_date,
        num_travellers: this.state.num_travellers};
      this.props.action(editBooking).then(() => hashHistory.push('/'));
    }
  }

  render() {
    let headerText = this.props.formType === "new" ? "Book this room" :
      "Edit my booking";

    if (!this.state) {
      this.state = {arrival_date: "", depart_date: "", num_travellers: ""};
    }
    
    return (
      <section className="booking-form-container-parent">
        <section className="booking-form-container">
          <section className="booking-form-message-container">
            <p className="booking-form-message">{headerText}</p>
          </section>
          {this.renderErrors()}
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
              <section className='travellers-label'>
                Number of Travellers
                <select className='booking-form-travellers'
                  placeholder="Number of travellers"
                  onChange={this.update('num_travellers')}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </section>
            </section>
            <section className="booking-form-buttons">
              <input type="button" className="booking-form-cancel-button"
                onClick={this.handleCancelClick} value="Cancel"/>
              <input className='booking-form-submit-button'
                type="submit" value="Save"/>
            </section>
          </form>
        </section>
      </section>
  );
  }
}

export default BookingForm;
