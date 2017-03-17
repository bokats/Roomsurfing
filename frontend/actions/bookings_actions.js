import * as BookingApiUtil from '../util/booking_api_util';
import { receiveBookingErrors, removeBookingErrors } from './errors_actions';
import { hashHistory } from "react-router";

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";


export const  receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
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

export const fetchBookings = () => dispatch => (
  BookingApiUtil.fetchBookings().then(res => dispatch(receiveBookings(res)),
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

export const deleteBooking = bookingId => dispatch => (
  BookingApiUtil.deleteBooking(bookingId).then(res => dispatch(removeBooking(res)),
  err => dispatch(receiveBookingErrors(err.responseJSON)))
);
