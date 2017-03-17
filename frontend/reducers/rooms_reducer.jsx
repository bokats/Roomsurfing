import { RECEIVE_ROOMS, RECEIVE_ROOM, REMOVE_ROOM, RECEIVE_ROOM_ERRORS,
  REMOVE_ROOM_ERRORS } from '../actions/rooms_actions';
import merge from 'lodash/merge';

// const _nullRooms = Object.freeze({
//   rooms: null,
//   errors: []
// });

const RoomsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROOMS:
      return action.rooms;
    case RECEIVE_ROOM:
      const newRoom = {[action.room.id]: action.room};
      return merge({}, state, newRoom);
    case REMOVE_ROOM:
      const newState = merge({}, state);
      delete newState[action.room.id];
      return newState;
    default:
      return state;
  }
};

export default RoomsReducer;
