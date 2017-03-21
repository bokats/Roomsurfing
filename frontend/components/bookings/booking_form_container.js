import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { fetchBooking, fetchBookings, updateBooking, createBooking }
  from '../../actions/bookings_actions';
import { removeBookingErrors } from '../../actions/errors_actions';
import { updateRoom } from '../../actions/rooms_actions';

const mapStateToProps = (state, ownProps) => {
  let booking = {arrival_date: "", depart_date: "", num_travellers: ""};
  let formType = "new";
  if (ownProps.location.pathname.includes("edit")) {
    booking = state.bookings[ownProps.params.bookingId];
    formType = 'edit';
  }
  let errors = Object.keys(state.errors.bookings).map(id =>
    state.errors.bookings[id]);
  return { booking, formType, errors };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = createBooking;
  if (location.hash.includes("edit")) {
    action = updateBooking;
  }

  return {
    fetchBooking: id => dispatch(fetchBooking(id)),
    action: booking => dispatch(action(booking)),
    removeBookingErrors: () => dispatch(removeBookingErrors()),
    updateRoom: room => dispatch(updateRoom(room))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
