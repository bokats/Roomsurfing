import { connect } from 'react-redux';
import Map from './map';
import { withRouter } from 'react-router';

import { fetchRooms } from '../../actions/rooms_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    rooms: state.rooms,
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: () => dispatch(fetchRooms())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));
