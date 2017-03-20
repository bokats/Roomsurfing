import { RECEIVE_ROOM_DETAILS } from '../actions/room_details_actions';
import merge from 'lodash/merge';

const RoomDetailsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROOM_DETAILS:
      return action.room;
    default:
      return state;
  }
};

export default RoomDetailsReducer;
