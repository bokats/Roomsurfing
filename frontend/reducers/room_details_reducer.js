import { RECEIVE_ROOM_DETAILS } from '../actions/room_details_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/reviews_actions";
import merge from 'lodash/merge';

const RoomDetailsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROOM_DETAILS:
      return action.room;
    case RECEIVE_REVIEW:
      let newReview = {[action.review.id]: action.review};
      let newReviews = merge({}, state.reviews, newReview);
      return merge({}, state, newReviews);
    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState["reviews"][action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default RoomDetailsReducer;
