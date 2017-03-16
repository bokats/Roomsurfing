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
        <p>WelcomePage</p>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default WelcomePage;
