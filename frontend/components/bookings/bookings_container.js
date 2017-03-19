import { connect } from 'react-redux';
import Bookings from './bookings';
import { fetchBookings, deleteBooking, updateBooking }
  from '../../actions/bookings_actions';

const mapStateToProps = state => ({
  bookings: Object.keys(state.bookings).map(id => state.bookings[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
