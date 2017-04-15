  import { connect } from 'react-redux';
  import { logout, removeErrors, login, loginGuest } from '../../actions/session_actions';
  import { updateFilter } from "../../actions/filters_actions";
  import { fetchMapCenter } from '../../util/map_api_util';
  import NavBar from './navbar';

  const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    filters: state.filters
  });

  const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    removeErrors: () => dispatch(removeErrors()),
    loginGuest: user => dispatch(login(user)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar);
