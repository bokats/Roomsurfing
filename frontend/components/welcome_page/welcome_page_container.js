import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import WelcomePage from './welcome_page';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
