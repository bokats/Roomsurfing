import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING,
  RECEIVE_BOOKING_ERRORS, REMOVE_BOOKING_ERRORS} from
  '../actions/bookings_actions';
import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      const newBooking = {[action.booking.id]: action.booking};
      return merge({}, state, newBooking);
    case REMOVE_BOOKING:
      const newState = merge({}, state);
      delete newState[action.booking.id];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;
