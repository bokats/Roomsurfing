import React from 'react';

class BookingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li>
        {this.props.booking.city}
        {this.props.booking.title}
        <br></br>
        {this.props.booking.num_travellers}
        <br></br>
        Dates: {this.props.booking.arrival_date} -
        {this.props.booking.depart_date}
        <br></br>
        {this.props.booking.host_first_name}
        <br></br>
        {this.props.booking.host_last_name}
      </li>
    );
  }
}

export default BookingItem;
