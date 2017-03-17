import { RECEIVE_BOOKING_ERRORS, REMOVE_BOOKING_ERRORS, RECEIVE_ROOM_ERRORS,
  REMOVE_ROOM_ERRORS } from '../actions/errors_actions';
import merge from 'lodash/merge';

const _nullErrors = Object.freeze({
  bookings: {},
  rooms: {}
});

const ErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      const bookingErrors = action.errors;
      newState.bookings = bookingErrors;
      return newState;
    case RECEIVE_ROOM_ERRORS:
      const roomErrors = action.errors;
      newState.rooms = roomErrors;
      return newState;
    case REMOVE_ROOM_ERRORS:
      newState.rooms = [];
      return newState;
    case REMOVE_BOOKING_ERRORS:
      newState.bookings = [];
      return newState;
    default:
      return state;
  }
};

export default ErrorsReducer;
