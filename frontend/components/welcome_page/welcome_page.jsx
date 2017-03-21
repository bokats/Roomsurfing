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
          <img className="welcome-image"
            src="http://res.cloudinary.com/dmhxtvnmi/image/upload/v1490075007/welcome_lnl4nm.jpg"/>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default WelcomePage;
