import { connect } from 'react-redux';
import Bookings from './bookings';
import { fetchBookings, deleteBooking }
  from '../../actions/bookings_actions';

const mapStateToProps = state => ({
  bookings: Object.keys(state.bookings).map(id => state.bookings[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
