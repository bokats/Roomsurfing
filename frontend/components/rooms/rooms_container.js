import { connect } from 'react-redux';
import Rooms from './rooms';

import { fetchRooms } from '../../actions/rooms_actions';

const mapStateToProps = state => ({
  rooms: Object.keys(state.rooms).map(id => state.rooms[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: () => dispatch(fetchRooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
