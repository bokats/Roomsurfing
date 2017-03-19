import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  rooms: state.rooms
});

export default connect(mapStateToProps, null)(Search);
