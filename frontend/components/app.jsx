import React from 'react';
import NavBarContainer from './navbar/navbar_container';

const App = ({ children }) => {
  return (
    <div className="page">
      <section className="header-cont">
        <header className='header' >
          <NavBarContainer />
        </header>
        { children }
      </section>
    </div>
  );
};

export default App;
