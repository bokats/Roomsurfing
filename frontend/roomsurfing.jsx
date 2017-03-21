import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { updateRoom } from './util/room_api_util';

window.updateRoom = updateRoom;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const rootEl = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
