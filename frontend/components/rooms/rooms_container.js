import { connect } from 'react-redux';
import Rooms from './rooms';
import { fetchRooms } from '../../actions/rooms_actions';
import { updateFilter } from "../../actions/filters_actions";

const mapStateToProps = state => ({
  rooms: Object.keys(state.rooms).map(id => state.rooms[id]),
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: (data) => dispatch(fetchRooms(data)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
