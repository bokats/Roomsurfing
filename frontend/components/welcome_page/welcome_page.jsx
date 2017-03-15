import React from 'react';
import { hashHistory } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <button onClick={() => hashHistory.push('/login')}>Log In</button>
    <button onClick={() => hashHistory.push('/signup')}>Join</button>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const WelcomePage = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default WelcomePage;

// <Link to="/login" activeClassName="current">Login</Link>
// <Link to="/signup" activeClassName="current">Sign up!</Link>
