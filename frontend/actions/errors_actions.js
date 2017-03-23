export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING_ERRORS = "REMOVE_BOOKING_ERRORS";
export const RECEIVE_ROOM_ERRORS = "RECEIVE_ROOM_ERRORS";
export const REMOVE_ROOM_ERRORS = "REMOVE_ROOM_ERRORS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW_ERRORS = "REMOVE_REVIEW_ERRORS";

export const receiveRoomErrors = errors => ({
  type: RECEIVE_ROOM_ERRORS,
  errors
});

export const removeRoomErrors = () => ({
  type: REMOVE_ROOM_ERRORS
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const removeBookingErrors = () => ({
  type: REMOVE_BOOKING_ERRORS
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS
});
