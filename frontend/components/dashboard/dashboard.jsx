import React from 'react';
import UserDetails from '../user_details/user_details';
import BookingsContainer from '../bookings/bookings_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.userDetails) {
      return (
        <section className="dashboard-div-container">
          <section className="dashboard-div">
            <section className="dashboard-left-container">
              <UserDetails userDetails={this.props.userDetails} />
            </section>
            <section className="dashboard-right-container">
              <BookingsContainer />
            </section>
          </section>
        </section>

      );
    } else {
      return (<section></section>);
    }
  }

}

export default Dashboard;
