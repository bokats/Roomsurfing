import React from 'react';
import { hashHistory, router } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
		this.handleLogInClick = this.handleLogInClick.bind(this);
		this.handleLogOutClick = this.handleLogOutClick.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
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

  handleLogOutClick(e) {
    e.preventDefault();
    this.props.logout().then(() => hashHistory.push("/about"));
  }

  handleGuestClick(e) {
    e.preventDefault();
    this.props.loginGuest({user: {username: 'bo', password: 'password'}})
    .then(() => hashHistory.push("/"))
  }

  render() {
    if (this.props.currentUser) {
      return (
      <nav className="main-nav">
        <button className="logout-button" onClick={this.handleLogOutClick}>
          Log Out</button>
      </nav>
    );} else {
      return (
        <nav className="main-nav">
          <button className="signup-button"
            onClick={this.handleSignUpClick}>Join</button>
          <button className="login-button"
            onClick={this.handleLogInClick}>Log In</button>
          <button className="demo-button"
            onClick={this.handleGuestClick}> Guest
          </button>
        </nav>
      );
    }
  }
}

export default NavBar;
