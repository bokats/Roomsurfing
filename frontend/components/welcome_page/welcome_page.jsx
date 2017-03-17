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
        <div className="welcome-page"></div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default WelcomePage;
