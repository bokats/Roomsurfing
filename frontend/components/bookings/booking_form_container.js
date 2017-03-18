import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { fetchBooking, updateBooking }
  from '../../actions/bookings_actions';

const mapStateToProps = (state, ownProps) => {
  let booking = state.bookings[ownProps.params.bookingId];
  return { booking };
};

const mapDispatchToProps = dispatch => ({
  fetchBooking: id => dispatch(fetchBooking(id)),
  updateBooking: booking => dispatch(updateBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
