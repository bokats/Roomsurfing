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
        <section className="accepting-guests-dropdown-container">
          <select className="accepting-guests-dropdown">
            <option className="dropdown1" value="">Accepting Guests</option>
            <option value="" className='dropdown2'>Maybe Accepting Guests</option>
            <option value="" className="dropdown3">Not Accepting Guests</option>
          </select>
        </section>
      </section>);
  } else {
    return (
      <section></section>
    );
  }
};

export default UserDetails;
