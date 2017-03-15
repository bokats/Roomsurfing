import React from 'react';
import { hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      var buttons = (
        <button className="header-button" onClick={this.props.logout}>
          Log Out</button>);
    } else {
      buttons = (
        <div>
          <button className="signup-button" onClick={() =>
            hashHistory.push('/signup')}>Join</button>
          <button className="login-button" onClick={() =>
            hashHistory.push('/login')}>Log In</button>
        </div>
      );
    }
    return (
      <nav className="login-signup">
        {buttons}
      </nav>
    );
  }
}

export default NavBar;
