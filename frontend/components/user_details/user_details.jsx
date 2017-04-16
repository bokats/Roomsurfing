import React from 'react';

const UserDetails = ({ userDetails }) => {

  if (userDetails) {
    return (
      <section className="user-details-container">
        <section id="user-name-city-container">
          <p className="user-name">
            {userDetails.first_name}  {userDetails.last_name}</p>
          <p className="user-home-city">{userDetails.home_city}</p>
        </section>
      </section>);
  } else {
    return (
      <section></section>
    );
  }
};

export default UserDetails;
