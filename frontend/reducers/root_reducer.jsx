import  { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RoomsReducer from './rooms_reducer';
import BookingsReducer from './bookings_reducer';
import ErrorsReducer from './errors_reducer';
import RoomDetailsReducer from './room_details_reducer';
import FiltersReducer from "./filters_reducer";

const rootReducer = combineReducers({
  session: SessionReducer,
  rooms: RoomsReducer,
  bookings: BookingsReducer,
  room_details: RoomDetailsReducer,
  errors: ErrorsReducer,
  filters: FiltersReducer
});

export default rootReducer;
