import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import Routes from './Routes';
import ErrorModal from './components/modals/ErrorModal';

import setAuthHeader from './utils/setAuthHeader';
import { loadLocallySavedUser, logout } from './actions/userActions';
import ErrorBoundary from './components/ErrorBoundary';

if (localStorage.token) {
  setAuthHeader(localStorage.token);
}

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
    store.dispatch(loadLocallySavedUser());
    } else {
      store.dispatch(logout());
    }
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Routes />
          <ErrorModal />
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
