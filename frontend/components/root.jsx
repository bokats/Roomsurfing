import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import WelcomePageContainer from "./welcome_page/welcome_page_container";
import DashboardContainer from "./dashboard/dashboard_container";

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    console.log("redirect", Boolean(currentUser));
    if (currentUser) {
      replace('/');
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    console.log("redirectNot");
    if (!currentUser) {
      replace('/about');
    }
  };

  return ( <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ DashboardContainer }
          onEnter={_redirectIfNotLoggedIn}/>
        <Route path="/about" component={ WelcomePageContainer }
          onEnter={_redirectIfLoggedIn}/>
        <Route path="/login" component={ SessionFormContainer }
          onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={ SessionFormContainer }
          onEnter={_redirectIfLoggedIn}/>
      </Route>
    </Router>
  </Provider>);
};

export default Root;
