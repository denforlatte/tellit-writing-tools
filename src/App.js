import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import MainMenu from './components/MainMenu';

import setAuthHeader from './utils/setAuthHeader'

// Scenes
import Login from './views/Login';

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
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
