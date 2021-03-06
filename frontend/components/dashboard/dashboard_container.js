import { connect } from 'react-redux';
import Dashboard from "./dashboard";

const mapStateToProps = state => ({
  userDetails: state.session.currentUser
});

export default connect(mapStateToProps, null)(Dashboard);
