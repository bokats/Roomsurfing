import { connect } from 'react-redux';
import RoomDetails from './room_details';
import { fetchRoomDetails } from '../../actions/room_details_actions';

const mapStateToProps = state => ({
  roomDetails: state.room_details
});

const mapDispatchToProps = dispatch => ({
  fetchRoomDetails: id => dispatch(fetchRoomDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetails);
