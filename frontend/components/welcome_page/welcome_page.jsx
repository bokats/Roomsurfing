import React from 'react';
import { hashHistory } from 'react-router';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps() {
  //   if (this.props.loggedIn) {
  //     hashHistory.push("/");
  //   }
  // }

  render() {
    if (!this.props.loggedIn) {
      return (
        <div className="welcome-page">
          <div className="welcome-image-container">
            <img className="welcome-image"
              src="http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490075007/welcome_lnl4nm.jpg"/>
          </div>
          <div className="welcome-page-message">
            <p className="first-message">
              Stay with Locals and Meet Travelers
            </p>
            <p className="second-message">
              Share Authentic Travel Experiences
            </p>
          </div>
      </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default WelcomePage;
