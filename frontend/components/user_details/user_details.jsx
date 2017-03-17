import React from 'react';

const UserDetails = ({ userDetails }) => {

  if (userDetails) {
    return (
      <div className="user-details-container">
        <p>{userDetails.first_name}</p>
        <p>{userDetails.last_name}</p>
        <p>{userDetails.home_city}</p>
        <select className="accepting-guests-dropdown">
          <option value="">Accepting Guests</option>
          <option value="">Maybe Accepting Guests</option>
          <option value="">Not Accepting Guests</option>
        </select>
      </div>)
  } else {
    return (
      <p>Hi</p>
    )
  }
};

export default UserDetails;
