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
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.state = this.props.filters;
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
    this.props.loginGuest({user: {username: 'guest@gmail.com', password: 'password'}})
    .then(() => hashHistory.push("/login"));
  }

  handleDashboardButton(e) {
    e.preventDefault();
    hashHistory.push('/');
  }

  handleFilterChange(filter) {
    return e => {
      this.setState({[filter]: e.target.value});
    };
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    this.props.updateFilter("city", this.state.city);
  }

  render() {
    if (this.props.currentUser) {
      return (

        <nav className="main-nav">
          <form className="header-search">
            <label className="header-search-label"> Find Rooms
              <input className="search-input"
                placeholder="Where are you going?"
                onChange={this.handleFilterChange("city")}
                value={this.state.city}/>
              <button className='header-search-button'
                onClick={this.handleSearchSubmit}>
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
