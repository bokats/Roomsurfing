import { connect } from 'react-redux';
import { logout, removeErrors, login } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  removeErrors: () => dispatch(removeErrors()),
  loginGuest: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
