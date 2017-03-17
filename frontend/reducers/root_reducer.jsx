import  { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RoomsReducer from './rooms_reducer';
import BookingsReducer from './bookings_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  rooms: RoomsReducer,
  bookings: BookingsReducer,
  errors: ErrorsReducer
});

export default rootReducer;
