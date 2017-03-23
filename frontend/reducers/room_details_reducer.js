import { RECEIVE_ROOM_DETAILS } from '../actions/room_details_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/reviews_actions";
import merge from 'lodash/merge';

const RoomDetailsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROOM_DETAILS:
      return action.room;
    // case RECEIVE_REVIEW:
    //   let newState = merge({}, state);
    //   const newReview = {[action.review.id]: action.review};
    //   const newRoom = merge({}, state.)
    default:
      return state;
  }
};

export default RoomDetailsReducer;
