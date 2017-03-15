import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", first_name: "",
      last_name: "", home_city: ""};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navButton() {
		if (this.props.formType === "login") {
			return (<button className="redirect-login-button" onClick={() =>
				hashHistory.push('/login')}>Log In</button>);
		} else {
			return (<button className="redirect-signup-button" onClick={() =>
				hashHistory.push('/signup')}>Join</button>);
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let firstName = "";
		let lastName = "";
		let homeCity = "";
		let submitText = "Log In";
		let message = "Log in to Roomsurfing";
		let redirectMessage = "Don't have an account?";

		if (this.props.formType === "signup") {
			firstName = (<label> First Name:
				<input type="text"
					value={this.state.first_name}
					onChange={this.update("first_name")}
					className="login-input" />
			</label>);
			lastName = (<label> Last Name:
				<input type="text"
					value={this.state.last_name}
					onChange={this.update("last_name")}
					className="login-input" />
			</label>);
			homeCity = (
				<label> Home City:
					<input type="text"
						value={this.state.home_city}
						onChange={this.update("home_city")}
						className="login-input" />
				</label>);
			submitText = "Join";
			message = "Join Roomsurfing";
			redirectMessage = "Already a member?";
		}

		return (
      <div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<p>{message}</p>

					{this.renderErrors()}
					<div className="login-form">
						{firstName}
						{lastName}
						<label> Email:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
            {homeCity}
						<input type="submit" value={submitText} />
						<p>{redirectMessage}</p>
						{this.navButton()}
					</div>
				</form>
			</div>
		);
    }
	}

export default withRouter(SessionForm);
