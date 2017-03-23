import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import WelcomePageContainer from "./welcome_page/welcome_page_container";
import DashboardContainer from "./dashboard/dashboard_container";
import BookingFormContainer from './bookings/booking_form_container';
import SearchContainer from "./search/search_container";
import RoomDetailsContainer from './room_details/room_details_container';
import ReviewFormContainer from './reviews/review_form_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/about');
    }
  };

  return ( <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/about" component={ WelcomePageContainer }
          onEnter={_redirectIfLoggedIn}/>
        <IndexRoute component={ DashboardContainer }
          onEnter={_redirectIfNotLoggedIn}/>
        <Route path='/bookings/:bookingId/edit'
          component={BookingFormContainer}
          onEnter={_redirectIfNotLoggedIn}/>
        <Route path="/login" component={ SessionFormContainer }
          onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={ SessionFormContainer }
          onEnter={_redirectIfLoggedIn}/>
        <Route path="/search" component={ SearchContainer }
          onEnter={_redirectIfNotLoggedIn}/>
        <Route path="/rooms/:roomId" component={RoomDetailsContainer}
          onEnter={_redirectIfNotLoggedIn}>
          <Route path="/reviews/:reviewId" component={ReviewFormContainer}
            onEnter={_redirectIfNotLoggedIn}/>
        </Route>
        <Route path="rooms/:roomId/book" component={BookingFormContainer}
          onEnter={_redirectIfNotLoggedIn}/>
      </Route>
    </Router>
  </Provider>);
};

export default Root;
