import React from 'react';
import UserDetails from '../user_details/user_details';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-div">
        <UserDetails userDetails={this.props.userDetails} />
      </div>
    );
  }

}

export default Dashboard;
