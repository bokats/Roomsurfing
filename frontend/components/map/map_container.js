import { connect } from 'react-redux';
import Map from './map';
import { withRouter } from 'react-router';

import { fetchRooms } from '../../actions/rooms_actions';

const mapStateToProps = (state, ownProps) => {
  let rooms = state.rooms;
  if (ownProps.params.roomId) {
    const correctRoom = state.rooms[ownProps.params.roomId];
    rooms = {
      [correctRoom.id]: correctRoom
    };
  }
  return {
    rooms: rooms
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: () => dispatch(fetchRooms())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));
