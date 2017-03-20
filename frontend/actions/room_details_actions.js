import * as RoomApiUtil from '../util/room_api_util';

export const RECEIVE_ROOM_DETAILS = "RECEIVE_ROOM_DETAILS";

export const receiveRoomDetails = room => ({
  type: RECEIVE_ROOM_DETAILS,
  room
});

export const fetchRoomDetails = id => dispatch => (
  RoomApiUtil.fetchRoom(id).then(res => dispatch(receiveRoomDetails(res)))
);
