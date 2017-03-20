import { connect } from 'react-redux';
import Map from './map';

import { fetchRooms } from '../../actions/rooms_actions';

const mapStateToProps = state => ({
  rooms: state.rooms
});

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: () => dispatch(fetchRooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
