import * as BookingApiUtil from '../util/booking_api_util';
import { hashHistory } from "react-router";

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING_ERRORS = "REMOVE_BOOKING_ERRORS";

export const  receiveBookings = bookings => ({
  type: RECEIVE_BOOKING,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const removeBooking = booking => ({
  type: REMOVE_BOOKING,
  booking
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const removeBookingErrors = () => ({
  type: REMOVE_BOOKING_ERRORS
});

export const fetchBookings = () => dispatch => (
  BookingApiUtil.fetchRooms().then(res => dispatch(receiveBookings(res)),
  err => dispatch(receiveBookingErrors(err.responseJSON)))
);

export const fetchBooking = id => dispatch => (
  BookingApiUtil.fetchBooking(id).then(res => dispatch(receiveBooking(res)),
  err => dispatch(receiveBookingErrors(err.responseJSON)))
);

export const createBooking = booking => dispatch => (
  BookingApiUtil.createBooking(booking).then(res => dispatch(receiveBooking(res)),
  err => dispatch(receiveBookingErrors(err.responseJSON)))
);

export const updateBooking = booking => dispatch => (
  BookingApiUtil.updateBooking(booking).then(res => dispatch(receiveBooking(res)),
  err => dispatch(receiveBookingErrors(err.responseJSON)))
);

export const deleteRoom = bookingId => dispatch => (
  BookingApiUtil.deleteRoom(bookingId).then(res => dispatch(removeBooking(res)),
  err => dispatch(receiveBookingErrors(err.responseJSON)))
);
