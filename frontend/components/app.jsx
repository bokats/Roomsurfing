import React from 'react';
import WelcomePageContainer from './welcome_page/welcome_page_container';

const App = ({ children }) => (
  <div>
    <header className='header'>
      <WelcomePageContainer />
    </header>
    { children }
  </div>
);

export default App;
