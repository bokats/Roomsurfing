import { connect } from 'react-redux';
import Search from './search';
import { fetchRooms } from '../../actions/rooms_actions';

const mapStateToProps = state => {
  return {
    rooms: state.rooms
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRooms: () => dispatch(fetchRooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
