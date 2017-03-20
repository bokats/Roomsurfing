import React from 'react';
import { hashHistory, router } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
		this.handleLogInClick = this.handleLogInClick.bind(this);
		this.handleLogOutClick = this.handleLogOutClick.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
    this.handleDashboardButton = this.handleDashboardButton.bind(this);
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
    .then(() => hashHistory.push("/login"));
  }

  handleDashboardButton(e) {
    e.preventDefault();
    hashHistory.push('/');
  }

  render() {
    if (this.props.currentUser) {
      return (

        <nav className="main-nav">
          <form className="header-search">
            <label className="header-search-label"> Find Rooms
              <input className="search-input"
                placeholder="Where are you going?"/>
              <button className='header-search-button'>
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </label>
          </form>
          <button className="dashboard-button"
            onClick={this.handleDashboardButton}>Dashboard</button>
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
