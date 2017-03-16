import React from 'react';

const UserDetails = ({ userDetails }) => {

  if (userDetails) {
    return (
      <div className="user-details-container">
        <p>{userDetails.first_name}</p>
        <p>{userDetails.last_name}</p>
        <p>{userDetails.home_city}</p>
      </div>)
  } else {
    return (
      <p>Hi</p>
    )
  }
};

export default UserDetails;
