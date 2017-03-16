import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, removeErrors } from './actions/session_actions';

window.login = login;
window.removeErrors = removeErrors;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
