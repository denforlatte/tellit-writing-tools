import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import MainMenu from './components/MainMenu/';
import Routes from './Routes';

import setAuthHeader from './utils/setAuthHeader'


if (localStorage.token) {
  setAuthHeader(localStorage.token);
}

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <MainMenu />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
