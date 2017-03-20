import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { fetchBooking, fetchBookings, updateBooking, createBooking }
  from '../../actions/bookings_actions';
import { removeBookingErrors } from '../../actions/errors_actions';

const mapStateToProps = (state, ownProps) => {
  let booking = {arrival_date: "", depart_date: "", num_travellers: ""};
  let formType = "new";
  if (ownProps.location.pathname.includes("/editbooking")) {
    booking = state.bookings[ownProps.params.bookingId];
    formType = 'edit';
  }
  let errors = Object.keys(state.errors.bookings).map(id =>
    state.errors.bookings[id]);
  return { booking, formType, errors };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = createBooking;
  if (ownProps.params) {
    action = updateBooking;
  }
  return {
    fetchBooking: id => dispatch(fetchBooking(id)),
    action: booking => dispatch(action(booking)),
    removeBookingErrors: () => dispatch(removeBookingErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
