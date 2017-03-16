import React from 'react';
import { hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
		this.handleLogInClick = this.handleLogInClick.bind(this);
  }

  handleSignUpClick(e) {
		e.preventDefault();
		this.props.removeErrors();
		hashHistory.push('/signup');
	}

	handleLogInClick(e) {
		e.preventDefault();
		this.props.removeErrors();
		hashHistory.push('/login');
	}

  render() {
    if (this.props.currentUser) {
      var buttons = (
        <button className="logout-button" onClick={this.props.logout}>
          Log Out</button>);
    } else {
      buttons = (
        <div>
          <button className="signup-button"
            onClick={this.handleSignUpClick}>Join</button>
          <button className="login-button"
            onClick={this.handleLogInClick}>Log In</button>
          <button className="demo-button"
            onClick={() => this.props.login(
              {user: {username: 'bo', password: 'password'}})}> Guest
          </button>
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
