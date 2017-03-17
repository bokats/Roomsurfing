import * as RoomApiUtil from '../util/room_api_util';
import { hashHistory } from "react-router";
import { receiveRoomErrors, removeRoomErrors } from './errors_actions';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";
export const REMOVE_ROOM = "REMOVE_ROOM";

export const  receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
});

export const removeRoom = room => ({
  type: REMOVE_ROOM,
  room
});

export const fetchRooms = filters => dispatch => (
  RoomApiUtil.fetchRooms(filters).then(res => dispatch(receiveRooms(res)),
  err => dispatch(receiveRoomErrors(err.responseJSON)))
);

export const fetchRoom = id => dispatch => (
  RoomApiUtil.fetchRoom(id).then(res => dispatch(receiveRoom(res)),
  err => dispatch(receiveRoomErrors(err.responseJSON)))
);

export const createRoom = room => dispatch => (
  RoomApiUtil.createRoom(room).then(res => dispatch(receiveRoom(res)),
  err => dispatch(receiveRoomErrors(err.responseJSON)))
);

export const updateRoom = room => dispatch => (
  RoomApiUtil.updateRoom(room).then(res => dispatch(receiveRoom(res)),
  err => dispatch(receiveRoomErrors(err.responseJSON)))
);

export const deleteRoom = roomId => dispatch => (
  RoomApiUtil.deleteRoom(roomId).then(res => dispatch(removeRoom(res)),
  err => dispatch(receiveRoomErrors(err.responseJSON)))
);
