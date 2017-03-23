import * as ReviewApiUtil from '../util/review_api_util';
import { receiveReviewErrors, removeReviewErrors } from './errors_actions';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const fetchReview = (roomId, reviewId) => dispatch => (
  ReviewApiUtil.fetchReview(roomId, reviewId).then(res =>
    dispatch(receiveReview(res)),
    err => dispatch(receiveReviewErrors(err.responseJSON)))
);

export const createReview = (roomId, review) => dispatch => (
  ReviewApiUtil.createReview(roomId, review).
    then(res => dispatch(receiveReview(res)),
    err => dispatch(receiveReviewErrors(err.responseJSON)))
);

export const updateReview = (roomId, review) => dispatch => (
  ReviewApiUtil.updateReview(roomId, review).
    then(res => dispatch(receiveReview(res)),
    err => dispatch(receiveReviewErrors(err.responseJSON)))
);

export const deleteReview = (roomId, reviewId) => dispatch => (
  ReviewApiUtil.deleteReview(roomId, reviewId).
  then(() => dispatch(removeReview(reviewId)))
);
