import React from 'react';

class BookingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li>
        {this.props.booking.num_travellers}
      </li>
    );
  }
}

export default BookingItem;
