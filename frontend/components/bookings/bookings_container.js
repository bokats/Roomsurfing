import { connect } from 'react-redux';
import Bookings from './bookings';
import { fetchBookings, deleteBooking, updateBooking }
  from '../../actions/bookings_actions';
import { updateRoom } from "../../actions/rooms_actions";
import { updateFilter } from "../../actions/filters_actions";

const mapStateToProps = state => ({
  bookings: Object.keys(state.bookings).map(id => state.bookings[id]),
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
  updateRoom: room => dispatch(updateRoom(room)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
