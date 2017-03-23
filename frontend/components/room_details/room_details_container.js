import { connect } from 'react-redux';
import RoomDetails from './room_details';
import { fetchRoomDetails } from '../../actions/room_details_actions';
import { fetchRoom } from "../../actions/rooms_actions";
import { updateFilter } from '../../actions/filters_actions';

const mapStateToProps = state => {
  return {
    roomDetails: state.room_details,
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRoomDetails: id => dispatch(fetchRoomDetails(id)),
  fetchRoom: (id) => dispatch(fetchRoom(id)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetails);
