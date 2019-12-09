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

if (localStorage.token) {
  setAuthHeader(localStorage.token);
}

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadLocallySavedUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <MainMenu />
        <Routes />
        <ErrorModal />
      </Router>
    </Provider>
  );
};

export default App;
