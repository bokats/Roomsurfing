import { connect } from 'react-redux';
import Search from './search';
import { fetchRooms } from '../../actions/rooms_actions';

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRooms: (filters) => dispatch(fetchRooms(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
