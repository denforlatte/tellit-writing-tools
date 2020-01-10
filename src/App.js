import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import MainMenu from './components/MainMenu/';
import Routes from './Routes';
import ErrorModal from './components/modals/ErrorModal';

import setAuthHeader from './utils/setAuthHeader';
import { loadLocallySavedUser } from './actions/userActions';
import ErrorBoundary from './components/ErrorBoundary';

if (localStorage.token) {
  setAuthHeader(localStorage.token);
}

const App = () => {
  useEffect(() => {
    //if (localStorage.token) {
    console.log('load locally saved user');
    store.dispatch(loadLocallySavedUser());
    //}
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <MainMenu />
          <Routes />
          <ErrorModal />
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
